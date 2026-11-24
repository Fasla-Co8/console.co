import React from 'react';
import { useApp } from '../context/AppContext';
import { PROCESS_STEPS } from '../data/siteData';
import { buildWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { ConsoleBracesSvg } from '../components/ConsoleEmblem';
import { WhatsAppIcon } from '../components/Icons';

export function ProcessPage() {
  const { lang, navigate } = useApp();
  const waUrl = buildWhatsAppUrl(getGeneralWhatsAppMessage(lang));

  return (
    <div className="bg-black text-white">
      <section className="py-16 lg:py-20 border-b border-white/15 bg-[#050505] architectural-grid">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs text-[#C7C7C7] uppercase tracking-wider">
            <ConsoleBracesSvg className="w-4 h-4 text-white" glow />
            <span>{lang === 'ar' ? 'منهجية العمل في Console' : 'Our Process'}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            {lang === 'ar'
              ? 'سبع مراحل هندسية من الفكرة حتى الدعم المستمر'
              : 'Seven Disciplined Stages from Discovery to Support'}
          </h1>
          <p className="text-base text-[#C7C7C7] max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'ننفذ كل مشروع عبر تسلسل هندسي واضح يضمن جودة المعمارية، واستقرار الشيفرة، وشفافية التسليم في كل مرحلة.'
              : 'Every engagement follows a clear, documented lifecycle designed to prevent scope ambiguity, enforce engineering standards, and support reliable launches.'}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative">
            {PROCESS_STEPS.map((step, index) => {
              const outputs = lang === 'ar' ? step.outputsAr : step.outputsEn;
              const isLast = index === PROCESS_STEPS.length - 1;
              return (
                <div key={step.number} className="relative flex gap-6 sm:gap-10 pb-12 last:pb-0">
                  {/* Thin white connecting line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 border border-white/35 bg-[#0A0A0A] flex items-center justify-center font-mono-tech text-sm font-bold text-white">
                      {step.number}
                    </div>
                    {!isLast && <div className="w-[1px] flex-1 bg-white/20 mt-3" />}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 border border-white/12 bg-[#0A0A0A] p-6 sm:p-8 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h2 className="font-display text-2xl font-bold text-white">
                        {step.number} — {lang === 'ar' ? step.titleAr : step.titleEn}
                      </h2>
                    </div>
                    <p className="text-base font-medium text-[#F7F7F7]">
                      {lang === 'ar' ? step.subtitleAr : step.subtitleEn}
                    </p>
                    <p className="text-sm text-[#888888] leading-relaxed">
                      {lang === 'ar' ? step.descAr : step.descEn}
                    </p>
                    <div className="pt-3 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#C7C7C7]">
                      {outputs.map((out) => (
                        <span key={out}>· {out}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 border border-white/20 bg-[#050505] p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <h3 className="font-display text-xl font-bold text-white">
                {lang === 'ar' ? 'ابدأ المرحلة الأولى: الاستكشاف' : 'Begin Phase 01: Discovery'}
              </h3>
              <p className="text-sm text-[#888888]">
                {lang === 'ar'
                  ? 'شاركنا متطلبات مشروعك لنرسم معاً المعمارية والخطوات المناسبة.'
                  : 'Share your objectives so we can scope the architecture and engineering roadmap.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={() => navigate('/quote')}
                className="h-11 px-6 bg-white text-black text-xs font-bold cursor-pointer"
              >
                {lang === 'ar' ? 'اطلب عرض مشروع' : 'Start Your Project'}
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 border border-white/25 bg-black text-white text-xs font-semibold inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
