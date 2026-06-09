/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Megaphone, MessageCircle, X, Download, FileText, Calendar, Clock, AlertCircle, FileDown } from 'lucide-react';
import { RunningText, PopupInfo, AcademicCalendarEvent, DownloadFile } from '../types';

// ----------------- 1. RUNNING ANNOUNCEMENTS TEXT BAR -----------------
interface RunningTextProps {
  data: RunningText;
  lang: 'id' | 'en';
}

export function RunningTextWidget({ data, lang }: RunningTextProps) {
  if (!data.isActive) return null;

  return (
    <div className="relative w-full bg-amber-50 dark:bg-[#0A1640] border-b border-amber-200/50 dark:border-[#FFD700]/15 py-2.5 text-[11px] md:text-xs overflow-hidden z-40 text-amber-950 dark:text-[#FFD700] font-extrabold tracking-wider flex items-center">
      {/* Absolute badge label to anchor it */}
      <div className="absolute left-0 z-10 bg-gold-gradient text-[#0A1640] px-3.5 py-1.5 font-extrabold shadow-lg rounded-r-xl flex items-center gap-1.5">
        <Megaphone className="h-3.5 w-3.5 text-[#0A1640]" />
        <span className="font-serif tracking-widest text-[10px]">PENGUMUMAN</span>
      </div>

      <div className="animate-marquee whitespace-nowrap pl-[12%] flex items-center gap-2">
        <span>{lang === 'id' ? data.text : data.textEn}</span>
        <span className="text-amber-500/40 dark:text-[#FFD700]/40 font-mono">•••</span>
      </div>

      {/* Styled animation helper injected in document */}
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

// ----------------- 2. DETAILED POPUP MODAL ON LOAD -----------------
interface PopupProps {
  data: PopupInfo;
  lang: 'id' | 'en';
}

export function PopupWidget({ data, lang }: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data.isActive) {
      // Small timeout to show popup elegantly after load
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [data]);

  if (!isOpen || !data.isActive) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80 p-4 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-[#0A1640] p-6 shadow-2xl border border-zinc-200 dark:border-[#FFD700]/30 space-y-4">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3.5 top-3.5 rounded bg-zinc-100 dark:bg-white/5 p-1 hover:bg-[#FFD700] hover:text-[#0A1640] text-zinc-605 dark:text-[#FFD700] transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center space-y-2">
          {data.image && (
            <img src={data.image} className="w-full h-32 object-cover rounded-xl shadow-inner border border-zinc-100 dark:border-[#FFD700]/10" alt="Popup Information" />
          )}
          <span className="rounded-full bg-amber-50 dark:bg-[#FFD700]/10 border border-amber-300/35 dark:border-[#FFD700]/25 px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-amber-700 dark:text-[#FFD700] inline-block">
            👑 INFORMASI UTAMA KAMPUS
          </span>
          <h3 className="text-sm font-bold text-zinc-900 dark:text-white font-serif tracking-wide leading-tight">
            {lang === 'id' ? data.title : data.titleEn}
          </h3>
          <p className="text-[11px] text-zinc-650 dark:text-zinc-300 leading-relaxed font-sans text-left">
            {lang === 'id' ? data.text : data.textEn}
          </p>
        </div>

        <a
          href={data.linkUrl}
          onClick={() => setIsOpen(false)}
          className="block w-full text-center rounded-xl bg-gold-gradient py-3 text-xs font-black text-[#0A1640] shadow-md uppercase tracking-widest hover:scale-[1.01] transition-transform"
        >
          {lang === 'id' ? data.linkText : data.linkTextEn}
        </a>
      </div>
    </div>
  );
}

// ----------------- 3. STICKY INTERACTIVE WHATSAPP FLOATING BUTTON -----------------
interface WhatsAppButtonProps {
  phone: string;
}

export function WhatsAppButton({ phone }: WhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/${phone}?text=Halo%20Admin%20SMK%20Modern%20Nusantara,%20saya%20ingin%20bertanya%20mengenai%20info%2520pendaftaran%20PPDB%2520sekolah.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-xl hover:scale-110 transition-transform flex items-center justify-center ring-4 ring-emerald-500/20"
      title="Chat Hubungi Admin"
      id="whatsapp-floating-bubble"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  );
}

