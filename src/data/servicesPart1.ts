export type ServiceCategory = 'engineering' | 'infrastructure' | 'intelligence' | 'growth';

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceItem {
  number: string;
  slug: string;
  category: ServiceCategory;
  titleEn: string;
  titleAr: string;
  heroHeadlineEn: string;
  heroHeadlineAr: string;
  shortDescEn: string;
  shortDescAr: string;
  introEn: string;
  introAr: string;
  problemsEn: string[];
  problemsAr: string[];
  solutionsEn: string[];
  solutionsAr: string[];
  featuresEn: string[];
  featuresAr: string[];
  technologies: string[];
  benefitsEn: string[];
  benefitsAr: string[];
  workflowEn: WorkflowStep[];
  workflowAr: WorkflowStep[];
  deliverablesEn: string[];
  deliverablesAr: string[];
  industriesEn: string[];
  industriesAr: string[];
  relatedSlugs: string[];
  faqsEn: ServiceFaq[];
  faqsAr: ServiceFaq[];
  whatsappMsgEn: string;
  whatsappMsgAr: string;
}

export const servicesPart1: ServiceItem[] = [
  {
    number: '01',
    slug: 'software-development',
    category: 'engineering',
    titleEn: 'Software Development',
    titleAr: 'تطوير البرمجيات',
    heroHeadlineEn: 'Custom Software Engineered Around Your Exact Operations.',
    heroHeadlineAr: 'برمجيات مخصصة مصممة بدقة لتلائم عمليات أعمالك.',
    shortDescEn:
      'Tailored business systems, enterprise applications, legacy modernization, and resilient API architectures built from requirements analysis to ongoing support.',
    shortDescAr:
      'أنظمة أعمال مخصصة، وتطبيقات مؤسسية، وتحديث للبرمجيات القديمة، وبناء واجهات برمجة تطبيقات متينة من تحليل المتطلبات حتى الدعم المستمر.',
    introEn:
      'Off-the-shelf software rarely fits complex operational workflows without forcing costly workarounds. Console designs and builds bespoke software systems structured around your business rules, security requirements, and long-term growth trajectory—covering everything from initial domain modeling to automated quality assurance and post-launch maintenance.',
    introAr:
      'نادراً ما تتوافق البرمجيات الجاهزة مع سير العمل المعقد دون فرض حلول التفافية مكلفة. تصمم Console وتبني أنظمة برمجية مخصصة تتمحور حول قواعد عملك ومتطلبات الأمان والتوسع المستقبلي، بدءاً من تحليل المتطلبات ونمذجة النطاق وصولاً إلى ضمان الجودة والصيانة المستمرة.',
    problemsEn: [
      'Fragmented spreadsheets and manual processes slowing down daily team coordination.',
      'Rigid off-the-shelf tools that fail to match proprietary business logic and approvals.',
      'Aging legacy systems that are expensive to maintain and incompatible with modern APIs.',
      'Lack of reliable test coverage causing regressions whenever new features are released.',
    ],
    problemsAr: [
      'تشتت البيانات بين الجداول والعمليات اليدوية مما يبطئ تنسيق العمل اليومي.',
      'الأدوات الجاهزة المقيدة التي لا تدعم منطق العمل الخاص وسلاسل الموافقات.',
      'الأنظمة القديمة المكلفة في صيانتها وغير المتوافقة مع الواجهات البرمجية الحديثة.',
      'غياب الاختبارات الآلية مما يسبب أعطالاً متكررة عند إضافة أي ميزة جديدة.',
    ],
    solutionsEn: [
      'Domain-driven software architecture tailored directly to your operational workflows.',
      'Modular business management and internal workflow platforms with strict role permissions.',
      'Phased legacy modernization that preserves historical data while replacing brittle modules.',
      'Clean, well-documented REST and GraphQL APIs backed by automated test suites.',
    ],
    solutionsAr: [
      'هندسة برمجية مبنية على تحليل النطاق الفعلي ومصممة خصيصاً لتدفقات عملك.',
      'أنظمة إدارة أعمال وسير عمل داخلية مع صلاحيات وصول دقيقة لكل دور وظيفي.',
      'تحديث تدريجي للأنظمة القديمة يحافظ على سلامة البيانات أثناء استبدال الوحدات المتهالكة.',
      'واجهات برمجة تطبيقات نظيفة وموثقة مدعومة باختبارات جودة آلية شاملة.',
    ],
    featuresEn: [
      'Custom software development',
      'Business management systems',
      'Enterprise applications',
      'Internal workflow systems',
      'Custom business tools',
      'Software architecture',
      'Legacy software modernization',
      'API development',
      'Software testing and quality assurance',
      'Ongoing maintenance',
    ],
    featuresAr: [
      'تطوير البرمجيات المخصصة',
      'أنظمة إدارة الأعمال',
      'التطبيقات المؤسسية',
      'أنظمة سير العمل الداخلية',
      'أدوات الأعمال المصممة حسب الطلب',
      'تصميم معمارية البرمجيات',
      'تحديث البرمجيات القديمة',
      'تطوير واجهات برمجة التطبيقات (API)',
      'اختبار البرمجيات وضمان الجودة',
      'الصيانة المستمرة والتطوير',
    ],
    technologies: ['TypeScript', 'Node.js', 'Python', '.NET', 'PostgreSQL', 'Docker', 'REST / GraphQL'],
    benefitsEn: [
      'Full ownership of custom workflows without recurring per-seat SaaS limitations.',
      'Higher operational accuracy through automated validations and centralized audit trails.',
      'Maintainable, documented codebase engineered for future team expansion.',
      'Reduced operational friction across departments through unified internal tooling.',
    ],
    benefitsAr: [
      'ملكية كاملة لسير العمل المخصص دون قيود التراخيص المتكررة لكل مستخدم.',
      'دقة تشغيلية أعلى عبر التحقق الآلي وسجلات التدقيق المركزية.',
      'شيفرة برمجية نظيفة وموثقة قابلة للتوسع والصيانة طويلة الأمد.',
      'تقليل التعقيد التشغيلي بين الأقسام عبر أدوات داخلية موحدة.',
    ],
    workflowEn: [
      { step: '01', title: 'Requirements Analysis', desc: 'Map stakeholder workflows, business rules, data models, and security constraints.' },
      { step: '02', title: 'Architecture & Design', desc: 'Define modular system boundaries, database schemas, API contracts, and UI blueprints.' },
      { step: '03', title: 'Iterative Engineering', desc: 'Build core modules in structured milestones with clean, version-controlled code.' },
      { step: '04', title: 'QA, Deployment & Support', desc: 'Execute automated and manual verification, deploy to production, and maintain stability.' },
    ],
    workflowAr: [
      { step: '01', title: 'تحليل المتطلبات', desc: 'حصر تدفقات العمل وقواعد النشاط ونماذج البيانات والقيود الأمنية.' },
      { step: '02', title: 'المعمارية والتصميم', desc: 'تحديد حدود النظام وهيكلة قواعد البيانات وعقود الواجهات البرمجية.' },
      { step: '03', title: 'التطوير المرحلي', desc: 'بناء الوحدات الأساسية عبر مراحل منظمة بشيفرة نظيفة خاضعة للتحكم بالإصدارات.' },
      { step: '04', title: 'الاختبار والإطلاق والدعم', desc: 'تنفيذ اختبارات الجودة الشاملة والإطلاق الإنتاجي وتوفير الصيانة المستمرة.' },
    ],
    deliverablesEn: [
      'System architecture & technical specification documentation',
      'Production-ready source code repository',
      'Automated test suite and QA verification report',
      'API documentation and deployment runbook',
      'Post-launch maintenance and handover plan',
    ],
    deliverablesAr: [
      'وثيقة المعمارية التقنية والمواصفات الفنية للنظام',
      'مستودع الشيفرة المصدرية الجاهزة للإنتاج',
      'حزمة الاختبارات الآلية وتقرير ضمان الجودة',
      'توثيق واجهات البرمجة ودليل التشغيل والنشر',
      'خطة التسليم والصيانة ما بعد الإطلاق',
    ],
    industriesEn: ['Enterprises', 'Finance', 'Logistics', 'Healthcare', 'Manufacturing', 'Professional Services'],
    industriesAr: ['المؤسسات الكبرى', 'المالية', 'اللوجستيات', 'الرعاية الصحية', 'التصنيع', 'الخدمات المهنية'],
    relatedSlugs: ['web-development', 'system-integration', 'database-management'],
    faqsEn: [
      { q: 'How do you handle changing requirements during custom software development?', a: 'We structure projects in clearly defined milestones with transparent change-impact reviews so priorities can evolve without compromising architectural integrity.' },
      { q: 'Can you modernize our existing legacy software without disrupting operations?', a: 'Yes. We assess the current codebase and execute phased migrations or API wrappers so teams can transition smoothly with minimal downtime.' },
    ],
    faqsAr: [
      { q: 'كيف تتعاملون مع تغير المتطلبات أثناء تطوير البرمجيات المخصصة؟', a: 'نقسم المشروع إلى مراحل واضحة مع مراجعة شفافة لأثر أي تعديل بحيث تتطور الأولويات دون الإضرار بمتانة المعمارية.' },
      { q: 'هل يمكن تحديث برمجياتنا القديمة دون إيقاف العمل اليومي؟', a: 'نعم، نقوم بتقييم النظام الحالي وتنفيذ التحديث على مراحل أو عبر طبقات ربط برمجية لضمان انتقال سلس.' },
    ],
    whatsappMsgEn: 'Hello Console Team, I am interested in your Software Development service. I would like to discuss my custom system requirements, architecture, and project scope.',
    whatsappMsgAr: 'مرحباً فريق Console، أنا مهتم بخدمة تطوير البرمجيات المخصصة وأرغب في مناقشة متطلبات نظامنا ونطاق المشروع.',
  },
  {
    number: '02',
    slug: 'web-development',
    category: 'engineering',
    titleEn: 'Web Development',
    titleAr: 'تصميم وتطوير المواقع الإلكترونية',
    heroHeadlineEn: 'Fast, Accessible, Architecturally Sound Web Platforms.',
    heroHeadlineAr: 'منصات وتطبيقات ويب سريعة، متجاوبة، ومبنية بدقة هندسية.',
    shortDescEn:
      'Corporate websites, high-conversion landing pages, full-stack web applications, and Progressive Web Apps engineered for speed, accessibility, and clarity.',
    shortDescAr:
      'مواقع شركات احترافية، صفحات هبوط، تطبيقات ويب متكاملة، وتطبيقات ويب تقدمية مصممة للأداء العالي وتجربة المستخدم الدقيقة.',
    introEn:
      'Your web platform is often the primary interface between your organization and international clients. Console engineers modern corporate sites, interactive web applications, and Progressive Web Apps with clean semantic markup, responsive layouts across every viewport, strict performance budgets, and dependable backend architectures.',
    introAr:
      'يمثل موقعك الإلكتروني الواجهة الأساسية بين مؤسستك والعملاء. تصمم Console وتطور مواقع الشركات الاحترافية وتطبيقات الويب المتكاملة وتطبيقات الويب التقدمية ببنية دلالية نظيفة وتصميم متجاوب وأداء سريع وموثوقية كاملة.',
    problemsEn: [
      'Slow, bloated websites with poor Core Web Vitals and high visitor drop-off.',
      'Broken responsive behavior on mobile devices, tablets, or RTL Arabic interfaces.',
      'Static templates that cannot support custom user portals or interactive workflows.',
      'Hard-to-maintain frontends tightly coupled to fragile backend scripts.',
    ],
    problemsAr: [
      'المواقع البطيئة المثقلة بالإضافات والتي تؤدي إلى مغادرة الزوار وضعف الظهور في البحث.',
      'اختلال العرض على الهواتف الذكية أو عدم دعم اللغتين العربية والإنجليزية بشكل صحيح.',
      'القوالب الجامدة التي تعجز عن دعم بوابات المستخدمين والتطبيقات التفاعلية.',
      'واجهات أمامية صعبة الصيانة ومرتبطة بشكل هش بالخلفية البرمجية.',
    ],
    solutionsEn: [
      'Component-driven frontend engineering using TypeScript, React, Next.js, or Vue.js.',
      'Scalable backend services and secure APIs built for real-world traffic.',
      'Progressive Web App (PWA) capabilities for resilient, app-like browser experiences.',
      'Technical SEO structure, semantic HTML5, accessibility compliance, and ongoing maintenance.',
    ],
    solutionsAr: [
      'تطوير واجهات أمامية معيارية باستخدام TypeScript وReact وNext.js أو Vue.js.',
      'خدمات خلفية قابلة للتوسع وواجهات برمجة آمنة للتعامل مع الزيارات المتنامية.',
      'قدرات تطبيقات الويب التقدمية (PWA) لتجربة استخدام سريعة وسلسة.',
      'تهيئة تقنية لمحركات البحث ومعايير إتاحة الوصول مع صيانة وتحديث مستمر.',
    ],
    featuresEn: [
      'Corporate websites',
      'Landing pages',
      'Custom web applications',
      'Interactive websites',
      'Professional business websites',
      'Frontend development',
      'Backend development',
      'Full-stack development',
      'Progressive Web Apps',
      'Website optimization',
      'Responsive design',
      'Website maintenance',
    ],
    featuresAr: [
      'مواقع الشركات والمؤسسات',
      'صفحات الهبوط التعريفية',
      'تطبيقات الويب المخصصة',
      'المواقع التفاعلية المتقدمة',
      'مواقع الأعمال الاحترافية',
      'تطوير الواجهات الأمامية (Frontend)',
      'تطوير الخلفية البرمجية (Backend)',
      'التطوير المتكامل (Full-Stack)',
      'تطبيقات الويب التقدمية (PWA)',
      'تحسين سرعة وأداء المواقع',
      'التصميم المتجاوب لجميع الشاشات',
      'صيانة وتحديث المواقع',
    ],
    technologies: ['HTML5', 'CSS3', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js', 'Laravel'],
    benefitsEn: [
      'Fast page loads and clean semantic architecture built for search visibility.',
      'Consistent brand authority across desktop, laptop, tablet, and mobile viewports.',
      'Seamless bilingual (English LTR / Arabic RTL) capabilities when required.',
      'Modular codebase ready for new integrations, portals, or commerce features.',
    ],
    benefitsAr: [
      'سرعة تحميل فائقة وبنية دلالية نظيفة تدعم الظهور في محركات البحث.',
      'حضور رقمي متناسق واحترافي على الحواسيب والأجهزة اللوحية والهواتف.',
      'دعم متكامل للغتين العربية (RTL) والإنجليزية (LTR) عند الحاجة.',
      'بنية معيارية جاهزة لإضافة التكاملات أو البوابات أو المتاجر لاحقاً.',
    ],
    workflowEn: [
      { step: '01', title: 'Information Architecture', desc: 'Structure sitemap, user journeys, content hierarchy, and technical requirements.' },
      { step: '02', title: 'UI/UX & Responsive System', desc: 'Design sharp, accessible layouts across desktop and mobile breakpoints.' },
      { step: '03', title: 'Full-Stack Implementation', desc: 'Develop frontend interfaces, backend APIs, and database integrations.' },
      { step: '04', title: 'Optimization & Launch', desc: 'Audit speed, SEO metadata, cross-browser rendering, and deploy cleanly.' },
    ],
    workflowAr: [
      { step: '01', title: 'هندسة المعلومات', desc: 'تخطيط خريطة الموقع ومسارات المستخدمين وهيكلة المحتوى والمتطلبات.' },
      { step: '02', title: 'تصميم الواجهات والتجاوب', desc: 'تصميم واجهات دقيقة ومتوافقة مع جميع أحجام الشاشات.' },
      { step: '03', title: 'التطوير المتكامل', desc: 'برمجة الواجهة الأمامية والخلفية وربط قواعد البيانات.' },
      { step: '04', title: 'التحسين والإطلاق', desc: 'اختبار السرعة والتهيئة لمحركات البحث والتوافق مع المتصفحات قبل الإطلاق.' },
    ],
    deliverablesEn: [
      'Responsive production website or web application',
      'Clean semantic HTML/CSS/TypeScript codebase',
      'Technical SEO and metadata configuration',
      'Performance & cross-browser QA checklist',
      'Hosting deployment and administrative guide',
    ],
    deliverablesAr: [
      'موقع إلكتروني أو تطبيق ويب جاهز للإنتاج متجاوب بالكامل',
      'شيفرة مصدرية نظيفة وفق أحدث معايير الويب',
      'إعدادات التهيئة التقنية لمحركات البحث والبيانات الوصفية',
      'قائمة فحص الأداء والتوافق مع المتصفحات',
      'نشر الموقع على الاستضافة ودليل الإدارة',
    ],
    industriesEn: ['Startups', 'Enterprises', 'Professional Services', 'Media & Entertainment', 'Real Estate', 'Education'],
    industriesAr: ['الشركات الناشئة', 'المؤسسات الكبرى', 'الخدمات المهنية', 'الإعلام والترفيه', 'العقارات', 'التعليم'],
    relatedSlugs: ['software-development', 'ecommerce-solutions', 'web-hosting-servers'],
    faqsEn: [
      { q: 'Do you build custom web applications or only informational websites?', a: 'We build both—from refined corporate websites and landing pages to full-stack web applications with authentication, dashboards, and third-party APIs.' },
      { q: 'Will my website support both English and Arabic properly?', a: 'Yes. We engineer full RTL and LTR layouts with proper typography and mirrored navigation rather than automated visual hacks.' },
    ],
    faqsAr: [
      { q: 'هل تطورون مواقع تعريفية فقط أم تطبيقات ويب متكاملة؟', a: 'نطور الاثنين معاً: من مواقع الشركات الاحترافية وصفحات الهبوط إلى تطبيقات الويب الكاملة بلوحات التحكم وأنظمة الصلاحيات.' },
      { q: 'هل يدعم الموقع اللغتين العربية والإنجليزية بشكل سليم؟', a: 'نعم، نصمم التخطيط بالكامل ليدعم الاتجاهين RTL وLTR بخطوط مناسبة وتنقل متناسق.' },
    ],
    whatsappMsgEn: 'Hello Console Team, I am interested in your Web Development service. I would like to discuss my project requirements, timeline, and scope.',
    whatsappMsgAr: 'مرحباً فريق Console، أنا مهتم بخدمة تصميم وتطوير المواقع الإلكترونية وأود مناقشة متطلبات مشروعي.',
  },
  {
    number: '03',
    slug: 'mobile-app-development',
    category: 'engineering',
    titleEn: 'Mobile App Development',
    titleAr: 'تطوير تطبيقات الهواتف',
    heroHeadlineEn: 'Native & Cross-Platform Mobile Products Built for Daily Use.',
    heroHeadlineAr: 'تطبيقات هواتف أصلية ومتعددة المنصات مصممة للاستخدام اليومي.',
    shortDescEn:
      'Android, iOS, Flutter, and React Native applications featuring refined UI/UX, secure authentication, push notifications, payment integration, and store deployment.',
    shortDescAr:
      'تطبيقات أندرويد وiOS وتطبيقات Flutter وReact Native بواجهات احترافية ونظام مصادقة آمن وإشعارات ودفع إلكتروني ونشر على المتاجر.',
    introEn:
      'Mobile users expect immediate responsiveness, intuitive gestures, and reliable offline or low-connectivity handling. Console delivers Android, iOS, and cross-platform applications engineered with Flutter, React Native, Kotlin, or Swift—complete with backend APIs, secure authentication, push notifications, payment gateways, and store release management.',
    introAr:
      'يتوقع مستخدمو الهواتف استجابة فورية وتجربة استخدام بديهية وموثوقية عالية. تطور Console تطبيقات أندرويد وiOS والتطبيقات متعددة المنصات باستخدام Flutter وReact Native وKotlin وSwift، شاملة التصميم والمصادقة الآمنة والإشعارات والربط مع بوابات الدفع والنشر على المتاجر الرسمية.',
    problemsEn: [
      'Sluggish hybrid apps with jarring navigation and inconsistent native behavior.',
      'Doubled engineering cost when maintaining separate Android and iOS codebases unnecessarily.',
      'Unreliable push notifications, session drops, or incomplete payment gateway flows.',
      'App store submission rejections due to missing privacy, security, or UX guidelines.',
    ],
    problemsAr: [
      'التطبيقات البطيئة ذات الواجهات غير المتناسقة مع تجربة الهاتف الأصلية.',
      'تضاعف تكلفة التطوير عند إدارة شيفرتين منفصلتين دون مبرر تقني.',
      'مشاكل الإشعارات الفورية أو انقطاع الجلسات أو أخطاء بوابات الدفع الإلكتروني.',
      'رفض التطبيقات في متاجر التطبيقات بسبب عدم استيفاء متطلبات الخصوصية والجودة.',
    ],
    solutionsEn: [
      'Cross-platform Flutter and React Native engineering or dedicated Kotlin/Swift native builds.',
      'Mobile-first UI/UX architecture with touch targets and gesture ergonomics.',
      'End-to-end authentication, encrypted token handling, push notifications, and payment flows.',
      'Complete store preparation, submission support, and post-release version maintenance.',
    ],
    solutionsAr: [
      'تطوير متعدد المنصات عبر Flutter وReact Native أو تطوير أصلي عبر Kotlin وSwift.',
      'تصميم تجربة مستخدم مخصصة للهواتف مع مراعاة سهولة اللمس وسلاسة التنقل.',
      'بناء أنظمة المصادقة الآمنة والإشعارات الفورية وتكامل الدفع الإلكتروني.',
      'إعداد حزم النشر للمتاجر الرسمية وتوفير الصيانة والتحديثات المستمرة.',
    ],
    featuresEn: [
      'Android applications',
      'iOS applications',
      'Cross-platform applications',
      'Flutter development',
      'React Native development',
      'Native application development',
      'UI/UX design',
      'Push notifications',
      'Authentication systems',
      'Payment integrations',
      'App deployment',
      'App maintenance',
    ],
    featuresAr: [
      'تطبيقات أندرويد (Android)',
      'تطبيقات آيفون (iOS)',
      'التطبيقات متعددة المنصات',
      'التطوير باستخدام Flutter',
      'التطوير باستخدام React Native',
      'تطوير التطبيقات الأصلية (Native)',
      'تصميم واجهات وتجربة المستخدم (UI/UX)',
      'نظام الإشعارات الفورية',
      'أنظمة المصادقة والتحقق',
      'الربط مع بوابات الدفع',
      'نشر التطبيقات على المتاجر',
      'صيانة وتحديث التطبيقات',
    ],
    technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'TypeScript', 'REST APIs', 'Firebase Cloud Messaging'],
    benefitsEn: [
      'Unified mobile presence across iOS and Android with consistent design precision.',
      'Faster time-to-market through shared cross-platform engineering where suitable.',
      'Reliable transactional flows for authentication, bookings, and in-app payments.',
      'Ongoing OS compatibility updates as Android and iOS versions evolve.',
    ],
    benefitsAr: [
      'حضور موحد على متجري Google Play وApp Store بنفس مستوى الدقة والهوية.',
      'سرعة أكبر في الإطلاق عبر التطوير المشترك للمنصات عندما يلائم المشروع.',
      'موثوقية عالية في تسجيل الدخول والحجوزات وعمليات الدفع داخل التطبيق.',
      'صيانة مستمرة لضمان التوافق مع تحديثات أنظمة التشغيل الجديدة.',
    ],
    workflowEn: [
      { step: '01', title: 'Product & Platform Fit', desc: 'Select native vs cross-platform stack based on performance, hardware, and budget goals.' },
      { step: '02', title: 'Mobile UI/UX Prototyping', desc: 'Design clean screen flows, states, and responsive device layouts.' },
      { step: '03', title: 'App & API Engineering', desc: 'Build mobile client, state management, auth, notifications, and backend endpoints.' },
      { step: '04', title: 'Device QA & Store Release', desc: 'Test across physical screen sizes, prepare store listings, and publish updates.' },
    ],
    workflowAr: [
      { step: '01', title: 'تحديد المنصة والمكدس', desc: 'اختيار التطوير الأصلي أو متعدد المنصات بناءً على متطلبات الأداء والعتاد.' },
      { step: '02', title: 'تصميم الشاشات والتجربة', desc: 'رسم مسارات الاستخدام وتصميم الواجهات لجميع مقاسات الهواتف.' },
      { step: '03', title: 'برمجة التطبيق والربط', desc: 'بناء التطبيق وإدارة الحالة والمصادقة والإشعارات والربط مع الخادم.' },
      { step: '04', title: 'الاختبار والنشر', desc: 'الاختبار على أجهزة حقيقية وتجهيز المتطلبات ونشر التطبيق على المتاجر.' },
    ],
    deliverablesEn: [
      'UI/UX screen architecture and interactive prototypes',
      'Android (.aab/.apk) and iOS (.ipa) production builds',
      'Full mobile source code and connected backend APIs',
      'Store submission assets and release checklist',
      'Post-launch bug-fix and OS compatibility support plan',
    ],
    deliverablesAr: [
      'تصاميم الواجهات وتجربة المستخدم التفاعلية',
      'نسخ الإنتاج لتطبيق أندرويد وiOS',
      'الشيفرة المصدرية الكاملة وواجهات الربط البرمجية',
      'ملفات وإعدادات النشر لمتاجر التطبيقات',
      'خطة الصيانة ومعالجة الأعطال وتحديثات النظام',
    ],
    industriesEn: ['E-Commerce', 'Healthcare', 'Logistics', 'Hospitality', 'Finance', 'Education'],
    industriesAr: ['التجارة الإلكترونية', 'الرعاية الصحية', 'اللوجستيات', 'الضيافة', 'المالية', 'التعليم'],
    relatedSlugs: ['software-development', 'ecommerce-solutions', 'system-integration'],
    faqsEn: [
      { q: 'Should we choose Flutter, React Native, or native Kotlin/Swift?', a: 'Cross-platform frameworks like Flutter and React Native are ideal for most business apps sharing logic across iOS and Android. Native Kotlin/Swift is recommended when deep hardware access or platform-specific capabilities are paramount.' },
      { q: 'Do you assist with publishing to Google Play and the Apple App Store?', a: 'Yes, we handle build signing, technical metadata preparation, and store submission workflows under your organization developer accounts.' },
    ],
    faqsAr: [
      { q: 'هل نختار Flutter أم React Native أم التطوير الأصلي Kotlin وSwift؟', a: 'يعد Flutter وReact Native خياراً ممتازاً لمعظم تطبيقات الأعمال لتوحيد الشيفرة وتقليل الوقت، بينما يوصى بالتطوير الأصلي عند الحاجة لوصول عميق لعتاد الجهاز.' },
      { q: 'هل تساعدون في رفع التطبيق على Google Play وApp Store؟', a: 'نعم، نتولى تجهيز نسخ الإصدار الموقعة والبيانات التقنية ومرافقة عملية النشر على حسابات شركتك.' },
    ],
    whatsappMsgEn: 'Hello Console Team, I am interested in your Mobile App Development service for Android and iOS. I would like to discuss my application idea and requirements.',
    whatsappMsgAr: 'مرحباً فريق Console، أنا مهتم بخدمة تطوير تطبيقات الهواتف (أندرويد وiOS) وأرغب في مناقشة فكرة وتفاصيل التطبيق.',
  },
  {
    number: '04',
    slug: 'it-services',
    category: 'infrastructure',
    titleEn: 'IT Services',
    titleAr: 'خدمات تكنولوجيا المعلومات',
    heroHeadlineEn: 'Structured IT Operations for Dependable Business Continuity.',
    heroHeadlineAr: 'خدمات تكنولوجيا معلومات منظمة تضمن استمرارية أعمالك بكفاءة.',
    shortDescEn:
      'End-to-end IT infrastructure consulting, hardware and software lifecycle management, network configuration, and business technology optimization.',
    shortDescAr:
      'استشارات البنية التقنية وإدارة الأجهزة والبرمجيات وحلول الشبكات وتهيئة الأنظمة وتحسين بيئة العمل التكنولوجية.',
    introEn:
      'Growing organizations rely on stable workstations, structured networks, properly licensed software, and coordinated IT operations. Console delivers disciplined IT services that remove day-to-day technical bottlenecks, standardize hardware and software configurations, and align your technology environment with business operations.',
    introAr:
      'تعتمد المؤسسات المتنامية على استقرار الأجهزة، وتنظيم الشبكات، وإدارة التراخيص البرمجية، وكفاءة التشغيل التقني. تقدم Console خدمات تكنولوجيا معلومات منهجية تزيل العقبات اليومية وتضبط تهيئة الأنظمة وتوائم بيئتك التقنية مع متطلبات العمل.',
    problemsEn: [
      'Unplanned technical disruptions caused by ad-hoc hardware and software setups.',
      'Misconfigured office networks, shared drives, and inconsistent user access policies.',
      'Software licensing confusion and uncoordinated device onboarding for new staff.',
      'Lack of unified documentation for existing IT assets and network topology.',
    ],
    problemsAr: [
      'انقطاعات العمل المتكررة نتيجة إعدادات الأجهزة والبرمجيات غير القياسية.',
      'ضعف تهيئة الشبكات الداخلية ومشاركة الملفات وصلاحيات المستخدمين.',
      'تشتت تراخيص البرمجيات وصعوبة تهيئة الأجهزة للموظفين الجدد.',
      'غياب التوثيق الواضح للأصول التقنية وخريطة الشبكة الحالية.',
    ],
    solutionsEn: [
      'Comprehensive IT environment audits and standardized technical configuration.',
      'Structured network setup, router/switch policies, and secure office connectivity.',
      'Centralized hardware and software lifecycle tracking and workstation provisioning.',
      'Practical IT operations support tailored to your team size and operational hours.',
    ],
    solutionsAr: [
      'مراجعة شاملة لبيئة تكنولوجيا المعلومات وتوحيد معايير التهيئة التقنية.',
      'تأسيس وتنظيم الشبكات الداخلية وسياسات الاتصال الآمن.',
      'إدارة دورة حياة الأجهزة والبرمجيات وتجهيز محطات العمل بكفاءة.',
      'عمليات دعم وتشغيل تقنية عملية تتناسب مع حجم فريقك وساعات عملك.',
    ],
    featuresEn: [
      'IT infrastructure consulting',
      'IT solutions',
      'Business technology support',
      'Hardware and software management',
      'Network solutions',
      'IT operations',
      'Technical system configuration',
      'Technology optimization',
    ],
    featuresAr: [
      'استشارات البنية التحتية لتكنولوجيا المعلومات',
      'حلول تكنولوجيا المعلومات المتكاملة',
      'دعم التكنولوجيا للأعمال',
      'إدارة الأجهزة والبرمجيات',
      'حلول الشبكات والاتصال',
      'تشغيل وإدارة عمليات الـ IT',
      'التهيئة التقنية للأنظمة',
      'تحسين كفاءة التكنولوجيا المستخدمة',
    ],
    technologies: ['Windows / Linux / macOS', 'Active Directory / IAM', 'VLANs & Firewalls', 'VPN', 'MDM', 'Endpoint Protection'],
    benefitsEn: [
      'Predictable, documented IT environment with fewer daily interruptions.',
      'Faster onboarding and offboarding for employees and workstations.',
      'Better utilization of existing technology budgets through proper optimization.',
      'Clear asset inventory and standardized system configurations.',
    ],
    benefitsAr: [
      'بيئة تقنية مستقرة وموثقة تقل فيها الأعطال اليومية.',
      'تجهيز أسرع لأجهزة الموظفين الجدد وإدارة آمنة للصلاحيات.',
      'استغلال أمثل لميزانية التقنية عبر تحسين الموارد القائمة.',
      'سجل واضح للأصول التقنية ومعايير تهيئة موحدة.',
    ],
    workflowEn: [
      { step: '01', title: 'IT Asset & Network Audit', desc: 'Catalog existing devices, software licenses, network topology, and bottlenecks.' },
      { step: '02', title: 'Standardization Plan', desc: 'Define configuration standards, access controls, and operational procedures.' },
      { step: '03', title: 'Configuration & Deployment', desc: 'Implement network improvements, workstation setups, and system policies.' },
      { step: '04', title: 'Operational Handover', desc: 'Deliver clear documentation and ongoing IT operational support.' },
    ],
    workflowAr: [
      { step: '01', title: 'تدقيق الأصول والشبكة', desc: 'حصر الأجهزة والتراخيص الحالية وهيكلة الشبكة ونقاط الضعف.' },
      { step: '02', title: 'خطة التوحيد القياسي', desc: 'وضع معايير التهيئة وضوابط الوصول وإجراءات التشغيل.' },
      { step: '03', title: 'التنفيذ والتهيئة', desc: 'تطبيق تحسينات الشبكة وتجهيز الأنظمة وضبط السياسات.' },
      { step: '04', title: 'التوثيق والتشغيل', desc: 'تسليم التوثيق الفني وتفعيل آلية التشغيل والدعم المستمر.' },
    ],
    deliverablesEn: [
      'IT environment assessment and gap report',
      'Hardware, software, and network inventory documentation',
      'Standardized workstation and access configuration',
      'Operational support schedule and escalation procedure',
    ],
    deliverablesAr: [
      'تقرير تقييم بيئة تكنولوجيا المعلومات والفجوات القائمة',
      'سجل موثق للأجهزة والبرمجيات والشبكة',
      'معايير موحدة لتهيئة الأجهزة وصلاحيات الوصول',
      'جدول التشغيل والدعم وآلية التصعيد الفني',
    ],
    industriesEn: ['Enterprises', 'Healthcare', 'Education', 'Retail', 'Professional Services', 'Manufacturing'],
    industriesAr: ['المؤسسات الكبرى', 'الرعاية الصحية', 'التعليم', 'التجزئة', 'الخدمات المهنية', 'التصنيع'],
    relatedSlugs: ['it-infrastructure-management', 'technical-support-maintenance', 'cybersecurity'],
    faqsEn: [
      { q: 'Can you assess our current office IT setup before proposing changes?', a: 'Yes. Every IT engagement begins with a structured audit of your hardware, software, and network configuration so recommendations address real bottlenecks.' },
      { q: 'Do you support hybrid teams working both on-site and remotely?', a: 'Yes. We design secure VPN, identity management, and cloud-connected workspace configurations suitable for distributed teams.' },
    ],
    faqsAr: [
      { q: 'هل يمكن تقييم وضعنا التقني الحالي قبل اقتراح أي تغييرات؟', a: 'نعم، نبدأ دائماً بمراجعة شاملة للأجهزة والبرمجيات والشبكة لتقديم توصيات مبنية على الواقع الفعلي.' },
      { q: 'هل تدعمون فرق العمل الهجينة وعن بعد؟', a: 'نعم، نصمم حلول اتصال آمنة وإدارة هوية وصلاحيات تلائم العمل المكتبي والعمل عن بعد.' },
    ],
    whatsappMsgEn: 'Hello Console Team, I am interested in your IT Services for our organization. I would like to discuss our infrastructure and operational needs.',
    whatsappMsgAr: 'مرحباً فريق Console، أنا مهتم بخدمات تكنولوجيا المعلومات لمؤسستنا وأود مناقشة احتياجاتنا التقنية والتشغيلية.',
  },
  {
    number: '05',
    slug: 'technical-support-maintenance',
    category: 'infrastructure',
    titleEn: 'Technical Support & Maintenance',
    titleAr: 'الدعم الفني والصيانة',
    heroHeadlineEn: 'Proactive System Maintenance & Reliable Technical Resolution.',
    heroHeadlineAr: 'صيانة وقائية مستمرة ودعم فني موثوق لاستقرار أنظمتك.',
    shortDescEn:
      'Structured bug fixing, software and website maintenance, security patching, backup management, and agreed-SLA technical assistance without empty claims.',
    shortDescAr:
      'إصلاح الأعطال، وصيانة البرمجيات والمواقع، والتحديثات الأمنية، وإدارة النسخ الاحتياطي، والدعم الفني وفق اتفاقيات استجابة واضحة.',
    introEn:
      'Launching a website or software platform is only the beginning of its lifecycle. Dependencies evolve, traffic patterns shift, and security patches require timely attention. Console provides disciplined technical support and preventive maintenance under clear, agreed response windows—never making unverified availability claims while ensuring your systems stay healthy, backed up, and performant.',
    introAr:
      'إطلاق الموقع أو النظام البرمجي هو بداية دورة حياته التشغيلية. تتغير الاعتماديات وتستجد التحديثات الأمنية وتظهر الحاجة للمراقبة المستمرة. توفر Console دعماً فنياً منظماً وصيانة وقائية وفق ساعات واتفاقيات استجابة واضحة وموثقة، لضمان استمرار عمل أنظمتك بأعلى كفاءة وأمان.',
    problemsEn: [
      'Websites and internal tools breaking after unmonitored library or CMS updates.',
      'Delayed bug resolution caused by lack of a dedicated maintenance team.',
      'Missing or untested backups discovered only after an unexpected failure.',
      'Gradual performance degradation and unpatched security vulnerabilities over time.',
    ],
    problemsAr: [
      'تعطل المواقع أو الأدوات بعد التحديثات العشوائية للمكتبات أو المكونات.',
      'بطء معالجة الأعطال لعدم وجود جهة فنية مسؤولة عن الصيانة.',
      'غياب النسخ الاحتياطي المنتظم أو عدم اختباره إلا بعد وقوع مشكلة.',
      'تراجع الأداء التدريجي وتراكم الثغرات الأمنية غير المحدثة بمرور الوقت.',
    ],
    solutionsEn: [
      'Scheduled preventive maintenance, dependency updates, and security patching.',
      'Structured issue triage, root-cause debugging, and clean code fixes.',
      'Automated backup verification and uptime/error monitoring alerts.',
      'Transparent support tiers with clearly defined response times and business-hour coverage.',
    ],
    solutionsAr: [
      'صيانة وقائية مجدولة وتحديثات دورية للمكتبات والحزم الأمنية.',
      'تصنيف منظم للبلاغات وتشخيص جذري للأعطال ومعالجتها برمجياً.',
      'نسخ احتياطي آلي مع فحص دوري لسلامة الاسترجاع ومراقبة الأخطاء.',
      'باقات دعم شفافة تحدد أوقات الاستجابة وساعات التغطية المتفق عليها بوضوح.',
    ],
    featuresEn: [
      'Technical troubleshooting',
      'Software maintenance',
      'Website maintenance',
      'System monitoring',
      'Bug fixing',
      'Security updates',
      'Performance optimization',
      'Backup management',
      'Technical assistance',
      'Preventive maintenance',
    ],
    featuresAr: [
      'تشخيص وحل المشكلات التقنية',
      'صيانة البرمجيات والتطبيقات',
      'صيانة وتحديث المواقع الإلكترونية',
      'مراقبة استقرار الأنظمة',
      'إصلاح الأخطاء البرمجية',
      'التحديثات والترقيعات الأمنية',
      'تحسين الأداء وسرعة الاستجابة',
      'إدارة النسخ الاحتياطي والاسترداد',
      'المساعدة الفنية المباشرة',
      'الصيانة الوقائية الدورية',
    ],
    technologies: ['Sentry / Error Tracking', 'Uptime Monitoring', 'Git CI Checks', 'Automated Backups', 'Linux / Docker', 'Performance Profiling'],
    benefitsEn: [
      'Predictable system stability through regular preventive checks.',
      'Clear, honest response agreements aligned with your business hours and criticality.',
      'Protected business data via scheduled, verified backup routines.',
      'Extended lifespan and reliability of existing software and web investments.',
    ],
    benefitsAr: [
      'استقرار تشغيلي أعلى بفضل الفحص الوقائي المنتظم.',
      'اتفاقيات استجابة واضحة وصادقة تتناسب مع ساعات عملك وأهمية النظام.',
      'حماية بيانات العمل عبر خطط نسخ احتياطي مجدولة ومختبرة.',
      'إطالة العمر التشغيلي لاستثماراتك البرمجية والرقمية.',
    ],
    workflowEn: [
      { step: '01', title: 'System Onboarding Audit', desc: 'Review codebase, server health, backup status, and known pain points.' },
      { step: '02', title: 'Support Agreement Setup', desc: 'Establish support channels, response priorities, and maintenance schedule.' },
      { step: '03', title: 'Monitoring & Preventive Care', desc: 'Configure error alerts, apply security patches, and verify backups.' },
      { step: '04', title: 'Monthly Reporting & Tuning', desc: 'Deliver clear summaries of resolved tickets, updates, and optimization steps.' },
    ],
    workflowAr: [
      { step: '01', title: 'فحص واستلام النظام', desc: 'مراجعة الشيفرة وحالة الخادم والنسخ الاحتياطي والمشكلات الحالية.' },
      { step: '02', title: 'إعداد اتفاقية الدعم', desc: 'تحديد قنوات التواصل وأولويات الاستجابة وجدول الصيانة.' },
      { step: '03', title: 'المراقبة والصيانة الوقائية', desc: 'تفعيل تنبيهات الأخطاء وتطبيق التحديثات الأمنية وفحص النسخ الاحتياطي.' },
      { step: '04', title: 'التقارير والتحسين الدوري', desc: 'تقديم ملخص واضح بالأعطال المعالجة والتحديثات والتحسينات المنفذة.' },
    ],
    deliverablesEn: [
      'Baseline system health and security audit report',
      'Defined support schedule and ticket escalation workflow',
      'Automated backup and monitoring configuration',
      'Regular maintenance logs and performance updates',
    ],
    deliverablesAr: [
      'تقرير فحص صحة النظام ومستوى الأمان الأساسي',
      'جدول دعم محدد وآلية واضحة لرفع ومتابعة التذاكر',
      'إعدادات النسخ الاحتياطي والمراقبة الآلية',
      'سجلات صيانة دورية وتحديثات لتحسين الأداء',
    ],
    industriesEn: ['E-Commerce', 'Healthcare', 'Education', 'Startups', 'Enterprises', 'Media & Entertainment'],
    industriesAr: ['التجارة الإلكترونية', 'الرعاية الصحية', 'التعليم', 'الشركات الناشئة', 'المؤسسات الكبرى', 'الإعلام والترفيه'],
    relatedSlugs: ['software-development', 'web-development', 'web-hosting-servers'],
    faqsEn: [
      { q: 'What support hours and response times do you offer?', a: 'Support plans are tailored to each project during onboarding—ranging from standard business-hour coverage to scheduled extended monitoring—so expectations are always explicit and realistic.' },
      { q: 'Can you maintain software or websites originally built by another team?', a: 'Yes, following an initial technical audit to assess code quality, hosting access, and documentation.' },
    ],
    faqsAr: [
      { q: 'ما هي ساعات الدعم وأوقات الاستجابة المتاحة؟', a: 'يتم تحديد خطة الدعم وأوقات الاستجابة بشكل واضح عند التعاقد بناءً على طبيعة النظام وساعات عملك، دون وعود غير واقعية.' },
      { q: 'هل يمكنكم صيانة موقع أو نظام برمجي طوره فريق آخر؟', a: 'نعم، بعد إجراء فحص تقني أولي لتقييم جودة الشيفرة وصلاحيات الاستضافة والتوثيق المتاح.' },
    ],
    whatsappMsgEn: 'Hello Console Team, I am interested in your Technical Support & Maintenance service. I would like to discuss support options for our existing systems.',
    whatsappMsgAr: 'مرحباً فريق Console، أنا مهتم بخدمة الدعم الفني والصيانة وأود مناقشة خيارات الصيانة لأنظمتنا الحالية.',
  },
  {
    number: '06',
    slug: 'cloud-computing',
    category: 'infrastructure',
    titleEn: 'Cloud Computing',
    titleAr: 'الحوسبة السحابية',
    heroHeadlineEn: 'Resilient Cloud Architectures Built for Scale & Cost Control.',
    heroHeadlineAr: 'بنية سحابية مرنة مصممة للتوسع والتحكم في التكاليف.',
    shortDescEn:
      'Cloud architecture, workload migration, AWS, Microsoft Azure, and Google Cloud implementations with automated scaling, storage, backups, and telemetry.',
    shortDescAr:
      'تصميم البنية السحابية والترحيل السحابي وحلول AWS وMicrosoft Azure وGoogle Cloud مع التخزين والنسخ الاحتياطي والمراقبة.',
    introEn:
      'Moving to the cloud without proper architecture often results in unpredictable bills and exposed configurations. Console designs, migrates, and optimizes cloud environments across AWS, Microsoft Azure, and Google Cloud—ensuring scalable compute capacity, isolated networking, automated backup policies, and transparent resource governance.',
    introAr:
      'الانتقال إلى السحابة دون معمارية مدروسة يؤدي غالباً إلى تكاليف غير متوقعة وثغرات في الإعدادات. تصمم Console وتنفذ عمليات الترحيل السحابي وتحسن بيئات العمل على AWS وMicrosoft Azure وGoogle Cloud لضمان قابلية التوسع وعزل الشبكات والنسخ الاحتياطي الآلي وضبط الاستهلاك.',
    problemsEn: [
      'Unpredictable monthly cloud bills driven by over-provisioned instances and idle resources.',
      'Single-server architectures that fail during traffic spikes or regional outages.',
      'Risky manual migrations from on-premise servers to cloud environments.',
      'Weak IAM permissions and unencrypted cloud storage buckets.',
    ],
    problemsAr: [
      'ارتفاع فواتير السحابة الشهرية بسبب حجز موارد غير مستغلة أو غير محسنة.',
      'الاعتماد على خادم منفرد يتعطل عند ارتفاع الضغط أو حدوث أعطال.',
      'مخاطر الترحيل اليدوي غير المخطط من الخوادم المحلية إلى السحابة.',
      'ضعف إدارة الصلاحيات وعدم تشفير وحدات التخزين السحابية.',
    ],
    solutionsEn: [
      'Well-architected cloud topologies across AWS, Microsoft Azure, and Google Cloud.',
      'Phased zero-surprise cloud migration with rollback safeguards.',
      'Auto-scaling compute clusters, managed databases, and encrypted cloud storage.',
      'Continuous cloud cost optimization and resource monitoring.',
    ],
    solutionsAr: [
      'تصميم بنى سحابية قياسية على AWS وMicrosoft Azure وGoogle Cloud.',
      'ترحيل سحابي مرحلي مدروس مع خطط تراجع آمنة لتفادي التوقف.',
      'تجمعات حوسبة قابلة للتوسع التلقائي وقواعد بيانات مدارة وتخزين مشفر.',
      'مراقبة مستمرة للأداء وتحسين دائم لتكلفة الموارد السحابية.',
    ],
    featuresEn: [
      'Cloud infrastructure',
      'Cloud migration',
      'Cloud hosting architecture',
      'AWS solutions',
      'Microsoft Azure solutions',
      'Google Cloud solutions',
      'Cloud storage',
      'Cloud backup',
      'Scalable infrastructure',
      'Cloud optimization',
      'Deployment and monitoring',
    ],
    featuresAr: [
      'تصميم البنية التحتية السحابية',
      'الترحيل والانتقال إلى السحابة',
      'معمارية الاستضافة السحابية',
      'حلول Amazon Web Services (AWS)',
      'حلول Microsoft Azure',
      'حلول Google Cloud Platform',
      'التخزين السحابي الآمن',
      'النسخ الاحتياطي السحابي',
      'بنية تحتية قابلة للتوسع',
      'تحسين كفاءة وتكلفة السحابة',
      'النشر والمراقبة المستمرة',
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    benefitsEn: [
      'Infrastructure that scales cleanly with real user demand rather than fixed hardware limits.',
      'Reduced operational risk through multi-zone backups and disaster recovery snapshots.',
      'Right-sized cloud spending backed by clear resource tagging and utilization audits.',
      'Consistent, repeatable deployments powered by infrastructure-as-code.',
    ],
    benefitsAr: [
      'بنية تحتية تتوسع بسلاسة مع حجم الطلب الفعلي دون قيود العتاد الثابت.',
      'تقليل المخاطر التشغيلية عبر النسخ الاحتياطي متعدد المناطق.',
      'تحكم أفضل في الإنفاق السحابي عبر مراجعة الموارد وإلغاء الهدر.',
      'عمليات نشر متكررة وموثوقة باستخدام البنية التحتية كشيفرة.',
    ],
    workflowEn: [
      { step: '01', title: 'Workload & Cost Assessment', desc: 'Evaluate current applications, bandwidth needs, compliance rules, and target cloud provider.' },
      { step: '02', title: 'Target Architecture Blueprint', desc: 'Design VPC networks, IAM roles, compute scaling, storage, and backup policies.' },
      { step: '03', title: 'Migration & Cutover', desc: 'Provision infrastructure, replicate data, validate staging, and switch traffic safely.' },
      { step: '04', title: 'Optimization & Telemetry', desc: 'Monitor utilization, refine scaling thresholds, and review cost efficiency.' },
    ],
    workflowAr: [
      { step: '01', title: 'تقييم الأحمال والتكلفة', desc: 'تحليل التطبيقات الحالية وحجم البيانات والامتثال واختيار المزود الأنسب.' },
      { step: '02', title: 'مخطط البنية المستهدفة', desc: 'تصميم الشبكات الافتراضية والصلاحيات والتوسع والتخزين والنسخ الاحتياطي.' },
      { step: '03', title: 'الترحيل والتحويل الآمن', desc: 'تهيئة الموارد ونقل البيانات واختبار البيئة التجريبية قبل التحويل النهائي.' },
      { step: '04', title: 'المراقبة والتحسين', desc: 'متابعة مؤشرات الاستهلاك وضبط حدود التوسع ومراجعة التكاليف.' },
    ],
    deliverablesEn: [
      'Cloud architecture diagram and security/IAM blueprint',
      'Provisioned AWS, Azure, or Google Cloud environment',
      'Automated cloud backup and snapshot policies',
      'CI/CD deployment pipeline and monitoring alerts',
    ],
    deliverablesAr: [
      'مخطط المعمارية السحابية وهيكلة الصلاحيات والأمان',
      'بيئة سحابية مهيأة على AWS أو Azure أو Google Cloud',
      'سياسات نسخ احتياطي آلية ومجدولة',
      'خطوط نشر آلية وتنبيهات مراقبة الأداء',
    ],
    industriesEn: ['Technology Companies', 'Startups', 'Finance', 'E-Commerce', 'Enterprises', 'Healthcare'],
    industriesAr: ['شركات التكنولوجيا', 'الشركات الناشئة', 'المالية', 'التجارة الإلكترونية', 'المؤسسات الكبرى', 'الرعاية الصحية'],
    relatedSlugs: ['web-hosting-servers', 'it-infrastructure-management', 'cybersecurity'],
    faqsEn: [
      { q: 'Which cloud provider should we choose: AWS, Azure, or Google Cloud?', a: 'Selection depends on your existing stack, regional latency requirements, licensing (such as Microsoft workloads on Azure), and team familiarity. We help evaluate the best fit objectively.' },
      { q: 'Can you help reduce our current monthly cloud bill?', a: 'Yes. We audit idle instances, storage classes, data transfer patterns, and autoscaling rules to eliminate unnecessary cloud spend.' },
    ],
    faqsAr: [
      { q: 'أي مزود سحابي نختار: AWS أم Azure أم Google Cloud؟', a: 'يعتمد الاختيار على مكدسك البرمجي الحالي ومتطلبات التوافق والمنطقة الجغرافية؛ ونساعدك في تقييم الخيار الأنسب بموضوعية.' },
      { q: 'هل تساعدون في خفض فاتورة السحابة الشهرية الحالية؟', a: 'نعم، نفحص الموارد غير المستغلة وفئات التخزين وقواعد التوسع لإزالة الهدر المالي دون التأثير على الأداء.' },
    ],
    whatsappMsgEn: 'Hello Console Team, I am interested in your Cloud Computing service. I would like to discuss cloud architecture, migration, or optimization for our project.',
    whatsappMsgAr: 'مرحباً فريق Console، أنا مهتم بخدمة الحوسبة السحابية وأود مناقشة تصميم أو ترحيل أو تحسين بنيتنا السحابية.',
  },
  {
    number: '07',
    slug: 'cybersecurity',
    category: 'infrastructure',
    titleEn: 'Cybersecurity',
    titleAr: 'الأمن السيبراني',
    heroHeadlineEn: 'Responsible, Methodical Security Engineering for Modern Systems.',
    heroHeadlineAr: 'هندسة أمن سيبراني مسؤولة ومنهجية لحماية الأنظمة والبيانات.',
    shortDescEn:
      'Application and network security assessments, vulnerability reviews, access control hardening, data protection policies, and recovery planning.',
    shortDescAr:
      'تقييمات الأمان والثغرات، وتأمين التطبيقات والشبكات، وحماية البيانات، وضوابط الوصول، وخطط النسخ الاحتياطي والتعافي.',
    introEn:
      'Security is not an optional add-on applied after launch—it is an ongoing engineering discipline. Console approaches cybersecurity responsibly and transparently: identifying misconfigurations and application vulnerabilities, hardening access control, implementing defense-in-depth data protection, and equipping teams with practical policies and recovery plans.',
    introAr:
      'الأمن السيبراني ليس إضافة شكلية بعد الإطلاق، بل ممارسة هندسية مستمرة. تتعامل Console مع الأمن السيبراني بمسؤولية ومهنية عالية عبر فحص نقاط الضعف وإعدادات الأنظمة، وتشديد ضوابط الوصول، وحماية البيانات، ووضع سياسات واضحة وخطط للتعافي والوعي الأمني.',
    problemsEn: [
      'Exposed APIs, weak authentication policies, or unvalidated user inputs in web and mobile apps.',
      'Excessive administrative privileges shared across staff without least-privilege boundaries.',
      'Lack of formal security assessment documentation prior to enterprise partner onboarding.',
      'Absence of tested backup and incident recovery procedures.',
    ],
    problemsAr: [
      'واجهات برمجية مكشوفة أو سياسات مصادقة ضعيفة أو مدخلات غير محمية في التطبيقات.',
      'منح صلاحيات إدارية مفرطة للموظفين دون تطبيق مبدأ الحد الأدنى من الصلاحيات.',
      'غياب تقييمات الأمان الموثقة المطلوبة للتعاقد مع المؤسسات الكبرى.',
      'عدم وجود إجراءات مختبرة للاستجابة للحوادث واستعادة البيانات.',
    ],
    solutionsEn: [
      'Structured application, API, and network vulnerability assessments with prioritized remediation.',
      'Role-based access control (RBAC), multi-factor enforcement, and secure session design.',
      'Data protection strategies covering encryption in transit and at rest.',
      'Practical security policies, backup recovery playbooks, and staff security awareness consulting.',
    ],
    solutionsAr: [
      'تقييمات منهجية لثغرات التطبيقات والشبكات مع خطة معالجة مرتبة حسب الأولوية.',
      'تطبيق ضوابط الوصول المبنية على الأدوار والمصادقة متعددة العوامل.',
      'استراتيجيات حماية البيانات وتشفيرها أثناء النقل والتخزين.',
      'إعداد السياسات الأمنية وخطط التعافي وبرامج التوعية الأمنية للفرق.',
    ],
    featuresEn: [
      'Security assessments',
      'Vulnerability assessments',
      'Security monitoring',
      'Application security',
      'Network security',
      'Data protection',
      'Access control',
      'Security policies',
      'Backup and recovery planning',
      'Security awareness consulting',
    ],
    featuresAr: [
      'تقييمات الأمان الشاملة',
      'فحص وتقييم الثغرات الأمنية',
      'المراقبة الأمنية للأنظمة',
      'أمن التطبيقات والبرمجيات',
      'أمن الشبكات والبنية التحتية',
      'حماية البيانات الحساسة',
      'إدارة وضبط صلاحيات الوصول',
      'إعداد السياسات والإرشادات الأمنية',
      'تخطيط النسخ الاحتياطي والتعافي',
      'استشارات التوعية الأمنية للفرق',
    ],
    technologies: ['OWASP Standards', 'TLS / SSL', 'RBAC & OAuth2', 'Firewall & WAF Rules', 'Audit Logging', 'Encrypted Backups'],
    benefitsEn: [
      'Clear visibility into real security risks before they impact customers or operations.',
      'Stronger protection for sensitive customer records, credentials, and financial data.',
      'Preparedness through documented incident response and backup recovery plans.',
      'Higher organizational security posture and team awareness.',
    ],
    benefitsAr: [
      'رؤية واضحة للمخاطر الأمنية الحقيقية قبل أن تؤثر على العملاء أو التشغيل.',
      'حماية أقوى لبيانات العملاء الحساسة وبيانات الاعتماد والمعاملات.',
      'جاهزية أعلى عبر خطط موثقة للتعافي والنسخ الاحتياطي.',
      'رفع مستوى الوعي الأمني والالتزام التنظيمي داخل فريق العمل.',
    ],
    workflowEn: [
      { step: '01', title: 'Scope & Threat Surface Review', desc: 'Define authorized assessment boundaries across applications, servers, and access paths.' },
      { step: '02', title: 'Assessment & Findings Analysis', desc: 'Identify configuration gaps, application weaknesses, and access control risks.' },
      { step: '03', title: 'Hardening & Remediation', desc: 'Apply security patches, tighten firewall/WAF rules, and enforce data protection.' },
      { step: '04', title: 'Policy & Recovery Readiness', desc: 'Document security policies, monitoring setup, and backup recovery procedures.' },
    ],
    workflowAr: [
      { step: '01', title: 'تحديد النطاق ومراجعة السطح الأمني', desc: 'تحديد التطبيقات والخوادم ومسارات الوصول المشمولة بالتقييم المصرح به.' },
      { step: '02', title: 'الفحص وتحليل النتائج', desc: 'رصد فجوات التهيئة ونقاط ضعف التطبيقات ومخاطر الصلاحيات.' },
      { step: '03', title: 'التحصين والمعالجة', desc: 'تطبيق التصحيحات الأمنية وتشديد قواعد الحماية وتأمين البيانات.' },
      { step: '04', title: 'السياسات وجاهزية التعافي', desc: 'توثيق السياسات الأمنية وإعدادات المراقبة وإجراءات استعادة البيانات.' },
    ],
    deliverablesEn: [
      'Prioritized security & vulnerability assessment report',
      'Remediation checklist and hardened system configurations',
      'Access control matrix and data protection guidelines',
      'Backup verification and recovery runbook',
    ],
    deliverablesAr: [
      'تقرير تقييم الأمان والثغرات مرتباً حسب درجة الخطورة',
      'قائمة المعالجة وتشديد إعدادات الأنظمة',
      'مصفوفة صلاحيات الوصول وإرشادات حماية البيانات',
      'دليل التحقق من النسخ الاحتياطي وخطة التعافي',
    ],
    industriesEn: ['Finance', 'Healthcare', 'E-Commerce', 'Enterprises', 'Technology Companies', 'Government-Facing Platforms'],
    industriesAr: ['المالية', 'الرعاية الصحية', 'التجارة الإلكترونية', 'المؤسسات الكبرى', 'شركات التكنولوجيا', 'المنصات الخدمية'],
    relatedSlugs: ['cloud-computing', 'it-infrastructure-management', 'software-development'],
    faqsEn: [
      { q: 'Do you claim systems become 100% immune to cyberattacks?', a: 'No responsible security team guarantees 100% immunity. Our goal is to systematically reduce risk, close known vulnerabilities, harden access controls, and ensure reliable recovery capabilities.' },
      { q: 'Can you review our web application before public launch?', a: 'Yes. Pre-launch application security reviews are one of the highest-leverage ways to catch authorization, validation, and configuration flaws early.' },
    ],
    faqsAr: [
      { q: 'هل تضمنون حماية مطلقة بنسبة 100% ضد الهجمات؟', a: 'لا يقدم أي فريق أمني مسؤول وعوداً بالحصانة المطلقة؛ هدفنا هو تقليل المخاطر بشكل منهجي وسد الثغرات المعروفة وتأمين الصلاحيات وضمان خطط التعافي.' },
      { q: 'هل يمكن مراجعة تطبيقنا أمنياً قبل الإطلاق الرسمي؟', a: 'نعم، تعد المراجعة الأمنية قبل الإطلاق من أفضل الخطوات لاكتشاف أخطاء الصلاحيات والتحقق والتهيئة مبكراً.' },
    ],
    whatsappMsgEn: 'Hello Console Team, I am interested in your Cybersecurity service. I would like to discuss a security assessment or hardening plan for our systems.',
    whatsappMsgAr: 'مرحباً فريق Console، أنا مهتم بخدمة الأمن السيبراني وأود مناقشة تقييم أو تأمين أنظمتنا.',
  },
  {
    number: '08',
    slug: 'database-management',
    category: 'infrastructure',
    titleEn: 'Database Management',
    titleAr: 'إدارة قواعد البيانات',
    heroHeadlineEn: 'Structured Data Architecture Built for Integrity & Speed.',
    heroHeadlineAr: 'هيكلة وإدارة قواعد بيانات تضمن سلامة المعلومات وسرعة الاستعلام.',
    shortDescEn:
      'Relational SQL and NoSQL database design, query optimization, zero-loss migrations, automated backups, security hardening, and performance monitoring.',
    shortDescAr:
      'تصميم وتطوير قواعد البيانات SQL وNoSQL، وتحسين الأداء، والترحيل الآمن للبيانات، والنسخ الاحتياطي، وأمن قواعد البيانات.',
    introEn:
      'Every application is only as reliable as the data layer beneath it. Poorly normalized schemas, missing indexes, and unmonitored locks silently cripple growing systems. Console designs, optimizes, secures, and migrates SQL and NoSQL databases so your critical data stays consistent, fast under load, and safely backed up.',
    introAr:
      'استقرار أي تطبيق يعتمد بشكل مباشر على قوة طبقة البيانات تحته. التصميم الضعيف للجداول أو غياب الفهارس يبطئ النظام مع نمو البيانات. تقوم Console بتصميم وتحسين وتأمين وترحيل قواعد البيانات SQL وNoSQL لضمان اتساق البيانات وسرعة استجابتها وسلامة نسخها الاحتياطية.',
    problemsEn: [
      'Slow queries and database CPU spikes as record volumes grow.',
      'Inconsistent relational schemas causing duplicate or corrupted business records.',
      'Risky manual data migrations across different database engines or schemas.',
      'Unencrypted database access and lack of point-in-time recovery backups.',
    ],
    problemsAr: [
      'بطء الاستعلامات وارتفاع استهلاك المعالج مع تزايد حجم السجلات.',
      'تضارب أو تكرار البيانات نتيجة ضعف تصميم الجداول والعلاقات.',
      'مخاطر نقل البيانات يدوياً بين المحركات أو الإصدارات المختلفة.',
      'ضعف تأمين الاتصال بقواعد البيانات وغياب الاسترداد الزمني الدقيق.',
    ],
    solutionsEn: [
      'Normalized SQL (PostgreSQL, MySQL) and purpose-fit NoSQL (MongoDB, Redis) architectures.',
      'Query profiling, indexing strategies, and connection pooling optimization.',
      'Validated ETL and schema migration pipelines with integrity verification.',
      'Database encryption, strict least-privilege roles, and automated backup testing.',
    ],
    solutionsAr: [
      'تصميم معماريات SQL قياسية (PostgreSQL وMySQL) وNoSQL ملائمة (MongoDB وRedis).',
      'تحليل الاستعلامات البطيئة وبناء الفهارس وتحسين تجميع الاتصالات.',
      'مسارات ترحيل بيانات محكمة مع التحقق التلقائي من تطابق السجلات.',
      'تشفير قواعد البيانات وضبط صلاحيات المستخدمين واختبار النسخ الاحتياطي.',
    ],
    featuresEn: [
      'Database design',
      'Database development',
      'SQL databases',
      'NoSQL databases',
      'Database optimization',
      'Database migration',
      'Data backup',
      'Database security',
      'Performance monitoring',
      'Data architecture',
    ],
    featuresAr: [
      'تصميم قواعد البيانات',
      'تطوير وبناء قواعد البيانات',
      'قواعد البيانات العلائقية (SQL)',
      'قواعد البيانات غير العلائقية (NoSQL)',
      'تحسين أداء قواعد البيانات',
      'نقل وترحيل قواعد البيانات',
      'النسخ الاحتياطي للبيانات',
      'أمن وحماية قواعد البيانات',
      'مراقبة أداء الاستعلامات',
      'هندسة وهيكلة البيانات',
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL Server', 'Automated Backup & PITR'],
    benefitsEn: [
      'Faster application response times under concurrent user traffic.',
      'Clean, trustworthy data integrity across reporting and transactional workflows.',
      'Minimized risk of data loss through automated, verified backup schedules.',
      'Scalable data foundation prepared for analytics and system integrations.',
    ],
    benefitsAr: [
      'استجابة أسرع للتطبيقات تحت ضغط الاستخدام المتزامن.',
      'موثوقية ونزاهة أعلى للبيانات عبر التقارير والعمليات اليومية.',
      'تقليل مخاطر فقدان البيانات عبر خطط نسخ احتياطي آلية ومختبرة.',
      'أساس بيانات متين جاهز للتحليلات والتكامل مع الأنظمة الأخرى.',
    ],
    workflowEn: [
      { step: '01', title: 'Data & Query Audit', desc: 'Inspect existing schemas, slow query logs, index usage, and storage growth.' },
      { step: '02', title: 'Schema & Architecture Design', desc: 'Model entities, relationships, partitioning, and caching layers cleanly.' },
      { step: '03', title: 'Optimization or Migration', desc: 'Apply indexes, refactor bottlenecks, or execute verified data migrations.' },
      { step: '04', title: 'Security & Backup Policy', desc: 'Harden network exposure, restrict credentials, and automate backup verification.' },
    ],
    workflowAr: [
      { step: '01', title: 'فحص البيانات والاستعلامات', desc: 'مراجعة الجداول الحالية وسجلات الاستعلامات البطيئة واستهلاك التخزين.' },
      { step: '02', title: 'تصميم الهيكلة والمعمارية', desc: 'نمذجة الكيانات والعلاقات والتقسيم وطبقات التخزين المؤقت.' },
      { step: '03', title: 'التحسين أو الترحيل', desc: 'إضافة الفهارس ومعالجة الاختناقات أو تنفيذ ترحيل بيانات موثق.' },
      { step: '04', title: 'الأمان والنسخ الاحتياطي', desc: 'تقييد الوصول الشبكي وضبط الصلاحيات وأتمتة فحص النسخ الاحتياطي.' },
    ],
    deliverablesEn: [
      'Entity-Relationship Diagram (ERD) and data architecture spec',
      'Optimized database schema and index migration scripts',
      'Slow-query remediation and performance tuning report',
      'Automated backup and access security configuration',
    ],
    deliverablesAr: [
      'مخطط العلاقات (ERD) ومواصفات هيكلة البيانات',
      'نصوص ترحيل محسنة للجداول والفهارس',
      'تقرير معالجة الاستعلامات البطيئة وتحسين الأداء',
      'إعدادات النسخ الاحتياطي الآلي وضوابط الأمان',
    ],
    industriesEn: ['Finance', 'Healthcare', 'E-Commerce', 'Logistics', 'Enterprises', 'Technology Companies'],
    industriesAr: ['المالية', 'الرعاية الصحية', 'التجارة الإلكترونية', 'اللوجستيات', 'المؤسسات الكبرى', 'شركات التكنولوجيا'],
    relatedSlugs: ['software-development', 'data-analytics', 'cloud-computing'],
    faqsEn: [
      { q: 'Can you optimize a slow database without rewriting our entire application?', a: 'Frequently, yes. Adding proper composite indexes, fixing N+1 query patterns, and introducing Redis caching often deliver major speedups with minimal application changes.' },
      { q: 'How do you prevent data loss during database migrations?', a: 'We perform staged dry-runs, row-count and checksum validation, and maintain full snapshots prior to cutover.' },
    ],
    faqsAr: [
      { q: 'هل يمكن تسريع قاعدة بيانات بطيئة دون إعادة كتابة التطبيق بالكامل؟', a: 'في كثير من الحالات نعم؛ عبر تحسين الفهارس وإصلاح استعلامات N+1 وإضافة طبقة تخزين مؤقت مثل Redis.' },
      { q: 'كيف تضمنون عدم فقدان البيانات أثناء الترحيل؟', a: 'نجري اختبارات تجريبية مسبقة مع مطابقة أعداد السجلات والفحص التحققي وأخذ نسخ احتياطية كاملة قبل التحويل.' },
    ],
    whatsappMsgEn: 'Hello Console Team, I am interested in your Database Management service. I would like to discuss database design, optimization, or migration for our project.',
    whatsappMsgAr: 'مرحباً فريق Console، أنا مهتم بخدمة إدارة قواعد البيانات وأرغب في مناقشة التصميم أو التحسين أو الترحيل.',
  },
  {
    number: '09',
    slug: 'web-hosting-servers',
    category: 'infrastructure',
    titleEn: 'Web Hosting & Servers',
    titleAr: 'استضافة المواقع والخوادم',
    heroHeadlineEn: 'Configured, Hardened & High-Speed Server Environments.',
    heroHeadlineAr: 'بيئات استضافة وخوادم مهيأة ومحصنة لأعلى سرعة واستقرار.',
    shortDescEn:
      'Web hosting architecture, VPS and dedicated server setup, DNS and SSL configuration, server security hardening, automated backups, and deployment control.',
    shortDescAr:
      'حلول استضافة المواقع، وإعداد خوادم VPS والخوادم المخصصة، وإدارة النطاقات وDNS، وشهادات SSL، وأمن الخوادم والنسخ الاحتياطي.',
    introEn:
      'A fast application still fails if placed on an unconfigured or overcrowded server. Console configures and manages reliable web hosting, VPS, cloud, and dedicated server environments—handling web server tuning, DNS records, SSL certificates, firewall hardening, automated off-server backups, and clean zero-downtime deployment pipelines.',
    introAr:
      'حتى أفضل التطبيقات أداءً يتعثر على خادم غير مهيأ أو مزدحم. تتولى Console تهيئة وإدارة حلول الاستضافة وخوادم VPS والخوادم السحابية والمخصصة، بما يشمل ضبط خوادم الويب، وإعداد النطاقات وDNS، وشهادات SSL، وتأمين الجدار الناري، والنسخ الاحتياطي الخارجي، وإدارة النشر.',
    problemsEn: [
      'Shared hosting bottlenecks causing timeouts and sluggish page loads.',
      'Misconfigured DNS, SPF/DKIM email deliverability records, or expired SSL certificates.',
      'Unsecured default SSH/server configurations exposed to automated brute-force traffic.',
      'Risky manual FTP uploads replacing live files without rollback capability.',
    ],
    problemsAr: [
      'اختناق الاستضافات المشتركة مما يؤدي إلى بطء الموقع وتوقف الاستجابة.',
      'أخطاء إعدادات DNS وسجلات البريد أو انتهاء صلاحية شهادات الأمان SSL.',
      'خوادم بإعدادات افتراضية غير محصنة معرضة لمحاولات الاختراق الآلية.',
      'رفع الملفات يدوياً عبر FTP دون آلية نشر آمنة أو إمكانية التراجع السريع.',
    ],
    solutionsEn: [
      'Properly sized VPS, cloud server, and dedicated server provisioning.',
      'Hardened Nginx/Apache reverse proxies, HTTP/2-3 tuning, and automated SSL renewal.',
      'Clean DNS, domain routing, and email authentication records (SPF, DKIM, DMARC).',
      'Firewall rules, key-only SSH access, automated backups, and Git-based deployments.',
    ],
    solutionsAr: [
      'توفير وتهيئة خوادم VPS والخوادم السحابية والمخصصة بالحجم المناسب للأحمال.',
      'ضبط خوادم الويب وتفعيل التجديد التلقائي لشهادات الأمان SSL.',
      'تنظيم إعدادات النطاقات وDNS وسجلات توثيق البريد الإلكتروني.',
      'تشديد الجدار الناري والوصول الآمن والنسخ الاحتياطي الآلي والنشر عبر Git.',
    ],
    featuresEn: [
      'Web hosting solutions',
      'VPS configuration',
      'Dedicated servers',
      'Cloud servers',
      'Server configuration',
      'Domain and DNS management',
      'SSL configuration',
      'Server security',
      'Server optimization',
      'Backup solutions',
      'Deployment management',
    ],
    featuresAr: [
      'حلول استضافة المواقع الإلكترونية',
      'تهيئة وإدارة خوادم VPS',
      'الخوادم المخصصة (Dedicated Servers)',
      'الخوادم السحابية',
      'إعداد وضبط الخوادم',
      'إدارة النطاقات وDNS',
      'تهيئة شهادات الأمان SSL',
      'تأمين وحماية الخوادم',
      'تحسين سرعة وأداء الخوادم',
      'حلول النسخ الاحتياطي',
      'إدارة عمليات النشر والتحديث',
    ],
    technologies: ['Linux (Ubuntu / Debian)', 'Nginx', 'Docker', 'Let’s Encrypt SSL', 'Cloudflare DNS', 'UFW / Fail2ban'],
    benefitsEn: [
      'Consistent server speed and clean HTTPS encryption across every endpoint.',
      'Protected server perimeter with minimal exposed ports and hardened access.',
      'Clean, repeatable deployments replacing error-prone manual file transfers.',
      'Peace of mind with automated backups stored outside the primary server.',
    ],
    benefitsAr: [
      'سرعة استجابة ثابتة وتشفير HTTPS سليم على جميع الروابط.',
      'محيط خادم محصن مع تقليص المنافذ المكشوفة وتأمين الوصول.',
      'عمليات نشر نظيفة ومتكررة تغني عن الرفع اليدوي المعرض للأخطاء.',
      'نسخ احتياطية آلية محفوظة خارج الخادم الأساسي لضمان الاسترجاع.',
    ],
    workflowEn: [
      { step: '01', title: 'Hosting & Traffic Sizing', desc: 'Select the right VPS, cloud, or dedicated server tier for your workload.' },
      { step: '02', title: 'Server & Security Provisioning', desc: 'Configure OS, runtime stack, firewall, SSH keys, and monitoring.' },
      { step: '03', title: 'Domain, DNS & SSL Cutover', desc: 'Configure DNS routing, HTTPS certificates, and server caching rules.' },
      { step: '04', title: 'Backup & Deployment Handover', desc: 'Automate scheduled backups and verify streamlined deployment workflows.' },
    ],
    workflowAr: [
      { step: '01', title: 'تحديد سعة الاستضافة', desc: 'اختيار الخادم المناسب (VPS أو سحابي أو مخصص) وفق حجم الزيارات والتطبيق.' },
      { step: '02', title: 'التهيئة وتأمين الخادم', desc: 'إعداد نظام التشغيل وبيئة التشغيل والجدار الناري ومفاتيح الوصول.' },
      { step: '03', title: 'إعداد النطاق وDNS وSSL', desc: 'ربط النطاق وضبط سجلات DNS وتفعيل التشفير والتخزين المؤقت.' },
      { step: '04', title: 'النسخ الاحتياطي وتسليم النشر', desc: 'أتمتة النسخ الاحتياطي المجدول واختبار آلية النشر المستقبلي.' },
    ],
    deliverablesEn: [
      'Hardened and tuned production server environment',
      'Configured DNS records and auto-renewing SSL certificates',
      'Automated off-server backup schedule',
      'Deployment pipeline and server access documentation',
    ],
    deliverablesAr: [
      'بيئة خادم إنتاجية مهيأة ومحصنة ومضبوطة الأداء',
      'إعدادات DNS سليمة وشهادات SSL ذاتية التجديد',
      'جدولة نسخ احتياطي آلي خارج الخادم',
      'آلية نشر منظمة وتوثيق كامل لبيانات الوصول',
    ],
    industriesEn: ['E-Commerce', 'Media & Entertainment', 'Startups', 'Professional Services', 'Education', 'Enterprises'],
    industriesAr: ['التجارة الإلكترونية', 'الإعلام والترفيه', 'الشركات الناشئة', 'الخدمات المهنية', 'التعليم', 'المؤسسات الكبرى'],
    relatedSlugs: ['cloud-computing', 'web-development', 'technical-support-maintenance'],
    faqsEn: [
      { q: 'Can you migrate our existing website to a faster VPS without losing emails or SEO?', a: 'Yes. We carefully coordinate DNS TTL lowering, database/file synchronization, and mail record preservation prior to switching traffic.' },
      { q: 'Do we keep full ownership of our domain and server accounts?', a: 'Yes. We recommend registering domains and cloud/VPS accounts directly under your organization so you always retain full administrative ownership.' },
    ],
    faqsAr: [
      { q: 'هل يمكن نقل موقعنا الحالي إلى خادم VPS أسرع دون فقدان البريد أو الترتيب في البحث؟', a: 'نعم، ننسق عملية النقل بدقة مع الحفاظ على سجلات البريد ومزامنة الملفات وقواعد البيانات قبل تحويل النطاق.' },
      { q: 'هل نحتفظ بملكية النطاق وحسابات الخوادم؟', a: 'بالتأكيد، نحرص على أن تكون النطاقات وحسابات الخوادم مسجلة باسم مؤسستك لتحتفظ بالملكية الكاملة دائماً.' },
    ],
    whatsappMsgEn: 'Hello Console Team, I am interested in your Web Hosting & Servers service. I would like to discuss server setup, migration, or hosting management.',
    whatsappMsgAr: 'مرحباً فريق Console، أنا مهتم بخدمة استضافة المواقع والخوادم وأود مناقشة إعداد أو نقل أو إدارة خوادمنا.',
  },
];
