import type { Language } from '../utils/whatsapp';

export const HERO_IMAGE = '/src/assets/images/hero_architecture_mono_1795539304663.jpg';
export const LOGO_IMAGE = '/assets/aistudio/WhatsApp_Image_2026-11-17_at_3.48.22_PM_862d83e4.jpeg';

export interface IndustryItem {
  id: string;
  number: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  solutionsEn: string[];
  solutionsAr: string[];
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare',
    number: '01',
    nameEn: 'Healthcare',
    nameAr: 'الرعاية الصحية',
    descEn: 'Patient appointment portals, clinic scheduling, electronic intake digitization, and strict access-controlled record management.',
    descAr: 'بوابات حجز المرضى، وتنظيم مواعيد العيادات، ورقمنة النماذج الطبية، وإدارة السجلات بضوابط وصول صارمة.',
    solutionsEn: ['Appointment & clinic workflow portals', 'Role-based medical data protection', 'Automated patient reminders'],
    solutionsAr: ['بوابات المواعيد وسير عمل العيادات', 'حماية البيانات الطبية وفق الصلاحيات', 'تنبيهات آلية للمراجعين'],
  },
  {
    id: 'education',
    number: '02',
    nameEn: 'Education',
    nameAr: 'التعليم والتدريب',
    descEn: 'Learning management platforms, student/parent portals, assessment tracking, and institutional IT infrastructure.',
    descAr: 'منصات إدارة التعلم، وبوابات الطلاب وأولياء الأمور، وتتبع التقييمات، والبنية التقنية للمؤسسات التعليمية.',
    solutionsEn: ['Custom LMS & course delivery', 'Student portal & attendance tracking', 'Technical & IT training workshops'],
    solutionsAr: ['منصات تعليمية مخصصة', 'بوابات الطلاب والحضور والتقييم', 'برامج التدريب وورش العمل التقنية'],
  },
  {
    id: 'ecommerce',
    number: '03',
    nameEn: 'E-Commerce',
    nameAr: 'التجارة الإلكترونية',
    descEn: 'High-speed custom storefronts, multi-variant catalogs, payment and courier integrations, and inventory synchronization.',
    descAr: 'متاجر إلكترونية سريعة ومخصصة، وكتالوجات متعددة الخيارات، وربط الدفع والشحن، ومزامنة المخزون.',
    solutionsEn: ['Custom storefront & mobile checkout', 'Payment & courier API sync', 'Merchant inventory dashboards'],
    solutionsAr: ['واجهات متاجر ودفع سريع على الجوال', 'ربط بوابات الدفع وشركات الشحن', 'لوحات إدارة المخزون والطلبات'],
  },
  {
    id: 'retail',
    number: '04',
    nameEn: 'Retail',
    nameAr: 'قطاع التجزئة',
    descEn: 'Unified multi-branch inventory systems, POS-to-web integrations, customer loyalty portals, and sales analytics.',
    descAr: 'أنظمة توحيد المخزون بين الفروع، والربط بين نقاط البيع والمتجر الإلكتروني، وبوابات الولاء وتحليلات المبيعات.',
    solutionsEn: ['Multi-branch stock synchronization', 'POS & ERP API integration', 'Branch performance BI dashboards'],
    solutionsAr: ['مزامنة المخزون بين الفروع', 'تكامل نقاط البيع وERP', 'لوحات تحليل أداء المبيعات'],
  },
  {
    id: 'real-estate',
    number: '05',
    nameEn: 'Real Estate',
    nameAr: 'العقارات والتطوير العقاري',
    descEn: 'Interactive property portals, bilingual listing engines, lead capture routing, and client document workflows.',
    descAr: 'بوابات عرض العقارات التفاعلية، ومحركات البحث ثنائية اللغة، وتوجيه طلبات العملاء وإدارة مستندات التعاقد.',
    solutionsEn: ['Bilingual property showcase platforms', 'Lead routing & CRM integration', 'Installment & unit tracking portals'],
    solutionsAr: ['منصات عرض عقاري ثنائية اللغة', 'ربط طلبات العملاء مع CRM', 'بوابات متابعة الوحدات والأقساط'],
  },
  {
    id: 'finance',
    number: '06',
    nameEn: 'Finance',
    nameAr: 'المالية والأعمال المصرفية',
    descEn: 'Audit-ready internal tools, secure API integrations, data integrity architecture, and disciplined security assessments.',
    descAr: 'أدوات داخلية قابلة للتدقيق، وتكاملات برمجية آمنة، وهيكلة دقيقة للبيانات، وتقييمات أمان منهجية.',
    solutionsEn: ['Strict RBAC & audit trail systems', 'Database integrity & encryption', 'Security & vulnerability assessments'],
    solutionsAr: ['أنظمة صلاحيات وسجلات تدقيق دقيقة', 'حماية وتشفير قواعد البيانات', 'تقييمات الأمان والثغرات'],
  },
  {
    id: 'logistics',
    number: '07',
    nameEn: 'Logistics',
    nameAr: 'اللوجستيات وسلاسل الإمداد',
    descEn: 'Shipment tracking portals, fleet dispatch coordination, barcode/manifest digitization, and warehouse data integration.',
    descAr: 'بوابات تتبع الشحنات، وتنسيق التوزيع والأسطول، ورقمنة بوالص الشحن، وتكامل بيانات المستودعات.',
    solutionsEn: ['Real-time dispatch & status tracking', 'Courier & warehouse API bridges', 'Operational bottleneck analytics'],
    solutionsAr: ['تتبع الشحنات والتشغيل الميداني', 'ربط أنظمة المستودعات والناقلين', 'تحليلات كفاءة التوصيل'],
  },
  {
    id: 'manufacturing',
    number: '08',
    nameEn: 'Manufacturing',
    nameAr: 'التصنيع والإنتاج',
    descEn: 'Production workflow tracking, bill-of-materials software, quality checklists, and factory network infrastructure.',
    descAr: 'تتبع خطوط الإنتاج، وأنظمة إدارة المواد والمخزون الصناعي، وقوائم فحص الجودة، وبنية الشبكات الصناعية.',
    solutionsEn: ['Production & QA workflow systems', 'ERP & inventory synchronization', 'Resilient network & backup infrastructure'],
    solutionsAr: ['أنظمة متابعة الإنتاج والجودة', 'ربط المخزون الصناعي مع ERP', 'شبكات وبنية نسخ احتياطي مستقرة'],
  },
  {
    id: 'hospitality',
    number: '09',
    nameEn: 'Hospitality',
    nameAr: 'الضيافة والسياحة',
    descEn: 'Direct booking websites, multilingual guest portals, mobile companion apps, and digital marketing alignment.',
    descAr: 'مواقع الحجز المباشر، وبوابات النزلاء متعددة اللغات، وتطبيقات الهواتف، وتحسين الظهور الرقمي.',
    solutionsEn: ['Bilingual direct booking platforms', 'Payment & reservation sync', 'Mobile guest experience apps'],
    solutionsAr: ['منصات حجز مباشر ثنائية اللغة', 'ربط الدفع الإلكتروني والحجوزات', 'تطبيقات تجربة النزلاء'],
  },
  {
    id: 'startups',
    number: '10',
    nameEn: 'Startups',
    nameAr: 'الشركات الناشئة',
    descEn: 'MVP architecture consulting, scalable web and mobile product builds, cloud launch setups, and technical roadmaps.',
    descAr: 'استشارات معمارية المنتج الأولي (MVP)، وتطوير تطبيقات الويب والهواتف، وتهيئة الإطلاق السحابي وخرائط الطريق.',
    solutionsEn: ['Pragmatic MVP engineering', 'Technical feasibility & stack advisory', 'Scalable cloud-ready architecture'],
    solutionsAr: ['تطوير متزن للمنتج الأولي (MVP)', 'استشارات اختيار التقنية والجدوى', 'معمارية جاهزة للتوسع السحابي'],
  },
  {
    id: 'professional-services',
    number: '11',
    nameEn: 'Professional Services',
    nameAr: 'الخدمات المهنية والاستشارية',
    descEn: 'Client portals, case and document workflows, bilingual corporate websites, and reliable IT operations support.',
    descAr: 'بوابات العملاء، وإدارة الملفات والعقود رقمياً، ومواقع الشركات الاحترافية، ودعم عمليات تكنولوجيا المعلومات.',
    solutionsEn: ['Authoritative corporate web presence', 'Paperless client intake & portals', 'Managed workstation & IT support'],
    solutionsAr: ['مواقع شركات تعكس الاحترافية', 'بوابات عملاء وملفات لاورقية', 'دعم تقني منظم لبيئة العمل'],
  },
  {
    id: 'enterprises',
    number: '12',
    nameEn: 'Enterprises',
    nameAr: 'المؤسسات الكبرى',
    descEn: 'Legacy software modernization, cross-department system integration, hybrid cloud governance, and infrastructure security.',
    descAr: 'تحديث الأنظمة القديمة، والربط بين أنظمة الأقسام، وحوكمة السحابة الهجينة، وتأمين البنية التحتية.',
    solutionsEn: ['Legacy modernization & custom ERPs', 'Enterprise API & data synchronization', 'Cloud, security & DR planning'],
    solutionsAr: ['تحديث الأنظمة القديمة وتكاملها', 'مزامنة البيانات بين الإدارات', 'السحابة والأمان وخطط التعافي'],
  },
  {
    id: 'media-entertainment',
    number: '13',
    nameEn: 'Media & Entertainment',
    nameAr: 'الإعلام والترفيه',
    descEn: 'High-traffic publishing platforms, media asset workflows, CDN-backed cloud hosting, and responsive audience apps.',
    descAr: 'منصات النشر عالية الزيارات، وتدفقات إدارة المحتوى الرقمي، والاستضافة السحابية السريعة، وتطبيقات الجمهور.',
    solutionsEn: ['High-concurrency web publishing', 'CDN & server performance tuning', 'Technical SEO & audience analytics'],
    solutionsAr: ['منصات نشر تتحمل الزيارات العالية', 'ضبط الخوادم وشبكات التوزيع (CDN)', 'تحسين محركات البحث وتحليل الجمهور'],
  },
  {
    id: 'technology-companies',
    number: '14',
    nameEn: 'Technology Companies',
    nameAr: 'شركات التكنولوجيا',
    descEn: 'Co-engineering capacity, DevOps and cloud migration, database tuning, AI integration workflows, and security reviews.',
    descAr: 'دعم هندسي متخصص، والترحيل السحابي وDevOps، وتحسين قواعد البيانات، وتكاملات الذكاء الاصطناعي، ومراجعات الأمان.',
    solutionsEn: ['Architecture & database optimization', 'CI/CD, Docker & cloud scaling', 'Practical AI API integrations'],
    solutionsAr: ['تحسين المعمارية وقواعد البيانات', 'إعداد الحاويات والسحابة وCI/CD', 'تكاملات عملية لواجهات الذكاء الاصطناعي'],
  },
];

