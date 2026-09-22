/**
 * Motor de cuestionarios: puro, sin UI y sin dependencias.
 * Cualquier herramienta tipo test se monta encima de esto (ver src/data/tools/diagnostico).
 */

export type BusinessTypeId = 'b2b' | 'b2c' | 'ecommerce' | 'saas';
export type LayerId = 'captacion' | 'experiencia' | 'datos' | 'automatizacion' | 'infraestructura';
export type Band = 'critical' | 'warning' | 'healthy';
export type Level = 'bad' | 'warn' | 'good';

export interface QuizOption {
  label: string;
  score: number;
}

export interface QuizQuestion {
  id: string;
  layer: LayerId;
  text: string;
  help?: string;
  options: QuizOption[];
  /** Si se define, la pregunta solo aplica a esos tipos de negocio. */
  types?: BusinessTypeId[];
}

export interface QuizLayer {
  id: LayerId;
  name: string;
  short: string;
  description: string;
  problems: string[];
}

export interface QuizBusinessType {
  id: BusinessTypeId;
  label: string;
  hint: string;
}

export interface QuizRecommendation {
  layer: LayerId;
  /** Se muestra cuando el porcentaje de esa capa es menor o igual a este umbral. */
  maxPercent: number;
  text: string;
}

export interface Quiz {
  slug: string;
  title: string;
  tagline: string;
  durationLabel: string;
  layers: QuizLayer[];
  businessTypes: QuizBusinessType[];
  questions: QuizQuestion[];
  typeQuestions: QuizQuestion[];
  recommendations: QuizRecommendation[];
  healthyNote: string;
}

export const BANDS: Record<Band, { label: string; level: Level; summary: string }> = {
  critical: {
    label: 'Red Alert',
    level: 'bad',
    summary:
      'Desconexión severa, fuga de presupuesto o falta de trazabilidad. Cada mes sin plano cuesta dinero.',
  },
  warning: {
    label: 'Warning',
    level: 'warn',
    summary:
      'Hay canales y herramientas activas, pero faltan optimización, automatización e integración de datos.',
  },
  healthy: {
    label: 'Healthy',
    level: 'good',
    summary: 'Ecosistema maduro, escalable y guiado por datos. El siguiente salto es optimizar, no apagar fuegos.',
  },
};

export function bandFor(percent: number): Band {
  if (percent <= 40) return 'critical';
  if (percent <= 70) return 'warning';
  return 'healthy';
}

export function toPercent(sum: number, min: number, max: number): number {
  if (max <= min) return 0;
  const value = ((sum - min) / (max - min)) * 100;
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function scaleOf(question: QuizQuestion): { min: number; max: number } {
  const scores = question.options.map((option) => option.score);
  return { min: Math.min(...scores), max: Math.max(...scores) };
}

export function questionsFor(quiz: Quiz, type: BusinessTypeId): QuizQuestion[] {
  return [
    ...quiz.questions,
    ...quiz.typeQuestions.filter((question) => !question.types || question.types.includes(type)),
  ];
}

export interface LayerResult {
  layer: QuizLayer;
  percent: number;
  band: Band;
  level: Level;
  questions: number;
}

export interface QuizResult {
  percent: number;
  band: Band;
  level: Level;
  bandLabel: string;
  bandSummary: string;
  answered: number;
  total: number;
  layers: LayerResult[];
  recommendations: string[];
  type: BusinessTypeId;
}

export function scoreQuiz(
  quiz: Quiz,
  answers: Record<string, number>,
  type: BusinessTypeId,
): QuizResult {
  const questions = questionsFor(quiz, type);

  let sum = 0;
  let min = 0;
  let max = 0;
  let answered = 0;

  const byLayer = new Map<LayerId, { sum: number; min: number; max: number; count: number }>();

  for (const question of questions) {
    const { min: qMin, max: qMax } = scaleOf(question);
    const value = answers[question.id];
    const hasAnswer = typeof value === 'number';
    const effective = hasAnswer ? value : qMin;
    if (hasAnswer) answered += 1;

    sum += effective;
    min += qMin;
    max += qMax;

    const entry = byLayer.get(question.layer) ?? { sum: 0, min: 0, max: 0, count: 0 };
    entry.sum += effective;
    entry.min += qMin;
    entry.max += qMax;
    entry.count += 1;
    byLayer.set(question.layer, entry);
  }

  const layers: LayerResult[] = quiz.layers
    .filter((layer) => byLayer.has(layer.id))
    .map((layer) => {
      const entry = byLayer.get(layer.id) as { sum: number; min: number; max: number; count: number };
      const layerPercent = toPercent(entry.sum, entry.min, entry.max);
      const band = bandFor(layerPercent);
      return { layer, percent: layerPercent, band, level: BANDS[band].level, questions: entry.count };
    });

  const layerPercentById = new Map(layers.map((row) => [row.layer.id, row.percent]));

  const recommendations = quiz.recommendations
    .filter((rec) => (layerPercentById.get(rec.layer) ?? 100) <= rec.maxPercent)
    .sort((a, b) => (layerPercentById.get(a.layer) ?? 100) - (layerPercentById.get(b.layer) ?? 100))
    .slice(0, 6)
    .map((rec) => rec.text);

  const total = toPercent(sum, min, max);
  const band = bandFor(total);

  return {
    percent: total,
    band,
    level: BANDS[band].level,
    bandLabel: BANDS[band].label,
    bandSummary: BANDS[band].summary,
    answered,
    total: questions.length,
    layers,
    recommendations: recommendations.length ? recommendations : [quiz.healthyNote],
    type,
  };
}

export function summaryText(quiz: Quiz, result: QuizResult): string {
  const layers = result.layers
    .map((row) => `${row.layer.short}: ${row.percent}% (${BANDS[row.band].label})`)
    .join(' · ');
  return `${quiz.title}: ${result.percent}% — ${result.bandLabel}. ${layers}`;
}
