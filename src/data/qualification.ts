export interface FitItem {
  title: string;
  detail: string;
}

export const notFor: FitItem[] = [
  {
    title: 'Buscas al más barato',
    detail: 'Aquí no se compite por precio, se compite por criterio. Si la decisión es solo por tarifa, hay opciones mejores que yo.',
  },
  {
    title: 'Quieres que alguien solo programe',
    detail: 'Si la arquitectura ya está decidida y solo necesitas manos, un desarrollador senior te sale más a cuenta que un arquitecto.',
  },
  {
    title: 'Esperas resultados mágicos en dos semanas',
    detail: 'La auditoría entrega en 5 días, pero los resultados de negocio necesitan implementación y un trimestre de trabajo real.',
  },
  {
    title: 'Nadie de tu lado puede decidir',
    detail: 'Sin un interlocutor con autoridad para aprobar cambios, cualquier arquitectura se queda en un documento bonito.',
  },
  {
    title: 'Te gusta coordinar cinco proveedores',
    detail: 'Si tu modelo es repartir piezas y hacer de integrador, mi propuesta de un solo responsable te va a sobrar.',
  },
];

export const forYou: FitItem[] = [
  {
    title: 'Tu negocio creció más rápido que tus sistemas',
    detail: 'La operación se sostiene con parches, heroísmos y horas extra. Cada cliente nuevo suma carga en vez de tracción.',
  },
  {
    title: 'Tus herramientas no se hablan entre sí',
    detail: 'APIs, CRM, ERP y redes desconectados: datos duplicados, informes que caducan y decisiones a ciegas.',
  },
  {
    title: 'Quieres un solo responsable del ecosistema',
    detail: 'Una persona que responda por la arquitectura completa y coordine especialistas cuando haga falta capacidad.',
  },
  {
    title: 'Estás dispuesto a invertir en arquitectura',
    detail: 'Antes de pagar otra herramienta o otra web, prefieres entender qué necesita tu ecosistema y en qué orden.',
  },
  {
    title: 'Valoras claridad y decisiones medibles',
    detail: 'Quieres indicadores antes de empezar y resultados con datos, no entregables que nadie revisa.',
  },
];
