/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, Phone, Mail, MapPin, Eye, Star, ShieldCheck, Youtube, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { translations } from '../translations';
import { SchoolProfile, Language } from '../types';

interface FooterProps {
  lang: Language;
  profile: SchoolProfile;
  setActiveTab: (tab: string) => void;
  visitorCount: number;
}

export default function Footer({
  lang,
  profile,
  setActiveTab,
  visitorCount
}: FooterProps) {
  const t = translations[lang];

  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formattedVisitors = new Intl.NumberFormat(lang === 'id' ? 'id-ID' : 'en-US').format(visitorCount);

  return (
    <footer className="relative border-t border-zinc-200 dark:border-[#FFD700]/10 bg-zinc-50 dark:bg-luxury-darker text-zinc-750 dark:text-zinc-300">
      {/* Decorative Golden Line Divider */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#0A1640] via-[#FFD700] to-[#000820]" />

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 font-sans">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FF8F00] p-1.5 shadow-lg shadow-[#FFD700]/10">
                <GraduationCap className="h-6 w-6 text-[#0A1640]" />
              </div>
              <div>
                <h3 className="text-md font-bold tracking-wide font-serif bg-gradient-to-r from-amber-600 to-amber-700 dark:from-[#FFD700] dark:via-[#FFB300] dark:to-[#FFB300] bg-clip-text text-transparent">
                  SMK UNGGULAN
                </h3>
                <p className="-mt-1 text-[9px] text-amber-600 dark:text-[#FFD700] font-sans tracking-widest uppercase font-semibold">
                  Nasional & Internasional
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              {lang === 'id' ? profile.tagline : profile.taglineEn}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="flex items-center gap-1.5 rounded-full bg-amber-50 dark:bg-[#030c25] px-3 py-1 text-[10px] font-bold text-amber-705 dark:text-[#FFD700] border border-amber-300/30 dark:border-[#FFD700]/30">
                <Star className="h-3 w-3 fill-amber-500 text-amber-500 dark:fill-[#FFD700] dark:text-[#FFB300]" />
                <span>AKREDITASI NEGARA A</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-zinc-200/50 dark:bg-white/5 px-2.5 py-1 text-[10px] font-mono text-zinc-550 dark:text-zinc-400 border border-zinc-305 dark:border-transparent">
                <ShieldCheck className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                <span>NPSN: {profile.npsn}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-605 dark:text-[#FFD700] font-sans">
              {lang === 'id' ? 'Tautan Navigasi' : 'Quick Navigation'}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex flex-col gap-2">
                <button onClick={() => handleNav('beranda')} className="text-left text-zinc-500 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-[#FFD700] transition-colors font-medium cursor-pointer">
                  {t.beranda}
                </button>
                <button onClick={() => handleNav('profil')} className="text-left text-zinc-500 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-[#FFD700] transition-colors font-medium font-sans cursor-pointer">
                  {t.profil}
                </button>
                <button onClick={() => handleNav('kompetensi')} className="text-left text-zinc-500 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-[#FFD700] transition-colors font-medium cursor-pointer">
                  {t.kompetensi}
                </button>
                <button onClick={() => handleNav('fasilitas')} className="text-left text-zinc-500 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-[#FFD700] transition-colors font-medium cursor-pointer">
                  {t.fasilitas}
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => handleNav('berita')} className="text-left text-zinc-500 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-[#FFD700] transition-colors font-medium cursor-pointer">
                  {t.berita}
                </button>
                <button onClick={() => handleNav('ppdb')} className="text-left text-zinc-500 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-[#FFD700] transition-colors font-medium cursor-pointer">
                  {t.ppdb}
                </button>
                <button onClick={() => handleNav('bkk')} className="text-left text-zinc-500 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-[#FFD700] transition-colors font-medium cursor-pointer">
                  {t.bkk}
                </button>
                <button onClick={() => handleNav('kontak')} className="text-left text-zinc-500 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-[#FFD700] transition-colors font-medium cursor-pointer">
                  {t.kontak}
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-605 dark:text-[#FFD700] font-sans">
              {lang === 'id' ? 'Hubungi Kami' : 'Get In Touch'}
            </h4>
            <div className="flex flex-col gap-3 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-[#FFD700]" />
                <span className="leading-relaxed">{profile.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-600 dark:text-[#FFD700]" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-600 dark:text-[#FFD700]" />
                <span className="break-all">{profile.email}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Extra interactive utilities */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-605 dark:text-[#FFD700] font-sans">
              {lang === 'id' ? 'Media Sosial & Trafik' : 'Social Media & Traffic'}
            </h4>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-200/50 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-white dark:hover:from-[#FFD700] dark:hover:to-[#FF8F00] dark:hover:text-[#0A1640] transition-all">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-200/50 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-white dark:hover:from-[#FFD700] dark:hover:to-[#FF8F00] dark:hover:text-[#0A1640] transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-200/50 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-white dark:hover:from-[#FFD700] dark:hover:to-[#FF8F00] dark:hover:text-[#0A1640] transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-200/50 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-white dark:hover:from-[#FFD700] dark:hover:to-[#FF8F00] dark:hover:text-[#0A1640] transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            {/* Visitor Counter Widget */}
            <div className="rounded-xl bg-white dark:bg-[#0a1640]/45 p-3.5 border border-zinc-200 dark:border-[#FFD700]/15 text-xs shadow-sm dark:shadow-inner">
              <div className="flex items-center gap-2 text-amber-600 dark:text-[#FFD700]">
                <Eye className="h-4 w-4" />
                <span className="font-semibold">{lang === 'id' ? 'Statistik Pengunjung' : 'Traffic Stats'}</span>
              </div>
              <div className="mt-1 flex items-baseline gap-1.5 font-mono">
                <span className="text-lg font-bold text-zinc-800 dark:text-white tracking-widest">{formattedVisitors}</span>
                <span className="text-[10px] text-emerald-605 dark:text-emerald-400">● {lang === 'id' ? 'Langsung' : 'Active'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Base Ribbon */}
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-250 dark:border-white/10 pt-6 text-center text-xs text-zinc-500 md:flex-row md:justify-between md:text-left">
          <p>
            © 2012-{new Date().getFullYear()} {lang === 'id' ? profile.name : profile.nameEn}. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-[11px] font-semibold text-zinc-500">
            <a href="#rules" className="hover:text-amber-600 dark:hover:text-[#FFD700] transition-colors">{lang === 'id' ? 'Sitemap' : 'Sitemap'}</a>
            <span>•</span>
            <a href="#rules" className="hover:text-amber-600 dark:hover:text-[#FFD700] transition-colors">{lang === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}</a>
            <span>•</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1 hover:text-amber-600 dark:hover:text-[#FFD700] transition-colors cursor-pointer"
            >
              <span>{lang === 'id' ? 'Ke Atas' : 'To Top'}</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
