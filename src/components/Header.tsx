/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Globe, Sun, Moon, GraduationCap, ArrowRight } from 'lucide-react';
import { translations } from '../translations';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  dark: boolean;
  setDark: (dark: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  schoolName: string;
}

export default function Header({
  lang,
  setLang,
  dark,
  setDark,
  activeTab,
  setActiveTab,
  schoolName
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const menuItems = [
    { id: 'beranda', label: t.beranda },
    { id: 'profil', label: t.profil },
    { id: 'kompetensi', label: t.kompetensi },
    { id: 'fasilitas', label: t.fasilitas },
    { id: 'berita', label: t.berita },
    { id: 'galeri', label: t.galeri },
    { id: 'prestasi', label: t.prestasi },
    { id: 'ppdb', label: t.ppdb },
    { id: 'bkk', label: t.bkk },
    { id: 'alumni', label: t.alumni },
    { id: 'kontak', label: t.kontak }
  ];

  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-[#FFD700]/20 bg-white/95 dark:bg-[#0A1640]/95 backdrop-blur-md text-zinc-800 dark:text-white shadow-md dark:shadow-xl">
      {/* Upper info ribbon for high fidelity */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-gradient-to-r from-[#FFD700] via-[#FFB300] to-[#FF8F00] text-[10px] font-extrabold text-[#0A1640] tracking-widest uppercase">
        <span>SMK PUSAT KEUNGGULAN (CENTER OF EXCELLENCE) • AKREDITASI NEGARA TERBAIK</span>
        <div className="flex gap-4 items-center font-mono">
          <span>NPSN: 20409832</span>
          <span>•</span>
          <span>EMAIL: info@smkmodernnusantara.sch.id</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6 h-20">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNav('beranda')}
          className="flex cursor-pointer items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          id="header-brand-logo"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FF8F00] p-1 shadow-lg ring-2 ring-[#FFD700]/30 shadow-[#FFD700]/20">
            <GraduationCap className="h-6 w-6 text-[#0A1640]" />
          </div>
          <div>
            <h1 className="text-[#0A1640] dark:text-[#FFD700] text-md font-extrabold font-serif tracking-wide">
              SMK UNGGULAN
            </h1>
            <p className="-mt-1 text-[9px] text-amber-600 dark:text-[#FFD700] font-sans tracking-widest uppercase font-semibold">
              KAMPUS NUSANTARA
            </p>
          </div>
        </div>

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`relative px-3 py-2 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                activeTab === item.id
                  ? 'text-amber-600 dark:text-[#FFD700] bg-zinc-100 dark:bg-white/5 ring-1 ring-amber-500/20 dark:ring-[#FFD700]/25'
                  : 'text-zinc-650 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-[#FFD700] hover:bg-zinc-100 dark:hover:bg-white/5'
              }`}
              id={`nav-${item.id}`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0.5 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded bg-amber-500 dark:bg-[#FFD700]" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button cluster */}
        <div className="flex items-center gap-3">
          {/* Language Switch */}
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-[#FFD700]/20 bg-zinc-50 dark:bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-zinc-650 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-amber-600 dark:hover:text-[#FFD700] transition-all duration-300"
            title="Toggle Language"
            id="lang-toggle-btn"
          >
            <Globe className="h-3.5 w-3.5 text-amber-500 dark:text-[#FFD700]" />
            <span className="uppercase font-mono text-[11px] font-bold">{lang}</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="rounded-lg border border-zinc-200 dark:border-[#FFD700]/20 bg-zinc-50 dark:bg-white/5 p-1.5 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-[#FFD700] transition-all"
            title="Toggle Light/Dark Mode"
            id="theme-toggle-btn"
          >
            {dark ? <Sun className="h-4 w-4 text-[#FFD700]" /> : <Moon className="h-4 w-4 text-amber-600" />}
          </button>

          {/* Golden Admissions Button */}
          <button
            onClick={() => handleNav('ppdb')}
            className="hidden lg:flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#FF8F00] px-4 py-2.5 text-xs font-extrabold text-[#0A1640] shadow-xl shadow-[#FFD700]/10 transition-all hover:scale-105 hover:shadow-[#FFD700]/25"
            id="register-ppdb-btn"
          >
            <span>{t.ppdbOnline}</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#0A1640]" />
          </button>

          {/* Custom Web Portal trigger */}
          <button
            onClick={() => handleNav('admin')}
            className="hidden lg:flex px-3 py-2 text-[10px] font-black border border-amber-500/40 dark:border-[#FFD700]/40 text-amber-600 dark:text-[#FFD700] rounded-lg hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FF8F00] hover:text-[#0A1640] uppercase tracking-widest transition-all"
          >
            {t.adminPanel}
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg bg-zinc-100 dark:bg-white/5 p-2 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 lg:hidden"
            id="mobile-drawer-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-200 dark:border-[#FFD700]/20 bg-white dark:bg-[#0A1640] p-4 shadow-inner lg:hidden absolute top-auto left-0 w-full max-h-[85vh] overflow-y-auto z-45 animate-fade-in">
          <nav className="flex flex-col gap-1.5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-[#FFD700] to-[#FF8F00] text-[#0A1640]'
                    : 'text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-amber-600 dark:hover:text-[#FFD700]'
                }`}
                id={`mobile-nav-${item.id}`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && <span className="h-2 w-2 rounded-full bg-[#0A1640]" />}
              </button>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-zinc-200 dark:border-[#FFD700]/10 pt-3">
              <button
                onClick={() => handleNav('admin')}
                className={`w-full rounded-lg py-2 text-center text-xs font-bold border border-amber-500/40 dark:border-[#FFD700]/40 text-amber-600 dark:text-[#FFD700] hover:bg-amber-500/10 dark:hover:bg-[#FFD700]/10 ${
                  activeTab === 'admin' ? 'bg-amber-500 dark:bg-[#FFD700] text-[#0A1640]' : ''
                }`}
              >
                {t.adminPanel}
              </button>
              <button
                onClick={() => handleNav('ppdb')}
                className="w-full rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FF8F00] py-2 text-center text-xs font-bold text-[#0A1640]"
              >
                {t.ppdbRegisterNowBtn}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
