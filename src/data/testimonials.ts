/**
 * Testimonios en video de la landing.
 *
 * Mismo criterio que los casos de estudio: nada inventado. El texto sale de lo
 * que se dice (o se ve) en el propio video, y cada pieza declara duración y
 * procedencia para que se note que es material real, no una edición de agencia.
 *
 * IMPORTANTE: los videos viven en /public/testimonios/ y se reproducen con
 * `preload="none"`: no pesan nada hasta que el visitante pulsa play.
 */

export interface Testimonial {
  id: string;
  /** Etiqueta corta para la cabecera de la tarjeta. */
  label: string;
  /** Duración legible ("39 s"). */
  duration: string;
  /** Titular de la tarjeta: la persona o el sistema. */
  title: string;
  /** Firma pequeña (cargo · empresa · país) cuando aplica. */
  byline?: string;
  /** Cita textual del testimonio (solo si el video la respalda). */
  quote?: string;
  /** Descripción de lo que se ve en el video (demos). */
  description?: string;
  /** Capacidades visibles en la demo. */
  features?: string[];
  /** Ruta del video en /public. */
  video: string;
  /** Póster extraído del propio video. */
  poster: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'wankubb-miguel-godoy',
    label: 'Testimonio en video',
    duration: '39 s',
    title: 'Miguel Godoy',
    byline: 'Fundador · WanKu Bb · Chile',
    quote:
      'Quiero agradecer y recomendar el refresh que hicieron en nuestra página. Estamos muy contentos de trabajar con ellos.',
    video: '/testimonios/wankubb-testimonio.mp4',
    poster: '/testimonios/wankubb-testimonio.jpg',
  },
  {
    id: 'wankubb-whatsapp-demo',
    label: 'Demo del sistema',
    duration: '42 s',
    title: 'Panel de WhatsApp multi-número',
    description:
      'Grabación real del sistema en producción: varios números conectados, respuestas automáticas por palabra clave y modo humano anti-baneo.',
    features: ['Multi-número', 'Respuestas por palabra clave', 'Modo humano anti-baneo'],
    video: '/testimonios/wankubb-whatsapp-demo.mp4',
    poster: '/testimonios/wankubb-whatsapp-demo.jpg',
  },
];