export interface ProcessStepItem {
  number: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  descEn: string;
  descAr: string;
  outputsEn: string[];
  outputsAr: string[];
}

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    titleEn: 'DISCOVERY',
    titleAr: 'الاستكشاف والتحليل',
    subtitleEn: 'Understanding the client’s business, goals, and requirements.',
    subtitleAr: 'فهم نشاط العميل وأهدافه ومتطلباته بدقة.',
    descEn: 'We audit current workflows, operational bottlenecks, target audiences, and technical constraints before writing a single line of code.',
    descAr: 'نراجع مسارات العمل الحالية والتحديات التشغيلية والجمهور المستهدف والقيود التقنية قبل كتابة أي سطر برمجي.',
    outputsEn: ['Requirements specification', 'Scope boundaries', 'Technical constraints map'],
    outputsAr: ['وثيقة المتطلبات الفنية', 'تحديد حدود النطاق', 'خريطة القيود التقنية'],
  },
  {
    number: '02',
    titleEn: 'STRATEGY',
    titleAr: 'الاستراتيجية والمعمارية',
    subtitleEn: 'Selecting the right technologies and defining the solution architecture.',
    subtitleAr: 'اختيار التقنيات المناسبة وتحديد معمارية الحل.',
    descEn: 'We choose maintainable technology stacks, design database schemas, define API contracts, and structure phased delivery milestones.',
    descAr: 'نختار المكدس التقني الأنسب، ونصمم هيكلة قواعد البيانات، وعقود الواجهات البرمجية، ومراحل التسليم الواضحة.',
    outputsEn: ['Technology stack selection', 'System & database architecture', 'Milestone roadmap'],
    outputsAr: ['اختيار المكدس التقني', 'مخطط المعمارية وقواعد البيانات', 'خارطة المراحل الزمنية'],
  },
  {
    number: '03',
    titleEn: 'DESIGN',
    titleAr: 'التصميم وتجربة المستخدم',
    subtitleEn: 'Creating the interface, experience, and technical structure.',
    subtitleAr: 'تصميم الواجهات وتجربة الاستخدام والهيكلة التقنية.',
    descEn: 'We craft sharp, accessible interfaces with clear typographic hierarchy, responsive breakpoints, and bilingual LTR/RTL readiness where needed.',
    descAr: 'نصمم واجهات دقيقة وسهلة الوصول بتسلسل بصري واضح وتجاوب كامل على جميع الشاشات ودعم للغتين عند الحاجة.',
    outputsEn: ['Wireframes & user flows', 'UI design system', 'Responsive layout blueprints'],
    outputsAr: ['مخططات المسارات والواجهات', 'نظام التصميم البصري', 'مخططات التجاوب للشاشات'],
  },
  {
    number: '04',
    titleEn: 'DEVELOPMENT',
    titleAr: 'التطوير والبرمجة',
    subtitleEn: 'Building the solution with clean, maintainable, and scalable code.',
    subtitleAr: 'بناء الحل البرمجي بشيفرة نظيفة وقابلة للصيانة والتوسع.',
    descEn: 'Our engineers implement frontend interfaces, backend services, integrations, and security controls under strict version control and code standards.',
    descAr: 'ينفذ مهندسونا الواجهات الأمامية والخدمات الخلفية والتكاملات وضوابط الأمان وفق معايير جودة دقيقة وإدارة إصدارات محكمة.',
    outputsEn: ['Modular source code', 'API & database implementation', 'Security & validation controls'],
    outputsAr: ['شيفرة برمجية معيارية ونظيفة', 'تنفيذ الواجهات وقواعد البيانات', 'ضوابط التحقق والأمان'],
  },
  {
    number: '05',
    titleEn: 'TESTING',
    titleAr: 'الاختبار وضمان الجودة',
    subtitleEn: 'Testing performance, usability, compatibility, and reliability.',
    subtitleAr: 'اختبار الأداء وسهولة الاستخدام والتوافق والموثوقية.',
    descEn: 'Every build undergoes functional testing, cross-device checks, edge-case validation, and performance profiling before production release.',
    descAr: 'يخضع كل إصدار لاختبارات وظيفية شاملة، وفحص التوافق عبر الأجهزة، واختبار الحالات الحدية وقياس الأداء قبل النشر.',
    outputsEn: ['Functional & edge-case QA', 'Cross-device & browser checks', 'Performance & security verification'],
    outputsAr: ['اختبارات الوظائف والحالات الحدية', 'فحص التوافق عبر الأجهزة', 'التحقق من الأداء والأمان'],
  },
  {
    number: '06',
    titleEn: 'DEPLOYMENT',
    titleAr: 'الإطلاق والنشر',
    subtitleEn: 'Launching and configuring the final solution.',
    subtitleAr: 'إطلاق وضبط التهيئة النهائية للحل على بيئة الإنتاج.',
    descEn: 'We configure production servers or cloud infrastructure, DNS, SSL, monitoring alerts, and automated backup routines for a smooth launch.',
    descAr: 'نهيئ خوادم الإنتاج أو السحابة وإعدادات DNS وشهادات SSL وتنبيهات المراقبة والنسخ الاحتياطي لضمان إطلاق مستقر.',
    outputsEn: ['Production environment setup', 'SSL, DNS & backup config', 'Documentation & handover'],
    outputsAr: ['تهيئة بيئة الإنتاج', 'ضبط SSL وDNS والنسخ الاحتياطي', 'التسليم والتوثيق الفني'],
  },
  {
    number: '07',
    titleEn: 'SUPPORT',
    titleAr: 'الدعم والتطوير المستمر',
    subtitleEn: 'Providing agreed maintenance, improvements, and technical support.',
    subtitleAr: 'تقديم الصيانة المتفق عليها والتحسينات والدعم الفني.',
    descEn: 'After launch, we remain available under clear, agreed maintenance plans for security updates, bug resolution, and iterative feature growth.',
    descAr: 'بعد الإطلاق نواصل دعم النظام وفق خطط صيانة واضحة ومتفق عليها تشمل التحديثات الأمنية ومعالجة الأعطال والتطوير المستقبلي.',
    outputsEn: ['Agreed SLA maintenance', 'Security patching & backups', 'Iterative feature evolution'],
    outputsAr: ['صيانة وفق اتفاقية واضحة', 'تحديثات أمنية ونسخ احتياطي', 'تطوير مستمر للميزات'],
  },
];

