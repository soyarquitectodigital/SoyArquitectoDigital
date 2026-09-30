/**
 * Contenido de la landing satélite /salud: arquitectura digital para todo el
 * sector salud en Venezuela (médicos, odontólogos, psicólogos, nutricionistas,
 * fisioterapeutas, clínicas y consultorios).
 */

/** A quién va dirigida la página. Se muestra en el hero para que nadie se
 *  descarte por pensar que esto es solo para clínicas. */
export const publico =
  'Médicos, odontólogos, psicólogos, nutricionistas, fisioterapeutas, clínicas y consultorios';

/**
 * Barra de confianza. Todos los puntos son verificables contra `cv.ts`:
 * experiencia real en una clínica, volumen de proyectos y método de trabajo.
 */
export const confianza = [
  'Experiencia real en salud: dirigí el marketing digital de una clínica dental en Venezuela.',
  '+600 proyectos web entregados en España, EE.UU. y Venezuela.',
  'Arquitecto de ecosistemas digitales, no solo de páginas web.',
  '3 plazas fundadoras con la primera fase sin costo.',
];

export const problemas = [
  'Tus pacientes te buscan en Google, pero lo que encuentran no transmite la calidad de tu consulta.',
  'Las citas se caen por olvidos y reagendados manuales, y dejan huecos en una agenda que podrías tener llena.',
  'Reagendar citas por WhatsApp se come horas que deberían ir a atender a quien tienes delante.',
  'Tu marca se ve igual que la de cien colegas más. No hay nada que te diferencie.',
  'Tienes redes sociales, pero no sabes si realmente te están trayendo pacientes.',
];

/** Cierre del bloque de problema, partido para poder destacar una parte. */
export const cierreProblema = {
  antes: 'No es falta de esfuerzo. Es falta de ',
  destacado: 'arquitectura digital',
  despues: '.',
};

export interface Pilar {
  icono: 'presencia' | 'operacion' | 'crecimiento';
  titulo: string;
  texto: string;
}

export const pilares: Pilar[] = [
  {
    icono: 'presencia',
    titulo: 'Presencia que genera confianza',
    texto:
      'Optimizo tu Google Business, tu identidad visual y tu web para que los pacientes te encuentren primero y confíen antes de llamarte.',
  },
  {
    icono: 'operacion',
    titulo: 'Operación que no te roba tiempo',
    texto:
      'Automatizo el agendamiento, los recordatorios y las respuestas frecuentes por WhatsApp, para que las citas dejen de caerse por olvidos o cruces de horario.',
  },
  {
    icono: 'crecimiento',
    titulo: 'Crecimiento sostenido',
    texto:
      'Contenido, SEO local y campañas segmentadas para que tu agenda se llene sin depender solo de referidos.',
  },
];

export const diagnosticoPuntos = [
  'Cómo apareces en Google cuando un paciente busca tu especialidad en tu ciudad.',
  'Qué está frenando tu agenda (ausentismo, falta de recordatorios, procesos manuales).',
  'Cómo se ve tu marca frente a otros profesionales de tu zona.',
  'Qué herramientas ya tienes y cuáles te faltan para digitalizar sin gastar de más.',
  'Un plan por fases con prioridades claras, lo trabajemos juntos o no.',
];

export const pasos = [
  {
    titulo: 'Me escribes por WhatsApp',
    texto: 'Me cuentas tu especialidad y en qué ciudad estás, sin formularios largos.',
  },
  {
    titulo: 'Agendamos tu diagnóstico de 15 min',
    texto: 'Por videollamada o WhatsApp, cuando te quede cómodo entre consultas.',
  },
  {
    titulo: 'Te llevas tu checklist y un plan',
    texto: 'Decides si quieres implementarlo conmigo o por tu cuenta. Sin presión.',
  },
];

