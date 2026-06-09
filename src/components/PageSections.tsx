/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  MapPin,
  Calendar,
  Lock,
  Globe,
  Award,
  Search,
  BookOpen,
  Send,
  Users,
  Eye,
  CheckCircle,
  FileDown,
  Info,
  DollarSign,
  Download,
  Phone,
  HelpCircle,
  Mail,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { translations } from '../translations';
import { SchoolState } from '../useSchoolState';
import { Competency, News, GalleryItem, Achievement, JobVacancy, Alumnus, Facility } from '../types';

interface SectionProps {
  state: SchoolState;
  lang: 'id' | 'en';
  setActiveTab: (tab: string) => void;
}

// ----------------- 1. BERANDA (HOME) SECTION -----------------
export function BerandaSection({ state, lang, setActiveTab }: SectionProps) {
  const t = translations[lang];
  const { profile, competencies, achievements, news, alumni, bkk } = state;

  return (
    <div className="space-y-16 animate-fade-in" id="beranda-section">
      {/* Premium Hero Banner with Large Building Photo */}
      <div className="relative overflow-hidden rounded-3xl bg-[#000820] text-white shadow-2xl border border-[#FFD700]/10">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200"
            alt={t.schoolBuildingPhoto}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1640] via-[#000820]/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center space-y-6 md:py-28">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3.5 py-1.5 text-[11px] font-black text-[#FFD700] border border-[#FFD700]/25 uppercase tracking-widest">
            👑 {lang === 'id' ? 'SMK Pusat Keunggulan Nasional' : 'National Center of Excellence'}
          </span>
          <h1 className="text-3xl font-black font-serif tracking-tight leading-tight md:text-5xl">
            {lang === 'id' ? t.welcomeTitle : 'Welcome to'}{' '}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB300] to-[#FF8F00] bg-clip-text text-transparent">
              {lang === 'id' ? profile.name : profile.nameEn}
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-xs md:text-sm text-zinc-300 font-sans tracking-wide leading-relaxed">
            {lang === 'id' ? profile.tagline : profile.taglineEn}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('ppdb')}
              className="flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 text-xs font-black text-[#0A1640] uppercase tracking-wider shadow-xl shadow-[#FFD700]/10 hover:scale-105 transition-all"
            >
              <span>{t.ctaPpdb}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={`https://wa.me/${profile.whatsApp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-[#FFD700]/30 bg-white/5 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/10 hover:text-[#FFD700] transition-all"
            >
              <span>{t.ctaContact}</span>
            </a>
          </div>
        </div>
      </div>

      {/* National Stats Counter Ribbon */}
      <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#0A1640] dark:to-luxury-darker p-6 text-zinc-800 dark:text-white shadow-md dark:shadow-xl md:grid-cols-4 border border-zinc-200 dark:border-[#FFD700]/20 shadow-[#FFD700]/5">
        <div className="text-center">
          <h3 className="text-2xl font-black text-amber-600 dark:text-[#FFD700] font-mono tracking-wider">{profile.stats.students}+</h3>
          <p className="text-[10px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-300 mt-1">{t.statSiswa}</p>
        </div>
        <div className="text-center border-l border-zinc-200 dark:border-white/10">
          <h3 className="text-2xl font-black text-amber-600 dark:text-[#FFD700] font-mono tracking-wider">{profile.stats.teachers}+</h3>
          <p className="text-[10px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-300 mt-1">{t.statGuru}</p>
        </div>
        <div className="text-center border-l border-zinc-200 dark:border-white/10">
          <h3 className="text-2xl font-black text-amber-600 dark:text-[#FFD700] font-mono tracking-wider">{profile.stats.alumni}+</h3>
          <p className="text-[10px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-300 mt-1">{t.statAlumni}</p>
        </div>
        <div className="text-center border-l border-zinc-200 dark:border-white/10">
          <h3 className="text-2xl font-black text-amber-600 dark:text-[#FFD700] font-mono tracking-wider">{profile.stats.achievements}+</h3>
          <p className="text-[10px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-300 mt-1">{t.statPrestasi}</p>
        </div>
      </div>

      {/* Speech Section (Sambutan Kepala Sekolah) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white dark:bg-[#0a1640]/40 p-8 rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 shadow-md">
        <div className="md:col-span-1">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-amber-400/40 dark:border-[#FFD700]/30 group">
            <img
              src={profile.schoolHead.image}
              alt={profile.schoolHead.name}
              className="w-full aspect-[4/5] object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0A1640] via-[#0A1640]/95 to-transparent p-4 text-white">
              <p className="text-xs font-black tracking-tight">{profile.schoolHead.name}</p>
              <p className="text-[9px] text-[#FFD700] font-medium uppercase tracking-widest">{profile.schoolHead.role}</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-8 bg-amber-500 dark:bg-[#FFD700]" />
            <h3 className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-[#FFD700]">{t.speechTitle}</h3>
          </div>
          <h4 className="text-xl font-bold font-serif text-slate-800 dark:text-[#FFD700]">{t.speechSub}</h4>
          <p className="text-xs md:text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed font-sans italic">
            "{lang === 'id' ? profile.schoolHead.speech : profile.schoolHead.speechEn}"
          </p>
          <button
            onClick={() => setActiveTab('profil')}
            className="flex items-center gap-1 text-xs font-extrabold text-amber-600 dark:text-[#FFD700] hover:text-amber-500 dark:hover:text-[#FF8F00] uppercase tracking-widest transition-colors cursor-pointer"
          >
            <span>Selengkapnya Mengenai Profil →</span>
          </button>
        </div>
      </div>

      {/* Competencies Preview Section */}
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-xl font-black text-amber-600 dark:text-[#FFD700] uppercase tracking-wider font-serif">{t.competencyTitle}</h2>
          <p className="text-xs text-zinc-550 dark:text-zinc-400 max-w-lg mx-auto">{t.competencySub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competencies.map((comp) => (
            <div
              key={comp.id}
              onClick={() => setActiveTab('kompetensi')}
              className="group cursor-pointer rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 bg-white dark:bg-[#0a1640]/35 p-5 shadow-sm dark:shadow-lg transition-all hover:border-amber-400 dark:hover:border-[#FFD700]/50 hover:-translate-y-1 md:p-6"
            >
              <div className="relative h-44 overflow-hidden rounded-xl bg-[#000820]">
                <img src={comp.image} alt={comp.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-3 left-3 rounded-lg bg-gold-gradient text-[#0A1640] px-3 py-1 text-[9.5px] font-black tracking-widest uppercase">
                  Major: {comp.code}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-bold text-zinc-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#FFD700] transition-colors font-serif">
                {lang === 'id' ? comp.name : comp.nameEn}
              </h3>
              <p className="mt-1 text-[11px] text-zinc-650 dark:text-zinc-400 line-clamp-2 md:text-xs">
                {lang === 'id' ? comp.description : comp.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Industrial Partners Block */}
      <div className="space-y-6 text-center">
        <div className="space-y-1">
          <h2 className="text-xl font-black text-amber-600 dark:text-[#FFD700] uppercase tracking-wider font-serif">{t.partnersTitle}</h2>
          <p className="text-xs text-zinc-555 dark:text-zinc-400">{t.partnersSub}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
          {bkk.partners.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-2 rounded-xl bg-white dark:bg-[#0a1640]/55 py-2.5 px-4.5 border border-zinc-200 dark:border-[#FFD700]/15 hover:border-amber-400 dark:hover:border-[#FFD700]/40 shadow-sm transition-all hover:scale-105"
            >
              <span className="text-[11px] font-extrabold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest font-mono">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ----------------- 2. PROFIL SEKOLAH SECTION -----------------
export function ProfilSection({ state, lang }: SectionProps) {
  const t = translations[lang];
  const { profile } = state;

  return (
    <div className="space-y-10 animate-fade-in" id="profil-section">
      <div className="text-center space-y-1 border-b border-zinc-200 dark:border-[#FFD700]/10 pb-4">
        <h2 className="text-xl font-black text-amber-600 dark:text-[#FFD700] uppercase tracking-wider font-serif">PROFIL LENGKAP SEKOLAH</h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Menyajikan data administratif, sejarah, visi, misi, dan struktur organisasi resmi.</p>
      </div>

      {/* History */}
      <div className="space-y-3 bg-white dark:bg-[#0a1640]/30 p-6 rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-6 bg-amber-500 dark:bg-[#FFD700]" />
          <h3 className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-[#FFD700] font-serif">{t.historyTitle}</h3>
        </div>
        <p className="text-xs md:text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed font-sans">
          {lang === 'id' ? profile.history : profile.historyEn}
        </p>
      </div>

      {/* Vision & Mission Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <div className="rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#0A1640] dark:to-[#000820] p-6 text-zinc-800 dark:text-white border border-zinc-200 dark:border-[#FFD700]/25 shadow-md dark:shadow-xl shadow-[#FFD700]/5">
          <h4 className="text-sm font-black uppercase tracking-widest text-amber-600 dark:text-[#FFD700] font-serif">{t.visionTitle}</h4>
          <p className="mt-4 text-xs md:text-sm leading-relaxed text-zinc-650 dark:text-zinc-100 italic font-sans">
            "{lang === 'id' ? profile.vision : profile.visionEn}"
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 bg-white dark:bg-[#0a1640]/40 p-6 shadow-sm">
          <h4 className="text-sm font-black uppercase tracking-widest text-amber-600 dark:text-[#FFD700] font-serif">{t.missionTitle}</h4>
          <ul className="mt-4 space-y-3.5 text-xs md:text-sm text-zinc-650 dark:text-zinc-300">
            {(lang === 'id' ? profile.mission : profile.missionEn).map((item, idx) => (
              <li key={idx} className="flex gap-2 leading-relaxed">
                <span className="text-amber-500 dark:text-[#FFD700] font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Accreditation Metadata card */}
      <div className="rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 bg-white dark:bg-[#0a1640]/40 p-6 shadow-md dark:shadow-xl">
        <h4 className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-[#FFD700] border-l-2 border-amber-500 dark:border-[#FFD700] pl-2">{t.identityTitle}</h4>
        <div className="mt-4 grid grid-cols-2 gap-4 text-xs md:grid-cols-4">
          <div>
            <span className="text-[10px] text-zinc-505 dark:text-zinc-400 block uppercase font-semibold">Akreditasi Negara</span>
            <strong className="text-amber-605 dark:text-[#FFD700] text-sm mt-0.5 block font-serif">{profile.accreditation}</strong>
          </div>
          <div>
            <span className="text-[10px] text-zinc-505 dark:text-zinc-400 block uppercase font-semibold">Nomor Pokok (NPSN)</span>
            <strong className="text-amber-605 dark:text-[#FFD700] text-sm mt-0.5 block font-mono">{profile.npsn}</strong>
          </div>
          <div>
            <span className="text-[10px] text-zinc-505 dark:text-zinc-400 block uppercase font-semibold">Tahun Berdiri</span>
            <strong className="text-amber-605 dark:text-[#FFD700] text-sm mt-0.5 block font-serif">{profile.establishedYear}</strong>
          </div>
          <div>
            <span className="text-[10px] text-zinc-505 dark:text-zinc-400 block uppercase font-semibold">Kemitraan Kerja</span>
            <strong className="text-amber-605 dark:text-[#FFD700] text-sm mt-0.5 block">25+ Perusahaan</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------- 3. KOMPETENSI KEAHLIAN (MAJORS) -----------------
export function KompetensiSection({ state, lang }: SectionProps) {
  const t = translations[lang];
  const { competencies } = state;
  const [activeComp, setActiveComp] = useState<string>(competencies[0]?.id || 'rpl');

  const selected = competencies.find(c => c.id === activeComp) || competencies[0];

  return (
    <div className="space-y-10 animate-fade-in" id="kompetensi-section">
      <div className="text-center space-y-1 border-b border-zinc-200 dark:border-[#FFD700]/10 pb-4">
        <h2 className="text-xl font-black text-amber-600 dark:text-[#FFD700] uppercase tracking-wider font-serif">KOMPETENSI KEAHLIAN UNGGULAN</h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Jelajahi spesialisasi koding, jaringan, desain kreatif, atau finansial korporat.</p>
      </div>

      {/* Tabs buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {competencies.map(comp => (
          <button
            key={comp.id}
            onClick={() => setActiveComp(comp.id)}
            className={`rounded-xl px-4 py-2 text-xs font-bold uppercase transition-all tracking-wider ${
              activeComp === comp.id
                ? 'bg-gold-gradient text-[#0A1640] font-black shadow-lg shadow-[#FFD700]/10 ring-1 ring-[#FFD700]/20'
                : 'bg-white hover:bg-zinc-100 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#FFD700]/10 shadow-sm'
            }`}
          >
            {comp.code}
          </button>
        ))}
      </div>

      {/* Extended Selected Competency Details */}
      {selected && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 bg-white dark:bg-[#0a1640]/40 p-6 md:p-8 animate-fade-in shadow-md dark:shadow-xl shadow-[#FFD700]/5">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="inline-block rounded bg-gold-gradient px-3 py-1.5 text-[10px] font-black text-[#0A1640] uppercase tracking-widest mb-3">
                PROGRAM SPESIALISASI {selected.code}
              </span>
              <h3 className="text-xl font-bold font-serif text-amber-600 dark:text-[#FFD700]">
                {lang === 'id' ? selected.name : selected.nameEn}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed font-sans">
                {lang === 'id' ? selected.description : selected.descriptionEn}
              </p>
            </div>

            {/* Sub attributes: Facilities & Careers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h4 className="text-xs font-black text-amber-600 dark:text-[#FFD700] uppercase tracking-widest">{t.subFacilities}</h4>
                <ul className="space-y-1.5 text-xs text-zinc-650 dark:text-zinc-300">
                  {(lang === 'id' ? selected.facilities : selected.facilitiesEn).map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-amber-500 dark:text-[#FFD700] font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-black text-amber-600 dark:text-[#FFD700] uppercase tracking-widest">{t.subCareers}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {(lang === 'id' ? selected.careerOpportunities : selected.careerOpportunitiesEn).map((c, i) => (
                    <span key={i} className="rounded-lg bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-[#FFD700]/10 py-1.5 px-3 text-[10px] font-bold text-zinc-700 dark:text-zinc-350 tracking-wide">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-zinc-200 dark:border-[#FFD700]/10 pt-4">
              <div className="space-y-2">
                <h4 className="text-xs font-black text-amber-600 dark:text-[#FFD700] uppercase tracking-widest">{t.subCertifications}</h4>
                <div className="space-y-1.5 text-xs">
                  {(lang === 'id' ? selected.certifications : selected.certificationsEn).map((cert, idx) => (
                    <p key={idx} className="bg-amber-50/40 dark:bg-[#FFD700]/5 border border-amber-300/20 dark:border-[#FFD700]/15 rounded-lg p-2.5 flex gap-2 items-center text-zinc-700 dark:text-zinc-300">
                      <CheckCircle className="h-3.5 w-3.5 text-amber-500 dark:text-[#FFD700] shrink-0" />
                      <span>{cert}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-black text-amber-600 dark:text-[#FFD700] uppercase tracking-widest">{t.subAchievements}</h4>
                <div className="space-y-1.5 text-xs">
                  {(lang === 'id' ? selected.achievements : selected.achievementsEn).map((ach, idx) => (
                    <p key={idx} className="bg-amber-50/40 dark:bg-[#FFD700]/5 border border-amber-300/20 dark:border-[#FFD700]/15 rounded-lg p-2.5 flex gap-2 items-center text-zinc-700 dark:text-zinc-300">
                      <Award className="h-3.5 w-3.5 text-amber-500 dark:text-[#FFD700] shrink-0" />
                      <span>{ach}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative h-64 md:h-80 overflow-hidden rounded-xl border border-zinc-200 dark:border-[#FFD700]/15 bg-[#000820]">
              <img src={selected.image} alt={selected.name} className="h-full w-full object-cover" />
            </div>
            <div className="rounded-xl bg-amber-50/30 dark:bg-[#0a1640]/50 p-4.5 border border-amber-200/50 dark:border-[#FFD700]/15 text-xs text-zinc-650 dark:text-zinc-300 leading-relaxed">
              <p className="font-extrabold text-amber-700 dark:text-[#FFD700] uppercase tracking-wider">Kelas Industri Tersertifikasi</p>
              <p className="mt-1 leading-relaxed">
                Jurusan ini bekerjasama langsung dengan platform pengembangan kurikulum tier-1 untuk jaminan sinkronisasi ujian kelulusan berlisensi internasional.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ----------------- 4. FASILITAS (FACILITIES) -----------------
export function FasilitasSection({ state, lang }: SectionProps) {
  const { facilities } = state;
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Laboratorium Komputer', 'Laboratorium Jaringan', 'Perpustakaan', 'Ruang Kelas', 'Mushola', 'Lapangan', 'Ruang Praktik'];

  const filtered = filter === 'All'
    ? facilities
    : facilities.filter(f => f.category === filter);

  return (
    <div className="space-y-10 animate-fade-in" id="fasilitas-section">
      <div className="text-center space-y-1 border-b border-zinc-200 dark:border-[#FFD700]/10 pb-4">
        <h2 className="text-xl font-black text-amber-600 dark:text-[#FFD700] uppercase tracking-wider font-serif">EKSPLORASI FASILITAS KAMPUS</h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">SMK Modern menyediakan prasarana belajar kualifikasi tertinggi bagi kegiatan vokasi siswa.</p>
      </div>

      {/* Category Buttons Filter */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-lg px-3 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all ${
              filter === cat
                ? 'bg-gold-gradient text-[#0A1640] font-black shadow-lg shadow-[#FFD700]/10 ring-1 ring-[#FFD700]/25'
                : 'bg-white hover:bg-zinc-100 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#FFD700]/10 shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="group rounded-xl border border-zinc-200 dark:border-[#FFD700]/15 p-4 shadow-md dark:shadow-xl bg-white dark:bg-[#0a1640]/40 hover:border-amber-400 dark:hover:border-[#FFD700]/40 transition-all duration-300">
            <div className="relative h-44 overflow-hidden rounded-lg bg-[#000820]">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute bottom-2.5 right-2.5 rounded bg-gold-gradient text-[#0A1640] px-2.5 py-1 text-[8px] font-black uppercase tracking-widest leading-none">
                {lang === 'id' ? item.category : item.categoryEn}
              </span>
            </div>
            <h3 className="mt-3 text-xs md:text-sm font-bold text-zinc-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#FFD700] font-serif transition-colors">{lang === 'id' ? item.name : item.nameEn}</h3>
            <p className="mt-1 text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">{lang === 'id' ? item.description : item.descriptionEn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------- 5. BERITA (NEWS) -----------------
export function BeritaSection({ state, lang }: SectionProps) {
  const t = translations[lang];
  const { news } = state;

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCat, setActiveCat] = useState<'Semua' | 'Akademik' | 'Non-Akademik' | 'Pengumuman' | 'Event'>('Semua');
  const [selectedPost, setSelectedPost] = useState<News | null>(null);

  const filteredNews = news.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.titleEn.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCat === 'Semua' || post.category === activeCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-8 animate-fade-in" id="berita-section">
      <div className="text-center space-y-1 border-b border-zinc-200 dark:border-[#FFD700]/10 pb-4">
        <h2 className="text-xl font-black text-amber-600 dark:text-[#FFD700] uppercase tracking-wider font-serif">{t.newsTitle}</h2>
        <p className="text-xs text-zinc-550 dark:text-zinc-400">{t.newsSub}</p>
      </div>

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Search */}
        <div className="relative md:col-span-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.newsSearchPlaceholder}
            className="w-full rounded-xl border border-zinc-200 dark:border-[#FFD700]/15 bg-white dark:bg-[#0a1640]/55 p-3 pr-10 text-xs text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-1 focus:ring-amber-500 dark:focus:ring-[#FFD700] shadow-sm"
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-amber-500 dark:text-[#FFD700]" />
        </div>

        {/* Categories Tab list */}
        <div className="flex flex-wrap gap-1 md:col-span-2 md:justify-end">
          {(['Semua', 'Akademik', 'Non-Akademik', 'Pengumuman', 'Event'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-[10px] md:text-xs font-bold transition-all uppercase ${
                activeCat === cat
                  ? 'bg-gold-gradient text-[#0A1640] font-black shadow-lg shadow-[#FFD700]/10 ring-1 ring-[#FFD700]/25'
                  : 'bg-white hover:bg-zinc-100 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#FFD700]/10 shadow-sm'
              }`}
            >
              {cat === 'Semua' ? t.all : cat}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid Column */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map(item => (
          <div
            key={item.id}
            onClick={() => setSelectedPost(item)}
            className="group cursor-pointer rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 p-4 shadow-md dark:shadow-xl bg-white dark:bg-[#0a1640]/40 hover:border-amber-400 dark:hover:border-[#FFD700]/40 transition-all duration-300"
          >
            <div className="relative h-44 overflow-hidden rounded-xl bg-[#000820]">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute top-2.5 left-2.5 rounded bg-gold-gradient text-[#0A1640] px-2.5 py-1 text-[8.5px] font-black uppercase tracking-widest leading-none">
                {lang === 'id' ? item.category : item.categoryEn}
              </span>
            </div>
            
            <div className="mt-3.5 space-y-1.5">
              <span className="text-[9.5px] text-zinc-500 dark:text-zinc-400 block font-mono font-semibold uppercase">{item.date} • {t.views}: {item.views}</span>
              <h3 className="text-xs md:text-sm font-bold text-zinc-805 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#FFD700] transition-colors font-serif line-clamp-2">
                {lang === 'id' ? item.title : item.titleEn}
              </h3>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 line-clamp-3 font-sans leading-relaxed font-normal">
                {lang === 'id' ? item.content : item.contentEn}
              </p>
              
              <button className="flex items-center gap-1.5 pt-1.5 text-[10px] font-black text-amber-600 dark:text-[#FFD700] hover:text-amber-500 dark:hover:text-[#FF8F00] uppercase tracking-widest leading-none">
                <span>{t.readMore}</span>
                <ArrowRight className="h-2.5 w-2.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <p className="text-center text-xs text-zinc-500 font-mono py-12">Tidak ditemukan berita yang cocok.</p>
      )}

      {/* news detailed reader dialog */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm animate-fade-in" id="news-details-dialog-overlay">
          <div className="w-full max-w-2xl rounded-2xl border border-zinc-200 dark:border-[#FFD700]/20 bg-white dark:bg-[#000820] p-6 shadow-2xl relative space-y-4 max-h-[85vh] overflow-y-auto" id="news-details-dialog-content">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute right-4 top-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 dark:bg-white/5 dark:border-[#FFD700]/10 p-1.5 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-350 cursor-pointer"
            >
              ✕
            </button>

            <span className="inline-block rounded bg-gold-gradient text-[#0A1640] px-3.5 py-1.5 text-[9px] font-black uppercase tracking-widest leading-none">
              {lang === 'id' ? selectedPost.category : selectedPost.categoryEn}
            </span>

            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono uppercase">{selectedPost.date} • {t.views}: {selectedPost.views}</p>
            
            <h2 className="text-md md:text-lg font-black text-amber-6 font-serif leading-tight text-zinc-800 dark:text-[#FFD700]">
              {lang === 'id' ? selectedPost.title : selectedPost.titleEn}
            </h2>

            <img src={selectedPost.image} className="w-full aspect-video rounded-xl object-cover border border-zinc-200 dark:border-[#FFD700]/15 shadow-xl" />

            <div className="space-y-3 pt-2 text-xs md:text-sm text-zinc-650 dark:text-zinc-300 font-normal leading-relaxed font-sans">
              <p>{lang === 'id' ? selectedPost.content : selectedPost.contentEn}</p>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setSelectedPost(null)}
                className="rounded-lg bg-gold-gradient text-[#0A1640] px-5 py-2.5 text-xs font-black uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// ----------------- 6. GALERI (GALLERY) -----------------
export function GaleriSection({ state, lang }: SectionProps) {
  const { gallery } = state;
  const [category, setCategory] = useState<string>('All');

  const categories = ['All', 'Kegiatan Sekolah', 'Kegiatan Jurusan', 'Kunjungan Industri', 'Lomba', 'Wisuda', 'Dokumentasi'];

  const filtered = category === 'All'
    ? gallery
    : gallery.filter(item => item.category === category);

  return (
    <div className="space-y-10 animate-fade-in" id="galeri-section">
      <div className="text-center space-y-1 border-b border-zinc-200 dark:border-[#FFD700]/10 pb-4">
        <h2 className="text-xl font-black text-amber-605 dark:text-[#FFD700] uppercase tracking-wider font-serif">GALERI DOKUMENTASI SEKOLAH</h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Arsip dokumentasi kegiatan kesiswaan, prestasi kompetisi, dan wisuda alumni.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-lg px-3.5 py-1 text-[10px] md:text-xs font-bold transition-all uppercase ${
              category === c
                ? 'bg-gold-gradient text-[#0A1640] font-black shadow-lg shadow-[#FFD700]/10 ring-1 ring-[#FFD700]/25'
                : 'bg-white hover:bg-zinc-100 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#FFD700]/10'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div key={item.id} className="group overflow-hidden rounded-2xl bg-[#000820] border border-zinc-200 dark:border-[#FFD700]/15 hover:border-amber-400 dark:hover:border-[#FFD700]/40 shadow-md dark:shadow-xl relative aspect-square transition-all duration-300">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010825] via-[#010825]/40 to-transparent p-4 flex flex-col justify-end text-white">
              <span className="rounded bg-gold-gradient text-[#0A1640] px-2 py-0.5 text-[8px] font-black uppercase tracking-widest w-max mb-1.5 leading-tight">{lang === 'id' ? item.category : item.categoryEn}</span>
              <h4 className="text-xs font-black tracking-tight font-serif text-[#FFD700]">{lang === 'id' ? item.title : item.titleEn}</h4>
              <p className="text-[10px] text-zinc-300 mt-1 line-clamp-2 md:text-xs font-sans font-normal leading-tight">{lang === 'id' ? item.description : item.descriptionEn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------- 7. PRESTASI (ACHIEVEMENTS) -----------------
export function PrestasiSection({ state, lang }: SectionProps) {
  const { achievements } = state;
  const [filter, setFilter] = useState<'All' | 'Siswa' | 'Guru' | 'Sekolah'>('All');

  const filtered = filter === 'All'
    ? achievements
    : achievements.filter(ach => ach.category === filter);

  return (
    <div className="space-y-10 animate-fade-in" id="prestasi-section">
      <div className="text-center space-y-1 border-b border-zinc-200 dark:border-[#FFD700]/10 pb-4">
        <h2 className="text-xl font-black text-amber-605 dark:text-[#FFD700] uppercase tracking-wider font-serif">KUMPULAN PRESTASI TERBAIK</h2>
        <p className="text-xs text-zinc-550 dark:text-zinc-400">Bukti keunggulan daya saing dalam ajang talenta nasional dan internasional.</p>
      </div>

      {/* Filters list */}
      <div className="flex justify-center gap-1.5">
        {(['All', 'Siswa', 'Guru', 'Sekolah'] as const).map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all uppercase ${
              filter === cat
                ? 'bg-gold-gradient text-[#0A1640] font-black shadow-lg shadow-[#FFD700]/10 ring-1 ring-[#FFD700]/25'
                : 'bg-white hover:bg-zinc-100 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#FFD700]/10 shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of trophies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div key={item.id} className="group rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 p-4 shadow-md dark:shadow-xl bg-white dark:bg-[#0a1640]/40 hover:border-amber-400 dark:hover:border-[#FFD700]/40 transition-all duration-300 space-y-3.5 animate-fade-in">
            <div className="relative h-44 overflow-hidden rounded-xl bg-[#000820] border border-zinc-200 dark:border-[#FFD700]/10">
              <img src={item.image} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-2.5 left-2.5 rounded bg-gold-gradient text-[#0A1640] px-2.5 py-1 text-[8.5px] font-black uppercase tracking-widest">{lang === 'id' ? item.level : item.levelEn}</span>
            </div>
            <div>
              <span className="text-[8.5px] bg-amber-50 dark:bg-[#FFD700]/10 text-amber-705 dark:text-[#FFD700] border border-amber-200 dark:border-[#FFD700]/25 font-black uppercase px-2 py-0.5 rounded tracking-wider w-max block mb-1.5">{lang === 'id' ? item.category : item.categoryEn}</span>
              <h3 className="text-xs md:text-sm font-bold text-zinc-805 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#FFD700] font-serif transition-colors leading-tight">{lang === 'id' ? item.title : item.titleEn}</h3>
              <p className="text-[10px] text-amber-600 dark:text-[#FFD700]/70 font-mono mt-1 font-bold uppercase">{lang === 'id' ? 'Oleh' : 'By'}: {item.winner}</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed font-sans">{lang === 'id' ? item.description : item.descriptionEn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------- 8. PPDB ONLINE SECTION -----------------
export function PPDBSection({ state, lang }: SectionProps) {
  const t = translations[lang];
  const { ppdb, profile, addMessage } = state;
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    major: 'rpl',
    notes: ''
  });
  const [success, setSuccess] = useState(false);

  // Interactive tuition fee estimate calculator state
  const [tuitionWave, setTuitionWave] = useState<'normal' | 'ranking_beasiswa'>('normal');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Harap isi nama dan nomor telepon aktif.");
      return;
    }

    addMessage({
      name: `Siswa Baru: ${formData.name}`,
      email: formData.email || 'no-email@smk.id',
      subject: `Pendaftaran Online Jurusan: ${formData.major.toUpperCase()}`,
      message: `Nomor HP/WA: ${formData.phone}. Catatan tambahan: ${formData.notes || '-'}`
    });

    setSuccess(true);
    setFormData({ name: '', email: '', phone: '', major: 'rpl', notes: '' });
    
    // Simulate updating candidate counter
    ppdb.registeredCount += 1;

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const calculatedTuition = tuitionWave === 'ranking_beasiswa' ? 0 : 450000;

  return (
    <div className="space-y-12 animate-fade-in" id="ppdb-section">
      <div className="text-center space-y-1 border-b border-zinc-200 dark:border-[#FFD700]/10 pb-4">
        <h2 className="text-xl font-black text-amber-605 dark:text-[#FFD700] uppercase tracking-wider font-serif">{t.ppdbOnline}</h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Penerimaan Peserta Didik Baru (PPDB) SMK Pusat Keunggulan Nusantara TP. 2026/2027.</p>
      </div>

      {/* Admissions Quota Alert Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#0A2472] dark:to-[#0A1640] p-6 text-zinc-800 dark:text-white border border-zinc-200 dark:border-[#FFD700]/20 shadow-md dark:shadow-xl">
        <div className="text-center md:text-left space-y-1.5 md:col-span-2">
          <span className="inline-block rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-extrabold text-[9.5px] uppercase tracking-wider px-3 py-1 border border-emerald-500/30">
            {ppdb.status === 'Buka' ? 'Sesi PENDAFTARAN AKTIF' : 'PENDING'}
          </span>
          <h3 className="text-md md:text-lg font-bold font-serif text-amber-605 dark:text-[#FFD700] leading-tight">Gelombang Ke-2 Menyisakan 12% Kuota Tersedia</h3>
          <p className="text-[11px] text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed">
            Hanya 360 kursi pembelajaran yang diperebutkan di kelas industri berstandar Apple Developer, CISCO Networking, dan Accurate Accounting. Segera daftarkan berkas Anda hari ini.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-50 dark:bg-black/35 border border-zinc-200 dark:border-[#FFD700]/15">
          <span className="text-[10px] text-zinc-500 dark:text-zinc-300 uppercase tracking-widest">{t.alreadyRegistered}</span>
          <h4 className="text-2xl font-black text-amber-600 dark:text-[#FFD700] tracking-widest mt-1 font-mono drop-shadow-[0_2px_4px_rgba(255,215,0,0.15)]">{ppdb.registeredCount} / {ppdb.quota}</h4>
          <span className="text-[8px] text-emerald-600 dark:text-emerald-400 mt-1 font-bold">● {t.quotaFull}</span>
        </div>
      </div>

      {/* Schedule Important Dates */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#FFD700] border-l-4 border-amber-500 dark:border-[#FFD700] pl-2.5 font-serif text-amber-605 dark:text-white">{t.ppdbSchedule}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ppdb.schedule.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-zinc-200 dark:border-[#FFD700]/15 p-4 bg-white dark:bg-[#0a1640]/45 text-xs text-zinc-600 dark:text-zinc-350 flex justify-between items-center hover:border-amber-400 dark:hover:border-[#FFD700]/40 transition-colors shadow-sm">
              <div>
                <p className="font-bold text-zinc-850 dark:text-white font-serif">{item.title}</p>
                <span className="text-amber-605 dark:text-[#FFD700]/70 mt-1 block font-mono text-[10.5px]">{item.date}</span>
              </div>
              <span className={`rounded-md px-2.5 py-1 text-[8.5px] font-black uppercase tracking-wider ${
                item.status === 'buka' ? 'bg-emerald-500/20 text-emerald-650 dark:text-emerald-400 border border-emerald-500/30' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500 border border-zinc-300 dark:border-[#FFD700]/10'
              }`}>
                {item.status === 'buka' ? 'BUKA' : 'CLOS'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Form & Requirements Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Requirements */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-605 dark:text-white border-l-4 border-amber-500 dark:border-[#FFD700] pl-2.5 font-serif">{t.ppdbRequirements}</h3>
          
          <div className="space-y-4">
            {ppdb.requirements.map(req => (
              <div key={req.id} className="rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 p-5 bg-white dark:bg-[#0a1640]/40 hover:border-amber-400 dark:hover:border-[#FFD700]/45 transition-colors duration-300 shadow-sm">
                <h4 className="text-xs font-bold uppercase text-amber-655 dark:text-[#FFD700] font-serif">{lang === 'id' ? req.title : req.titleEn}</h4>
                <ul className="mt-2.5 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                  {(lang === 'id' ? req.details : req.detailsEn).map((d, i) => (
                    <li key={i} className="flex gap-2.5 items-start">
                      <span className="text-amber-500 dark:text-[#FFD700] font-black">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Interactive SPP Tuition Fees Calculator */}
          <div className="rounded-2xl bg-white dark:bg-[#0a1640]/55 border border-zinc-200 dark:border-[#FFD700]/20 p-5 text-xs space-y-4 shadow-md dark:shadow-xl">
            <h4 className="text-xs font-black uppercase text-amber-605 dark:text-[#FFD700] flex items-center gap-1.5 font-serif">
              <Info className="h-4 w-4 text-amber-505 dark:text-[#FFD700]" />
              SISTEM SIMULASI BIAYA SPP BULANAN
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setTuitionWave('normal')}
                className={`rounded-lg p-2.5 text-center text-[11px] font-bold border transition-all cursor-pointer ${
                  tuitionWave === 'normal'
                    ? 'bg-gold-gradient text-[#0A1640] font-black shadow border-transparent'
                    : 'bg-zinc-50 text-zinc-630 border border-zinc-200 dark:bg-white/5 dark:text-zinc-400 dark:border-[#FFD700]/10 hover:bg-zinc-100 dark:hover:bg-white/10'
                }`}
              >
                Jalur Reguler Umum
              </button>
              <button
                onClick={() => setTuitionWave('ranking_beasiswa')}
                className={`rounded-lg p-2.5 text-center text-[11px] font-bold border transition-all cursor-pointer ${
                  tuitionWave === 'ranking_beasiswa'
                    ? 'bg-gold-gradient text-[#0A1640] font-black shadow border-transparent'
                    : 'bg-zinc-50 text-zinc-630 border border-zinc-200 dark:bg-white/5 dark:text-zinc-400 dark:border-[#FFD700]/10 hover:bg-zinc-100 dark:hover:bg-white/10'
                }`}
              >
                Saringan Beasiswa Prestasi
              </button>
            </div>
            <div className="border-t border-zinc-150 dark:border-[#FFD700]/15 pt-3 flex justify-between items-baseline font-mono">
              <span className="text-zinc-500 dark:text-zinc-400 font-sans">Estimasi Iuran SPP Bulanan:</span>
              <strong className="text-lg font-black text-amber-605 dark:text-[#FFD700] font-mono">
                Rp {calculatedTuition.toLocaleString(lang === 'id' ? 'id-ID' : 'en-US')} / bulan
              </strong>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 p-6 bg-white dark:bg-[#0a1640]/40 shadow-md dark:shadow-xl space-y-4 hover:border-amber-400 dark:hover:border-[#FFD700]/30 transition-all duration-300">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#FFD700] border-l-4 border-amber-500 dark:border-[#FFD700] pl-2.5 font-serif text-amber-605 dark:text-white">{t.ppdbRegisterOnlineForm}</h3>
          
          <form onSubmit={handleApply} className="space-y-4 text-xs">
            <div>
              <label className="block text-zinc-700 dark:text-zinc-355 uppercase tracking-wider font-semibold text-[10px]">Nama Lengkap Calon Siswa *</label>
              <input
                type="text"
                placeholder="Tuliskan nama depan dan belakang..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-[#FFD700]/15 bg-zinc-50 dark:bg-[#000820] p-2.5 text-xs text-zinc-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500 dark:focus:ring-[#FFD700]/50 placeholder-zinc-500"
                required
              />
            </div>

            <div>
              <label className="block text-zinc-700 dark:text-zinc-355 uppercase tracking-wider font-semibold text-[10px]">HP / Whatsapp Aktif (Token Pendaftaran) *</label>
              <input
                type="tel"
                placeholder="Contoh: 628123456..."
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-[#FFD700]/15 bg-zinc-50 dark:bg-[#000820] p-2.5 text-xs text-zinc-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500 dark:focus:ring-[#FFD700]/50 placeholder-zinc-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-700 dark:text-zinc-355 uppercase tracking-wider font-semibold text-[10px]">Pilih Kompetensi Keahlian *</label>
                <select
                  value={formData.major}
                  onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-[#FFD700]/15 bg-zinc-50 dark:bg-[#000820] p-2.5 text-xs text-zinc-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500 dark:focus:ring-[#FFD700]/50 select-dark"
                >
                  <option value="rpl" className="bg-white dark:bg-[#0a1640] text-zinc-800 dark:text-white">RPL (Rekayasa Perangkat Lunak)</option>
                  <option value="tjkt" className="bg-white dark:bg-[#0a1640] text-zinc-800 dark:text-white">TJKT (Teknik Jaringan & Telecom)</option>
                  <option value="dkv" className="bg-white dark:bg-[#0a1640] text-zinc-800 dark:text-white">DKV (Desain Visual)</option>
                  <option value="ak" className="bg-white dark:bg-[#0a1640] text-zinc-800 dark:text-white">AK (Akuntansi Lembaga)</option>
                </select>
              </div>
              <div>
                <label className="block text-zinc-700 dark:text-zinc-355 uppercase tracking-wider font-semibold text-[10px]">Akun Email (Opsional)</label>
                <input
                  type="email"
                  placeholder="anda@email.com..."
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-[#FFD700]/15 bg-zinc-50 dark:bg-[#000820] p-2.5 text-xs text-zinc-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500 dark:focus:ring-[#FFD700]/50 placeholder-zinc-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-700 dark:text-zinc-355 uppercase tracking-wider font-semibold text-[10px]">Catatan Rapor / Nilai Rata-Rata Terakhir</label>
              <textarea
                rows={2}
                placeholder="Misal: Nilai Rapor Rata-Rata Semester 1-5 IPS: 89.2, Matematika: 91.0..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-[#FFD700]/15 bg-zinc-50 dark:bg-[#000820] p-2.5 text-xs text-zinc-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500 dark:focus:ring-[#FFD700]/50 placeholder-zinc-500"
              />
            </div>

            {success && (
              <p className="p-2.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20 text-center select-none animate-pulse">
                PENDAFTARAN DITERIMA! Silakan tunggu pesan validasi di WA dalam 1x24 jam.
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-gold-gradient py-3.5 text-xs font-black text-[#0A1640] shadow-lg shadow-[#FFD700]/10 hover:shadow-[#FFD700]/20 transition-all uppercase tracking-wider cursor-pointer"
            >
              KIRIM FORM PENDAFTARAN KOORDINASI →
            </button>
          </form>
        </div>

      </div>

      {/* Accordion FAQ Area */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#FFD700] border-l-4 border-amber-500 dark:border-[#FFD700] pl-2.5 font-serif text-amber-605 dark:text-white">FAQ - PERTANYAAN POPULER PPDB</h3>
        
        <div className="divide-y divide-zinc-250 dark:divide-[#FFD700]/10 rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 bg-white dark:bg-[#0a1640]/40 p-5 shadow-sm dark:shadow-xl">
          {ppdb.faqs.map(faq => (
            <div key={faq.id} className="py-3">
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="flex w-full items-center justify-between text-left text-xs font-bold text-zinc-800 dark:text-white hover:text-amber-600 dark:hover:text-[#FFD700] transition-colors py-1 cursor-pointer"
              >
                <span>{lang === 'id' ? faq.question : faq.questionEn}</span>
                {expandedFaq === faq.id ? <ChevronUp className="h-4 w-4 text-amber-600 dark:text-[#FFD700] animate-fade-in" /> : <ChevronDown className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />}
              </button>
              {expandedFaq === faq.id && (
                <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans font-normal border-t border-zinc-200 dark:border-[#FFD700]/10 pt-2 animate-fade-in">
                  {lang === 'id' ? faq.answer : faq.answerEn}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------- 9. BKK (BURSA KERJA KHUSUS) -----------------
export function BKKSection({ state, lang }: SectionProps) {
  const t = translations[lang];
  const { bkk } = state;
  const [appliedId, setAppliedId] = useState<string | null>(null);

  return (
    <div className="space-y-12 animate-fade-in" id="bkk-section">
      <div className="text-center space-y-1 border-b border-zinc-200 dark:border-[#FFD700]/10 pb-4">
        <h2 className="text-xl font-black text-amber-605 dark:text-[#FFD700] uppercase tracking-wider font-serif">{t.bkkProfile}</h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Menghubungkan rekayasawan muda lulusan SMK dengan industri digital modern dan korporat global.</p>
      </div>

      {/* Profile Intro */}
      <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans text-center max-w-3xl mx-auto">
        {lang === 'id' ? bkk.profile : bkk.profileEn}
      </p>

      {/* Tracer Study Statistics Ribbon */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 p-5 bg-white dark:bg-[#0a1640]/40 text-center shadow-md dark:shadow-xl">
          <span className="text-[10px] text-zinc-500 dark:text-zinc-300 uppercase font-bold tracking-widest">{t.employedLabel}</span>
          <h4 className="text-3xl font-black text-amber-600 dark:text-[#FFD700] mt-1 font-mono tracking-wider">{bkk.statistics.employedPercent}%</h4>
          <p className="text-[10.5px] text-zinc-500 dark:text-zinc-400 mt-1">Diterima langsung lewat rekrutmen BKK sekolah.</p>
        </div>
        <div className="rounded-2xl border border-zinc-205 dark:border-[#FFD700]/15 p-5 bg-white dark:bg-[#0a1640]/40 text-center shadow-md dark:shadow-xl">
          <span className="text-[10px] text-amber-600 dark:text-[#FFD700] uppercase font-bold tracking-widest">{t.entrepreneurLabel}</span>
          <h4 className="text-3xl font-black text-amber-600 dark:text-[#FFD700] mt-1 font-mono tracking-wider">{bkk.statistics.entrepreneurPercent}%</h4>
          <p className="text-[10.5px] text-amber-705 dark:text-[#FFD700]/85 mt-1 font-semibold">Mengembangkan bisnis rintisan (Inkubasi/Startup).</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 p-5 bg-white dark:bg-[#0a1640]/40 text-center shadow-md dark:shadow-xl">
          <span className="text-[10px] text-zinc-500 dark:text-zinc-300 uppercase font-bold tracking-widest">{t.higherEducationLabel}</span>
          <h4 className="text-3xl font-black text-amber-600 dark:text-[#FFD700] mt-1 font-mono tracking-wider">{bkk.statistics.higherEducationPercent}%</h4>
          <p className="text-[10.5px] text-zinc-500 dark:text-zinc-400 mt-1">Melanjutkan studi lanjut dengan beasiswa korporasi.</p>
        </div>
      </div>

      {/* Corporate Partner Listings */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-amber-605 dark:text-white border-l-4 border-amber-500 dark:border-[#FFD700] pl-2.5 font-serif">{t.bkkPartnerIndustries}</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {bkk.partners.map((p) => (
            <div key={p.id} className="group rounded-xl border border-zinc-200 dark:border-[#FFD700]/15 p-4 bg-white dark:bg-[#0a1640]/40 flex flex-col items-center justify-center text-center shadow-sm dark:shadow-lg hover:border-amber-400 dark:hover:border-[#FFD700]/45 transition-colors">
              <strong className="text-xs text-zinc-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#FFD700] transition-colors line-clamp-1">{p.name}</strong>
              <span className="text-[9.5px] text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">{lang === 'id' ? p.sector : p.sectorEn}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Open Vacancies */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-amber-605 dark:text-white border-l-4 border-amber-500 dark:border-[#FFD700] pl-2.5 font-serif">{t.bkkVacancies}</h3>
        
        <div className="space-y-4">
          {bkk.vacancies.map((vac) => (
            <div key={vac.id} className="rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 bg-white dark:bg-[#0a1640]/40 p-5 shadow-sm dark:shadow-xl space-y-4 hover:border-amber-400 dark:hover:border-[#FFD700]/30 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <span className="rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 text-[8.5px] font-black uppercase tracking-widest">{t.bkkType}</span>
                  <h4 className="text-sm font-bold text-amber-605 dark:text-[#FFD700] font-serif mt-2">{lang === 'id' ? vac.position : vac.positionEn}</h4>
                  <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300 block">{vac.company}</span>
                </div>
                <div className="text-right text-xs">
                  <span className="text-zinc-500 dark:text-zinc-400 block">{t.bkkDeadline}</span>
                  <strong className="text-red-500 dark:text-red-405 block text-[11px] font-mono">{vac.deadline}</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                <div>
                  <p className="font-extrabold uppercase text-amber-600 dark:text-[#FFD700]/70 text-[9.5px] font-serif">{t.bkkRequirements}</p>
                  <ul className="mt-1.5 space-y-1.5 text-zinc-600 dark:text-zinc-300 leading-normal">
                    {(lang === 'id' ? vac.requirements : vac.requirementsEn).map((r, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-amber-500 dark:text-[#FFD700] font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-end space-y-3.5 text-right md:items-end">
                  <div className="font-mono">
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400">{t.bkkSalary}:</span>
                    <p className="text-sm font-black text-emerald-600 dark:text-emerald-400">{vac.salary}</p>
                  </div>
                  {appliedId === vac.id ? (
                    <p className="p-2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20 text-xs text-center select-none animate-pulse">
                      Lamaran Terkirim! Tim BKK akan menghubungi Anda untuk tes seleksi.
                    </p>
                  ) : (
                    <button
                      onClick={() => {
                        setAppliedId(vac.id);
                        setTimeout(() => setAppliedId(null), 8000);
                      }}
                      className="rounded-lg bg-gold-gradient text-[#0A1640] hover:shadow-lg hover:shadow-[#FFD700]/15 px-4 py-2 text-xs font-black tracking-wider uppercase transition-all duration-300 cursor-pointer shadow border border-[#FFD700]/10"
                    >
                      {t.bkkApplyJob}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------- 10. ALUMNI HUB -----------------
export function AlumniSection({ state, lang }: SectionProps) {
  const t = translations[lang];
  const { alumni } = state;

  return (
    <div className="space-y-10 animate-fade-in" id="alumni-section">
      <div className="text-center space-y-1 border-b border-zinc-200 dark:border-[#FFD700]/10 pb-4">
        <h2 className="text-xl font-black text-amber-605 dark:text-[#FFD700] uppercase tracking-wider font-serif">{t.testimonialsTitle}</h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.testimonialsSub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {alumni.map((item) => (
          <div key={item.id} className="group rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 bg-white dark:bg-[#0a1640]/40 p-6 shadow-md dark:shadow-xl flex flex-col justify-between hover:border-amber-450 dark:hover:border-[#FFD700]/35 hover:-translate-y-0.5 transition-all duration-350">
            <div className="space-y-3">
              <span className="text-[32px] font-serif leading-none h-4 text-amber-400 dark:text-[#FFD700] block">“</span>
              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans italic">
                {lang === 'id' ? item.testimonial : item.testimonialEn}
              </p>
            </div>
            
            <div className="flex items-center gap-3.5 pt-4 border-t border-zinc-150 dark:border-[#FFD700]/10 mt-4">
              <img src={item.image} className="h-10 w-10 rounded-full object-cover shadow border-2 border-amber-300 dark:border-[#FFD700]/30" referrerPolicy="no-referrer" />
              <div>
                <strong className="text-xs text-amber-655 dark:text-[#FFD700] font-serif block group-hover:text-amber-600 dark:group-hover:text-white transition-colors">{item.name}</strong>
                <span className="text-[9px] text-amber-600 dark:text-[#FFD700]/70 font-mono block mt-0.5 animate-pulse">Angkatan {item.graduationYear} ({item.competency.toUpperCase()})</span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block leading-tight mt-1">{lang === 'id' ? item.currentCareer : item.currentCareerEn}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------- 11. KONTAK SECTION -----------------
export function KontakSection({ state, lang }: SectionProps) {
  const t = translations[lang];
  const { profile, addMessage } = state;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sentMsg, setSentMsg] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Harap isi nama dan isi pesan Anda.");
      return;
    }

    addMessage({
      name: formData.name,
      email: formData.email || 'guest@smk.id',
      subject: formData.subject || 'Pertanyaan Umum',
      message: formData.message
    });

    setSentMsg(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setSentMsg(false);
    }, 4000);
  };

  return (
    <div className="space-y-12 animate-fade-in" id="kontak-section">
      <div className="text-center space-y-1 border-b border-zinc-200 dark:border-[#FFD700]/10 pb-4">
        <h2 className="text-xl font-black text-amber-605 dark:text-[#FFD700] uppercase tracking-wider font-serif">{t.contactHeading}</h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.contactSub}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Contact details and embedded Maps */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 bg-white dark:bg-[#0a1640]/40 p-6 space-y-4 hover:border-amber-400 dark:hover:border-[#FFD700]/30 transition-all duration-300 shadow-md dark:shadow-xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#FFD700] border-l-4 border-amber-500 dark:border-[#FFD700] pl-2.5 font-serif text-amber-605 dark:text-white">{t.visitOurCampus}</h3>
            
            <div className="space-y-3.5 text-xs text-zinc-600 dark:text-zinc-350">
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="h-4 w-4 text-amber-505 dark:text-[#FFD700] shrink-0" />
                <span>{profile.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-505 dark:text-[#FFD700] shrink-0" />
                <span>{profile.phone}</span>
              </p>
              <p className="flex items-center gap-2.5 font-sans">
                <Mail className="h-4 w-4 text-amber-505 dark:text-[#FFD700] shrink-0" />
                <span>{profile.email}</span>
              </p>
            </div>
          </div>

          {/* Clean Google Maps Locator Box */}
          <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-[#FFD700]/15 shadow-md dark:shadow-xl aspect-video bg-[#000820]">
            <iframe
              src={profile.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="SMK Modern Map Location"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Messaging Feedback Form */}
        <div className="rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 bg-white dark:bg-[#0a1640]/40 p-6 shadow-md dark:shadow-xl space-y-4 hover:border-amber-400 dark:hover:border-[#FFD700]/30 transition-all duration-300">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#FFD700] border-l-4 border-amber-500 dark:border-[#FFD700] pl-2.5 font-serif text-amber-605 dark:text-white">{t.sendUsAMessage}</h3>
          
          <form onSubmit={handleSendMessage} className="space-y-4 text-xs font-normal">
            <div>
              <label className="block text-zinc-700 dark:text-zinc-355 uppercase tracking-wider font-semibold text-[10px]">{t.formName} *</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-[#FFD700]/15 bg-zinc-50 dark:bg-[#000820] p-2.5 text-zinc-800 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-500 dark:focus:ring-[#FFD700]/50"
                required
              />
            </div>

            <div>
              <label className="block text-zinc-700 dark:text-zinc-355 uppercase tracking-wider font-semibold text-[10px]">{t.formEmail} (Opsional)</label>
              <input
                type="email"
                placeholder="anda@email.com..."
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-[#FFD700]/15 bg-zinc-50 dark:bg-[#000820] p-2.5 text-zinc-800 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-500 dark:focus:ring-[#FFD700]/50"
              />
            </div>

            <div>
              <label className="block text-zinc-700 dark:text-zinc-355 uppercase tracking-wider font-semibold text-[10px]">{t.formSubject}</label>
              <input
                type="text"
                placeholder="Subjek pertanyaan..."
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-[#FFD700]/15 bg-zinc-50 dark:bg-[#000820] p-2.5 text-zinc-800 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-500 dark:focus:ring-[#FFD700]/50"
              />
            </div>

            <div>
              <label className="block text-zinc-700 dark:text-zinc-355 uppercase tracking-wider font-semibold text-[10px]">{t.formMessage} *</label>
              <textarea
                rows={3}
                placeholder="Tulis pesan..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-[#FFD700]/15 bg-zinc-50 dark:bg-[#000820] p-2.5 text-zinc-800 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-500 dark:focus:ring-[#FFD700]/50"
                required
              />
            </div>

            {sentMsg && (
              <p className="p-2.5 rounded bg-emerald-500/10 text-emerald-605 dark:text-emerald-400 font-bold border border-emerald-500/20 text-center animate-pulse">
                {t.formSuccess}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-gold-gradient py-3.5 text-xs font-black text-[#0A1640] shadow-lg shadow-[#FFD700]/10 tracking-wider uppercase cursor-pointer"
            >
              KIRIM PESAN SEKARANG →
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