export interface CaseStudyItem {
  slug: string;
  code: string;
  isDemo: boolean;
  image: string;
  titleEn: string;
  titleAr: string;
  industryEn: string;
  industryAr: string;
  categoryEn: string;
  categoryAr: string;
  technologies: string[];
  summaryEn: string;
  summaryAr: string;
  challengeEn: string;
  challengeAr: string;
  objectivesEn: string[];
  objectivesAr: string[];
  solutionEn: string;
  solutionAr: string;
  processEn: string[];
  processAr: string[];
  deliverablesEn: string[];
  deliverablesAr: string[];
  resultsNoteEn: string;
  resultsNoteAr: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    slug: 'enterprise-operations-platform',
    code: 'DEMO-01',
    isDemo: true,
    image: '/src/assets/images/project_enterprise_system_1795539305223.jpg',
    titleEn: 'Unified Enterprise Operations & Workflow Core',
    titleAr: 'منظومة العمليات وسير العمل المؤسسي الموحدة',
    industryEn: 'Enterprises & Logistics',
    industryAr: 'المؤسسات الكبرى واللوجستيات',
    categoryEn: 'Software Development · System Integration',
    categoryAr: 'تطوير البرمجيات · التكامل بين الأنظمة',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    summaryEn:
      'Demonstration architectural blueprint illustrating how Console consolidates fragmented spreadsheets, approval chains, and ERP inventory APIs into a single role-based web platform.',
    summaryAr:
      'نموذج معماري توضيحي يبرز كيف تدمج Console الجداول المتفرقة وسلاسل الموافقات وواجهات المخزون في منصة ويب موحدة قائمة على الصلاحيات.',
    challengeEn:
      'Multi-department operations frequently suffer from duplicate data entry across finance, warehouse, and procurement spreadsheets, leading to delayed approvals and inconsistent reporting.',
    challengeAr:
      'غالباً ما تعاني العمليات متعددة الأقسام من تكرار إدخال البيانات بين ملفات المالية والمستودعات والمشتريات، مما يبطئ الموافقات ويسبب تضارب التقارير.',
    objectivesEn: [
      'Centralize internal requests, multi-level approvals, and audit trails in one portal.',
      'Synchronize approved purchase orders automatically with external ERP endpoints.',
      'Provide clean bilingual (LTR/RTL) operational dashboards for management.',
    ],
    objectivesAr: [
      'توحيد الطلبات الداخلية وسلاسل الموافقات وسجلات التدقيق في بوابة واحدة.',
      'مزامنة أوامر الشراء المعتمدة تلقائياً مع واجهات نظام الـ ERP.',
      'توفير لوحات متابعة إدارية واضحة باللغتين العربية والإنجليزية.',
    ],
    solutionEn:
      'A modular full-stack web architecture built around strict role-based access control (RBAC), transactional PostgreSQL data modeling, queued webhook synchronization, and automated reporting views.',
    solutionAr:
      'معمارية ويب معيارية تعتمد على التحكم الدقيق بالصلاحيات (RBAC)، وهيكلة معاملات متماسكة على PostgreSQL، وطوابير مزامنة موثوقة عبر Webhooks.',
    processEn: [
      'Workflow discovery and entity-relationship modeling across departments.',
      'API contract design and idempotent ERP integration middleware.',
      'Componentized frontend UI with strict tabular data tables and audit logs.',
      'End-to-end automated verification and containerized deployment.',
    ],
    processAr: [
      'تحليل تدفقات العمل ونمذجة العلاقات بين بيانات الأقسام.',
      'تصميم عقود الـ API وطبقة الربط الوسيطة المانعة للتكرار.',
      'بناء واجهات أمامية معيارية بجداول بيانات دقيقة وسجلات تدقيق.',
      'تنفيذ الاختبارات الشاملة والنشر عبر الحاويات (Docker).',
    ],
    deliverablesEn: [
      'Modular enterprise portal source code & RBAC matrix',
      'PostgreSQL schema and migration scripts',
      'ERP API synchronization adapter with retry queue',
      'Technical documentation and deployment runbook',
    ],
    deliverablesAr: [
      'الشيفرة المصدرية للبوابة المؤسسية ومصفوفة الصلاحيات',
      'مخطط قاعدة البيانات ونصوص الترحيل على PostgreSQL',
      'محول مزامنة الـ ERP المزود بطابور إعادة المحاولة',
      'التوثيق التقني ودليل التشغيل والنشر',
    ],
    resultsNoteEn:
      'Demonstration Architecture Notice: This case study presents a reference engineering architecture by Console. No fabricated client names or unverified quantitative ROI percentages are displayed.',
    resultsNoteAr:
      'تنويه معماري توضيحي: يمثل هذا النموذج معمارية مرجعية من هندسة Console لأغراض العرض التقني دون اختلاق أسماء عملاء أو أرقام عوائد غير موثقة.',
  },
  {
    slug: 'resilient-cloud-security-architecture',
    code: 'DEMO-02',
    isDemo: true,
    image: '/src/assets/images/project_cloud_infra_1795539304440.jpg',
    titleEn: 'High-Availability Cloud & Hardened Infrastructure Blueprint',
    titleAr: 'مخطط البنية السحابية عالية الاعتمادية والتحصين الأمني',
    industryEn: 'Finance & Technology',
    industryAr: 'القطاع المالي وشركات التكنولوجيا',
    categoryEn: 'Cloud Computing · Cybersecurity · Infrastructure',
    categoryAr: 'الحوسبة السحابية · الأمن السيبراني · البنية التحتية',
    technologies: ['AWS / Azure', 'Kubernetes', 'Nginx', 'TLS / SSL', 'Automated PITR Backups', 'CI/CD'],
    summaryEn:
      'Demonstration infrastructure architecture showing network isolation, zero-downtime containerized deployment, encrypted storage, and verifiable backup recovery.',
    summaryAr:
      'نموذج بنية تحتية توضيحي يستعرض عزل الشبكات، والنشر المستمر بالحاويات، والتخزين المشفر، وخطط النسخ الاحتياطي القابلة للاسترداد.',
    challengeEn:
      'Growing digital platforms outgrow single-server setups, facing downtime during updates, unsegmented database exposure, and untested backup recovery.',
    challengeAr:
      'تتجاوز المنصات المتنامية قدرات الخادم المنفرد، مما يعرضها للتوقف أثناء التحديثات أو انكشاف قواعد البيانات وغياب اختبار الاسترجاع.',
    objectivesEn: [
      'Isolate public application ingress from private database and cache subnets.',
      'Automate reproducible deployments through CI/CD pipelines.',
      'Establish encrypted off-site backups and documented recovery runbooks.',
    ],
    objectivesAr: [
      'عزل بوابة التطبيق العامة عن الشبكات الفرعية الخاصة بقواعد البيانات.',
      'أتمتة عمليات النشر المتكررة عبر خطوط CI/CD.',
      'تأمين نسخ احتياطي مشفر خارج الخادم مع توثيق خطة التعافي.',
    ],
    solutionEn:
      'A segmented virtual private cloud (VPC) topology pairing reverse-proxy TLS termination, containerized stateless application workers, private managed PostgreSQL, and scheduled snapshot verification.',
    solutionAr:
      'طوبولوجيا سحابية معزولة (VPC) تجمع بين إنهاء التشفير على الوكيل العكسي، وحاويات تطبيق قابلة للتوسع، وقواعد بيانات خاصة معزولة ونسخ احتياطي مجدول.',
    processEn: [
      'Threat surface and infrastructure capacity assessment.',
      'Private/public subnet segmentation and least-privilege IAM policy definition.',
      'CI/CD container build pipeline and automated health-check rollouts.',
      'Backup restoration verification and monitoring alert calibration.',
    ],
    processAr: [
      'تقييم السطح الأمني وسعة الأحمال التشغيلية.',
      'تقسيم الشبكات وتطبيق سياسات الصلاحيات بالحد الأدنى.',
      'بناء مسار النشر الآلي والتحقق من صحة الحاويات.',
      'اختبار استعادة النسخ الاحتياطي وضبط تنبيهات المراقبة.',
    ],
    deliverablesEn: [
      'Segmented VPC & firewall policy specification',
      'Containerized deployment & CI/CD pipeline configuration',
      'Encrypted automated backup & recovery runbook',
      'Infrastructure monitoring & alerting baseline',
    ],
    deliverablesAr: [
      'مواصفات تقسيم الشبكة وقواعد الجدار الناري',
      'إعدادات الحاويات ومسار النشر الآلي CI/CD',
      'دليل النسخ الاحتياطي المشفر وخطة التعافي',
      'منظومة مراقبة البنية التحتية والتنبيهات',
    ],
    resultsNoteEn:
      'Demonstration Architecture Notice: This blueprint demonstrates Console’s cloud and security engineering methodology. Actual capacity and latency targets are scoped per deployment.',
    resultsNoteAr:
      'تنويه معماري توضيحي: يستعرض هذا النموذج منهجية Console في السحابة والأمان؛ ويتم تحديد مؤشرات السعة والأداء الفعلية وفق كل مشروع على حدة.',
  },
  {
    slug: 'omnichannel-commerce-mobile-suite',
    code: 'DEMO-03',
    isDemo: true,
    image: '/src/assets/images/project_mobile_commerce_1795539305853.jpg',
    titleEn: 'Omnichannel E-Commerce Web & Mobile Suite',
    titleAr: 'منظومة التجارة الإلكترونية المتكاملة للويب والهواتف',
    industryEn: 'E-Commerce & Retail',
    industryAr: 'التجارة الإلكترونية والتجزئة',
    categoryEn: 'E-Commerce · Mobile App · Web Development',
    categoryAr: 'التجارة الإلكترونية · تطبيقات الهواتف · الويب',
    technologies: ['Next.js', 'Flutter', 'Node.js', 'PostgreSQL', 'Payment APIs', 'Courier APIs'],
    summaryEn:
      'Demonstration commerce platform uniting a fast bilingual storefront, cross-platform iOS/Android shopping app, and real-time merchant fulfillment dashboard.',
    summaryAr:
      'نموذج تجارة إلكترونية توضيحي يجمع بين متجر ويب ثنائي اللغة وتطبيق هاتف لنظامي iOS وAndroid ولوحة إدارة طلبات ومخزون لحظية.',
    challengeEn:
      'Retail brands frequently struggle when their website, mobile app, and physical stock run on disconnected systems, resulting in overselling and fragmented customer orders.',
    challengeAr:
      'تواجه العلامات التجارية تحديات متكررة عندما يعمل الموقع والتطبيق والمخزون على أنظمة منفصلة مما يسبب أخطاء الكميات وتشتت الطلبات.',
    objectivesEn: [
      'Share a single unified catalog, pricing, and inventory API across web and mobile.',
      'Deliver a fast bilingual (EN/AR) browsing and checkout flow.',
      'Integrate online payment callbacks, push notifications, and shipping label generation.',
    ],
    objectivesAr: [
      'توحيد واجهة الكتالوج والأسعار والمخزون بين الموقع وتطبيق الهاتف.',
      'تقديم تجربة تصفح وإتمام طلب سريعة باللغتين العربية والإنجليزية.',
      'ربط بوابات الدفع الإلكتروني وإشعارات الطلب وبوالص الشحن.',
    ],
    solutionEn:
      'An API-first commerce engine serving both a server-rendered Next.js storefront and a Flutter mobile application, backed by atomic stock reservation during checkout and real-time merchant order management.',
    solutionAr:
      'محرك تجارة إلكترونية يعتمد على API موحدة تخدم متجر ويب سريع وتطبيق Flutter، مع حجز ذري للمخزون عند الدفع ولوحة تحكم شاملة للتاجر.',
    processEn: [
      'Catalog structure, tax/shipping rules, and checkout state-machine design.',
      'Bilingual storefront & mobile UI/UX prototyping.',
      'Payment gateway, webhook idempotency, and courier API integration.',
      'Cross-device testing, store build preparation, and launch optimization.',
    ],
    processAr: [
      'تصميم هيكلة المنتجات وقواعد الضرائب والشحن ودورة الطلب.',
      'تصميم واجهات الويب وتطبيق الهاتف باللغتين.',
      'ربط بوابات الدفع الآمنة ومنع التكرار وربط شركات الشحن.',
      'الاختبار على الأجهزة وتجهيز نشر التطبيقات وتحسين الأداء.',
    ],
    deliverablesEn: [
      'Responsive bilingual web storefront',
      'Flutter Android & iOS mobile app builds',
      'Merchant order, catalog & inventory dashboard',
      'Verified payment & shipping API integrations',
    ],
    deliverablesAr: [
      'متجر ويب متجاوب ثنائي اللغة',
      'نسخ تطبيق الهاتف على أندرويد وiOS',
      'لوحة تحكم للتاجر للطلبات والمنتجات والمخزون',
      'تكامل مختبر لبوابات الدفع وشركات الشحن',
    ],
    resultsNoteEn:
      'Demonstration Architecture Notice: Presented as a sample system architecture by Console. No fabricated sales revenue or conversion percentages are claimed.',
    resultsNoteAr:
      'تنويه معماري توضيحي: يُعرض كنموذج هيكلي توضيحي من Console دون ادعاء أرقام مبيعات أو نسب تحويل وهمية.',
  },
];

