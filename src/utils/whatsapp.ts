export const WHATSAPP_DISPLAY_NUMBER = '01201847164';
export const WHATSAPP_INTL_NUMBER = '201201847164';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_INTL_NUMBER}`;

export type Language = 'en' | 'ar';

export function buildWhatsAppUrl(message?: string): string {
  if (!message || !message.trim()) {
    return WHATSAPP_BASE_URL;
  }
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message.trim())}`;
}

export function getGeneralWhatsAppMessage(lang: Language): string {
  if (lang === 'ar') {
    return 'مرحباً فريق Console، أود مناقشة متطلبات مشروعي والتعرف على خدماتكم التقنية.';
  }
  return 'Hello Console Team, I would like to discuss my project requirements and explore your software and technology services.';
}

export function getPortfolioWhatsAppMessage(projectTitle: string, lang: Language): string {
  if (lang === 'ar') {
    return `مرحباً فريق Console، اطلعت على نموذج مشروع "${projectTitle}" وأرغب في مناقشة تنفيذ حل مماثل لعملي.`;
  }
  return `Hello Console Team, I reviewed the "${projectTitle}" demonstration architecture and would like to discuss building a similar solution.`;
}

export interface ProjectInquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
}

export function buildStructuredProjectMessage(
  payload: ProjectInquiryPayload,
  lang: Language
): string {
  if (lang === 'ar') {
    return [
      'مرحباً فريق Console، أرغب في طلب عرض لمشروع جديد بالتفاصيل التالية:',
      `• الاسم الكامل: ${payload.fullName}`,
      `• البريد الإلكتروني: ${payload.email}`,
      `• رقم الهاتف: ${payload.phone}`,
      `• الشركة / الجهة: ${payload.company || 'غير محدد'}`,
      `• الخدمة المطلوبة: ${payload.service}`,
      `• الميزانية التقديرية: ${payload.budget || 'غير محدد'}`,
      `• الجدول الزمني المتوقع: ${payload.timeline || 'غير محدد'}`,
      `• وصف المشروع:\n${payload.description}`,
    ].join('\n');
  }

  return [
    'Hello Console Team, I would like to request a project consultation with the following details:',
    `- Full Name: ${payload.fullName}`,
    `- Email: ${payload.email}`,
    `- Phone Number: ${payload.phone}`,
    `- Company Name: ${payload.company || 'Not specified'}`,
    `- Service Required: ${payload.service}`,
    `- Project Budget: ${payload.budget || 'Not specified'}`,
    `- Project Timeline: ${payload.timeline || 'Not specified'}`,
    `- Project Description:\n${payload.description}`,
  ].join('\n');
}
