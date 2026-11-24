import React, { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ALL_SERVICES } from '../data/services';
import { buildStructuredProjectMessage, buildWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './Icons';

interface ProjectInquiryFormProps {
  preselectedService?: string;
}

export function ProjectInquiryForm({ preselectedService }: ProjectInquiryFormProps) {
  const { lang } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(
    preselectedService || (lang === 'ar' ? ALL_SERVICES[0].titleAr : ALL_SERVICES[0].titleEn)
  );
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);
  const [preparedMessage, setPreparedMessage] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const labels =
    lang === 'ar'
      ? {
          fullName: 'الاسم الكامل *',
          fullNamePh: 'أدخل اسمك الكامل',
          email: 'البريد الإلكتروني *',
          emailPh: 'name@company.com',
          phone: 'رقم الهاتف / واتساب *',
          phonePh: '+20 120 000 0000',
          company: 'اسم الشركة / الجهة',
          companyPh: 'اختياري',
          service: 'الخدمة المطلوبة *',
          budget: 'الميزانية التقديرية',
          timeline: 'الجدول الزمني المتوقع',
          description: 'وصف المشروع والمتطلبات *',
          descriptionPh: 'اشرح أهداف المشروع، والميزات الأساسية، والأنظمة المراد ربطها...',
          submit: 'إعداد وإرسال الطلب عبر واتساب',
          note: 'عند الضغط على إرسال، يتم التحقق من بياناتك وتجهيز رسالة منظمة لإرسالها مباشرة عبر واتساب الرسمي (01201847164) دون ادعاء حفظها في قاعدة بيانات خارجية.',
          successTitle: 'تم تجهيز رسالة مشروعك بنجاح',
          successDesc:
            'تم إعداد تفاصيل طلبك في رسالة منظمة. إذا لم تفتح نافذة واتساب تلقائياً، اضغط الزر أدناه للمتابعة مباشرة.',
          openWa: 'فتح المحادثة في واتساب (01201847164)',
          copyBtn: 'نسخ نص الرسالة',
          copiedBtn: 'تم النسخ',
          budgets: [
            'يتم التحديد بعد الاستكشاف',
            'نطاق أولي / MVP',
            'نطاق متوسط (تطبيق / منصة أعمال)',
            'نطاق مؤسسي متكامل',
          ],
          timelines: [
            'مرن / حسب نطاق العمل',
            'خلال 1 – 2 شهر',
            'خلال 2 – 4 أشهر',
            'أكثر من 4 أشهر',
          ],
          errName: 'يرجى إدخال الاسم الكامل.',
          errEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
          errPhone: 'يرجى إدخال رقم هاتف صحيح.',
          errDesc: 'يرجى كتابة وصف مختصر للمشروع (15 حرفاً على الأقل).',
        }
      : {
          fullName: 'Full Name *',
          fullNamePh: 'Enter your full name',
          email: 'Email Address *',
          emailPh: 'name@company.com',
          phone: 'Phone / WhatsApp Number *',
          phonePh: '+20 120 000 0000',
          company: 'Company Name',
          companyPh: 'Optional',
          service: 'Service Required *',
          budget: 'Project Budget',
          timeline: 'Project Timeline',
          description: 'Project Description *',
          descriptionPh: 'Describe your business goals, core capabilities, and any integrations required...',
          submit: 'Prepare & Send via WhatsApp',
          note: 'Submitting validates your details locally and generates a structured inquiry message sent directly to Console’s official WhatsApp (01201847164). No external database storage is claimed.',
          successTitle: 'Your Structured Project Inquiry Is Ready',
          successDesc:
            'Your project brief has been formatted for WhatsApp. If the conversation did not open automatically, click below to launch WhatsApp directly.',
          openWa: 'Open WhatsApp Conversation (01201847164)',
          copyBtn: 'Copy Formatted Message',
          copiedBtn: 'Copied',
          budgets: [
            'To be scoped after discovery',
            'Focused Initial Scope / MVP',
            'Standard Business Platform',
            'Enterprise / Multi-System Scope',
          ],
          timelines: [
            'Flexible / Scope-dependent',
            'Within 1–2 months',
            'Within 2–4 months',
            '4+ months phased rollout',
          ],
          errName: 'Please enter your full name.',
          errEmail: 'Please enter a valid email address.',
          errPhone: 'Please enter a valid phone number.',
          errDesc: 'Please describe your project requirements (at least 15 characters).',
        };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = labels.errName;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      nextErrors.email = labels.errEmail;
    }
    const digitsOnly = phone.replace(/[^\d+]/g, '');
    if (digitsOnly.length < 7) {
      nextErrors.phone = labels.errPhone;
    }
    if (!description.trim() || description.trim().length < 15) {
      nextErrors.description = labels.errDesc;
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg = buildStructuredProjectMessage(
      {
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        company: company.trim(),
        service,
        budget: budget || labels.budgets[0],
        timeline: timeline || labels.timelines[0],
        description: description.trim(),
      },
      lang
    );

    const url = buildWhatsAppUrl(msg);
    setPreparedMessage(msg);
    setPreparedUrl(url);
    setCopied(false);

    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (win) {
      win.opener = null;
    }
  };

  const handleCopy = async () => {
    if (!preparedMessage) return;
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore clipboard denial
    }
  };

  const inputClass =
    'w-full bg-[#050505] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#666666] focus:border-white focus:outline-none transition-colors';

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="ci-fullname" className="block text-xs font-medium text-[#C7C7C7] mb-2">
              {labels.fullName}
            </label>
            <input
              id="ci-fullname"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder={labels.fullNamePh}
              className={inputClass}
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-white/90 underline underline-offset-4">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="ci-email" className="block text-xs font-medium text-[#C7C7C7] mb-2">
              {labels.email}
            </label>
            <input
              id="ci-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={labels.emailPh}
              className={inputClass}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-white/90 underline underline-offset-4">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="ci-phone" className="block text-xs font-medium text-[#C7C7C7] mb-2">
              {labels.phone}
            </label>
            <input
              id="ci-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={labels.phonePh}
              className={inputClass}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-white/90 underline underline-offset-4">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="ci-company" className="block text-xs font-medium text-[#C7C7C7] mb-2">
              {labels.company}
            </label>
            <input
              id="ci-company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder={labels.companyPh}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="ci-service" className="block text-xs font-medium text-[#C7C7C7] mb-2">
              {labels.service}
            </label>
            <select
              id="ci-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={inputClass}
            >
              {ALL_SERVICES.map((item) => {
                const label =
                  lang === 'ar'
                    ? `${item.number} — ${item.titleAr}`
                    : `${item.number} — ${item.titleEn}`;
                const value = lang === 'ar' ? item.titleAr : item.titleEn;
                return (
                  <option key={item.slug} value={value} className="bg-black text-white">
                    {label}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="ci-budget" className="block text-xs font-medium text-[#C7C7C7] mb-2">
              {labels.budget}
            </label>
            <select
              id="ci-budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={inputClass}
            >
              {labels.budgets.map((b) => (
                <option key={b} value={b} className="bg-black text-white">
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="ci-timeline" className="block text-xs font-medium text-[#C7C7C7] mb-2">
              {labels.timeline}
            </label>
            <select
              id="ci-timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className={inputClass}
            >
              {labels.timelines.map((tl) => (
                <option key={tl} value={tl} className="bg-black text-white">
                  {tl}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="ci-desc" className="block text-xs font-medium text-[#C7C7C7] mb-2">
              {labels.description}
            </label>
            <textarea
              id="ci-desc"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={labels.descriptionPh}
              className={inputClass}
            />
            {errors.description && (
              <p className="mt-1.5 text-xs text-white/90 underline underline-offset-4">
                {errors.description}
              </p>
            )}
          </div>
        </div>

        <p className="text-xs text-[#888888] leading-relaxed">{labels.note}</p>

        <button
          type="submit"
          className="h-12 px-7 bg-white text-black text-sm font-semibold hover:bg-[#E5E5E5] transition-colors inline-flex items-center justify-center gap-2.5 cursor-pointer"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>{labels.submit}</span>
        </button>
      </form>

      {preparedUrl && (
        <div
          role="status"
          aria-live="polite"
          className="border border-white/30 bg-[#0A0A0A] p-6 space-y-4"
        >
          <div className="flex items-center gap-2.5 text-white font-semibold text-base">
            <Check className="w-5 h-5" />
            <span>{labels.successTitle}</span>
          </div>
          <p className="text-sm text-[#C7C7C7]">{labels.successDesc}</p>
          <pre className="p-4 bg-black border border-white/15 text-xs text-[#C7C7C7] whitespace-pre-wrap font-mono-tech leading-relaxed">
            {preparedMessage}
          </pre>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={preparedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 bg-white text-black text-xs font-semibold inline-flex items-center gap-2 hover:bg-[#E5E5E5] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{labels.openWa}</span>
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="h-11 px-5 border border-white/25 bg-black text-white text-xs font-medium inline-flex items-center gap-2 hover:border-white transition-colors cursor-pointer"
            >
              <Copy className="w-4 h-4" />
              <span>{copied ? labels.copiedBtn : labels.copyBtn}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