export interface TechGroup {
  id: string;
  titleEn: string;
  titleAr: string;
  items: { name: string; noteEn: string; noteAr: string }[];
}

export const TECH_STACK: TechGroup[] = [
  {
    id: 'frontend',
    titleEn: 'Frontend Engineering',
    titleAr: 'هندسة الواجهات الأمامية',
    items: [
      { name: 'HTML5', noteEn: 'Semantic markup & accessibility', noteAr: 'هيكلة دلالية وإتاحة وصول' },
      { name: 'CSS3', noteEn: 'Modern layouts & Tailwind architecture', noteAr: 'تخطيطات حديثة وتصميم متجاوب' },
      { name: 'JavaScript', noteEn: 'Core browser & interactive runtime', noteAr: 'البرمجة التفاعلية للويب' },
      { name: 'TypeScript', noteEn: 'Type-safe production codebases', noteAr: 'تطوير آمن وموثوق بالأنواع' },
      { name: 'React', noteEn: 'Modular component interfaces', noteAr: 'واجهات تفاعلية معيارية' },
      { name: 'Next.js', noteEn: 'SSR, SEO & full-stack web apps', noteAr: 'تطبيقات ويب سريعة مهيأة لـ SEO' },
      { name: 'Vue.js', noteEn: 'Progressive reactive web interfaces', noteAr: 'واجهات ويب مرنة ومتفاعلة' },
    ],
  },
  {
    id: 'backend',
    titleEn: 'Backend & APIs',
    titleAr: 'الخلفية البرمجية وواجهات API',
    items: [
      { name: 'Node.js', noteEn: 'High-concurrency APIs & services', noteAr: 'خدمات وواجهات برمجية عالية الأداء' },
      { name: 'Python', noteEn: 'Automation, backends & data pipelines', noteAr: 'الأتمتة والخدمات ومعالجة البيانات' },
      { name: 'PHP', noteEn: 'Web systems & legacy modernization', noteAr: 'أنظمة الويب وتحديث المنصات القائمة' },
      { name: 'Laravel', noteEn: 'Structured enterprise web backends', noteAr: 'تطبيقات أعمال منظمة وسريعة التطوير' },
      { name: 'Django', noteEn: 'Secure, batteries-included Python backend', noteAr: 'إطار بايثون متين ومؤمّن' },
      { name: '.NET', noteEn: 'Enterprise corporate software systems', noteAr: 'أنظمة برمجية مؤسسية متقدمة' },
    ],
  },
  {
    id: 'mobile',
    titleEn: 'Mobile Development',
    titleAr: 'تطوير تطبيقات الهواتف',
    items: [
      { name: 'Flutter', noteEn: 'Unified iOS & Android engineering', noteAr: 'تطوير موحد لنظامي iOS وأندرويد' },
      { name: 'React Native', noteEn: 'Shared TypeScript mobile architecture', noteAr: 'تطبيقات هواتف بـ TypeScript' },
      { name: 'Kotlin', noteEn: 'Native Android platform engineering', noteAr: 'تطوير أصلي لنظام أندرويد' },
      { name: 'Swift', noteEn: 'Native iOS platform engineering', noteAr: 'تطوير أصلي لنظام iOS' },
    ],
  },
  {
    id: 'databases',
    titleEn: 'Databases & Caching',
    titleAr: 'قواعد البيانات والتخزين المؤقت',
    items: [
      { name: 'PostgreSQL', noteEn: 'Primary transactional relational store', noteAr: 'قاعدة بيانات علائقية متقدمة' },
      { name: 'MySQL', noteEn: 'Widely deployed relational web store', noteAr: 'قاعدة بيانات علائقية موثوقة' },
      { name: 'MongoDB', noteEn: 'Document storage for flexible schemas', noteAr: 'تخزين وثائقي لهياكل البيانات المرنة' },
      { name: 'Redis', noteEn: 'In-memory caching & job queues', noteAr: 'تخزين مؤقت سريع وطوابير مهام' },
    ],
  },
  {
    id: 'cloud',
    titleEn: 'Cloud & DevOps',
    titleAr: 'السحابة والبنية والتشغيل',
    items: [
      { name: 'AWS', noteEn: 'Scalable cloud compute & storage', noteAr: 'بنية سحابية وتخزين مرن' },
      { name: 'Microsoft Azure', noteEn: 'Enterprise & hybrid cloud workloads', noteAr: 'حلول سحابية مؤسسية وهجينة' },
      { name: 'Google Cloud', noteEn: 'Containers, cloud APIs & data services', noteAr: 'الحاويات والخدمات السحابية' },
      { name: 'Docker', noteEn: 'Reproducible containerized environments', noteAr: 'بيئات تشغيل معزولة ومتسقة' },
      { name: 'Kubernetes', noteEn: 'Orchestrated scaling where workload demands', noteAr: 'إدارة وتوسيع الحاويات للأحمال الكبيرة' },
      { name: 'CI/CD', noteEn: 'Automated testing & safe deployments', noteAr: 'الاختبار والنشر الآلي الآمن' },
    ],
  },
  {
    id: 'ai',
    titleEn: 'AI & Data Engineering',
    titleAr: 'الذكاء الاصطناعي وهندسة البيانات',
    items: [
      { name: 'Python', noteEn: 'Data processing & AI workflow scripting', noteAr: 'معالجة البيانات وأتمتة الذكاء الاصطناعي' },
      { name: 'Data Analytics', noteEn: 'ETL, BI dashboards & reporting pipelines', noteAr: 'استخلاص البيانات ولوحات التقارير' },
      { name: 'AI APIs', noteEn: 'Production chat, extraction & automation', noteAr: 'تكاملات المحادثة والأتمتة الذكية' },
      { name: 'Machine Learning', noteEn: 'Evaluated per project data feasibility', noteAr: 'يُقيّم حسب دراسة جدوى البيانات لكل مشروع' },
    ],
  },
];

