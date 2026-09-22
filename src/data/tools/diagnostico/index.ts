import type { Quiz } from '../../../lib/quiz';

/**
 * Herramienta 1 — Diagnóstico de Ecosistema Digital.
 * Todo el contenido editable vive aquí: capas, preguntas base, preguntas por tipo
 * de negocio y recomendaciones. El motor está en src/lib/quiz.ts.
 */

export const quiz: Quiz = {
  slug: 'diagnostico-ecosistema-digital',
  title: 'Diagnóstico de Ecosistema Digital',
  tagline: 'Mide en 3 minutos si tu ecosistema digital está sano o si se está cayendo por las grietas.',
  durationLabel: '17 preguntas · ~3 minutos',

  layers: [
    {
      id: 'captacion',
      name: 'Captación y visibilidad',
      short: 'Captación',
      description: 'SEO, SEM, redes sociales, publicidad e inbound: cómo llegas a tu cliente ideal.',
      problems: ['Tráfico estancado', 'Coste de adquisición alto', 'Audiencia poco relevante'],
    },
    {
      id: 'experiencia',
      name: 'Experiencia y conversión',
      short: 'Conversión',
      description: 'Web, aplicaciones, velocidad, navegación y llamadas a la acción.',
      problems: ['Tasa de rebote alta', 'Carritos abandonados', 'Conversión baja'],
    },
    {
      id: 'datos',
      name: 'Datos, medición y analítica',
      short: 'Datos',
      description: 'GA4, píxeles, etiquetas y trazabilidad de lo que ocurre en tu ecosistema.',
      problems: ['Datos poco fiables', 'Atribución errónea', 'Decisiones por intuición'],
    },
    {
      id: 'automatizacion',
      name: 'Automatización y nutrición',
      short: 'Automatización',
      description: 'CRM, email marketing, chatbots y seguimiento de oportunidades.',
      problems: ['Base de datos fría', 'Seguimiento manual', 'Ventas y marketing desconectados'],
    },
    {
      id: 'infraestructura',
      name: 'Infraestructura e integración',
      short: 'Infraestructura',
      description: 'CMS, hosting, APIs, sincronización de herramientas y seguridad.',
      problems: ['Datos duplicados o aislados', 'Caídas del sistema', 'Falta de escalabilidad'],
    },
  ],

  businessTypes: [
    { id: 'b2b', label: 'B2B · Servicios', hint: 'Vendes a empresas, ciclos con varias personas.' },
    { id: 'b2c', label: 'B2C · Consumidor', hint: 'Vendes directo a personas.' },
    { id: 'ecommerce', label: 'E-commerce', hint: 'Catálogo, carrito y pedidos online.' },
    { id: 'saas', label: 'SaaS / Producto', hint: 'Software por suscripción con usuarios.' },
  ],

  questions: [
    // Capa 1 — Captación y visibilidad
    {
      id: 'cap_1',
      layer: 'captacion',
      text: '¿Sabes cuánto te cuesta conseguir un cliente?',
      help: 'Coste de adquisición (CAC): inversión total entre clientes nuevos.',
      options: [
        { label: 'Ni idea', score: 1 },
        { label: 'Lo intuyo, nunca lo calculé', score: 2 },
        { label: 'Tengo una estimación aproximada', score: 3 },
        { label: 'Lo mido por canal, con algo de ruido', score: 4 },
        { label: 'Lo mido por canal y decido con ese dato', score: 5 },
      ],
    },
    {
      id: 'cap_2',
      layer: 'captacion',
      text: '¿Cómo está tu visibilidad en buscadores y redes?',
      options: [
        { label: 'Prácticamente no aparezco', score: 1 },
        { label: 'Aparezco, pero sin estrategia ni contenido', score: 2 },
        { label: 'Publico de forma irregular, sin plan', score: 3 },
        { label: 'Contenido constante y algunas posiciones ganadas', score: 4 },
        { label: 'Estrategia activa con resultados medidos', score: 5 },
      ],
    },
    {
      id: 'cap_3',
      layer: 'captacion',
      text: '¿Qué tan alineada está la audiencia que atraes con tu cliente ideal?',
      options: [
        { label: 'Atraigo curiosos, casi nadie compra', score: 1 },
        { label: 'Mucho ruido y pocos perfiles buenos', score: 2 },
        { label: 'Mayoría adecuada, con fugas claras', score: 3 },
        { label: 'Bien perfilada y ajustamos campañas', score: 4 },
        { label: 'Audiencia precisa y calificada por canal', score: 5 },
      ],
    },

    // Capa 2 — Experiencia y conversión
    {
      id: 'exp_1',
      layer: 'experiencia',
      text: '¿Cuánto tarda tu web en cargar en el móvil?',
      help: 'Más de 3 segundos en móvil se lleva a la mitad de los visitantes.',
      options: [
        { label: 'No lo sé / más de 5 segundos', score: 1 },
        { label: 'Entre 4 y 5 segundos', score: 2 },
        { label: 'Entre 3 y 4, con imágenes pesadas', score: 3 },
        { label: 'Entre 2 y 3 segundos, aceptable', score: 4 },
        { label: 'Menos de 2 segundos, medido y optimizado', score: 5 },
      ],
    },
    {
      id: 'exp_2',
      layer: 'experiencia',
      text: '¿Un visitante nuevo entiende qué ofreces y cómo comprarlo?',
      options: [
        { label: 'Nada claro, cada uno interpreta lo que quiere', score: 1 },
        { label: 'Se entiende a medias', score: 2 },
        { label: 'Claro, pero el camino no guía', score: 3 },
        { label: 'Claro, con un camino definido', score: 4 },
        { label: 'Optimizado y probado con datos', score: 5 },
      ],
    },
    {
      id: 'exp_3',
      layer: 'experiencia',
      text: '¿Tus llamadas a la acción están medidas y funcionan?',
      options: [
        { label: 'No tengo llamadas a la acción claras', score: 1 },
        { label: 'Tengo botones, pero sin medir', score: 2 },
        { label: 'Están definidas, nunca las probamos', score: 3 },
        { label: 'Las medimos y ajustamos', score: 4 },
        { label: 'Optimización continua con experimentos', score: 5 },
      ],
    },

    // Capa 3 — Datos, medición y analítica
    {
      id: 'dat_1',
      layer: 'datos',
      text: '¿Tienes analítica instalada y funcionando?',
      options: [
        { label: 'No hay nada instalado', score: 1 },
        { label: 'Un píxel suelto que nadie revisa', score: 2 },
        { label: 'GA4 instalado, sin eventos clave', score: 3 },
        { label: 'GA4 con eventos y objetivos definidos', score: 4 },
        { label: 'Analítica completa con atribución fiable', score: 5 },
      ],
    },
    {
      id: 'dat_2',
      layer: 'datos',
      text: '¿Confías en los números que ves en tus informes?',
      options: [
        { label: 'No confío nada', score: 1 },
        { label: 'Cuadran a medias', score: 2 },
        { label: 'Son razonables, con dudas', score: 3 },
        { label: 'Fiables en general', score: 4 },
        { label: 'Una sola fuente de verdad para todo el equipo', score: 5 },
      ],
    },
    {
      id: 'dat_3',
      layer: 'datos',
      text: '¿Puedes saber qué canal trajo a cada cliente?',
      options: [
        { label: 'Imposible saberlo', score: 1 },
        { label: 'Lo estimo a ojo', score: 2 },
        { label: 'Lo sé en algunos casos', score: 3 },
        { label: 'Lo mido en la mayoría', score: 4 },
        { label: 'Trazabilidad completa del origen al cierre', score: 5 },
      ],
    },

    // Capa 4 — Automatización y nutrición
    {
      id: 'aut_1',
      layer: 'automatizacion',
      text: '¿Dónde viven tus contactos y oportunidades?',
      options: [
        { label: 'En un Excel o en la cabeza del equipo', score: 1 },
        { label: 'En el correo y WhatsApp', score: 2 },
        { label: 'En un CRM, pero con uso irregular', score: 3 },
        { label: 'En un CRM con pipeline definido', score: 4 },
        { label: 'En un CRM conectado con automatizaciones', score: 5 },
      ],
    },
    {
      id: 'aut_2',
      layer: 'automatizacion',
      text: '¿Qué pasa con un lead que no compra hoy?',
      options: [
        { label: 'Se pierde', score: 1 },
        { label: 'Le escribimos a mano, si nos acordamos', score: 2 },
        { label: 'Alguna secuencia puntual', score: 3 },
        { label: 'Secuencia básica de nutrición', score: 4 },
        { label: 'Nutrición segmentada y medida', score: 5 },
      ],
    },
    {
      id: 'aut_3',
      layer: 'automatizacion',
      text: '¿Cuánto del seguimiento comercial sigue siendo manual?',
      options: [
        { label: 'Todo manual', score: 1 },
        { label: 'Bastante, con tareas repetitivas', score: 2 },
        { label: 'Mezcla de manual y automático', score: 3 },
        { label: 'Automatizado en lo crítico', score: 4 },
        { label: 'Automatizado y monitoreado', score: 5 },
      ],
    },

    // Capa 5 — Infraestructura e integración
    {
      id: 'inf_1',
      layer: 'infraestructura',
      text: '¿Tus herramientas comparten datos entre sí?',
      options: [
        { label: 'Todo aislado: silos que no se hablan', score: 1 },
        { label: 'Exporto e importo a mano', score: 2 },
        { label: 'Alguna integración puntual', score: 3 },
        { label: 'La mayoría integrada', score: 4 },
        { label: 'Ecosistema integrado por API', score: 5 },
      ],
    },
    {
      id: 'inf_2',
      layer: 'infraestructura',
      text: '¿Cómo están los respaldos y los accesos?',
      options: [
        { label: 'Sin respaldos ni control de accesos', score: 1 },
        { label: 'Respaldos manuales y esporádicos', score: 2 },
        { label: 'Respaldos automáticos, accesos sueltos', score: 3 },
        { label: 'Respaldos y accesos controlados', score: 4 },
        { label: 'Respaldos probados, accesos gestionados y monitoreo', score: 5 },
      ],
    },
    {
      id: 'inf_3',
      layer: 'infraestructura',
      text: '¿Tu infraestructura aguanta crecer sin caerse?',
      options: [
        { label: 'Se cae con los picos', score: 1 },
        { label: 'Aguanta con sustos', score: 2 },
        { label: 'Aguanta hoy, pero no escala', score: 3 },
        { label: 'Escala con ajustes manuales', score: 4 },
        { label: 'Escala de forma predecible', score: 5 },
      ],
    },
  ],

  typeQuestions: [
    // B2B
    {
      id: 'b2b_1',
      layer: 'captacion',
      types: ['b2b'],
      text: '¿Los leads que llegan están calificados (necesidad, presupuesto, decisión)?',
      options: [
        { label: 'Llega de todo, filtramos a mano', score: 1 },
        { label: 'Muchos no encajan', score: 2 },
        { label: 'Aproximadamente la mitad encaja', score: 3 },
        { label: 'La mayoría encaja', score: 4 },
        { label: 'Están calificados antes de hablar con ventas', score: 5 },
      ],
    },
    {
      id: 'b2b_2',
      layer: 'automatizacion',
      types: ['b2b'],
      text: '¿Cómo pasa un lead de marketing a ventas?',
      options: [
        { label: 'No hay proceso definido', score: 1 },
        { label: 'A mano y sin registro', score: 2 },
        { label: 'Proceso informal, depende de la persona', score: 3 },
        { label: 'Proceso definido y registrado en el CRM', score: 4 },
        { label: 'Automático, medido y con tiempos de respuesta', score: 5 },
      ],
    },

    // B2C
    {
      id: 'b2c_1',
      layer: 'captacion',
      types: ['b2c'],
      text: '¿Mides la recompra o el reenganche de tus clientes?',
      options: [
        { label: 'No lo miro', score: 1 },
        { label: 'Sé que algunos vuelven, sin datos', score: 2 },
        { label: 'Mido la recompra, pero no actúo', score: 3 },
        { label: 'Mido y hago campañas de reenganche', score: 4 },
        { label: 'Recompra medida y optimizada por segmento', score: 5 },
      ],
    },
    {
      id: 'b2c_2',
      layer: 'experiencia',
      types: ['b2c'],
      text: '¿Qué fricción tiene hoy tu proceso de compra?',
      options: [
        { label: 'Mucha: pasos confusos y sin soporte', score: 1 },
        { label: 'Bastante: se pierde gente por el camino', score: 2 },
        { label: 'Normal, con dudas frecuentes', score: 3 },
        { label: 'Fluido, con soporte claro', score: 4 },
        { label: 'Optimizado y medido paso a paso', score: 5 },
      ],
    },

    // E-commerce
    {
      id: 'ecom_1',
      layer: 'experiencia',
      types: ['ecommerce'],
      text: '¿Trabajas la recuperación de carrito y abandono?',
      options: [
        { label: 'No hacemos nada', score: 1 },
        { label: 'Escribimos a mano de vez en cuando', score: 2 },
        { label: 'Alguna secuencia básica de correo', score: 3 },
        { label: 'Secuencias automáticas activas', score: 4 },
        { label: 'Optimizadas y medidas por segmento', score: 5 },
      ],
    },
    {
      id: 'ecom_2',
      layer: 'automatizacion',
      types: ['ecommerce'],
      text: '¿Qué pasa después de una compra?',
      options: [
        { label: 'Nada, se acaba la relación', score: 1 },
        { label: 'Se envía el pedido y ya', score: 2 },
        { label: 'Agradecimiento manual o genérico', score: 3 },
        { label: 'Secuencia post-venta básica', score: 4 },
        { label: 'Automatizada: recompra, reseñas y venta cruzada', score: 5 },
      ],
    },

    // SaaS
    {
      id: 'saas_1',
      layer: 'experiencia',
      types: ['saas'],
      text: '¿Cómo es la activación (onboarding) de nuevos usuarios?',
      options: [
        { label: 'Cada usuario se apaña como puede', score: 1 },
        { label: 'Guía manual por correo', score: 2 },
        { label: 'Onboarding básico, sin medir', score: 3 },
        { label: 'Onboarding medido con tasa de activación', score: 4 },
        { label: 'Optimizado con experimentos continuos', score: 5 },
      ],
    },
    {
      id: 'saas_2',
      layer: 'automatizacion',
      types: ['saas'],
      text: '¿Mides y actúas sobre la cancelación (churn)?',
      options: [
        { label: 'No lo miro', score: 1 },
        { label: 'Sé que se van, sin plan', score: 2 },
        { label: 'Mido la cancelación, pero no hago nada', score: 3 },
        { label: 'Tengo alertas y acciones básicas', score: 4 },
        { label: 'Predicción y acciones automáticas de retención', score: 5 },
      ],
    },
  ],

  recommendations: [
    // Captación
    {
      layer: 'captacion',
      maxPercent: 70,
      text: 'Elige un canal principal y mide su coste por cliente antes de invertir en un segundo canal.',
    },
    {
      layer: 'captacion',
      maxPercent: 70,
      text: 'Documenta el perfil de tu cliente ideal y revisa cada mes si la audiencia que atraes coincide.',
    },
    {
      layer: 'captacion',
      maxPercent: 55,
      text: 'Publica con un calendario mínimo sostenible (una pieza por semana) en lugar de picos irregulares.',
    },

    // Experiencia
    {
      layer: 'experiencia',
      maxPercent: 70,
      text: 'Mide el tiempo de carga en móvil y ataca primero las imágenes y el peso del JavaScript.',
    },
    {
      layer: 'experiencia',
      maxPercent: 70,
      text: 'Reescribe la propuesta de valor de tu página principal en una frase que se entienda en 5 segundos.',
    },
    {
      layer: 'experiencia',
      maxPercent: 55,
      text: 'Define un único objetivo de conversión por página y elimina los botones que compiten entre sí.',
    },

    // Datos
    {
      layer: 'datos',
      maxPercent: 70,
      text: 'Valida GA4 con los eventos clave de tu negocio: formulario, compra, agenda y contacto.',
    },
    {
      layer: 'datos',
      maxPercent: 70,
      text: 'Crea un cuadro de mando con 5 métricas y una sola fuente de verdad para todo el equipo.',
    },
    {
      layer: 'datos',
      maxPercent: 55,
      text: 'Añade trazabilidad de origen (UTM + CRM) para saber qué canal trae cada cliente.',
    },

    // Automatización
    {
      layer: 'automatizacion',
      maxPercent: 70,
      text: 'Centraliza contactos y oportunidades en un CRM: la hoja de cálculo deja de ser el sistema.',
    },
    {
      layer: 'automatizacion',
      maxPercent: 70,
      text: 'Monta una secuencia de nutrición de 4 correos para los leads que no compran hoy.',
    },
    {
      layer: 'automatizacion',
      maxPercent: 55,
      text: 'Automatiza avisos y recordatorios del proceso comercial: llamadas, propuestas y seguimiento.',
    },

    // Infraestructura
    {
      layer: 'infraestructura',
      maxPercent: 70,
      text: 'Conecta por API lo que hoy copias y pegas a mano (formulario → CRM → correo).',
    },
    {
      layer: 'infraestructura',
      maxPercent: 70,
      text: 'Establece respaldos automáticos y probados, con accesos controlados por rol.',
    },
    {
      layer: 'infraestructura',
      maxPercent: 55,
      text: 'Documenta el plano del ecosistema: qué herramientas hay, quién accede y qué se conecta con qué.',
    },
  ],

  healthyNote:
    'Tu ecosistema está maduro. El siguiente salto no es apagar fuegos, sino optimizar: experimentar en conversión y conectar los datos con decisiones de negocio. Ahí es donde la arquitectura rinde de verdad.',
};
