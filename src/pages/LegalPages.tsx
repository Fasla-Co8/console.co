import React from 'react';
import { useApp } from '../context/AppContext';
import { ConsoleBracesSvg } from '../components/ConsoleEmblem';

export function PrivacyPage() {
  const { lang } = useApp();

  const sections =
    lang === 'ar'
      ? [
          {
            title: '1. المعلومات التي يتم مشاركتها عند التواصل',
            body: 'عند تعبئة نموذج التواصل أو طلب عرض المشروع على موقع Console، يقوم المتصفح بتنسيق البيانات التي تدخلها (الاسم، البريد الإلكتروني، رقم الهاتف، اسم الشركة، وتفاصيل المشروع) وإعداد رابط مباشر لإرسالها عبر محادثة واتساب الرسمية (201201847164). لا يقوم الموقع بتخزين بيانات النماذج في قاعدة بيانات خادمة خفية.',
          },
          {
            title: '2. التخزين المحلي وتفضيل اللغة',
            body: 'يستخدم الموقع التخزين المحلي للمتصفح (localStorage) لحفظ تفضيل اللغة المختارة (العربية أو الإنجليزية) فقط لضمان استمرار تجربتك عبر الصفحات وبعد تحديث الصفحة.',
          },
          {
            title: '3. روابط الطرف الثالث (واتساب)',
            body: 'عند اختيارك فتح محادثة واتساب عبر أي زر في الموقع، تخضع الرسالة المتبادلة لسياسة الخصوصية الخاصة بخدمة واتساب ولإدارة التواصل المباشر مع فريق Console لتقييم متطلبات مشروعك.',
          },
          {
            title: '4. استخدام البيانات وحمايتها',
            body: 'نستخدم المعلومات التي تشاركها معنا في محادثات العمل حصراً لغرض مناقشة نطاق المشروع، وإعداد المقترحات الفنية، وتقديم الخدمات المتفق عليها، ولا نبيع بيانات العملاء أو نشاركها مع أطراف غير ذات صلة.',
          },
        ]
      : [
          {
            title: '1. Information Shared Through Inquiries',
            body: 'When you complete the Contact or Request a Quote form on Console, your browser validates your entries locally (name, email, phone number, company name, and project description) and formats them into a structured WhatsApp message directed to Console’s official WhatsApp number (201201847164). This website does not claim to transmit or store form submissions in a background database.',
          },
          {
            title: '2. Local Storage Preferences',
            body: 'Console uses browser localStorage strictly to remember your selected display language (English or Arabic) across page navigation and browser refreshes.',
          },
          {
            title: '3. Third-Party Messaging Links',
            body: 'Clicking any WhatsApp link opens a conversation on WhatsApp (wa.me/201201847164), where messages are governed by WhatsApp’s privacy framework and handled directly by the Console team for project scoping.',
          },
          {
            title: '4. Confidentiality & Purpose',
            body: 'Information you share with Console during technical consultations is used solely to evaluate project feasibility, prepare architectural proposals, and deliver agreed services. We do not sell client contact data.',
          },
        ];

  return (
    <div className="bg-black text-white">
      <section className="py-16 border-b border-white/15 bg-[#050505]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs text-[#C7C7C7] uppercase tracking-wider">
            <ConsoleBracesSvg className="w-4 h-4 text-white" />
            <span>{lang === 'ar' ? 'الوثائق القانونية' : 'Legal'}</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold text-white">
            {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
          {sections.map((sec) => (
            <div key={sec.title} className="border border-white/12 bg-[#0A0A0A] p-7 space-y-3">
              <h2 className="font-display text-lg font-bold text-white">{sec.title}</h2>
              <p className="text-sm text-[#C7C7C7] leading-relaxed">{sec.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function TermsPage() {
  const { lang } = useApp();

  const sections =
    lang === 'ar'
      ? [
          {
            title: '1. نطاق الخدمات والمقترحات',
            body: 'تُعرَض الخدمات الواردة في موقع Console لأغراض التعريف بالقدرات الهندسية والتقنية. يتم تحديد النطاق النهائي، والتكلفة، والجدول الزمني، واتفاقية مستوى الدعم في عرض فني ومالي مكتوب ومتفق عليه لكل مشروع على حدة.',
          },
          {
            title: '2. النماذج التوضيحية ودراسات الحالة',
            body: 'تمثل دراسات الحالة المعروضة في قسم الأعمال معماريات مرجعية وتوضيحية تشرح منهجية Console الهندسية، ولا تشير إلى عملاء محددين أو أرباح أو نسب أداء مضمونة.',
          },
          {
            title: '3. دراسات الجدوى للحلول المتخصصة',
            body: 'تخضع بعض التقنيات المتقدمة مثل نماذج التعلم الآلي والرؤية الحاسوبية المخصصة لتقييم جدوى تقنية وبيانية مسبقة قبل الالتزام بالتنفيذ.',
          },
          {
            title: '4. الملكية الفكرية',
            body: 'جميع العلامات والهوية البصرية الخاصة بـ Console (بما في ذلك رمز القوسين { } وشعار Smart Innovation, Precise Coding) مملوكة للشركة، بينما تُحدد حقوق ملكية الشيفرات المطورة حسب الطلب ضمن عقد كل مشروع.',
          },
        ]
      : [
          {
            title: '1. Scope of Services & Proposals',
            body: 'Service descriptions on the Console website outline our engineering, IT, and consulting capabilities. Final deliverables, pricing, milestones, and maintenance terms are governed by a dedicated written project proposal and agreement.',
          },
          {
            title: '2. Demonstration Portfolio Content',
            body: 'Project architectures and case studies presented in the Portfolio section are labeled demonstration blueprints illustrating Console’s engineering methodology and do not represent fabricated client testimonials or guaranteed ROI figures.',
          },
          {
            title: '3. Feasibility-Dependent Capabilities',
            body: 'Specialized technical initiatives—such as custom machine learning training, NLP, or computer vision systems—are subject to an upfront project-specific feasibility and data readiness review.',
          },
          {
            title: '4. Intellectual Property',
            body: 'The Console name, curly-braces emblem { }, tagline, and website assets belong to Console. Ownership and licensing terms for custom-engineered deliverables are defined explicitly in each client contract.',
          },
        ];

  return (
    <div className="bg-black text-white">
      <section className="py-16 border-b border-white/15 bg-[#050505]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs text-[#C7C7C7] uppercase tracking-wider">
            <ConsoleBracesSvg className="w-4 h-4 text-white" />
            <span>{lang === 'ar' ? 'الوثائق القانونية' : 'Legal'}</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold text-white">
            {lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
          {sections.map((sec) => (
            <div key={sec.title} className="border border-white/12 bg-[#0A0A0A] p-7 space-y-3">
              <h2 className="font-display text-lg font-bold text-white">{sec.title}</h2>
              <p className="text-sm text-[#C7C7C7] leading-relaxed">{sec.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
