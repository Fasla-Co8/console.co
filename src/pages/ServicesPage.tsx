import React, { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import {
  ALL_SERVICES,
  SERVICE_CATEGORIES,
  type ServiceCategory,
} from '../data/services';
import { ConsoleBracesSvg } from '../components/ConsoleEmblem';
import { ServiceCard } from '../components/ServiceCard';

export function ServicesPage() {
  const { lang, currentSearch } = useApp();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | ServiceCategory>('all');

  useEffect(() => {
    const params = new URLSearchParams(currentSearch);
    const cat = params.get('cat');
    if (
      cat === 'engineering' ||
      cat === 'infrastructure' ||
      cat === 'intelligence' ||
      cat === 'growth'
    ) {
      setActiveCategory(cat);
    } else if (!cat) {
      setActiveCategory('all');
    }
  }, [currentSearch]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_SERVICES.filter((srv) => {
      const catMatch = activeCategory === 'all' || srv.category === activeCategory;
      if (!catMatch) return false;
      if (!q) return true;
      const haystack = [
        srv.number,
        srv.titleEn,
        srv.titleAr,
        srv.shortDescEn,
        srv.shortDescAr,
        ...srv.featuresEn,
        ...srv.featuresAr,
        ...srv.technologies,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, activeCategory]);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="py-16 lg:py-20 border-b border-white/15 bg-[#050505] architectural-grid">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs text-[#C7C7C7] uppercase tracking-wider">
            <ConsoleBracesSvg className="w-4 h-4 text-white" glow />
            <span>
              {lang === 'ar'
                ? 'الدليل الكامل للخدمات التقنية (18 خدمة)'
                : 'Complete Engineering & IT Catalog (18 Services)'}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            {lang === 'ar'
              ? 'جميع خدمات Console الهندسية والتقنية'
              : 'All Software & Technology Services'}
          </h1>

          <p className="text-base text-[#C7C7C7] max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'استكشف منظومة خدماتنا الثماني عشرة. كل خدمة مزودة بصفحة تفصيلية تشمل الحلول والمميزات والتقنيات وخطوات العمل وزر تواصل مباشر عبر واتساب.'
              : 'Explore all 18 specialized capabilities delivered by Console. Each service includes a dedicated detail page with deliverables, workflow, technologies, FAQs, and a direct WhatsApp inquiry link.'}
          </p>

          {/* Search & Category Filter Controls */}
          <div className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="relative w-full lg:max-w-md">
              <Search
                className={`w-4 h-4 text-[#888888] absolute top-1/2 -translate-y-1/2 ${
                  lang === 'ar' ? 'right-4' : 'left-4'
                }`}
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  lang === 'ar'
                    ? 'ابحث عن خدمة، تقنية، أو قدرة (مثل: ذكاء اصطناعي، سحابة، أمان)...'
                    : 'Search services, technologies, or capabilities...'
                }
                aria-label={lang === 'ar' ? 'ابحث في الخدمات' : 'Search services'}
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

            <div className="flex flex-wrap items-center gap-2">
              {SERVICE_CATEGORIES.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`h-10 px-4 text-xs font-semibold border transition-colors whitespace-nowrap cursor-pointer ${
                      active
                        ? 'bg-white text-black border-white'
                        : 'bg-black text-[#C7C7C7] border-white/20 hover:border-white hover:text-white'
                    }`}
                  >
                    {lang === 'ar' ? cat.labelAr : cat.labelEn}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8 text-xs text-[#888888] font-mono-tech">
            <span>
              {lang === 'ar'
                ? `عرض ${filtered.length} من أصل ${ALL_SERVICES.length} خدمة`
                : `SHOWING ${filtered.length} OF ${ALL_SERVICES.length} SERVICES`}
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((srv) => (
                <ServiceCard key={srv.slug} service={srv} />
              ))}
            </div>
          ) : (
            <div className="border border-white/15 bg-[#0A0A0A] p-12 text-center space-y-4">
              <ConsoleBracesSvg className="w-10 h-10 text-white/60 mx-auto" />
              <h2 className="font-display text-xl font-bold text-white">
                {lang === 'ar'
                  ? 'لم يتم العثور على خدمات مطابقة لبحثك'
                  : 'No services matched your search'}
              </h2>
              <p className="text-sm text-[#888888]">
                {lang === 'ar'
                  ? 'جرّب مسح نص البحث أو اختيار تصنيف آخر.'
                  : 'Try clearing your search query or switching category filters.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setActiveCategory('all');
                }}
                className="h-10 px-5 bg-white text-black text-xs font-semibold cursor-pointer"
              >
                {lang === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
