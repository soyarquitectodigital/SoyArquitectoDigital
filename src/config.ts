// Agenda real (Calendly). El CTA de auditoría y el de diagnóstico apuntan aquí.
// primary_color hace que Calendly use el azul de la marca.
export const calendarAuditUrl =
  'https://calendly.com/soyarquitectodigital/auditoria-de-ecosistema-digital?primary_color=2563eb';
const calendarUrl: string = calendarAuditUrl;

export const site = {
  url: 'https://soyarquitectodigital.info',
  name: 'Soy Arquitecto Digital',
  studio: 'Olah · Arquitectura Digital',
  person: 'Oswaldo González Lucena',
  role: 'Arquitecto de Ecosistemas Digitales',
  email: 'ayuda@soyarquitectodigital.info',
  linkedin: 'https://www.linkedin.com/in/soyarquitectodigital',
  location: 'Venezuela · Remoto',
  calendarUrl,
} as const;

// WhatsApp real (Colombia). Formato wa.me: código de país + número, sin "+" ni espacios.
export const whatsappNumber = '573246454048';

export function whatsapp(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappDefault = whatsapp(
  'Hola Oswaldo, vi tu landing y quiero contarte qué se está atascando en mi negocio.',
);

export interface Social {
  label: string;
  handle: string;
  url: string;
  icon: 'linkedin' | 'tiktok' | 'youtube' | 'instagram';
}

export const socialHandle = '@soyarquitectodigital';

export const socials: Social[] = [
  {
    label: 'LinkedIn',
    handle: socialHandle,
    url: 'https://www.linkedin.com/in/soyarquitectodigital',
    icon: 'linkedin',
  },
  {
    label: 'TikTok',
    handle: socialHandle,
    url: 'https://www.tiktok.com/@soyarquitectodigital',
    icon: 'tiktok',
  },
  {
    label: 'YouTube',
    handle: socialHandle,
    url: 'https://www.youtube.com/@soyarquitectodigital',
    icon: 'youtube',
  },
  {
    label: 'Instagram',
    handle: socialHandle,
    url: 'https://www.instagram.com/soyarquitectodigital',
    icon: 'instagram',
  },
];

export function bookingUrl(message: string): string {
  return site.calendarUrl || whatsapp(message);
}

/**
 * Destino de los datos del formulario de descarga del informe.
 * Sin APIs, sin claves y sin configuración:
 * - 'simulate': modo simulación. El visitante ve el flujo normal (datos enviados + PDF)
 *   pero no se abre ningún canal; el lead se guarda en el navegador y se puede exportar
 *   desde el panel de desarrollo de la herramienta. Usar solo mientras se decide el
 *   canal real y el sitio no esté publicado.
 * - 'whatsapp': al enviar, se abre WhatsApp con todos los datos ya escritos.
 * - 'email': abre el cliente de correo del visitante con los datos escritos a site.email.
 * - 'local': no se envía nada; los datos quedan solo en el navegador del visitante.
 */
export const leadChannel: 'simulate' | 'whatsapp' | 'email' | 'local' = 'simulate';

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  businessType?: string | null;
  percent?: number | null;
  bandLabel?: string | null;
  layers?: string;
}

export function leadMessage(lead: LeadPayload): string {
  const lines = [
    'Nuevo diagnóstico de ecosistema digital',
    '',
    `Nombre: ${lead.name}`,
    `Email: ${lead.email}`,
    `Teléfono: ${lead.phone}`,
  ];
  if (lead.businessType) lines.push(`Tipo de negocio: ${lead.businessType}`);
  if (typeof lead.percent === 'number') {
    lines.push(`Resultado: ${lead.percent}%${lead.bandLabel ? ` — ${lead.bandLabel}` : ''}`);
  }
  if (lead.layers) lines.push('', `Por capa: ${lead.layers}`);
  lines.push('', 'Quiero revisar los resultados y las prioridades.');
  return lines.join('\n');
}

export function emailLeadUrl(lead: LeadPayload): string {
  const subject = `Diagnóstico de ecosistema digital — ${lead.name}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(leadMessage(lead))}`;
}
