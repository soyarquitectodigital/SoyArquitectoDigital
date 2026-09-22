import type { LayerId } from '../lib/quiz';

export interface Solution {
  slug: string;
  layer: LayerId;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  meta: string;
}

/**
 * Soluciones por capa del ecosistema. El contenido es modular: para añadir una
 * solución basta con agregar una entrada aquí (o duplicar el archivo para otra
 * familia de soluciones) y se renderiza en /soluciones.
 */
export const layerSolutions: Solution[] = [
  {
    slug: 'captacion-y-visibilidad',
    layer: 'captacion',
    name: 'Captación y visibilidad',
    tagline: 'Que te encuentren los que sí compran.',
    description:
      'Trabajo el top of funnel con datos: qué canal trae clientes, cuánto cuesta cada uno y qué mensaje convierte. Sin quemar presupuesto en canales que no puedes medir.',
    deliverables: [
      'Estrategia de contenidos y palabras clave',
      'Campañas con coste de adquisición medido',
      'Perfil de cliente ideal documentado',
      'Reactivación de audiencia existente',
    ],
    meta: 'Proyecto de 4 a 8 semanas',
  },
  {
    slug: 'experiencia-y-conversion',
    layer: 'experiencia',
    name: 'Experiencia y conversión',
    tagline: 'Que quien entra, entienda y compre.',
    description:
      'Velocidad, claridad y camino de compra. Reescribo la propuesta de valor, ordeno la navegación y optimizo los puntos donde hoy se pierden tus visitantes.',
    deliverables: [
      'Auditoría de rendimiento y UX en móvil',
      'Propuesta de valor reescrita por página',
      'Embudos y llamadas a la acción optimizadas',
      'Experimentos A/B sobre lo que más impacta',
    ],
    meta: 'Proyecto de 3 a 6 semanas',
  },
  {
    slug: 'datos-y-analitica',
    layer: 'datos',
    name: 'Datos y analítica',
    tagline: 'Que decidas con números en los que confías.',
    description:
      'Instalo y valido la medición completa (GA4, etiquetas y trazabilidad hasta el CRM) y dejo un cuadro de mando con las cinco métricas que de verdad mueven tu negocio.',
    deliverables: [
      'GA4 y Tag Manager con eventos clave',
      'Trazabilidad de origen: UTM hasta el cierre',
      'Cuadro de mando de 5 métricas accionables',
      'Informe ejecutivo mensual',
    ],
    meta: 'Proyecto de 2 a 4 semanas',
  },
  {
    slug: 'automatizacion-y-nutricion',
    layer: 'automatizacion',
    name: 'Automatización y nutrición',
    tagline: 'Que ningún lead se enfríe por olvido.',
    description:
      'CRM, secuencias de correo y automatizaciones que trabajan cuando tu equipo duerme: seguimiento, recordatorios y nutrición de los que no compran hoy.',
    deliverables: [
      'CRM con pipeline y etapas definidas',
      'Secuencias de nutrición segmentadas',
      'Automatizaciones de aviso y seguimiento',
      'Integración marketing → ventas',
    ],
    meta: 'Proyecto de 3 a 6 semanas',
  },
  {
    slug: 'infraestructura-e-integracion',
    layer: 'infraestructura',
    name: 'Infraestructura e integración',
    tagline: 'Que todo hable el mismo idioma y no se caiga.',
    description:
      'El sótano del ecosistema: servidores, CMS, APIs, respaldos y accesos. Conecto lo que hoy se copia a mano y dejo el plano documentado para que puedas escalar sin sustos.',
    deliverables: [
      'Plano del ecosistema y de sus integraciones',
      'Integraciones por API (formulario → CRM → correo)',
      'Respaldos probados y accesos por rol',
      'Monitoreo, alertas y plan de continuidad',
    ],
    meta: 'Proyecto de 4 a 12 semanas',
  },
];
