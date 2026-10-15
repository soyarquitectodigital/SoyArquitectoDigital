/**
 * Especialidades: los servicios específicos y sus páginas propias.
 *
 * Cada entrada alimenta tres sitios: el catálogo /servicios, la fila de chips
 * de la landing y la página individual /servicios/<slug>. Añadir una
 * especialidad nueva es añadir una entrada aquí.
 *
 * Convenciones de contenido:
 *   problem   → el dolor real, en lenguaje de negocio (intro de la página).
 *   includes  → qué recibe el cliente, concreto y verificable.
 *   signs     → «es para ti si…», señales que el visitante reconoce.
 *   faq       → 3 preguntas reales; alimentan el schema FAQPage.
 *   whatsapp  → mensaje pre-rellenado del CTA (el lead llega contextualizado).
 */

export interface SpecialtyFaq {
  q: string;
  a: string;
}

export interface Specialty {
  slug: string;
  /** Nombre completo en la página y el catálogo. */
  name: string;
  /** Etiqueta corta para la fila de chips. */
  chip: string;
  /** Una línea para tarjetas y metadatos. */
  tagline: string;
  /** El dolor que resuelve. */
  problem: string;
  /** Qué incluye el servicio. */
  includes: string[];
  /** Es para ti si… */
  signs: string[];
  /** Tecnología relevante, no el catálogo completo. */
  stack: string[];
  /** Clave del icono en las tarjetas. */
  icon: string;
  faq: SpecialtyFaq[];
  /** Mensaje de WhatsApp pre-rellenado del CTA. */
  whatsapp: string;
  metaTitle: string;
  metaDescription: string;
}

