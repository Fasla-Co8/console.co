import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import {
  WHATSAPP_DISPLAY_NUMBER,
  buildWhatsAppUrl,
  getGeneralWhatsAppMessage,
} from '../utils/whatsapp';
import { ConsoleBracesSvg } from '../components/ConsoleEmblem';
import { WhatsAppIcon } from '../components/Icons';
import { ProjectInquiryForm } from '../components/ProjectInquiryForm';

function DirectChannelsCard() {
  const { lang, navigate } = useApp();
  const waUrl = buildWhatsAppUrl(getGeneralWhatsAppMessage(lang));

  return (
    <aside className="space-y-6">
      <div className="border border-white/20 bg-[#0A0A0A] p-7 space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            {lang === 'ar' ? 'التواصل المباشر عبر واتساب' : 'Official WhatsApp Channel'}
          </span>
          <ConsoleBracesSvg className="w-5 h-5 text-white" />
        </div>

        <p className="text-sm text-[#C7C7C7] leading-relaxed">
          {lang === 'ar'
            ? 'للمناقشات السريعة حول المتطلبات أو طلبات الاستشارة، يمكنك مراسلتنا مباشرة عبر رقم واتساب الرسمي.'
            : 'For immediate project scoping, technical consultations, or service inquiries, connect directly with Console on WhatsApp.'}
        </p>

        <div className="p-4 bg-black border border-white/15">
          <div className="text-[11px] text-[#888888] mb-1">
            {lang === 'ar' ? 'الرقم الرسمي' : 'Official Number'}
          </div>
          <div className="font-mono-tech text-xl font-bold text-white tabular-nums">
            {WHATSAPP_DISPLAY_NUMBER}
          </div>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-12 px-5 bg-white text-black text-xs font-bold hover:bg-[#E5E5E5] transition-colors inline-flex items-center justify-center gap-2"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>{lang === 'ar' ? 'بدء محادثة واتساب الآن' : 'Open WhatsApp Conversation'}</span>
        </a>
      </div>

      <div className="border border-white/12 bg-[#050505] p-7 space-y-4">
        <h3 className="font-display text-base font-bold text-white">
          {lang === 'ar' ? 'ما الذي يساعدنا على الرد بدقة؟' : 'Helpful Details to Include'}
        </h3>
        <ul className="space-y-2.5 text-xs text-[#C7C7C7] leading-relaxed">
          <li>
            {lang === 'ar'
              ? '— نوع النظام أو الخدمة المطلوبة (ويب، هاتف، سحابة، أمان، إلخ).'
              : '— Core platform or service scope (web, mobile, custom software, cloud, security).'}
          </li>
          <li>
            {lang === 'ar'
              ? '— الأنظمة الحالية التي تحتاج إلى ربط أو تحديث.'
              : '— Any existing tools, ERPs, or payment gateways requiring integration.'}
          </li>
          <li>
            {lang === 'ar'
              ? '— اللغة المطلوبة (العربية / الإنجليزية) والجمهور المستهدف.'
              : '— Target audience, language needs (EN/AR), and priority launch milestones.'}
          </li>
        </ul>

        <div className="pt-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => navigate('/faq')}
            className="text-xs font-semibold text-white hover:underline underline-offset-4 cursor-pointer"
          >
            {lang === 'ar' ? 'تصفح الأسئلة الشائعة ←' : 'Read Frequently Asked Questions →'}
          </button>
        </div>
      </div>
    </aside>
  );
}

export function ContactPage() {
  const { lang } = useApp();

  return (
    <div className="bg-black text-white">
      <section className="py-16 lg:py-20 border-b border-white/15 bg-[#050505] architectural-grid">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs text-[#C7C7C7] uppercase tracking-wider">
            <ConsoleBracesSvg className="w-4 h-4 text-white" glow />
            <span>{lang === 'ar' ? 'تواصل معنا' : 'Contact Console'}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            {lang === 'ar'
              ? 'تحدث مع فريق الهندسة والاستشارات'
              : 'Connect With Our Engineering Team'}
          </h1>
          <p className="text-base text-[#C7C7C7] max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'أرسل استفسارك عبر النموذج التالي ليتم تنسيقه وإرساله مباشرة عبر واتساب، أو تواصل معنا فوراً على الرقم الرسمي.'
              : 'Complete the structured inquiry form below to format and send your request directly via Console’s official WhatsApp channel.'}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 border border-white/15 bg-[#0A0A0A] p-6 sm:p-10">
            <ProjectInquiryForm />
          </div>
          <div className="lg:col-span-4">
            <DirectChannelsCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export function QuotePage() {
  const { lang, currentSearch } = useApp();

  const preselectedService = useMemo(() => {
    const params = new URLSearchParams(currentSearch);
    return params.get('service') || undefined;
  }, [currentSearch]);

  return (
    <div className="bg-black text-white">
      <section className="py-16 lg:py-20 border-b border-white/15 bg-[#050505] architectural-grid">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs text-[#C7C7C7] uppercase tracking-wider">
            <ConsoleBracesSvg className="w-4 h-4 text-white" glow />
            <span>{lang === 'ar' ? 'طلب عرض مشروع' : 'Request a Project / Get a Quote'}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            {lang === 'ar'
              ? 'ابدأ مشروعك بخطوة واضحة ومنظمة'
              : 'Scope Your Project With Precision'}
          </h1>
          <p className="text-base text-[#C7C7C7] max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'اختر الخدمة المطلوبة من بين خدماتنا الـ 18 وحدد الميزانية والجدول الزمني المتوقع ليتم تجهيز ملخص احترافي وإرساله مباشرة عبر واتساب.'
              : 'Select from all 18 Console services, specify your timeline and project goals, and dispatch a clean, structured brief directly to our WhatsApp consultation desk.'}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 border border-white/15 bg-[#0A0A0A] p-6 sm:p-10">
            <ProjectInquiryForm preselectedService={preselectedService} />
          </div>
          <div className="lg:col-span-4">
            <DirectChannelsCard />
          </div>
        </div>
      </section>
    </div>
  );
}
