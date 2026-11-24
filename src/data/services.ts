import { servicesPart1, type ServiceCategory, type ServiceItem } from './servicesPart1';
import { servicesPart2 } from './servicesPart2';

export type { ServiceCategory, ServiceItem, ServiceFaq, WorkflowStep } from './servicesPart1';

export const ALL_SERVICES: ServiceItem[] = [...servicesPart1, ...servicesPart2];

export const SERVICE_CATEGORIES: {
  id: 'all' | ServiceCategory;
  labelEn: string;
  labelAr: string;
}[] = [
  { id: 'all', labelEn: 'All Services (18)', labelAr: 'جميع الخدمات (18)' },
  { id: 'engineering', labelEn: 'Software & Platforms', labelAr: 'البرمجيات والمنصات' },
  { id: 'infrastructure', labelEn: 'Infrastructure, Cloud & Security', labelAr: 'البنية التحتية والسحابة والأمان' },
  { id: 'intelligence', labelEn: 'AI, Data & Transformation', labelAr: 'الذكاء الاصطناعي والبيانات والتحول' },
  { id: 'growth', labelEn: 'Commerce, Growth & Training', labelAr: 'التجارة الإلكترونية والنمو والتدريب' },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export function getCategoryLabel(category: ServiceCategory, lang: 'en' | 'ar'): string {
  const found = SERVICE_CATEGORIES.find((c) => c.id === category);
  if (!found) return '';
  return lang === 'ar' ? found.labelAr : found.labelEn;
}
