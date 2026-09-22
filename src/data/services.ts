export interface Service {
  slug: string;
  name: string;
  priceLabel: string;
  price: string;
  meta: string;
  description: string;
  deliverables: string[];
  booking?: boolean;
}

export const services: Service[] = [
  {
    slug: 'auditoria-ecosistema-digital',
    name: 'Auditoría de Ecosistemas (5 días)',
    priceLabel: 'Inversión',
    price: 'A convenir',
    meta: '5 días · Diagnóstico + blueprint',
    description:
      'Diagnóstico profundo de tu ecosistema: qué tienes, qué falta y en qué orden conviene resolverlo. Entregable en 5 días hábiles.',
    deliverables: [
      'Informe ejecutivo de hallazgos',
      'Blueprint técnico del ecosistema',
      'Roadmap táctico de 90 días',
      'Recomendaciones priorizadas',
    ],
    booking: true,
  },
  {
    slug: 'implementacion-de-proyectos',
    name: 'Implementación de Proyectos',
    priceLabel: 'Presupuesto',
    price: 'A convenir',
    meta: 'Duración · 4 a 12 semanas',
    description:
      'Desarrollo a medida, automatización de flujos e implementación de infraestructura. Entregas visibles cada semana, sin cajas negras.',
    deliverables: [
      'Desarrollo a medida (Laravel, React, Astro, Python)',
      'Automatización de flujos con n8n e IA',
      'Integraciones: APIs, CRM, ERP',
      'Despliegue de infraestructura cloud y física',
    ],
  },
  {
    slug: 'cto-externo',
    name: 'CTO Externo / Fractional CTO',
    priceLabel: 'Retainer',
    price: 'Mensual',
    meta: 'Modalidad · Retainer mensual',
    description:
      'Dirección tecnológica continua sin nómina fija: optimizo flujos de trabajo, integro IA y lidero a tu equipo de desarrollo.',
    deliverables: [
      'Dirección técnica y liderazgo de equipos',
      'Optimización de flujos y procesos',
      'Integración de IA generativa',
      'Monitoreo, métricas y gestión de proveedores',
    ],
  },
];
