export type ToolIcon = 'diagnostico' | 'calculadora' | 'checklist' | 'auditoria';

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  status: 'live' | 'soon';
  icon: ToolIcon;
  href?: string;
  bullets: string[];
}

/**
 * Registro de soluciones/herramientas. Para publicar una nueva:
 * 1) añade la entrada aquí, 2) crea su contenido en src/data/tools/<slug>/,
 * 3) crea su página en src/pages/soluciones/<slug>.astro.
 * Nada más: la sección de la landing y el catálogo se actualizan solos.
 */
export const tools: Tool[] = [
  {
    slug: 'diagnostico-ecosistema-digital',
    name: 'Diagnóstico de Ecosistema Digital',
    tagline:
      'Mide en 3 minutos la salud de tu ecosistema por capas y descubre dónde se te escapa el dinero.',
    duration: '3 min · 17 preguntas',
    status: 'live',
    icon: 'diagnostico',
    href: '/soluciones/diagnostico-ecosistema-digital',
    bullets: [
      'Puntaje 0–100 y semáforo por cada capa',
      'Recomendaciones priorizadas según tus resultados',
      'Informe listo para descargar en PDF',
    ],
  },
  {
    slug: 'coste-frankenstein-digital',
    name: 'Calculadora del coste oculto',
    tagline:
      'Cuánto te cuesta al mes tener herramientas desconectadas y procesos manuales (en dinero y horas).',
    duration: '2 min',
    status: 'soon',
    icon: 'calculadora',
    bullets: [],
  },
  {
    slug: 'checklist-siete-senales',
    name: 'Checklist: 7 señales de un ecosistema roto',
    tagline: 'Una lista rápida para autoevaluarte antes de invertir en otra herramienta.',
    duration: '1 min',
    status: 'soon',
    icon: 'checklist',
    bullets: [],
  },
  {
    slug: 'auditoria-express-rendimiento',
    name: 'Auditoría express de rendimiento web',
    tagline: 'Velocidad, buenas prácticas y accesibilidad de tu web en un vistazo.',
    duration: '1 min',
    status: 'soon',
    icon: 'auditoria',
    bullets: [],
  },
];

export const liveTools = tools.filter((tool) => tool.status === 'live');
export const upcomingTools = tools.filter((tool) => tool.status === 'soon');
