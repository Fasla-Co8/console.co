import React from 'react';
import { useApp } from '../context/AppContext';
import { ConsoleBracesSvg, ConsoleOfficialLogo } from '../components/ConsoleEmblem';
import { WhatsAppIcon } from '../components/Icons';
import { buildWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';

export function AboutPage() {
  const { lang, navigate } = useApp();
  const whatsappUrl = buildWhatsAppUrl(getGeneralWhatsAppMessage(lang));

  const content =
    lang === 'ar'
      ? {
          kicker: 'عن شركة Console',
          headline: 'دقة متناهية في كل سطر برمجي.',
          intro:
            'تركز Console على تحويل الأفكار ومتطلبات الأعمال إلى أنظمة رقمية مصممة بعناية ودقة هندسية عالية، بعيداً عن الحلول العشوائية أو القوالب المكررة.',
          whoTitle: 'من نحن',
          whoText:
            'Console هي شركة تطوير برمجيات وتكنولوجيا معلومات متخصصة في بناء التطبيقات والمنصات الرقمية والبنى التحتية السحابية والأمن السيبراني وحلول التحول الرقمي. نعمل كشريك هندسي يجمع بين التفكير التحليلي والتنفيذ المنظم لتقديم برمجيات يعتمد عليها.',
          visionTitle: 'رؤيتنا',
          visionText:
            'أن نكون نموذجاً مهنياً موثوقاً في هندسة البرمجيات والتكنولوجيا، يُعرف بوضوح الحلول، ومتانة الشيفرة، والالتزام بالمعايير العالمية.',
          missionTitle: 'رسالتنا',
          missionText:
            'تمكين المؤسسات والأعمال عبر تصميم وبناء أنظمة رقمية ذكية ومستقرة تحل تحديات تشغيلية حقيقية وتواكب التطور التقني بثبات.',
          valuesTitle: 'قيمنا الأساسية',
          values: [
            { num: '01', title: 'الدقة', desc: 'اهتمام صارم بالتفاصيل في الهيكلة البرمجية والواجهات واختبارات الجودة.' },
            { num: '02', title: 'الابتكار', desc: 'تبني أساليب وتقنيات حديثة حيث تضيف كفاءة وقيمة فعلية للمشروع.' },
            { num: '03', title: 'الموثوقية', desc: 'أنظمة مستقرة موثقة ومبنية لتعمل بثبات في بيئات التشغيل الحقيقية.' },
            { num: '04', title: 'الشفافية', desc: 'تقديرات واقعية وتواصل صريح في كل مرحلة دون مبالغات أو وعود غير قابلة للتحقق.' },
            { num: '05', title: 'الأمان', desc: 'تطبيق ممارسات حماية البيانات والتحقق وضبط الصلاحيات من بداية التصميم.' },
            { num: '06', title: 'التحسين المستمر', desc: 'مراجعة دائمة للأداء وجودة الشيفرة وتجربة المستخدم بعد الإطلاق.' },
          ],
          philosophyTitle: 'فلسفتنا الهندسية',
          philosophyPoints: [
            'وضوح المعمارية أولاً: نحدد حدود النظام ونموذج البيانات وعقود الـ API قبل بدء التنفيذ.',
            'شيفرة مقروءة وقابلة للصيانة: نكتب برمجيات واضحة يستطيع أي فريق هندسي متمرس تطويرها مستقبلاً.',
            'تجنب التعقيد غير المبرر: نختار أبسط بنية تلبي متطلبات الأداء والتوسع والأمان.',
            'الالتزام بالصدق التقني: نميز بوضوح بين الخدمات الجاهزة والحلول التي تتطلب دراسة جدوى.',
          ],
          whyTitle: 'لماذا تختار Console؟',
          whyPoints: [
            'تغطية متكاملة عبر 18 خدمة تقنية وبرمجية تحت سقف هندسي واحد.',
            'تصميم وتطوير يدعم اللغتين العربية والإنجليزية ومعايير العرض العالمية.',
            'التزام حقيقي بجودة الأداء وإتاحة الوصول وتأمين البيانات.',
            'تواصل مباشر وسريع مع الفريق عبر قنوات واضحة مثل واتساب الرسمي.',
          ],
          ctaQuote: 'اطلب استشارة أو عرض مشروع',
          ctaWa: 'تواصل عبر واتساب',
        }
      : {
          kicker: 'About Console',
          headline: 'PRECISION IN EVERY LINE OF CODE.',
          intro:
            'Console focuses on transforming complex ideas and business requirements into carefully engineered, reliable, and maintainable digital solutions.',
          whoTitle: 'Who We Are',
          whoText:
            'Console is a software engineering and technology company delivering custom software, web and mobile applications, cloud infrastructure, cybersecurity assessments, data analytics, and digital transformation consulting. We approach every engagement with architectural discipline and engineering accountability.',
          visionTitle: 'Our Vision',
          visionText:
            'To stand as an international benchmark for disciplined software craftsmanship—defined by architectural clarity, technical integrity, and dependable digital products.',
          missionTitle: 'Our Mission',
          missionText:
            'To solve concrete operational challenges for organizations and growing ventures by engineering secure, scalable, and thoughtfully designed software systems.',
          valuesTitle: 'Our Core Values',
          values: [
            { num: '01', title: 'Precision', desc: 'Deliberate attention to system boundaries, clean code, and interface alignment.' },
            { num: '02', title: 'Innovation', desc: 'Applying modern architectures and intelligent workflows where they create real utility.' },
            { num: '03', title: 'Reliability', desc: 'Building tested, well-documented software engineered for real-world production.' },
            { num: '04', title: 'Transparency', desc: 'Honest technical scoping, realistic timelines, and clear communication throughout.' },
            { num: '05', title: 'Security', desc: 'Embedding access control, validation, and data protection from the ground up.' },
            { num: '06', title: 'Continuous Improvement', desc: 'Iterating on performance, maintainability, and usability across the product lifecycle.' },
          ],
          philosophyTitle: 'Our Engineering Philosophy',
          philosophyPoints: [
            'Architecture before implementation: data models, security boundaries, and API contracts are defined upfront.',
            'Maintainable, legible codebases: systems are written cleanly so future engineering teams can extend them with confidence.',
            'Pragmatic stack selection: we select proven technologies suited to the workload rather than chasing short-lived hype.',
            'Technical honesty: we distinguish production-ready capabilities from R&D workflows requiring upfront feasibility validation.',
          ],
          whyTitle: 'Why Choose Console',
          whyPoints: [
            'Comprehensive scope spanning 18 specialized software, IT, cloud, security, and digital capabilities.',
            'Native bilingual engineering supporting international LTR and Arabic RTL digital experiences.',
            'Strict focus on performance, clean visual structure, and responsible security engineering.',
            'Direct, responsive communication from initial discovery through post-launch maintenance.',
          ],
          ctaQuote: 'Start a Project Discussion',
          ctaWa: 'Chat on WhatsApp',
        };

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <section className="py-20 border-b border-white/15 bg-[#050505] architectural-grid">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs text-[#C7C7C7] uppercase tracking-wider">
                <ConsoleBracesSvg className="w-4 h-4 text-white" glow />
                <span>{content.kicker}</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                {content.headline}
              </h1>
              <p className="text-base sm:text-lg text-[#C7C7C7] leading-relaxed max-w-2xl">
                {content.intro}
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-2">
                <ConsoleOfficialLogo className="w-full max-w-[260px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are / Vision / Mission */}
      <section className="py-20 border-b border-white/12 bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border border-white/15 bg-[#0A0A0A] p-8 space-y-4">
            <h2 className="font-display text-2xl font-bold text-white">{content.whoTitle}</h2>
            <p className="text-sm text-[#C7C7C7] leading-relaxed">{content.whoText}</p>
          </div>
          <div className="border border-white/15 bg-[#0A0A0A] p-8 space-y-4">
            <h2 className="font-display text-2xl font-bold text-white">{content.visionTitle}</h2>
            <p className="text-sm text-[#C7C7C7] leading-relaxed">{content.visionText}</p>
          </div>
          <div className="border border-white/15 bg-[#0A0A0A] p-8 space-y-4">
            <h2 className="font-display text-2xl font-bold text-white">{content.missionTitle}</h2>
            <p className="text-sm text-[#C7C7C7] leading-relaxed">{content.missionText}</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 border-b border-white/12 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-display text-3xl font-bold text-white mb-10">
            {content.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.values.map((v) => (
              <div key={v.num} className="border border-white/12 bg-black p-7 space-y-3">
                <div className="font-mono-tech text-xs text-[#888888]">{v.num}</div>
                <h3 className="font-display text-xl font-bold text-white">{v.title}</h3>
                <p className="text-sm text-[#C7C7C7] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Why Choose Console */}
      <section className="py-20 bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="border border-white/15 bg-[#0A0A0A] p-8 space-y-6">
            <h2 className="font-display text-2xl font-bold text-white">
              {content.philosophyTitle}
            </h2>
            <ul className="space-y-4">
              {content.philosophyPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#C7C7C7] leading-relaxed">
                  <span className="font-mono-tech text-xs text-white mt-1">0{i + 1}</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/15 bg-[#0A0A0A] p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-white">
                {content.whyTitle}
              </h2>
              <ul className="space-y-4">
                {content.whyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#C7C7C7] leading-relaxed">
                    <span className="font-mono-tech text-xs text-white mt-1">{'{}'}</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate('/quote')}
                className="h-11 px-6 bg-white text-black text-xs font-bold hover:bg-[#E5E5E5] transition-colors cursor-pointer"
              >
                {content.ctaQuote}
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 border border-white/25 bg-black text-white text-xs font-semibold hover:border-white transition-colors inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{content.ctaWa}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
