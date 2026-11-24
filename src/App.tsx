/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { getServiceBySlug } from './data/services';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProcessPage } from './pages/ProcessPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { ContactPage, QuotePage } from './pages/ContactAndQuotePages';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPage, TermsPage } from './pages/LegalPages';

function RouteView() {
  const { currentPath, lang } = useApp();

  useEffect(() => {
    const base =
      lang === 'ar'
        ? 'Console — ابتكار ذكي، برمجة دقيقة.'
        : 'Console — Smart Innovation, Precise Coding.';

    if (currentPath === '/') {
      document.title = base;
    } else if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      const srv = getServiceBySlug(slug);
      document.title = srv
        ? `${lang === 'ar' ? srv.titleAr : srv.titleEn} | Console`
        : base;
    } else {
      const titles: Record<string, { en: string; ar: string }> = {
        '/about': { en: 'About Console', ar: 'عن Console' },
        '/services': { en: 'All Services (18)', ar: 'جميع الخدمات (18)' },
        '/industries': { en: 'Industries We Serve', ar: 'القطاعات التي نخدمها' },
        '/process': { en: 'Our Process', ar: 'منهجية العمل' },
        '/technology': { en: 'Technology Stack', ar: 'المكدس التقني' },
        '/contact': { en: 'Contact Us', ar: 'تواصل معنا' },
        '/quote': { en: 'Request a Quote', ar: 'اطلب عرض مشروع' },
        '/faq': { en: 'FAQ', ar: 'الأسئلة الشائعة' },
        '/privacy': { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
        '/terms': { en: 'Terms & Conditions', ar: 'الشروط والأحكام' },
      };
      const match = titles[currentPath];
      document.title = match ? `${lang === 'ar' ? match.ar : match.en} | Console` : base;
    }
  }, [currentPath, lang]);

  if (currentPath === '/') return <HomePage />;
  if (currentPath === '/about') return <AboutPage />;
  if (currentPath === '/services') return <ServicesPage />;
  if (currentPath.startsWith('/services/')) {
    return <ServiceDetailPage slug={currentPath.replace('/services/', '')} />;
  }
  if (currentPath === '/industries') return <IndustriesPage />;
  if (currentPath === '/process') return <ProcessPage />;
  if (currentPath === '/technology') return <TechnologyPage />;
  if (currentPath === '/contact') return <ContactPage />;
  if (currentPath === '/quote') return <QuotePage />;
  if (currentPath === '/faq') return <FaqPage />;
  if (currentPath === '/privacy') return <PrivacyPage />;
  if (currentPath === '/terms') return <TermsPage />;

  return <HomePage />;
}

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-1">
          <RouteView />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </AppProvider>
  );
}