export const faqs = [
  {
    pregunta: '¿Tienen experiencia en el sector salud?',
    respuesta:
      'Sí. Entre 2018 y 2020 dirigí el marketing digital de M&M Odontoclínica en Venezuela: SEO, campañas, redes sociales y sitio web. Desde entonces he entregado más de 600 proyectos web y arquitecturas digitales para otros sectores, y ahora aplico ese mismo método al sector salud.',
  },
  {
    pregunta: '¿Funciona para mi especialidad?',
    respuesta:
      'Sí. El proceso se adapta a cualquier especialidad y a cualquier tamaño: desde una consulta individual hasta una clínica con varios especialistas.',
  },
  {
    pregunta: '¿Qué pasa con los datos de mis pacientes?',
    respuesta:
      'No toco datos clínicos de pacientes. Mi trabajo está en la presencia (web, Google, marca) y en la operación de la agenda y los canales de contacto. La historia clínica y los datos sensibles se quedan donde ya están; si algo requiriera tratarlos, se acuerda por escrito antes.',
  },
  {
    pregunta: '¿Cuánto tiempo me quita a mí?',
    respuesta:
      'Poco. La primera fase arranca con una sesión de diagnóstico de 15 minutos y después solo necesito tus aprobaciones por WhatsApp. El trabajo pesado lo hago yo.',
  },
  {
    pregunta: '¿Atienden en mi ciudad?',
    respuesta:
      'Sí. Trabajo 100% en remoto con profesionales y centros de toda Venezuela. La coordinación es por WhatsApp y videollamada, y todo lo que implemento es digital. Mi número de WhatsApp es internacional (+57), así que te atiendo igual desde cualquier ciudad.',
  },
  {
    pregunta: '¿Cuánto tiempo toma implementar?',
    respuesta:
      'Depende de la fase. La primera (presencia y confianza) puede estar lista en 2-3 semanas. La automatización, en 3-4 semanas más.',
  },
  {
    pregunta: '¿Necesito saber de tecnología?',
    respuesta:
      'No. Yo me encargo de todo. Tú solo apruebas y sigues atendiendo a tus pacientes.',
  },
  {
    pregunta: '¿Qué inversión requiere?',
    respuesta:
      'Las 3 plazas fundadoras arrancan con la primera fase sin costo. Para seguir, cada fase se cotiza y la apruebas antes de que empiece: nunca hay cargos que no hayas autorizado. En el diagnóstico te digo qué haría primero y cuánto cuesta.',
  },
  {
    pregunta: '¿Y si ya tengo página web?',
    respuesta:
      'Mejor. La revisamos en el diagnóstico: a veces no hace falta rehacerla, solo ordenar lo que ya tienes (velocidad, mensaje, citas y contacto). Si conviene rehacerla, te lo digo con razones.',
  },
  {
    pregunta: '¿Esto reemplaza a mi personal?',
    respuesta:
      'No. Lo libera de tareas repetitivas para que se enfoque en lo que sí requiere trato humano. Y si trabajas solo, te quita a ti esas tareas de encima.',
  },
];

/**
 * Oferta de captación: 3 plazas fundadoras que se documentan como caso de éxito.
 *
 * OJO: aquí están los términos comerciales que se publican. Si cambias el
 * alcance de la prueba (por ejemplo, el proyecto completo en vez de la primera
 * fase), edita `intro`, `incluye` y `despues` para que digan lo mismo.
 */
export const oferta = {
  etiqueta: 'Programa fundador',
  titulo: '3 plazas fundadoras',
  teaser: 'Entras como caso de éxito: la primera fase no te cuesta nada.',
  intro:
    'Busco 3 profesionales o centros de salud en Venezuela para entrar como caso de éxito. Las 3 plazas arrancan con la primera fase sin costo.',
  incluye: [
    'Primera fase sin costo: presencia y confianza (Google Business, identidad y web).',
    'Trabajo directo conmigo, sin intermediarios ni agencias de por medio.',
    'Plan por fases con prioridades claras desde el primer día.',
  ],
  despues:
    'Cuando termina la primera fase decidimos juntos qué sigue. Cada fase siguiente se cotiza y la apruebas antes de empezar: no hay cargos que no hayas autorizado.',
  contrapartida:
    'A cambio te pido dos cosas: que me dejes documentar el antes y el después con datos reales (sin tocar datos de pacientes) y que, si el resultado te convence, me des un testimonio.',
  cta: 'Quiero una de las 3 plazas',
};

