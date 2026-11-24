import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ALL_SERVICES } from '../data/services';
import {
  INDUSTRIES,
  PROCESS_STEPS,
  TECH_STACK,
  UI_COPY,
} from '../data/siteData';
import { buildWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { ConsoleBracesSvg, ConsoleOfficialLogo } from '../components/ConsoleEmblem';
import { WhatsAppIcon } from '../components/Icons';
import { ServiceCard } from '../components/ServiceCard';

export function HomePage() {
  const { lang, navigate } = useApp();
  const t = UI_COPY[lang];
  const DirArrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  const whatsappUrl = buildWhatsAppUrl(getGeneralWhatsAppMessage(lang));

  // Showcase 6 representative services on home across all 4 categories, with direct link to all 18
  const featuredServices = [
    ALL_SERVICES[0], // 01 Software Development
    ALL_SERVICES[1], // 02 Web Development
    ALL_SERVICES[2], // 03 Mobile App Development
    ALL_SERVICES[5], // 06 Cloud Computing
    ALL_SERVICES[6], // 07 Cybersecurity
    ALL_SERVICES[9], // 10 Artificial Intelligence
  ];

  return (
    <div className="bg-black text-white">
      {/* 1. CLEAN CENTERED HERO SECTION */}
      <section className="relative flex items-center justify-center border-b border-white/15 bg-black">
        <div className="relative max-w-[1000px] mx-auto w-full px-4 sm:px-6 lg:px-10 pt-8 pb-20 lg:pt-12 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center space-y-6"
          >
            {/* Centered Official Console Symbol & Logo */}
            <div className="w-full flex justify-center">
              <ConsoleOfficialLogo className="w-full max-w-[280px] sm:max-w-[320px] h-auto" />
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              {t.hero.headline}
            </h1>

            <p className="text-lg sm:text-xl text-[#F7F7F7] font-medium leading-relaxed max-w-2xl">
              {t.hero.supporting}
            </p>

            <p className="text-sm sm:text-base text-[#888888] leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={() => navigate('/quote')}
                className="h-12 px-7 bg-white text-black text-xs sm:text-sm font-bold tracking-wide hover:bg-[#E5E5E5] transition-colors cursor-pointer whitespace-nowrap"
              >
                {t.hero.primaryCta}
              </button>

              <button
                type="button"
                onClick={() => navigate('/services')}
                className="h-12 px-7 bg-black text-white border border-white/35 text-xs sm:text-sm font-semibold tracking-wide hover:border-white hover:bg-[#111111] transition-colors cursor-pointer whitespace-nowrap"
              >
                {t.hero.secondaryCta}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-5 bg-[#0A0A0A] text-white border border-white/20 text-xs sm:text-sm font-medium hover:border-white transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{t.hero.whatsappCta}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW (LEADING TO ALL 18) */}
      <section className="py-20 lg:py-24 border-b border-white/12 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {t.home.servicesTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
                {t.home.servicesSubtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate('/services')}
              className="h-11 px-5 border border-white/30 bg-black text-xs sm:text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 whitespace-nowrap self-start md:self-auto cursor-pointer"
            >
              <span>{t.home.viewAllServices}</span>
              <DirArrow className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((srv) => (
              <ServiceCard key={srv.slug} service={srv} />
            ))}
          </div>

          {/* Quick Directory Index of All 18 Services */}
          <div className="mt-12 border border-white/12 bg-black p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                {lang === 'ar'
                  ? 'الفهرس الكامل للخدمات (01 – 18)'
                  : 'Complete 18-Service Engineering Index'}
              </span>
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/services');
                }}
                className="text-xs text-[#C7C7C7] hover:text-white underline underline-offset-4"
              >
                {t.home.viewAllServices}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {ALL_SERVICES.map((srv) => (
                <a
                  key={srv.slug}
                  href={`/services/${srv.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/services/${srv.slug}`);
                  }}
                  className="py-2 border-b border-white/5 hover:border-white/30 flex items-center justify-between gap-3 group transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono-tech text-xs text-[#888888] group-hover:text-white">
                      {srv.number}
                    </span>
                    <span className="text-sm text-[#C7C7C7] group-hover:text-white truncate">
                      {lang === 'ar' ? srv.titleAr : srv.titleEn}
                    </span>
                  </div>
                  <DirArrow className="w-3.5 h-3.5 text-[#888888] group-hover:text-white shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT CONSOLE PHILOSOPHY */}
      <section className="py-20 lg:py-24 border-b border-white/12 bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs text-[#888888] uppercase tracking-wider">
                <ConsoleBracesSvg className="w-4 h-4 text-white" />
                <span>Console</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t.home.aboutTitle}
              </h2>
              <p className="text-base text-[#C7C7C7] leading-relaxed max-w-xl">
                {t.home.aboutSubtitle}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/about')}
                  className="h-11 px-6 border border-white/30 bg-black text-xs sm:text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.home.learnMoreAbout}</span>
                  <DirArrow className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(lang === 'ar'
                ? [
                    { title: 'الدقة الهندسية', desc: 'بناء أنظمة منظمة بمعمارية واضحة وشيفرة قابلة للصيانة.' },
                    { title: 'الابتكار العملي', desc: 'توظيف التكنولوجيا الحديثة لحل تحديات الأعمال الفعلية.' },
                    { title: 'الموثوقية والأمان', desc: 'معايير حماية مدروسة واختبارات جودة صارمة قبل الإطلاق.' },
                    { title: 'الشفافية الكاملة', desc: 'تواصل صريح ونطاق عمل محدد دون وعود مبالغ فيها.' },
                  ]
                : [
                    { title: 'Precision', desc: 'Clean, modular architectures engineered for long-term maintainability.' },
                    { title: 'Innovation', desc: 'Practical adoption of modern systems where they deliver real value.' },
                    { title: 'Reliability & Security', desc: 'Disciplined QA testing and defense-in-depth data safeguards.' },
                    { title: 'Transparency', desc: 'Honest scoping, milestone visibility, and realistic technical commitments.' },
                  ]
              ).map((val, idx) => (
                <div
                  key={val.title}
                  className="border border-white/12 bg-[#0A0A0A] p-6 space-y-2.5"
                >
                  <div className="font-mono-tech text-xs text-[#888888]">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#888888] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS (01 - 07) */}
      <section className="py-20 lg:py-24 border-b border-white/12 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                {t.home.processTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#888888]">
                {t.home.processSubtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/process')}
              className="h-11 px-5 border border-white/30 bg-black text-xs sm:text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 whitespace-nowrap self-start md:self-auto cursor-pointer"
            >
              <span>{t.home.viewFullProcess}</span>
              <DirArrow className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 border-t border-l border-white/15">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="border-r border-b border-white/15 bg-black p-5 flex flex-col justify-between gap-4 hover:bg-[#0B0B0B] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-xs text-white font-semibold">
                      {step.number}
                    </span>
                    <span className="h-[1px] flex-1 mx-3 bg-white/15" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-white tracking-wide">
                    {lang === 'ar' ? step.titleAr : step.titleEn}
                  </h3>
                  <p className="text-xs text-[#888888] leading-relaxed">
                    {lang === 'ar' ? step.subtitleAr : step.subtitleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES & TECHNOLOGY STACK SUMMARY */}
      <section className="py-20 lg:py-24 border-b border-white/12 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Industries */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {t.home.industriesTitle}
              </h2>
              <p className="text-sm text-[#888888]">{t.home.industriesSubtitle}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => navigate('/industries')}
                  className="p-3.5 border border-white/12 bg-black hover:border-white/40 transition-colors text-start flex items-center justify-between gap-2 cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-medium text-[#F7F7F7] truncate">
                    {lang === 'ar' ? ind.nameAr : ind.nameEn}
                  </span>
                  <span className="font-mono-tech text-[11px] text-[#888888]">
                    {ind.number}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => navigate('/industries')}
              className="text-xs font-semibold text-white hover:underline underline-offset-4 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t.home.viewAllIndustries}</span>
              <DirArrow className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tech Stack */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {t.home.techTitle}
              </h2>
              <p className="text-sm text-[#888888]">{t.home.techSubtitle}</p>
            </div>

            <div className="space-y-3">
              {TECH_STACK.map((group) => (
                <div
                  key={group.id}
                  className="p-4 border border-white/12 bg-black space-y-2"
                >
                  <div className="text-xs font-semibold text-white">
                    {lang === 'ar' ? group.titleAr : group.titleEn}
                  </div>
                  <div className="text-xs text-[#888888] leading-relaxed">
                    {group.items.map((item) => item.name).join(' · ')}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => navigate('/technology')}
              className="text-xs font-semibold text-white hover:underline underline-offset-4 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t.home.viewFullStack}</span>
              <DirArrow className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. FINAL CONVERSION BAND */}
      <section className="py-20 lg:py-24 bg-black architectural-grid-fine">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="border border-white/20 bg-black p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                {t.home.ctaTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#C7C7C7] leading-relaxed">
                {t.home.ctaDesc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <button
                type="button"
                onClick={() => navigate('/quote')}
                className="h-12 px-7 bg-white text-black text-xs sm:text-sm font-bold hover:bg-[#E5E5E5] transition-colors cursor-pointer whitespace-nowrap"
              >
                {t.home.ctaButton}
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 border border-white/30 bg-[#0A0A0A] text-white text-xs sm:text-sm font-semibold hover:border-white hover:bg-[#151515] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{t.home.ctaWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
