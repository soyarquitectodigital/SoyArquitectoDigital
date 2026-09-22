export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: '¿Qué diferencia a un CTO-as-a-Service de un desarrollador senior?',
    answer:
      'Un desarrollador senior ejecuta muy bien una parte del sistema. Un CTO externo responde por el conjunto: decide arquitectura, prioriza el roadmap, alinea la tecnología con los OKRs del negocio y lidera a tu equipo o proveedores. Es dirección técnica, no capacidad de programación.',
  },
  {
    question: '¿Cómo funciona la Auditoría Digital de 5 Días?',
    answer:
      'Una sesión de diagnóstico de 45 minutos y una semana de análisis técnico. En 5 días hábiles recibes un informe ejecutivo con hallazgos, el blueprint técnico del ecosistema y un roadmap táctico de 90 días priorizado por impacto. Contrates o no la implementación después.',
  },
  {
    question: '¿Trabajas con equipos internos ya establecidos?',
    answer:
      'Sí, es uno de los escenarios más habituales. No reemplazo a tu equipo: aporto la capa de arquitectura y dirección que suele faltar, defino estándares, reviso código y lo dejo documentado para que tu equipo pueda sostenerlo sin depender de mí.',
  },
  {
    question: '¿Qué es un arquitecto de ecosistemas digitales?',
    answer:
      'Es quien define cómo encajan todas las piezas de tu negocio digital —infraestructura física, aplicaciones, datos, automatizaciones y estrategia— y responde por que funcionen juntas. Yo diseño esa arquitectura, la implemento y la mantengo.',
  },
  {
    question: '¿Por qué no contratar un freelancer por cada cosa?',
    answer:
      'Puedes, y es exactamente el origen del problema: piezas correctas que no se hablan entre sí. Yo mantengo un único plano del sistema y coordino especialistas por capa cuando hace falta capacidad. Un responsable, no cinco versiones de tu negocio.',
  },
  {
    question: '¿Qué no haces?',
    answer:
      'No vendo tecnología por moda ni proyectos que no se puedan medir. Si algo no encaja con tu situación, te lo digo antes de que firmes nada. Cero humo.',
  },
];
