export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  subRoles?: { role: string; period: string; highlights: string[] }[];
}

export const experience: Experience[] = [
  {
    role: 'Arquitecto de Ecosistemas Digitales',
    company: 'Olah',
    location: 'Venezuela · Remoto',
    period: 'ene 2020 – presente',
    current: true,
    highlights: [
      'Diseño ecosistemas digitales integrales para PYMEs y startups: desde la infraestructura física (redes, cámaras, servidores) hasta la capa de aplicación.',
      'Un solo punto de contacto para arquitecturas que conectan tecnología con resultados de negocio.',
    ],
  },
  {
    role: 'Senior Project Manager — Proyectos WordPress',
    company: 'Adrirodrigo Agencia',
    location: 'España',
    period: 'feb 2025 – may 2026',
    highlights: [
      'Lideré la entrega de +600 proyectos web del programa Kit Digital cumpliendo calidad, alcance y plazos.',
      'Automaticé flujos con N8n y MCP, mejoré la velocidad de entrega un 35% y reduje incidentes post-lanzamiento un 40%.',
    ],
  },
  {
    role: 'Chief Technology Officer (CTO)',
    company: 'Bestlifecoin LLC',
    location: 'California, EE.UU.',
    period: 'feb 2023 – ene 2025',
    highlights: [
      'Diseñé la arquitectura técnica y lideré productos blockchain desde cero, con foco en escalabilidad, seguridad y disponibilidad.',
      'Alineé la estrategia tecnológica con la visión de negocio ante C-level, inversores y socios del ecosistema.',
    ],
    subRoles: [
      {
        role: 'Senior Project Manager',
        period: 'may 2022 – ene 2023',
        highlights: [
          'Gestioné proyectos blockchain de punta a punta: discovery, alcance, presupuesto, KPIs y equipos.',
        ],
      },
    ],
  },
  {
    role: 'Senior Software Developer / Líder Técnico',
    company: 'ViralSolutions C.A.',
    location: 'Panamá',
    period: 'nov 2021 – may 2022',
    highlights: [
      'Desarrollé aplicaciones web críticas con Laravel y Angular aplicando seguridad OWASP en producción.',
      'Lideré Kamgus, un sistema de transporte y mudanzas: arquitectura frontend/backend e integraciones.',
    ],
  },
  {
    role: 'Director de Marketing Digital',
    company: 'M&M Odontoclínica',
    location: 'Venezuela',
    period: 'sep 2018 – feb 2020',
    highlights: [
      'Diseñé e implementé estrategias digitales integrales: SEO, SEM, redes sociales y sitio web.',
      'Desarrollé aplicaciones de marketing con Laravel y WordPress, midiendo campañas con datos.',
    ],
  },
];

export interface Education {
  title: string;
  institution: string;
  period: string;
  detail: string;
}

export const education: Education[] = [
  {
    title: 'Licenciado en Informática',
    institution: 'Universidad Bolivariana de Venezuela (UBV)',
    period: '2013 – 2016',
    detail: 'Trabajo de grado: sistema de nómina para la institución pública INSETRA, Caracas.',
  },
  {
    title: 'Técnico Superior en Informática',
    institution: 'Universidad Bolivariana de Venezuela (UBV)',
    period: '2011 – 2013',
    detail: 'Sistema web administrativo para el Liceo Julio Bustamante.',
  },
];

export const teaching = [
  'Ingeniería de Software',
  'Seguridad Informática',
  'Aplicaciones en Internet',
  'Técnicas Avanzadas de Programación',
  'Laboratorio de Informática',
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: 'Lenguajes', items: ['PHP', 'JavaScript', 'Python'] },
  { label: 'Backend', items: ['Laravel', 'FastAPI', 'Express', 'CodeIgniter', 'Phalcon', 'Adonis'] },
  { label: 'Frontend', items: ['React', 'Astro', 'Next.js', 'Svelte', 'Qwik'] },
  { label: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'] },
  { label: 'Cloud e infraestructura', items: ['AWS', 'DigitalOcean', 'Supabase', 'Firebase', 'Vercel', 'Cloudflare'] },
  { label: 'IA y automatización', items: ['MCP', 'N8n', 'Claude', 'OpenAI', 'Gemini', 'DeepSeek'] },
  { label: 'CMS', items: ['WordPress', 'Strapi'] },
  { label: 'Metodologías', items: ['Scrum', 'Proceso Unificado Ágil'] },
];

export const certifications = [
  'Fundamentos de Tecnologías Blockchain · DigitalWise',
  'Inbound Marketing Certified · HubSpot',
  'React de 0 a experto · Udemy',
  'Angular: de cero a experto · Udemy',
  'React Native: apps para Android e iOS',
  'Técnico en Redes de Datos',
];

export const principles = [
  {
    title: 'Si algo no lo necesitas, te lo digo',
    body: 'No vendo tecnología por moda. Cada recomendación responde a un problema concreto.',
  },
  {
    title: 'Si no se puede medir, no te lo vendo',
    body: 'Definimos indicadores antes de empezar y revisamos resultados con datos, no opiniones.',
  },
  {
    title: 'Cada decisión tiene dueño',
    body: 'Un único punto de contacto técnico que responde por la arquitectura completa.',
  },
  {
    title: 'Documentación y traspaso',
    body: 'Todo queda documentado: arquitectura, decisiones, accesos y procesos.',
  },
];
