export interface Stat {
  value: string;
  label: string;
  count?: number;
  prefix?: string;
  suffix?: string;
}

export const stats: Stat[] = [
  {
    value: '+600',
    count: 600,
    prefix: '+',
    label: 'proyectos web entregados, incluido el programa Kit Digital en España.',
  },
  {
    value: '10+ años',
    count: 10,
    suffix: '+ años',
    label: 'liderando tecnología, producto y equipos digitales.',
  },
  { value: 'CTO', label: 'de una startup blockchain en EE.UU., de cero a producto.' },
  { value: '1:1', label: 'un único interlocutor técnico para todo tu ecosistema.' },
];

export const capabilities = [
  'Arquitectura de ecosistemas',
  'Integraciones y APIs',
  'Automatización de procesos',
  'Aplicaciones web',
  'CRM y ERP',
  'Analítica y datos',
  'Cloud e infraestructura',
  'Seguridad',
  'Rendimiento web',
  'CTO externo',
];

export const environments = [
  'Blockchain · EE.UU.',
  'SaaS',
  'PYMEs y startups',
  'E-commerce',
  'Kit Digital · España',
  'Salud y clínicas',
  'Logística y transporte',
  'Educación',
];

export const clientsAndTech = [
  'Bestlifecoin LLC',
  'Adrirodrigo Agencia',
  'ViralSolutions C.A.',
  'M&M Odontoclínica',
  'Laravel',
  'React',
  'Astro',
  'Python',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Cloudflare',
  'n8n',
  'WordPress',
];