// ----------------- 4. ACADEMIC CALENDAR WIDGET -----------------
interface CalendarProps {
  events: AcademicCalendarEvent[];
  lang: 'id' | 'en';
}

export function AcademicCalendarWidget({ events, lang }: CalendarProps) {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'holiday': return 'bg-rose-50 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-500/20';
      case 'exam': return 'bg-amber-50 dark:bg-[#FFD700]/15 text-amber-700 dark:text-[#FFD700] border border-amber-200 dark:border-[#FFD700]/20';
      case 'event': return 'bg-sky-50 dark:bg-sky-400/20 text-sky-700 dark:text-sky-200 border border-sky-200 dark:border-sky-400/20';
      default: return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300';
    }
  };

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 bg-white dark:bg-[#0a1640]/55 p-6 shadow-md dark:shadow-xl space-y-4">
      <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-200 dark:border-[#FFD700]/10">
        <Calendar className="h-5 w-5 text-amber-500 dark:text-[#FFD700]" />
        <h3 className="text-xs font-bold text-amber-600 dark:text-[#FFD700] uppercase tracking-widest font-sans">
          {lang === 'id' ? 'Kalender Akademik 2026' : 'Academic Calendar 2026'}
        </h3>
      </div>

      <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
        {events.map(ev => (
          <div key={ev.id} className="flex gap-4 items-center text-xs p-2.5 hover:bg-zinc-50 dark:hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-[#FFD700]/10">
            <span className={`rounded-lg px-2 py-0.5 text-[8.5px] font-black uppercase shrink-0 tracking-widest ${getBadgeColor(ev.type)}`}>
              {ev.type}
            </span>
            <div className="flex-1">
              <p className="font-bold text-zinc-800 dark:text-zinc-200">{lang === 'id' ? ev.title : ev.titleEn}</p>
              <div className="flex items-center gap-1 text-[10px] text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                <Clock className="h-3 w-3 text-amber-500 dark:text-[#FFD700]" />
                <span>{ev.startDate} s/d {ev.endDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------- 5. FILE DOWNLOAD AREA WIDGET -----------------
interface DownloadProps {
  files: DownloadFile[];
  lang: 'id' | 'en';
}

export function DownloadAreaWidget({ files, lang }: DownloadProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-[#FFD700]/15 bg-white dark:bg-[#0a1640]/55 p-6 shadow-md dark:shadow-xl space-y-4">
      <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-200 dark:border-[#FFD700]/10">
        <FileDown className="h-5 w-5 text-amber-500 dark:text-[#FFD700]" />
        <h3 className="text-xs font-bold text-amber-600 dark:text-[#FFD700] uppercase tracking-widest font-sans">
          {lang === 'id' ? 'Pusat Unduhan Berkas' : 'Download Area'}
        </h3>
      </div>

      <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
        {files.map(file => (
          <div key={file.id} className="flex justify-between items-center text-xs p-2.5 border-b border-zinc-100 dark:border-[#FFD700]/5 hover:bg-zinc-50 dark:hover:bg-white/5 rounded-lg transition-colors">
            <div>
              <p className="font-bold text-zinc-800 dark:text-zinc-200">{lang === 'id' ? file.title : file.titleEn}</p>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase font-mono">{file.size} • {lang === 'id' ? file.category : file.categoryEn}</span>
            </div>
            <button
              onClick={() => alert(`Mengunduh berkas "${file.title}"...`)}
              className="rounded-lg bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-[#FFD700]/10 hover:bg-gold-gradient hover:text-[#0A1640] hover:border-transparent p-1.5 transition-all text-amber-600 dark:text-[#FFD700]"
              title="Unduh File"
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