export interface FaqItem {
  id: string;
  category: 'general' | 'engineering' | 'infrastructure' | 'support';
  qEn: string;
  qAr: string;
  aEn: string;
  aAr: string;
}

export const GLOBAL_FAQS: FaqItem[] = [
  {
    id: 'start-project',
    category: 'general',
    qEn: 'How do I start a software or technology project with Console?',
    qAr: 'كيف أبدأ مشروعاً برمجياً أو تقنياً مع Console؟',
    aEn: 'Start by sending your project overview through our Request a Quote form or directly via WhatsApp (01201847164). We review your goals, schedule a focused discovery discussion, and prepare a clear scope and architecture proposal.',
    aAr: 'يمكنك البدء بإرسال تفاصيل مشروعك عبر نموذج طلب عرض سعر أو مباشرة عبر واتساب (01201847164). نراجع أهدافك ونرتب جلسة استكشاف واضحة ثم نقدم مقترح النطاق والمعمارية.',
  },
  {
    id: 'pricing',
    category: 'general',
    qEn: 'How are software and IT projects priced?',
    qAr: 'كيف يتم تسعير مشاريع البرمجة وتكنولوجيا المعلومات؟',
    aEn: 'Because every business requirement, integration, and security scope differs, Console does not use arbitrary flat templates. Pricing is scoped transparently after discovery based on system complexity, required platforms, and milestone deliverables.',
    aAr: 'نظراً لاختلاف متطلبات كل نشاط وحجم التكاملات والأمان، لا نعتمد أسعاراً عشوائية موحدة. يتم التسعير بشفافية بعد مرحلة الاستكشاف بناءً على تعقيد النظام والمنصات المطلوبة ومراحل التنفيذ.',
  },
  {
    id: 'timelines',
    category: 'general',
    qEn: 'How long does development typically take?',
    qAr: 'كم يستغرق تنفيذ المشروع عادةً؟',
    aEn: 'Timelines depend on the service scope—focused corporate websites or system integrations naturally progress faster than multi-role enterprise software or native mobile suites. We provide an honest, milestone-by-milestone schedule once requirements are finalized.',
    aAr: 'تعتمد المدة الزمنية على حجم ونطاق المشروع؛ فالمواقع التعريفية أو تكاملات الربط البسيطة تُنجز أسرع من الأنظمة المؤسسية متعددة الأدوار أو تطبيقات الهواتف المتكاملة. نحدد جدولاً زمنياً واقعياً لكل مرحلة بعد تثبيت المتطلبات.',
  },
  {
    id: 'technologies',
    category: 'engineering',
    qEn: 'Which technologies does Console use to build systems?',
    qAr: 'ما التقنيات التي تعتمد عليها Console في بناء الأنظمة؟',
    aEn: 'We select proven, maintainable technologies suited to each project—including TypeScript, React, Next.js, Vue.js, Node.js, Python, Laravel, Django, .NET, Flutter, React Native, Kotlin, Swift, PostgreSQL, MySQL, MongoDB, Redis, Docker, and major cloud platforms.',
    aAr: 'نختار التقنيات الأنسب لطبيعة كل مشروع مثل TypeScript وReact وNext.js وVue.js وNode.js وPython وLaravel وDjango و.NET وFlutter وReact Native وKotlin وSwift وقواعد البيانات مثل PostgreSQL وMySQL وMongoDB وRedis مع Docker والسحابة.',
  },
  {
    id: 'website-maintenance',
    category: 'support',
    qEn: 'Do you provide website and software maintenance after launch?',
    qAr: 'هل توفرون صيانة للمواقع والبرمجيات بعد الإطلاق؟',
    aEn: 'Yes. Through our Technical Support & Maintenance service, we offer scheduled dependency updates, security patching, backup verification, bug fixes, and performance monitoring under clear support agreements.',
    aAr: 'نعم، عبر خدمة الدعم الفني والصيانة نوفر تحديثات دورية، وترقيعات أمنية، وفحص النسخ الاحتياطي، وإصلاح الأعطال، ومراقبة الأداء ضمن اتفاقيات دعم واضحة.',
  },
  {
    id: 'mobile-apps',
    category: 'engineering',
    qEn: 'Can you build mobile applications for both Android and iOS?',
    qAr: 'هل تطورون تطبيقات هواتف لنظامي أندرويد وiOS معاً؟',
    aEn: 'Yes. We engineer cross-platform applications with Flutter and React Native for unified delivery, as well as native Android (Kotlin) and iOS (Swift) builds when platform-specific capabilities require it.',
    aAr: 'نعم، نطور تطبيقات متعددة المنصات باستخدام Flutter وReact Native، كما نطور تطبيقات أصلية باستخدام Kotlin لأندرويد وSwift لـ iOS عند الحاجة.',
  },
  {
    id: 'cloud-solutions',
    category: 'infrastructure',
    qEn: 'Do you help migrate existing systems to AWS, Azure, or Google Cloud?',
    qAr: 'هل تساعدون في نقل الأنظمة الحالية إلى AWS أو Azure أو Google Cloud؟',
    aEn: 'Yes. We assess your current workloads, design secure VPC and IAM architectures, execute phased migrations, and configure automated cloud backups and cost monitoring.',
    aAr: 'نعم، نقيم أحمال العمل الحالية ونصمم معمارية الشبكة والصلاحيات وننفذ النقل على مراحل مع إعداد النسخ الاحتياطي ومراقبة التكلفة.',
  },
  {
    id: 'cybersecurity',
    category: 'infrastructure',
    qEn: 'What does your Cybersecurity service include?',
    qAr: 'ماذا تشمل خدمة الأمن السيبراني لديكم؟',
    aEn: 'We provide authorized application and network security assessments, vulnerability reviews, access control hardening, data protection policies, backup recovery planning, and team security awareness consulting.',
    aAr: 'تشمل تقييمات الأمان والثغرات للتطبيقات والشبكات، وتشديد صلاحيات الوصول، وسياسات حماية البيانات، وتخطيط التعافي والنسخ الاحتياطي، والتوعية الأمنية.',
  },
  {
    id: 'ai-integration',
    category: 'engineering',
    qEn: 'How do you approach Artificial Intelligence integration responsibly?',
    qAr: 'كيف تتعاملون مع دمج الذكاء الاصطناعي بشكل عملي ومسؤول؟',
    aEn: 'We separate immediately deployable AI capabilities—such as chatbots, document assistants, and API automation—from custom machine learning, NLP, or computer vision solutions that require an upfront data feasibility study.',
    aAr: 'نميز بوضوح بين حلول الذكاء الاصطناعي الجاهزة للتنفيذ الفوري مثل المساعدات الذكية والأتمتة، وبين نماذج التعلم الآلي والرؤية الحاسوبية التي تتطلب دراسة جدوى مسبقة للبيانات.',
  },
  {
    id: 'technical-support',
    category: 'support',
    qEn: 'What are your technical support arrangements and availability?',
    qAr: 'ما آلية الدعم الفني وساعات التغطية المتاحة؟',
    aEn: 'We define support hours, communication channels, and response targets explicitly in each service agreement so clients receive reliable, accountable support without exaggerated or unverified 24/7 claims.',
    aAr: 'نحدد ساعات الدعم وقنوات التواصل وأوقات الاستجابة بوضوح في كل اتفاقية خدمة، لضمان دعم عملي موثوق دون إطلاق وعود غير دقيقة.',
  },
  {
    id: 'communication',
    category: 'general',
    qEn: 'How does Console communicate progress during a project?',
    qAr: 'كيف تتابعون وتعرضون تقدم العمل أثناء تنفيذ المشروع؟',
    aEn: 'Projects follow structured milestones with regular staging previews, transparent progress updates, and direct communication channels so stakeholders can review work early and continuously.',
    aAr: 'تُدار المشاريع عبر مراحل واضحة مع معاينات تجريبية دورية وتحديثات شفافة وتواصل مباشر يتيح لك مراجعة المخرجات خطوة بخطوة.',
  },
  {
    id: 'post-launch',
    category: 'support',
    qEn: 'What happens after my project launches?',
    qAr: 'ماذا يحدث بعد إطلاق المشروع وتسليمه؟',
    aEn: 'Upon launch, you receive full operational handover documentation and source/account access. You can then opt into ongoing maintenance, cloud/server monitoring, digital marketing support, or phased feature expansion.',
    aAr: 'عند الإطلاق تستلم توثيق التشغيل الكامل وصلاحيات الوصول، ويمكنك بعدها الاستمرار معنا في الصيانة الدورية أو مراقبة الخوادم أو التسويق الرقمي أو تطوير مراحل جديدة.',
  },
];

