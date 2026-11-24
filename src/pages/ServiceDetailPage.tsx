import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getCategoryLabel, getServiceBySlug, type ServiceItem } from '../data/services';
import { UI_COPY } from '../data/siteData';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { ConsoleBracesSvg } from '../components/ConsoleEmblem';
import { WhatsAppIcon } from '../components/Icons';

export function ServiceDetailPage({ slug }: { slug: string }) {
  const { lang, navigate } = useApp();
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const BackArrow = lang === 'ar' ? ArrowRight : ArrowLeft;
  const NextArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  if (!service) {
    return (
      <div className="min-h-[70vh] bg-black text-white flex items-center justify-center px-4">
        <div className="border border-white/15 bg-[#0A0A0A] p-10 max-w-md w-full text-center space-y-5">
          <ConsoleBracesSvg className="w-10 h-10 text-white mx-auto" />
          <h1 className="font-display text-2xl font-bold">
            {lang === 'ar' ? 'الخدمة غير موجودة' : 'Service Not Found'}
          </h1>
          <button
            type="button"
            onClick={() => navigate('/services')}
            className="h-11 px-6 bg-white text-black text-xs font-semibold cursor-pointer"
          >
            {UI_COPY[lang].common.backToServices}
          </button>
        </div>
      </div>
    );
  }

  const title = lang === 'ar' ? service.titleAr : service.titleEn;
  const heroHeadline = lang === 'ar' ? service.heroHeadlineAr : service.heroHeadlineEn;
  const intro = lang === 'ar' ? service.introAr : service.introEn;
  const problems = lang === 'ar' ? service.problemsAr : service.problemsEn;
  const solutions = lang === 'ar' ? service.solutionsAr : service.solutionsEn;
  const features = lang === 'ar' ? service.featuresAr : service.featuresEn;
  const benefits = lang === 'ar' ? service.benefitsAr : service.benefitsEn;
  const workflow = lang === 'ar' ? service.workflowAr : service.workflowEn;
  const deliverables = lang === 'ar' ? service.deliverablesAr : service.deliverablesEn;
  const industries = lang === 'ar' ? service.industriesAr : service.industriesEn;
  const faqs = lang === 'ar' ? service.faqsAr : service.faqsEn;
  const waMsg = lang === 'ar' ? service.whatsappMsgAr : service.whatsappMsgEn;
  const waUrl = buildWhatsAppUrl(waMsg);

  const relatedServices: ServiceItem[] = service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((item): item is ServiceItem => Boolean(item));

  const labels =
    lang === 'ar'
      ? {
          serviceLabel: 'خدمة رقم',
          problems: 'التحديات التي تعالجها هذه الخدمة',
          solutions: 'كيف تقدم Console الحل',
          features: 'المميزات والقدرات التقنية',
          technologies: 'التقنيات والأدوات المستخدمة',
          benefits: 'الفوائد العملية للأعمال',
          workflow: 'مسار تنفيذ المشروع',
          deliverables: 'المخرجات المتوقعة',
          industries: 'القطاعات المناسبة لهذه الخدمة',
          related: 'خدمات ذات صلة',
          faqs: 'أسئلة شائعة حول الخدمة',
          ctaTitle: `ناقش متطلبات "${title}" مع Console`,
          ctaDesc:
            'ابدأ محادثة مباشرة عبر واتساب برسالة جاهزة مخصصة لهذه الخدمة، أو اطلب عرض مشروع تفصيلي.',
          waBtn: 'استفسر عن هذه الخدمة عبر واتساب',
          quoteBtn: 'اطلب عرض سعر لهذه الخدمة',
        }
      : {
          serviceLabel: 'SERVICE',
          problems: 'Problems This Service Solves',
          solutions: 'Our Solutions',
          features: 'Features & Capabilities',
          technologies: 'Technologies & Tools',
          benefits: 'Benefits for Businesses',
          workflow: 'Project Workflow',
          deliverables: 'Expected Deliverables',
          industries: 'Suitable Industries',
          related: 'Related Services',
          faqs: 'Frequently Asked Questions',
          ctaTitle: `Discuss ${title} With Console`,
          ctaDesc:
            'Launch a direct WhatsApp conversation pre-filled with this service, or submit a structured project brief.',
          waBtn: 'Inquire About This Service on WhatsApp',
          quoteBtn: 'Request a Quote for This Service',
        };

  return (
    <div className="bg-black text-white">
      {/* 1, 2, 3. HERO: Title, Hero Headline, Detailed Introduction */}
      <section className="py-16 lg:py-24 border-b border-white/15 bg-[#050505] architectural-grid">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 text-xs text-[#C7C7C7] hover:text-white transition-colors cursor-pointer"
            >
              <BackArrow className="w-4 h-4" />
              <span>{UI_COPY[lang].common.backToServices}</span>
            </button>

            <div className="text-xs text-[#888888] font-mono-tech">
              {labels.serviceLabel} {service.number} · {getCategoryLabel(service.category, lang)}
            </div>
          </div>

          <div className="max-w-4xl space-y-5">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {title}
            </h1>
            <p className="font-display text-xl sm:text-2xl text-[#F7F7F7] font-semibold leading-snug">
              {heroHeadline}
            </p>
            <p className="text-base text-[#C7C7C7] leading-relaxed">{intro}</p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-7 bg-white text-black text-xs sm:text-sm font-bold hover:bg-[#E5E5E5] transition-colors inline-flex items-center gap-2.5 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{labels.waBtn}</span>
            </a>

            <button
              type="button"
              onClick={() => navigate(`/quote?service=${encodeURIComponent(title)}`)}
              className="h-12 px-6 border border-white/30 bg-black text-white text-xs sm:text-sm font-semibold hover:border-white hover:bg-[#111111] transition-colors cursor-pointer whitespace-nowrap"
            >
              {labels.quoteBtn}
            </button>
          </div>
        </div>
      </section>

      {/* 4 & 5. PROBLEMS SOLVED & OUR SOLUTIONS */}
      <section className="py-16 lg:py-20 border-b border-white/12 bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border border-white/12 bg-[#0A0A0A] p-8 space-y-6">
            <h2 className="font-display text-2xl font-bold text-white">{labels.problems}</h2>
            <ul className="space-y-4">
              {problems.map((prob, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#C7C7C7] leading-relaxed">
                  <span className="font-mono-tech text-xs text-[#888888] mt-0.5">0{i + 1}</span>
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/20 bg-[#0A0A0A] p-8 space-y-6">
            <h2 className="font-display text-2xl font-bold text-white">{labels.solutions}</h2>
            <ul className="space-y-4">
              {solutions.map((sol, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#F7F7F7] leading-relaxed">
                  <span className="font-mono-tech text-xs text-white mt-0.5">{'{}'}</span>
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6 & 7. FEATURES & CAPABILITIES + TECHNOLOGIES & TOOLS */}
      <section className="py-16 lg:py-20 border-b border-white/12 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {labels.features}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="border border-white/12 bg-black px-5 py-4 flex items-center gap-3 text-sm text-[#F7F7F7]"
                >
                  <span className="font-mono-tech text-xs text-[#888888]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-display text-2xl font-bold text-white">{labels.technologies}</h2>
            <div className="border border-white/12 bg-black p-6 space-y-3">
              {service.technologies.map((tech) => (
                <div
                  key={tech}
                  className="py-2.5 border-b border-white/10 last:border-b-0 font-mono-tech text-xs sm:text-sm text-[#C7C7C7]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8 & 9. BUSINESS BENEFITS + PROJECT WORKFLOW */}
      <section className="py-16 lg:py-20 border-b border-white/12 bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
              {labels.benefits}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((ben, i) => (
                <div key={i} className="border border-white/12 bg-[#0A0A0A] p-6 space-y-3">
                  <div className="font-mono-tech text-xs text-[#888888]">0{i + 1}</div>
                  <p className="text-sm text-[#F7F7F7] leading-relaxed">{ben}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
              {labels.workflow}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/15">
              {workflow.map((w) => (
                <div
                  key={w.step}
                  className="border-r border-b border-white/15 bg-[#050505] p-6 space-y-3"
                >
                  <div className="font-mono-tech text-xs text-white font-semibold">{w.step}</div>
                  <h3 className="font-display text-lg font-bold text-white">{w.title}</h3>
                  <p className="text-sm text-[#888888] leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10 & 11. DELIVERABLES + SUITABLE INDUSTRIES */}
      <section className="py-16 lg:py-20 border-b border-white/12 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="border border-white/12 bg-black p-8 space-y-5">
            <h2 className="font-display text-2xl font-bold text-white">{labels.deliverables}</h2>
            <ul className="space-y-3.5">
              {deliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#C7C7C7]">
                  <span className="font-mono-tech text-xs text-white mt-0.5">—</span>
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/12 bg-black p-8 space-y-5">
            <h2 className="font-display text-2xl font-bold text-white">{labels.industries}</h2>
            <div className="grid grid-cols-2 gap-3">
              {industries.map((ind) => (
                <div
                  key={ind}
                  className="border border-white/12 bg-[#0A0A0A] px-4 py-3 text-sm text-[#F7F7F7]"
                >
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12 & 13. RELATED SERVICES + FAQ */}
      <section className="py-16 lg:py-20 border-b border-white/12 bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {labels.faqs}
            </h2>
            <div className="border-t border-white/15 divide-y divide-white/15">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-4">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-start py-2 cursor-pointer"
                    >
                      <span className="font-display text-base font-semibold text-white">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-white shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#888888] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="pt-2 pb-1 text-sm text-[#C7C7C7] leading-relaxed">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display text-2xl font-bold text-white">{labels.related}</h2>
            <div className="space-y-3">
              {relatedServices.map((rel) => (
                <button
                  key={rel.slug}
                  type="button"
                  onClick={() => navigate(`/services/${rel.slug}`)}
                  className="w-full border border-white/15 bg-[#0A0A0A] hover:border-white/40 p-5 text-start flex items-center justify-between gap-4 transition-colors cursor-pointer"
                >
                  <div>
                    <div className="font-mono-tech text-xs text-[#888888]">{rel.number}</div>
                    <div className="font-display text-base font-bold text-white mt-1">
                      {lang === 'ar' ? rel.titleAr : rel.titleEn}
                    </div>
                  </div>
                  <NextArrow className="w-4 h-4 text-white shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. DEDICATED SERVICE WHATSAPP CTA */}
      <section className="py-16 lg:py-20 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="border border-white/25 bg-black p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {labels.ctaTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#C7C7C7]">{labels.ctaDesc}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-7 bg-white text-black text-xs sm:text-sm font-bold hover:bg-[#E5E5E5] transition-colors inline-flex items-center gap-2.5 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{labels.waBtn}</span>
              </a>

              <button
                type="button"
                onClick={() => navigate(`/quote?service=${encodeURIComponent(title)}`)}
                className="h-12 px-6 border border-white/30 bg-black text-white text-xs sm:text-sm font-semibold hover:border-white transition-colors cursor-pointer whitespace-nowrap"
              >
                {labels.quoteBtn}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
