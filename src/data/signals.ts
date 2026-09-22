export interface Signal {
  title: string;
  body: string;
}

export const signals: Signal[] = [
  {
    title: 'Sistemas e infraestructura desconectados',
    body: 'APIs, CRM, ERP y redes que no se hablan entre sí: datos duplicados, decisiones lentas y costes que se repiten cada mes.',
  },
  {
    title: 'Programar sin arquitectura técnica',
    body: 'Construir features sin un plano: cada lanzamiento agrega deuda técnica y frena más el siguiente. Escalar así sale caro.',
  },
  {
    title: 'Procesos manuales que comen el margen',
    body: 'Tareas repetitivas que consumen horas de tu equipo y ralentizan las entregas. Automatizables casi siempre; medidas, nunca.',
  },
  {
    title: 'Nadie responde por la tecnología',
    body: 'Sin un liderazgo técnico con experiencia, las decisiones críticas se postergan o se pagan a precio de nómina full-time.',
  },
];