export const UI_COPY: Record<Language, {
  nav: {
    home: string;
    about: string;
    services: string;
    industries: string;
    portfolio: string;
    process: string;
    technology: string;
    faq: string;
    contact: string;
    quote: string;
    whatsapp: string;
    startProject: string;
    menu: string;
    close: string;
  };
  hero: {
    tagline: string;
    headline: string;
    supporting: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    whatsappCta: string;
  };
  home: {
    servicesTitle: string;
    servicesSubtitle: string;
    viewAllServices: string;
    aboutTitle: string;
    aboutSubtitle: string;
    learnMoreAbout: string;
    processTitle: string;
    processSubtitle: string;
    viewFullProcess: string;
    industriesTitle: string;
    industriesSubtitle: string;
    viewAllIndustries: string;
    portfolioTitle: string;
    portfolioSubtitle: string;
    viewAllPortfolio: string;
    techTitle: string;
    techSubtitle: string;
    viewFullStack: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
    ctaWhatsapp: string;
  };
  common: {
    inquireWhatsapp: string;
    viewDetails: string;
    backToServices: string;
    backToPortfolio: string;
    demoLabel: string;
    readCaseStudy: string;
    discussSimilar: string;
    officialWhatsapp: string;
  };
  footer: {
    description: string;
    navigationTitle: string;
    servicesTitle: string;
    companyTitle: string;
    connectTitle: string;
    privacy: string;
    terms: string;
    copyright: string;
    whatsappLabel: string;
    socialNote: string;
  };
}> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      industries: 'Industries',
      portfolio: 'Portfolio',
      process: 'Process',
      technology: 'Technology',
      faq: 'FAQ',
      contact: 'Contact',
      quote: 'Request a Quote',
      whatsapp: 'WhatsApp',
      startProject: 'Start a Project',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      tagline: 'Smart Innovation, Precise Coding.',
      headline: "WE BUILD WHAT'S NEXT.",
      supporting:
        'Engineering intelligent digital solutions through innovation, precision, and world-class software development.',
      description:
        'From powerful websites and mobile applications to enterprise systems, artificial intelligence, and advanced IT infrastructure — Console transforms complex ideas into reliable digital products.',
      primaryCta: 'START YOUR PROJECT',
      secondaryCta: 'EXPLORE OUR SERVICES',
      whatsappCta: 'CHAT ON WHATSAPP',
    },
    home: {
      servicesTitle: 'Comprehensive Technology & Software Services',
      servicesSubtitle:
        'Eighteen specialized engineering, infrastructure, intelligence, and digital commerce capabilities structured for clarity and execution.',
      viewAllServices: 'Explore All 18 Services',
      aboutTitle: 'PRECISION IN EVERY LINE OF CODE.',
      aboutSubtitle:
        'Console transforms business requirements and ambitious concepts into carefully engineered, maintainable digital systems.',
      learnMoreAbout: 'About Console',
      processTitle: 'Structured Engineering Process',
      processSubtitle:
        'Seven disciplined stages guiding every project from initial requirements discovery to long-term operational support.',
      viewFullProcess: 'Explore Our Process',
      industriesTitle: 'Industries We Serve',
      industriesSubtitle:
        'Sector-specific software, cloud, and automation engineering tailored to operational realities.',
      viewAllIndustries: 'View All 14 Industries',
      portfolioTitle: 'Architectural Showcase & Case Studies',
      portfolioSubtitle:
        'Reference software, cloud, and omnichannel commerce architectures demonstrating Console’s engineering standards.',
      viewAllPortfolio: 'Explore Portfolio & Case Studies',
      techTitle: 'Core Technology Stack',
      techSubtitle:
        'Proven languages, frameworks, databases, and cloud platforms selected objectively for each workload.',
      viewFullStack: 'View Complete Technology Stack',
      ctaTitle: 'Ready to Engineer Your Next Digital System?',
      ctaDesc:
        'Share your project objectives through our structured quote form or start a direct conversation on WhatsApp.',
      ctaButton: 'Request a Project Quote',
      ctaWhatsapp: 'Message Console on WhatsApp',
    },
    common: {
      inquireWhatsapp: 'Inquire on WhatsApp',
      viewDetails: 'Service Details',
      backToServices: 'All Services',
      backToPortfolio: 'All Projects & Case Studies',
      demoLabel: 'Demonstration Architecture',
      readCaseStudy: 'View Case Study',
      discussSimilar: 'Discuss Similar Solution on WhatsApp',
      officialWhatsapp: 'Official WhatsApp',
    },
    footer: {
      description:
        'International software development, cloud computing, cybersecurity, AI integration, and technology consulting studio built on precision and reliability.',
      navigationTitle: 'Navigation',
      servicesTitle: 'Service Categories',
      companyTitle: 'Resources & Legal',
      connectTitle: 'Direct Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      copyright: '© 2026 Console. All rights reserved.',
      whatsappLabel: 'WhatsApp: 01201847164',
      socialNote: 'Official social icons displayed pending verified profile URLs.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن Console',
      services: 'الخدمات',
      industries: 'القطاعات',
      portfolio: 'الأعمال',
      process: 'منهجية العمل',
      technology: 'التقنيات',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
      quote: 'اطلب عرض مشروع',
      whatsapp: 'واتساب',
      startProject: 'ابدأ مشروعك',
      menu: 'القائمة',
      close: 'إغلاق',
    },
    hero: {
      tagline: 'ابتكار ذكي، برمجة دقيقة.',
      headline: 'نبني ما هو قادم.',
      supporting:
        'نهندس حلولاً رقمية ذكية عبر الابتكار والدقة وتطوير البرمجيات وفق أعلى المعايير العالمية.',
      description:
        'من المواقع الاحترافية وتطبيقات الهواتف إلى الأنظمة المؤسسية والذكاء الاصطناعي والبنية التحتية المتقدمة — تحوّل Console الأفكار المعقدة إلى منتجات رقمية موثوقة.',
      primaryCta: 'ابدأ مشروعك',
      secondaryCta: 'استكشف خدماتنا',
      whatsappCta: 'تواصل عبر واتساب',
    },
    home: {
      servicesTitle: 'منظومة شاملة لخدمات البرمجة والتكنولوجيا',
      servicesSubtitle:
        'ثماني عشرة خدمة متخصصة في هندسة البرمجيات والبنية التحتية والذكاء الاصطناعي والتجارة الرقمية بوضوح ودقة تنفيذية.',
      viewAllServices: 'استعراض جميع الخدمات (18)',
      aboutTitle: 'دقة متناهية في كل سطر برمجي.',
      aboutSubtitle:
        'تركز Console على تحويل الأفكار ومتطلبات الأعمال إلى أنظمة رقمية مصممة بعناية وقابلة للصيانة والتوسع.',
      learnMoreAbout: 'تعرّف على Console',
      processTitle: 'منهجية عمل هندسية منظمة',
      processSubtitle:
        'سبع مراحل دقيقة تقود كل مشروع من استكشاف المتطلبات وحتى الدعم الفني المستمر.',
      viewFullProcess: 'تفاصيل منهجية العمل',
      industriesTitle: 'القطاعات التي نخدمها',
      industriesSubtitle:
        'حلول برمجية وسحابية وأتمتة مصممة لتلائم المتطلبات التشغيلية لكل قطاع.',
      viewAllIndustries: 'استعراض جميع القطاعات (14)',
      portfolioTitle: 'نماذج المشاريع ودراسات الحالة',
      portfolioSubtitle:
        'معماريات مرجعية وتوضيحية في البرمجيات والسحابة والتجارة الإلكترونية تعكس معايير Console الهندسية.',
      viewAllPortfolio: 'استعراض المشاريع ودراسات الحالة',
      techTitle: 'المكدس التقني الأساسي',
      techSubtitle:
        'لغات وأطر عمل وقواعد بيانات ومنصات سحابية معتمدة نختارها بموضوعية حسب طبيعة كل نظام.',
      viewFullStack: 'عرض جميع التقنيات',
      ctaTitle: 'هل أنت مستعد لبناء نظامك الرقمي القادم؟',
      ctaDesc:
        'شاركنا تفاصيل مشروعك عبر نموذج طلب العرض أو ابدأ محادثة مباشرة مع فريقنا عبر واتساب.',
      ctaButton: 'اطلب عرض سعر لمشروعك',
      ctaWhatsapp: 'راسل Console على واتساب',
    },
    common: {
      inquireWhatsapp: 'استفسر عبر واتساب',
      viewDetails: 'تفاصيل الخدمة',
      backToServices: 'جميع الخدمات',
      backToPortfolio: 'جميع المشاريع ودراسات الحالة',
      demoLabel: 'نموذج معماري توضيحي',
      readCaseStudy: 'عرض دراسة الحالة',
      discussSimilar: 'ناقش تنفيذ حل مماثل عبر واتساب',
      officialWhatsapp: 'واتساب الرسمي',
    },
    footer: {
      description:
        'شركة متخصصة في تطوير البرمجيات والحوسبة السحابية والأمن السيبراني والذكاء الاصطناعي والاستشارات التقنية وفق معايير الدقة والموثوقية.',
      navigationTitle: 'التنقل',
      servicesTitle: 'فئات الخدمات',
      companyTitle: 'المصادر والسياسات',
      connectTitle: 'التواصل المباشر',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
      copyright: '© 2026 Console. جميع الحقوق محفوظة.',
      whatsappLabel: 'واتساب: 01201847164',
      socialNote: 'أيقونات الشبكات الاجتماعية معروضة دون روابط لحين إضافة الحسابات الرسمية الموثقة.',
    },
  },
};
