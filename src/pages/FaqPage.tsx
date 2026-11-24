import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Search, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GLOBAL_FAQS, type FaqItem } from '../data/siteData';
import { buildWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { ConsoleBracesSvg } from '../components/ConsoleEmblem';
import { WhatsAppIcon } from '../components/Icons';

export function FaqPage() {
  const { lang, navigate } = useApp();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'all' | FaqItem['category']>('all');
  const [openId, setOpenId] = useState<string | null>(GLOBAL_FAQS[0].id);

  const categories: { id: 'all' | FaqItem['category']; en: string; ar: string }[] = [
    { id: 'all', en: 'All Topics', ar: 'جميع المواضيع' },
    { id: 'general', en: 'Projects & Pricing', ar: 'المشاريع والتسعير' },
    { id: 'engineering', en: 'Engineering & AI', ar: 'البرمجة والذكاء الاصطناعي' },
    { id: 'infrastructure', en: 'Cloud & Security', ar: 'السحابة والأمان' },
    { id: 'support', en: 'Support & Maintenance', ar: 'الدعم والصيانة' },
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GLOBAL_FAQS.filter((item) => {
      if (category !== 'all' && item.category !== category) return false;
      if (!q) return true;
      return (
        item.qEn.toLowerCase().includes(q) ||
        item.aEn.toLowerCase().includes(q) ||
        item.qAr.toLowerCase().includes(q) ||
        item.aAr.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  const waUrl = buildWhatsAppUrl(getGeneralWhatsAppMessage(lang));

  return (
    <div className="bg-black text-white">
      <section className="py-16 lg:py-20 border-b border-white/15 bg-[#050505] architectural-grid">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs text-[#C7C7C7] uppercase tracking-wider">
            <ConsoleBracesSvg className="w-4 h-4 text-white" glow />
            <span>{lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            {lang === 'ar'
              ? 'إجابات واضحة حول العمل مع Console'
              : 'Clear Answers About Working With Console'}
          </h1>
          <p className="text-base text-[#C7C7C7] max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'تصفح الأسئلة المتعلقة ببدء المشاريع وآلية التسعير والتقنيات والسحابة والأمان والدعم الفني.'
              : 'Search or filter questions covering project onboarding, scoping, technologies, mobile apps, cloud infrastructure, cybersecurity, AI integration, and post-launch support.'}
          </p>

          <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:max-w-md">
              <Search
                className={`w-4 h-4 text-[#888888] absolute top-1/2 -translate-y-1/2 ${
                  lang === 'ar' ? 'right-4' : 'left-4'
                }`}
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={lang === 'ar' ? 'ابحث في الأسئلة...' : 'Search FAQ topics...'}
                aria-label={lang === 'ar' ? 'ابحث في الأسئلة' : 'Search FAQ'}
                className={`w-full h-11 bg-black border border-white/20 text-sm text-white placeholder:text-[#666666] focus:border-white focus:outline-none ${
                  lang === 'ar' ? 'pr-11 pl-10' : 'pl-11 pr-10'
                }`}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className={`absolute top-1/2 -translate-y-1/2 text-[#888888] hover:text-white cursor-pointer ${
                    lang === 'ar' ? 'left-3' : 'right-3'
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = category === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCategory(c.id)}
                    className={`h-10 px-4 text-xs font-semibold border transition-colors cursor-pointer ${
                      active
                        ? 'bg-white text-black border-white'
                        : 'bg-black text-[#C7C7C7] border-white/20 hover:border-white hover:text-white'
                    }`}
                  >
                    {lang === 'ar' ? c.ar : c.en}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-black">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          {filtered.length > 0 ? (
            <div className="border-t border-white/15 divide-y divide-white/15">
              {filtered.map((item, idx) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-start py-1 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <span className="font-mono-tech text-xs text-[#888888] mt-1">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="font-display text-lg font-bold text-white">
                          {lang === 'ar' ? item.qAr : item.qEn}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-white shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#888888] shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <p className="pt-3 ps-8 text-sm sm:text-base text-[#C7C7C7] leading-relaxed max-w-3xl">
                        {lang === 'ar' ? item.aAr : item.aEn}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="border border-white/15 bg-[#0A0A0A] p-10 text-center space-y-4">
              <p className="text-base text-white font-semibold">
                {lang === 'ar' ? 'لا توجد نتائج مطابقة لبحثك.' : 'No matching FAQ items found.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setCategory('all');
                }}
                className="h-10 px-5 bg-white text-black text-xs font-semibold cursor-pointer"
              >
                {lang === 'ar' ? 'عرض جميع الأسئلة' : 'Show All Questions'}
              </button>
            </div>
          )}

          <div className="border border-white/20 bg-[#050505] p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <h2 className="font-display text-xl font-bold text-white">
                {lang === 'ar' ? 'هل لديك استفسار خاص بمشروعك؟' : 'Have a Project-Specific Question?'}
              </h2>
              <p className="text-sm text-[#888888]">
                {lang === 'ar'
                  ? 'تواصل معنا مباشرة عبر واتساب أو اطلب جلسة استشارية.'
                  : 'Message our team directly on WhatsApp or request a tailored project consultation.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 bg-white text-black text-xs font-bold inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{lang === 'ar' ? 'تواصل عبر واتساب' : 'Ask on WhatsApp'}</span>
              </a>
              <button
                type="button"
                onClick={() => navigate('/quote')}
                className="h-11 px-5 border border-white/30 bg-black text-white text-xs font-semibold cursor-pointer"
              >
                {lang === 'ar' ? 'اطلب عرض مشروع' : 'Request a Quote'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