export const specialties: Specialty[] = [
  {
    slug: 'integracion-de-sistemas',
    name: 'Integración de APIs, CRM y ERP',
    chip: 'Integraciones',
    tagline: 'Conecto los sistemas que hoy no se hablan: un solo dato, sin duplicados ni trabajo manual.',
    problem:
      'Cada herramienta guarda su propia versión de la verdad: el CRM no sabe lo que facturó el ERP, la web no actualiza el stock y alguien exporta e importa CSV cada semana. La integración elimina ese trabajo manual y convierte sistemas sueltos en un ecosistema.',
    includes: [
      'Mapeo de datos y diseño de la integración (qué manda cada sistema)',
      'Conexiones vía API REST/GraphQL y webhooks',
      'Sincronización CRM ↔ ERP ↔ web ↔ facturación',
      'Colas con reintentos y control de errores',
      'Monitorización con alertas cuando algo falla',
      'Documentación de la integración y traspaso al equipo',
    ],
    signs: [
      'Tu equipo copia y pega datos entre herramientas cada semana',
      'El stock o los precios de la web no coinciden con el sistema real',
      'Para un informe hay que preguntar a tres personas distintas',
    ],
    stack: ['REST', 'GraphQL', 'Webhooks', 'Laravel', 'Python', 'PostgreSQL', 'n8n'],
    icon: 'link',
    faq: [
      {
        q: '¿Y si mi software no tiene API?',
        a: 'Se conecta por otras vías: acceso a base de datos, ficheros, webhooks del propio sistema o automatización de interfaz como último recurso. En la auditoría se define qué opción es viable y más barata para tu caso.',
      },
      {
        q: '¿Cuánto tarda una integración?',
        a: 'Una integración puntual suele estar entre 1 y 3 semanas; un ecosistema con varios sistemas, entre 4 y 12 según el alcance. Siempre con entregas visibles cada semana.',
      },
      {
        q: '¿Qué pasa si uno de los sistemas se cae?',
        a: 'Las integraciones llevan colas y reintentos: si un sistema no responde, el dato no se pierde y se vuelve a intentar. Además hay alertas para que tu equipo se entere antes que el cliente.',
      },
    ],
    whatsapp: 'Hola Oswaldo, necesito integrar mis sistemas (CRM, ERP, web). ¿Lo vemos?',
    metaTitle: 'Integración de APIs, CRM y ERP para empresas',
    metaDescription:
      'Conecto CRM, ERP, web y facturación con integraciones a medida: sincronización de datos en tiempo real, sin duplicados ni trabajo manual. Entregas visibles cada semana.',
  },
  {
    slug: 'automatizacion-con-n8n-e-ia',
    name: 'Automatización con n8n e IA',
    chip: 'Automatización e IA',
    tagline: 'Flujos que trabajan solos: respuestas, avisos y tareas repetitivas fuera de la agenda del equipo.',
    problem:
      'Responder WhatsApp a mano, pasar leads de un sitio a otro, avisar por correo de cada pedido… son horas cada semana que no escalan. Automatizo esos flujos con n8n e IA, empezando por lo que más tiempo consume y sin cajas negras: todo queda documentado y visible.',
    includes: [
      'Diseño de flujos en n8n, documentados y sin cajas negras',
      'WhatsApp multi-número: respuestas por palabra clave y derivación a persona',
      'Modo humano anti-baneo para proteger tus números',
      'IA para clasificar, resumir y responder lo repetitivo',
      'Avisos internos y sincronización de leads con tu CRM',
      'Panel de estado de los flujos en un solo sitio',
    ],
    signs: [
      'Respondes siempre las mismas preguntas por WhatsApp',
      'Los leads se enfrían porque nadie los pasa al CRM a tiempo',
      'Cada pedido genera tres avisos manuales entre tu equipo',
    ],
    stack: ['n8n', 'MCP', 'WhatsApp', 'OpenAI', 'Claude', 'DeepSeek'],
    icon: 'bolt',
    faq: [
      {
        q: '¿Se puede automatizar WhatsApp sin que bloquen el número?',
        a: 'Sí, con la arquitectura correcta: varios números, límites de envío y un modo humano que imita el ritmo de una persona. Es exactamente lo que se ve en la demo del sistema de WhatsApp que tienes en los testimonios.',
      },
      {
        q: '¿La IA responde a mis clientes sola?',
        a: 'Solo donde tú decidas. Lo repetitivo se responde solo y lo importante se deriva a una persona con todo el contexto. La frontera la defines tú, y se puede ajustar en cualquier momento.',
      },
      {
        q: '¿Por dónde empiezo?',
        a: 'Con un mapa de qué merece automatizarse. En la auditoría de 5 días se prioriza qué flujos devuelven más horas primero, y se implementan en ese orden.',
      },
    ],
    whatsapp: 'Hola Oswaldo, quiero automatizar procesos con n8n e IA, incluido WhatsApp. ¿Lo vemos?',
    metaTitle: 'Automatización de procesos con n8n e IA',
    metaDescription:
      'Automatizo procesos con n8n e IA: respuestas automáticas de WhatsApp multi-número, modo humano anti-baneo, avisos internos y sincronización con tu CRM.',
  },
  {
    slug: 'aplicaciones-web-a-medida',
    name: 'Aplicaciones web a medida',
    chip: 'Apps a medida',
    tagline: 'Software hecho para tu operación, no plantillas a las que adaptar tu negocio.',
    problem:
      'Cuando una hoja de cálculo se convierte en el sistema central de la empresa, cada proceso nuevo suma fragilidad. Diseño y construyo aplicaciones que se adaptan a cómo trabajas de verdad, con una arquitectura pensada para lo que viene después.',
    includes: [
      'Descubrimiento y arquitectura antes de escribir código',
      'Desarrollo frontend y backend a medida',
      'Paneles con roles y permisos por usuario',
      'Integración con tus sistemas actuales (CRM, ERP, pagos)',
      'Despliegue, monitoreo y copias de seguridad incluidos',
      'Documentación y traspaso al equipo',
    ],
    signs: [
      'Tu operación vive en hojas de cálculo compartidas',
      'Necesitas algo que ningún plugin o plantilla cubre',
      'Quieres una base sólida antes de seguir creciendo',
    ],
    stack: ['Laravel', 'React', 'Astro', 'Python', 'FastAPI', 'PostgreSQL', 'MySQL'],
    icon: 'window',
    faq: [
      {
        q: '¿Por qué a medida y no un SaaS existente?',
        a: 'Si un SaaS cubre el 90 % de tu proceso, úsalo: te lo diré. Lo a medida tiene sentido cuando tu operación es tu ventaja competitiva, porque una herramienta genérica te obliga a trabajar a su manera.',
      },
      {
        q: '¿Cómo sé que el proyecto no se queda a medias?',
        a: 'Con entregas visibles cada semana y un alcance acordado antes de empezar. Si algo se desvía, lo ves en días, no cuando ya es tarde.',
      },
      {
        q: '¿Quién la mantiene después?',
        a: 'Puedes mantenerla con tu equipo —todo queda documentado y con traspaso— o quedarme yo con un retainer de CTO externo.',
      },
    ],
    whatsapp: 'Hola Oswaldo, necesito una aplicación web a medida. ¿Lo vemos?',
    metaTitle: 'Aplicaciones web a medida para empresas',
    metaDescription:
      'Desarrollo aplicaciones web a medida (Laravel, React, Python): descubrimiento, arquitectura, paneles por roles, integraciones y traspaso documentado.',
  },
  {
    slug: 'webs-y-kit-digital',
    name: 'Webs y WordPress / Kit Digital',
    chip: 'Webs y Kit Digital',
    tagline: 'Webs rápidas y medibles: landings, corporativas y e-commerce, con o sin Kit Digital.',
    problem:
      'Una web lenta o descuidada pierde clientes antes de que te lean. Construyo webs rápidas, accesibles y medibles — y si eres pyme en España, gestiono el programa Kit Digital de principio a fin: más de 600 webs entregadas dentro del programa.',
    includes: [
      'Landings y webs corporativas orientadas a conversión',
      'WordPress optimizado o sitios ultrarrápidos con Astro',
      'E-commerce y catálogos',
      'SEO técnico base y Core Web Vitals medidos',
      'Accesibilidad y buenas prácticas web',
      'Programa Kit Digital: entrega y cumplimiento incluidos',
    ],
    signs: [
      'Tu web tarda en cargar o directamente no mide nada',
      'Necesitas la web del Kit Digital y no sabes por dónde empezar',
      'Quieres una landing que convierta visitas en conversaciones',
    ],
    stack: ['WordPress', 'Astro', 'WooCommerce', 'Cloudflare', 'Plausible'],
    icon: 'globe',
    faq: [
      {
        q: '¿Cuánto tarda una web?',
        a: 'Una landing o web corporativa bien hecha: 2 a 4 semanas. Un e-commerce o algo con integraciones: 4 a 8. Siempre con entregas visibles cada semana y sin cajas negras.',
      },
      {
        q: '¿Gestionas el Kit Digital?',
        a: 'Sí: más de 600 webs entregadas dentro del programa en España, con el cumplimiento, los plazos y la documentación que exige.',
      },
      {
        q: '¿La web incluye analítica?',
        a: 'Incluye analítica sin cookies (sin necesidad de banner de rastreo) y eventos clave medidos desde el primer día: visitas, clics en CTA y conversaciones iniciadas.',
      },
    ],
    whatsapp: 'Hola Oswaldo, necesito una web (o gestionar el Kit Digital). ¿Lo vemos?',
    metaTitle: 'Diseño web profesional y Kit Digital',
    metaDescription:
      'Webs rápidas, medibles y accesibles: landings, corporativas y e-commerce en WordPress o Astro. Gestión completa del Kit Digital (+600 webs entregadas).',
  },
  {
    slug: 'dashboards-y-analitica',
    name: 'Dashboards y analítica',
    chip: 'Datos y dashboards',
    tagline: 'Los números del negocio en un solo panel, actualizados solos y sin pedirlos a nadie.',
    problem:
      'Cuando cada informe cuesta tres correos y media tarde de Excel, las decisiones llegan tarde. Uno los datos que ya tienes en paneles que se actualizan solos, para que el número esté siempre a mano y no al final del mes.',
    includes: [
      'Definición de KPIs con el negocio antes de tocar datos',
      'Unificación de fuentes: web, CRM, ERP y facturación',
      'Paneles a medida o sobre Metabase',
      'Informes automáticos por correo o WhatsApp',
      'Analítica web sin cookies (Plausible o Umami)',
      'Alertas cuando una métrica se sale de rango',
    ],
    signs: [
      'Los informes se preparan a mano cada semana',
      'Nadie sabe el número real hasta que cierra el mes',
      'Tienes datos en cinco sitios y decides por intuición',
    ],
    stack: ['PostgreSQL', 'Metabase', 'Python', 'Plausible', 'Umami'],
    icon: 'chart',
    faq: [
      {
        q: '¿Necesito un data warehouse?',
        a: 'No siempre. Muchas pymes lo resuelven con las fuentes que ya tienen y una capa ordenada encima. La auditoría define si hace falta algo más o no.',
      },
      {
        q: '¿Puedo ver los paneles desde el móvil?',
        a: 'Sí: los paneles se diseñan responsive y los informes clave llegan por correo o WhatsApp con la periodicidad que decidas.',
      },
      {
        q: '¿Qué pasa con la privacidad?',
        a: 'Analítica sin cookies y sin datos personales: cumplimiento sencillo y sin banner de rastreo que moleste al visitante.',
      },
    ],
    whatsapp: 'Hola Oswaldo, quiero dashboards y analítica para mi negocio. ¿Lo vemos?',
    metaTitle: 'Dashboards y analítica de datos para PYMEs',
    metaDescription:
      'Paneles que se actualizan solos: KPIs unificados de web, CRM y facturación, informes automáticos y analítica sin cookies. Decisiones con datos, no con intuición.',
  },
  {
    slug: 'cloud-e-infraestructura',
    name: 'Cloud e infraestructura',
    chip: 'Cloud e infra',
    tagline: 'La base técnica: servidores, redes y despliegues que sostienen la operación sin sobresaltos.',
    problem:
      'La infraestructura solo se nota cuando falla. Diseño y mantengo la base — desde la red física de tu oficina hasta el cloud — para que el resto del ecosistema corra sobre suelo firme y los despliegues dejen de dar miedo.',
    includes: [
      'Migración a la nube (AWS, DigitalOcean, Supabase)',
      'Redes, servidores y sistemas locales (capa física incluida)',
      'CI/CD: despliegues automáticos y reversibles',
      'Monitoreo, alertas y respuesta a incidencias',
      'Copias de seguridad y plan de recuperación',
      'Optimización de costes cloud',
    ],
    signs: [
      'Los despliegues dependen de una sola persona y dan miedo',
      'Ya te caíste una vez y nadie supo exactamente por qué',
      'La red y los sistemas locales no los mantiene nadie',
    ],
    stack: ['AWS', 'DigitalOcean', 'Cloudflare', 'Docker', 'Supabase'],
    icon: 'cloud',
    faq: [
      {
        q: '¿Trabajas también la parte física?',
        a: 'Sí: soy de los pocos perfiles que conecta la capa física (redes, cableado, servidores) con la digital. Un único responsable para todo el ecosistema.',
      },
      {
        q: '¿Se puede bajar el coste del cloud?',
        a: 'Casi siempre. Reviso qué se está pagando y para qué, y se ajusta sin tocar la fiabilidad. Muchas veces el ahorro del primer año cubre la revisión.',
      },
      {
        q: '¿Qué incluye el monitoreo?',
        a: 'Alertas antes de que el usuario note nada y un procedimiento claro de respuesta cuando algo pasa: quién hace qué y en cuánto tiempo.',
      },
    ],
    whatsapp: 'Hola Oswaldo, necesito ayuda con cloud e infraestructura. ¿Lo vemos?',
    metaTitle: 'Cloud e infraestructura para empresas',
    metaDescription:
      'Migraciones a la nube, redes y servidores locales, CI/CD, monitoreo y copias de seguridad. La capa física y la digital con un solo responsable.',
  },
  {
    slug: 'seguridad-y-rendimiento',
    name: 'Seguridad y rendimiento',
    chip: 'Seguridad',
    tagline: 'Sitios rápidos y sistemas sin puertas abiertas: auditoría, corrección y medición continua.',
    problem:
      'La seguridad y la velocidad no se compran con un plugin: se auditan, se corrigen y se vigilan. Reviso tu ecosistema con criterio OWASP, mido cada mejora con datos y te entrego un informe que se entiende sin ser técnico.',
    includes: [
      'Auditoría de seguridad (OWASP Top 10) y hardening',
      'Corrección de vulnerabilidades y configuración de servidores',
      'Core Web Vitals: diagnóstico y optimización medida',
      'Copias, cifrado y gestión de accesos',
      'Monitoreo continuo y respuesta a incidentes',
      'Informe ejecutivo con prioridades y evidencias',
    ],
    signs: [
      'Nunca te han auditado la web ni el servidor',
      'La web tarda en cargar y nadie sabe exactamente por qué',
      'Manejas datos de clientes y quieres dormir tranquilo',
    ],
    stack: ['OWASP', 'Cloudflare', 'Lighthouse', 'WAF'],
    icon: 'shield',
    faq: [
      {
        q: '¿En qué se diferencia de la auditoría de 5 días?',
        a: 'La auditoría de 5 días mira todo el ecosistema; esta es una revisión profunda de seguridad y rendimiento. También puede ser la primera fase de aquella si es lo que más te preocupa.',
      },
      {
        q: '¿Me vas a asustar con tecnicismos?',
        a: 'No: recibes un informe ejecutivo con lo que importa, el riesgo real de cada hallazgo y el orden en que conviene corregirlo. Los detalles técnicos van aparte, para tu equipo.',
      },
      {
        q: '¿Cada cuánto se revisa?',
        a: 'Una auditoría al año y monitoreo continuo para lo crítico. La seguridad es un proceso, no un entregable que se archiva.',
      },
    ],
    whatsapp: 'Hola Oswaldo, quiero una revisión de seguridad y rendimiento. ¿Lo vemos?',
    metaTitle: 'Auditoría de seguridad y rendimiento web',
    metaDescription:
      'Auditoría OWASP, corrección de vulnerabilidades, Core Web Vitals y monitoreo continuo. Informe ejecutivo con prioridades, sin tecnicismos innecesarios.',
  },
];

/** Atajo: especialidad por slug. */
export const specialtyBySlug = (slug: string) => specialties.find((item) => item.slug === slug);