/** Se muestra en la sección de plazas mientras no haya prueba social real. */
export const sinPrueba =
  'Aquí no vas a encontrar testimonios inventados. Los casos fundadores están en curso y, cuando cierren, vas a ver sus resultados con datos reales.';

/**
 * Bloque «Quién está detrás». Todo sale de `cv.ts`: no hay nada que no se pueda
 * sostener en una conversación.
 */
export const sobreMi = {
  eyebrow: 'Quién está detrás',
  titulo: 'No empiezo de cero en salud.',
  destacado: 'Ya dirigí el marketing digital de una clínica dental en Venezuela.',
  intro:
    'Soy Oswaldo González Lucena, arquitecto de ecosistemas digitales. Entre 2018 y 2020 llevé el marketing digital de M&M Odontoclínica: SEO, campañas, redes y web. Ahí aprendí cómo decide un paciente y qué le quita el sueño a quien lleva un consultorio.',
  cuerpo:
    'Después escalé esa disciplina a más de 600 proyectos web como Senior Project Manager en España y a la arquitectura de productos tecnológicos como CTO en EE.UU. Ahora aplico todo ese oficio al sector salud venezolano, con un método por fases que no depende de que sepas de tecnología.',
  hitos: [
    '2018–2020 · Director de Marketing Digital en M&M Odontoclínica (Venezuela).',
    '+600 proyectos web entregados (España, EE.UU. y Venezuela).',
    'CTO de una empresa tecnológica en California, EE.UU.',
    'Licenciado en Informática (UBV) y certificado en Inbound Marketing (HubSpot).',
  ],
  principios: [
    'Si algo no lo necesitas, te lo digo.',
    'Si no se puede medir, no te lo vendo.',
    'Cada decisión queda documentada y en tus manos.',
  ],
};

/* ---------------------------------------------------------------------------
 * PRUEBA SOCIAL: pendiente de datos reales.
 *
 * No se rellena con nombres ni citas inventadas. En cuanto tengas los datos,
 * escribe aquí los objetos y la sección aparecerá sola (y el aviso de
 * `sinPrueba` desaparece).
 *
 * Testimonio (de otro sector, transferible):
 *   testimonio = {
 *     cita: 'Trabajar con Oswaldo fue un antes y un después. No solo me hizo la
 *            web, me ordenó todo el ecosistema digital. Su método por fases es
 *            claro y sin vueltas.',
 *     autor: 'Nombre y apellido',
 *     cargo: 'Dueño de [negocio], [sector]',
 *   };
 *
 * Caso de análisis (anonimizado, con permiso del cliente):
 *   caso = {
 *     especialidad: 'Odontología',
 *     ciudad: 'Caracas',
 *     situacion: 'Perfil de Google incompleto, sin recordatorios de citas y
 *                 redes sociales sin estrategia.',
 *     proyeccion: 'Con los ajustes propuestos, proyectamos recuperar 10-12
 *                  citas mensuales solo con automatización de WhatsApp.',
 *   };
 * ------------------------------------------------------------------------- */

export interface TestimonioSalud {
  cita: string;
  autor: string;
  cargo: string;
}

export interface CasoSalud {
  especialidad: string;
  ciudad: string;
  situacion: string;
  proyeccion: string;
}

export const testimonio: TestimonioSalud | null = null;
export const caso: CasoSalud | null = null;
