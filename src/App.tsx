/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useSchoolState } from './useSchoolState';
import { translations } from './translations';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import {
  BerandaSection,
  ProfilSection,
  KompetensiSection,
  FasilitasSection,
  BeritaSection,
  GaleriSection,
  PrestasiSection,
  PPDBSection,
  BKKSection,
  AlumniSection,
  KontakSection
} from './components/PageSections';
import {
  RunningTextWidget,
  PopupWidget,
  WhatsAppButton,
  AcademicCalendarWidget,
  DownloadAreaWidget
} from './components/ExtraWidgets';

export default function App() {
  const state = useSchoolState();
  const { profile, runningText, popup, academicEvents, downloads, visitorCount } = state;

  // Language management
  const [lang, setLang] = useState<'id' | 'en'>('id');

  // Dark/Light theme management
  const [dark, setDark] = useState<boolean>(true);

  // Active navigation tab router
  const [activeTab, setActiveTab] = useState<string>('beranda');

  // Sync dark theme on root HTML node
  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  const t = translations[lang];

  // Helper function to render active page sections dynamically
  const renderActiveSection = () => {
    const props = { state, lang, setActiveTab };
    switch (activeTab) {
      case 'beranda':
        return <BerandaSection {...props} />;
      case 'profil':
        return <ProfilSection {...props} />;
      case 'kompetensi':
        return <KompetensiSection {...props} />;
      case 'fasilitas':
        return <FasilitasSection {...props} />;
      case 'berita':
        return <BeritaSection {...props} />;
      case 'galeri':
        return <GaleriSection {...props} />;
      case 'prestasi':
        return <PrestasiSection {...props} />;
      case 'ppdb':
        return <PPDBSection {...props} />;
      case 'bkk':
        return <BKKSection {...props} />;
      case 'alumni':
        return <AlumniSection {...props} />;
      case 'kontak':
        return <KontakSection {...props} />;
      case 'admin':
        return <AdminPanel state={state} activeLanguage={lang} />;
      default:
        return <BerandaSection {...props} />;
    }
  };

  // Determine if we should show side-by-side Academic content in sub-pages for maximum visual fidelity
  const isHomeOrAdmin = activeTab === 'beranda' || activeTab === 'admin' || activeTab === 'kontak';

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      dark 
        ? 'bg-luxury-darker text-zinc-100' 
        : 'bg-zinc-50 text-zinc-800'
    }`} id="main-app-container">
      
      {/* 1. Header with navigation nodes, theme switches, and language updates */}
      <Header
        lang={lang}
        setLang={setLang}
        dark={dark}
        setDark={setDark}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        schoolName={lang === 'id' ? profile.name : profile.nameEn}
      />

      {/* 2. Top Scrolling News Ribbon (Running Text Feature) */}
      <RunningTextWidget data={runningText} lang={lang} />

      {/* 3. Global Information Popup on load */}
      <PopupWidget data={popup} lang={lang} />

      {/* 4. Main Body Container */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8 md:px-6 relative">
        
        {isHomeOrAdmin ? (
          // Full-width view for landing pages and administrative menus
          <div className="w-full">
            {renderActiveSection()}
          </div>
        ) : (
          // Elite 2/3 and 1/3 layout for Academic Sub-sections to display the Calender and Downloads
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            
            {/* Core Section Workspace */}
            <div className="lg:col-span-2 space-y-6">
              {renderActiveSection()}
            </div>

            {/* Sidebar Utility Rail containing Academic Calendar and Downloads */}
            <div className="space-y-6 lg:sticky lg:top-24 h-fit">
              
              {/* Academic Calendar Widget */}
              <AcademicCalendarWidget events={academicEvents} lang={lang} />

              {/* Download Center Files Area */}
              <DownloadAreaWidget files={downloads} lang={lang} />

              {/* Quick Contact Small Badge */}
              <div className="rounded-2xl bg-gradient-to-br from-[#0A1640] to-luxury-darker p-5 text-white border border-[#FFD700]/20 text-xs shadow-xl shadow-[#FFD700]/5">
                <p className="font-extrabold uppercase text-[#FFD700] tracking-widest text-[10px]">UNIT PPDB SEKOLAH</p>
                <p className="mt-1 leading-normal text-zinc-300">
                  Konsultasi perihal kelengkapan raport, beasiswa sosial dan asrama dapat diajukan secara langsung ke panitia penyeleksian kami.
                </p>
                <div className="mt-3.5 pt-3.5 border-t border-[#FFD700]/10 flex items-center gap-2">
                  <span className="rounded bg-emerald-500 text-neutral-900 font-mono px-2 py-0.5 text-[10px] font-extrabold">ONLINE</span>
                  <span className="text-[#FFD700] font-bold">WA: {profile.phone}</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>

      {/* 5. Floating WhatsApp Button Bubble */}
      <WhatsAppButton phone={profile.whatsApp} />

      {/* 6. Professional Footer including analytics simulation */}
      <Footer
        lang={lang}
        profile={profile}
        setActiveTab={setActiveTab}
        visitorCount={visitorCount}
      />
    </div>
  );
}
