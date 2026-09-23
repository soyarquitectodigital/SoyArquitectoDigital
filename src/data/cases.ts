/**
 * Casos de estudio de la landing.
 *
 * Un caso de estudio no es una ficha de proyecto: es la historia de un criterio.
 * Cada entrada debe responder a tres preguntas en este orden:
 *
 *   problem  → ¿qué estaba roto o atascado, y qué le costaba al negocio?
 *   solution → ¿qué decidiste y por qué eso y no otra cosa?
 *   result   → ¿qué cambió después, con una cifra si existe?
 *
 * `metrics` son las cifras destacadas del caso (2-3 como máximo) y `stack` la
 * tecnología que de verdad fue relevante, no el catálogo completo.
 *
 * IMPORTANTE: no rellenar con datos inventados. Si un dato no está confirmado,
 * se omite o se deja fuera del caso. La credibilidad es el activo del sitio.
 */

export interface CaseMetric {
  /** Cifra o etiqueta corta, por ejemplo "+600" o "35%". */
  value: string;
  /** Qué mide esa cifra, en una línea. */
  label: string;
}

export interface CaseStudy {
  /** Identificador corto y único, solo para las claves de la lista. */
  id: string;
  /** Cliente. Si no se puede nombrar, usar el sector ("Clínica dental"). */
  client: string;
  /** Sector o ámbito, para dar contexto rápido. */
  sector: string;
  /** Periodo o año en texto libre ("2023 – 2024"). */
  period: string;
  /** Titular orientado al resultado, no a la tecnología. */
  title: string;
  /** El problema, en lenguaje de negocio. */
  problem: string;
  /** La decisión de arquitectura y el porqué. */
  solution: string;
  /** El resultado, con cifra si existe. */
  result: string;
  /** 2-3 cifras destacadas. Puede quedar vacío. */
  metrics: CaseMetric[];
  /** Tecnología relevante para el caso. */
  stack: string[];
  /** Testimonio opcional asociado al caso. Solo si es una cita real. */
  quote?: { text: string; author: string; role: string };
}

export const cases: CaseStudy[] = [];

/* ---------------------------------------------------------------------------
 * Ejemplo de la forma que debe tener una entrada (no se renderiza: está
 * comentado a propósito). Copiar, rellenar con datos reales y descomentar.
 *
 * {
 *   id: 'kit-digital',
 *   client: 'Adrirodrigo Agencia',
 *   sector: 'Agencia digital · España',
 *   period: '2025 – 2026',
 *   title: 'Entregar 600 webs sin que se caiga la calidad',
 *   problem:
 *     'El volumen del programa Kit Digital desbordó el proceso: cada entrega dependía de ' +
 *     'trabajo manual y los errores solo aparecían con el cliente delante.',
 *   solution:
 *     'Automaticé el flujo de entrega de punta a punta con n8n y definí un control de calidad ' +
 *     'con puertas obligatorias antes de publicar.',
 *   result:
 *     'El equipo entregó más proyectos con el mismo equipo y los incidentes posteriores al ' +
 *     'lanzamiento cayeron de forma sostenida.',
 *   metrics: [
 *     { value: '+600', label: 'proyectos web entregados' },
 *     { value: '35%', label: 'más rápido en entregas' },
 *     { value: '40%', label: 'menos incidentes post-lanzamiento' },
 *   ],
 *   stack: ['WordPress', 'n8n', 'MCP'],
 * },
 * ------------------------------------------------------------------------- */
