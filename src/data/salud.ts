/**
 * Contenido de la landing satélite /salud: arquitectura digital para todo el
 * sector salud en Venezuela (médicos, odontólogos, psicólogos, nutricionistas,
 * fisioterapeutas, clínicas y consultorios).
 */

/** A quién va dirigida la página. Se muestra en el hero para que nadie se
 *  descarte por pensar que esto es solo para clínicas. */
export const publico =
  'Médicos, odontólogos, psicólogos, nutricionistas, fisioterapeutas, clínicas y consultorios';

export const confianza = [
  'Arquitecto Digital con experiencia en múltiples sectores',
  'Metodología probada, adaptada al sector salud',
  'Especializándome en profesionales de la salud en Venezuela',
  '3 plazas de prueba como caso de éxito',
];

export const problemas = [
  'Tus pacientes te buscan en Google, pero lo que encuentran no transmite la calidad de tu consulta.',
  'Pierdes entre 8 y 15 citas al mes porque no hay recordatorios automáticos.',
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
      'Automatizo agendamiento, recordatorios y respuestas frecuentes por WhatsApp. Recuperas entre 8 y 15 citas al mes que hoy se pierden.',
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
    texto: 'Tocas el botón, me cuentas tu especialidad y en qué ciudad estás.',
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
    pregunta: '¿Han trabajado antes con profesionales de la salud?',
    respuesta:
      'He trabajado en arquitectura digital para otros sectores, y ahora estoy especializándome en el sector salud. Mi metodología está probada y la estoy adaptando a las particularidades de médicos, odontólogos, psicólogos, clínicas y consultorios en Venezuela. Por eso estoy seleccionando 3 plazas de prueba como caso de éxito.',
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
    pregunta: '¿Funciona para mi especialidad?',
    respuesta:
      'Sí. El proceso se adapta a cualquier especialidad y a cualquier tamaño: desde una consulta individual hasta una clínica con varios especialistas.',
  },
  {
    pregunta: '¿Qué inversión requiere?',
    respuesta:
      'Te lo explico en el diagnóstico, porque depende de tu punto de partida. Empezamos por lo que más impacto tiene y menos cuesta.',
  },
  {
    pregunta: '¿Esto reemplaza a mi personal?',
    respuesta:
      'No. Lo libera de tareas repetitivas para que se enfoque en lo que sí requiere trato humano. Y si trabajas solo, te quita a ti esas tareas de encima.',
  },
];

/**
 * Oferta de captación: 3 plazas de prueba que se documentan como caso de éxito.
 *
 * OJO: aquí están los términos comerciales que se publican. Si cambias el
 * alcance de la prueba (por ejemplo, el proyecto completo en vez de la primera
 * fase), edita `intro` e `incluye` para que digan lo mismo.
 */
export const oferta = {
  etiqueta: 'Programa de casos de éxito',
  titulo: '3 plazas de prueba',
  intro:
    'Estoy seleccionando 3 profesionales o centros de salud en Venezuela para trabajar como caso de éxito. Las 3 plazas entran en prueba: la primera fase no te cuesta nada.',
  incluye: [
    'Primera fase sin coste: presencia y confianza (Google Business, identidad y web).',
    'Trabajo directo conmigo, sin intermediarios ni agencias de por medio.',
    'Plan por fases con prioridades claras desde el primer día.',
  ],
  contrapartida:
    'A cambio te pido dos cosas: que me dejes documentar el antes y el después con datos reales, y que si el resultado te convence, me des un testimonio.',
  cta: 'Quiero una de las 3 plazas',
};

/* ---------------------------------------------------------------------------
 * PRUEBA SOCIAL: pendiente de datos reales.
 *
 * No se rellena con nombres ni citas inventadas. En cuanto tengas los datos,
 * escribe aquí los objetos y la sección aparecerá sola.
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
