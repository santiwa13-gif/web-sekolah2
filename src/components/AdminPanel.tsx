/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Lock,
  User,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  Activity,
  FileText,
  Image as ImageIcon,
  Award,
  BookOpen,
  Sliders,
  Settings,
  Briefcase,
  Users,
  Inbox,
  AlertTriangle,
  RefreshCw,
  CheckCircle,
  Megaphone,
  GraduationCap
} from 'lucide-react';
import { SchoolState } from '../useSchoolState';
import { News, GalleryItem, Achievement, JobVacancy, Alumnus, Competency } from '../types';

interface AdminPanelProps {
  state: SchoolState;
  activeLanguage: 'id' | 'en';
}

export default function AdminPanel({ state, activeLanguage }: AdminPanelProps) {
  const {
    profile, setProfile,
    competencies, setCompetencies,
    facilities, setFacilities,
    news, setNews,
    gallery, setGallery,
    achievements, setAchievements,
    ppdb, setPpdb,
    bkk, setBkk,
    alumni, setAlumni,
    runningText, setRunningText,
    popup, setPopup,
    academicEvents, setAcademicEvents,
    downloads, setDownloads,
    messages, setMessages,
    markMessageRead, deleteMessage,
    resetAllData
  } = state;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'super_admin' | 'operator' | null>(null);
  const [loginError, setLoginError] = useState('');

  // Active sub-tab inside Admin Panel
  const [adminTab, setAdminTab] = useState<'news' | 'gallery' | 'achievements' | 'majors' | 'banner' | 'profile' | 'ppdb' | 'bkk' | 'alumni' | 'inbox'>('news');

  // Form states
  const [newsForm, setNewsForm] = useState<Partial<News>>({});
  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);

  const [galleryForm, setGalleryForm] = useState<Partial<GalleryItem>>({});
  const [editingGalleryId, setEditingGalleryId] = useState<string | null>(null);

  const [achForm, setAchForm] = useState<Partial<Achievement>>({});
  const [editingAchId, setEditingAchId] = useState<string | null>(null);

  const [vacancyForm, setVacancyForm] = useState<Partial<JobVacancy>>({});
  const [editingVacancyId, setEditingVacancyId] = useState<string | null>(null);

  const [alumniForm, setAlumniForm] = useState<Partial<Alumnus>>({});
  const [editingAlumniId, setEditingAlumniId] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
      setRole('super_admin');
      setLoginError('');
    } else if (username === 'operator' && password === 'operator123') {
      setIsLoggedIn(true);
      setRole('operator');
      setLoginError('');
    } else {
      setLoginError('Kredensial tidak valid. Gunakan Quick Login untuk kemudahan.');
    }
  };

  const handleQuickLogin = (selectedRole: 'super_admin' | 'operator') => {
    setIsLoggedIn(true);
    setRole(selectedRole);
    setUsername(selectedRole === 'super_admin' ? 'admin' : 'operator');
    setLoginError('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole(null);
    setUsername('');
    setPassword('');
  };

  // NEWS ACTIONS
  const saveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsForm.title || !newsForm.content) {
      alert("Harap lengkapi judul dan konten berita.");
      return;
    }

    if (editingNewsId) {
      setNews(prev => prev.map(n => n.id === editingNewsId ? {
        ...n,
        title: newsForm.title || '',
        titleEn: newsForm.titleEn || newsForm.title || '',
        content: newsForm.content || '',
        contentEn: newsForm.contentEn || newsForm.content || '',
        category: newsForm.category || 'Pengumuman',
        categoryEn: newsForm.categoryEn || 'Announcement',
        image: newsForm.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400',
        isPopular: !!newsForm.isPopular
      } : n));
      setEditingNewsId(null);
    } else {
      const newPost: News = {
        id: "news-" + Date.now(),
        title: newsForm.title || '',
        titleEn: newsForm.titleEn || newsForm.title || '',
        content: newsForm.content || '',
        contentEn: newsForm.contentEn || newsForm.content || '',
        category: newsForm.category || 'Pengumuman',
        categoryEn: newsForm.categoryEn || 'Announcement',
        date: new Date().toISOString().split('T')[0],
        image: newsForm.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400',
        views: 0,
        isPopular: !!newsForm.isPopular
      };
      setNews(prev => [newPost, ...prev]);
    }
    setNewsForm({});
  };

  const triggerEditNews = (item: News) => {
    setEditingNewsId(item.id);
    setNewsForm(item);
  };

  const deleteNewsItem = (id: string) => {
    if (confirm("Hapus berita ini?")) {
      setNews(prev => prev.filter(n => n.id !== id));
    }
  };


  // GALLERY ACTIONS
  const saveGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryForm.title || !galleryForm.image) {
      alert("Harap lengkapi judul dan URL gambar.");
      return;
    }

    if (editingGalleryId) {
      setGallery(prev => prev.map(g => g.id === editingGalleryId ? {
        ...g,
        title: galleryForm.title || '',
        titleEn: galleryForm.titleEn || galleryForm.title || '',
        category: galleryForm.category || 'Kegiatan Sekolah',
        categoryEn: galleryForm.categoryEn || 'School Activity',
        image: galleryForm.image || '',
        description: galleryForm.description || '',
        descriptionEn: galleryForm.descriptionEn || galleryForm.description || ''
      } : g));
      setEditingGalleryId(null);
    } else {
      const newItem: GalleryItem = {
        id: "gal-" + Date.now(),
        title: galleryForm.title || '',
        titleEn: galleryForm.titleEn || galleryForm.title || '',
        category: galleryForm.category || 'Kegiatan Sekolah',
        categoryEn: galleryForm.categoryEn || 'School Activity',
        image: galleryForm.image || '',
        date: new Date().toISOString().split('T')[0],
        description: galleryForm.description || '',
        descriptionEn: galleryForm.descriptionEn || galleryForm.description || ''
      };
      setGallery(prev => [newItem, ...prev]);
    }
    setGalleryForm({});
  };

  const deleteGalleryItem = (id: string) => {
    if (confirm("Hapus item galeri ini?")) {
      setGallery(prev => prev.filter(g => g.id !== id));
    }
  };


  // ACHIEVEMENTS ACTIONS
  const saveAchievement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!achForm.title || !achForm.winner) {
      alert("Harap isi judul prestasi dan peraih medali.");
      return;
    }

    if (editingAchId) {
      setAchievements(prev => prev.map(a => a.id === editingAchId ? {
        ...a,
        title: achForm.title || '',
        titleEn: achForm.titleEn || achForm.title || '',
        winner: achForm.winner || '',
        category: achForm.category || 'Siswa',
        categoryEn: achForm.categoryEn || 'Student',
        level: achForm.level || 'Nasional',
        levelEn: achForm.levelEn || 'National',
        description: achForm.description || '',
        descriptionEn: achForm.descriptionEn || achForm.description || '',
        image: achForm.image || 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=400'
      } : a));
      setEditingAchId(null);
    } else {
      const newItem: Achievement = {
        id: "ach-" + Date.now(),
        title: achForm.title || '',
        titleEn: achForm.titleEn || achForm.title || '',
        winner: achForm.winner || '',
        category: achForm.category || 'Siswa',
        categoryEn: achForm.categoryEn || 'Student',
        level: achForm.level || 'Nasional',
        levelEn: achForm.levelEn || 'National',
        date: new Date().toISOString().split('T')[0],
        description: achForm.description || '',
        descriptionEn: achForm.descriptionEn || achForm.description || '',
        image: achForm.image || 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=400'
      };
      setAchievements(prev => [newItem, ...prev]);
    }
    setAchForm({});
  };

  const deleteAchievementItem = (id: string) => {
    if (confirm("Hapus prestasi ini?")) {
      setAchievements(prev => prev.filter(a => a.id !== id));
    }
  };


  // BKK JOB VACANCY ACTIONS
  const saveVacancy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vacancyForm.company || !vacancyForm.position) {
      alert("Harap isi nama perusahaan dan posisi lowongan.");
      return;
    }

    if (editingVacancyId) {
      setBkk(prev => ({
        ...prev,
        vacancies: prev.vacancies.map(v => v.id === editingVacancyId ? {
          ...v,
          company: vacancyForm.company || '',
          position: vacancyForm.position || '',
          positionEn: vacancyForm.positionEn || vacancyForm.position || '',
          location: vacancyForm.location || 'Jakarta (Hybrid)',
          salary: vacancyForm.salary || 'Kompetitif',
          deadline: vacancyForm.deadline || '30 November 2026',
          requirements: vacancyForm.requirements || [],
          requirementsEn: vacancyForm.requirementsEn || [],
          logo: vacancyForm.logo || 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=150'
        } : v)
      }));
      setEditingVacancyId(null);
    } else {
      const newItem: JobVacancy = {
        id: "vac-" + Date.now(),
        company: vacancyForm.company || '',
        position: vacancyForm.position || '',
        positionEn: vacancyForm.positionEn || vacancyForm.position || '',
        location: vacancyForm.location || 'Jakarta (Hybrid)',
        salary: vacancyForm.salary || 'Kompetitif',
        type: 'Full-time',
        deadline: vacancyForm.deadline || '30 November 2026',
        requirements: vacancyForm.requirements || ['Lulusan SMK bidang terkait.'],
        requirementsEn: vacancyForm.requirementsEn || ['SMK graduate in related major.'],
        logo: vacancyForm.logo || 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=150'
      };
      setBkk(prev => ({
        ...prev,
        vacancies: [newItem, ...prev.vacancies]
      }));
    }
    setVacancyForm({});
  };

  const deleteVacancyItem = (id: string) => {
    if (confirm("Hapus lowongan kerja ini dari BKK?")) {
      setBkk(prev => ({
        ...prev,
        vacancies: prev.vacancies.filter(v => v.id !== id)
      }));
    }
  };


  // ALUMNI TESTIMONIAL ACTIONS
  const saveAlumni = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alumniForm.name || !alumniForm.testimonial) {
      alert("Harap isi nama dan testimoni alumni.");
      return;
    }

    if (editingAlumniId) {
      setAlumni(prev => prev.map(a => a.id === editingAlumniId ? {
        ...a,
        name: alumniForm.name || '',
        graduationYear: alumniForm.graduationYear || '2025',
        competency: alumniForm.competency || 'RPL',
        currentCareer: alumniForm.currentCareer || '',
        currentCareerEn: alumniForm.currentCareerEn || alumniForm.currentCareer || '',
        testimonial: alumniForm.testimonial || '',
        testimonialEn: alumniForm.testimonialEn || alumniForm.testimonial || '',
        isFeatured: !!alumniForm.isFeatured
      } : a));
      setEditingAlumniId(null);
    } else {
      const newItem: Alumnus = {
        id: "al-" + Date.now(),
        name: alumniForm.name || '',
        graduationYear: alumniForm.graduationYear || '2025',
        competency: alumniForm.competency || 'RPL',
        currentCareer: alumniForm.currentCareer || '',
        currentCareerEn: alumniForm.currentCareerEn || alumniForm.currentCareer || '',
        testimonial: alumniForm.testimonial || '',
        testimonialEn: alumniForm.testimonialEn || alumniForm.testimonial || '',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
        isFeatured: !!alumniForm.isFeatured
      };
      setAlumni(prev => [newItem, ...prev]);
    }
    setAlumniForm({});
  };

  const deleteAlumniItem = (id: string) => {
    if (confirm("Hapus testimoni alumni ini?")) {
      setAlumni(prev => prev.filter(a => a.id !== id));
    }
  };


  // DYNAMIC JURUSAN (COMPETENCY) FIELDS UPDATER
  const updateCompetencyField = (index: number, key: keyof Competency, value: any) => {
    setCompetencies(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: value };
      return next;
    });
  };

  // RENDER LOGIN SCREEN IF NOT AUTHENTICATED
  if (!isLoggedIn) {
    return (
      <div className="mx-auto my-12 max-w-md rounded-2xl border border-zinc-100 dark:border-blue-950/40 bg-white dark:bg-slate-950 p-8 shadow-2xl animate-fade-in text-zinc-800 dark:text-zinc-200" id="admin-login-container">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-blue-950 text-amber-400 shadow-lg ring-4 ring-amber-400/20">
            <Lock className="h-7 w-7" />
          </div>
          <h2 className="mt-4 text-xl font-extrabold tracking-tight dark:text-white">
            Portal Administrasi SMK
          </h2>
          <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Silakan masuk untuk mengelola portal informasi berita, galeri, BKK, PPDB, dan kontak siswa.
          </p>
        </div>

        {/* Quick Logins for Testing / Developer Ease */}
        <div className="mt-6 rounded-xl bg-blue-50 dark:bg-blue-950/40 p-4 border border-blue-100 dark:border-blue-900/30">
          <p className="text-center text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-amber-400">
            Akses Masuk Cepat (Rekomendasi Uji)
          </p>
          <div className="mt-2.5 grid grid-cols-2 gap-2.5">
            <button
              onClick={() => handleQuickLogin('super_admin')}
              className="flex items-center justify-center gap-1.5 rounded-lg bg-blue-900 hover:bg-blue-850 px-3 py-2 text-xs font-bold text-white shadow transition-all duration-300"
              id="quick-login-super-admin"
            >
              <Activity className="h-3.5 w-3.5 text-amber-400" />
              <span>SUPER ADMIN</span>
            </button>
            <button
              onClick={() => handleQuickLogin('operator')}
              className="flex items-center justify-center gap-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 px-3 py-2 text-xs font-bold text-blue-980 shadow transition-all duration-300"
              id="quick-login-operator"
            >
              <User className="h-3.5 w-3.5" />
              <span>OPERATOR</span>
            </button>
          </div>
          <p className="mt-2 text-center text-[9px] text-zinc-500 dark:text-zinc-400 italic">
            Super Admin memiliki akses penuh. Operator hanya dapat menyunting konten berita dan galeri.
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Nama Pengguna (Username)
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username..."
              className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-blue-900/40 bg-zinc-50 dark:bg-slate-900/55 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Kata Sandi (Password)
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password..."
              className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-blue-900/40 bg-zinc-50 dark:bg-slate-900/55 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {loginError && (
            <p className="text-[11px] font-bold text-red-500 text-center animate-pulse">
              {loginError}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-900 to-blue-950 py-3.5 text-xs font-bold text-white shadow-md hover:scale-[1.02] transition-all"
            id="admin-form-submit-btn"
          >
            MASUK KE DASHBOARD →
          </button>
        </form>
      </div>
    );
  }

  // CORE PANEL INTERFACE IF LOGGED IN
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 text-zinc-800 dark:text-zinc-100" id="admin-panel-dashboard">
      
      {/* Admin Top Hub */}
      <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-950 p-6 text-white shadow-xl md:flex-row md:items-center md:justify-between border border-blue-900/30">
        <div>
          <span className="rounded-full bg-amber-500/10 border border-amber-500/35 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
            Sistem CMS Integrasi (Bahasa: {activeLanguage.toUpperCase()})
          </span>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-white uppercase">
            {role === 'super_admin' ? 'Super Administrator Hub' : 'Operator Portal'}
          </h2>
          <p className="text-xs text-blue-200 leading-relaxed">
            Kelola dan perbarui konten SMK secara waktu nyata. Semua perubahan langsung diperbarui di halaman publik.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {role === 'super_admin' && (
            <button
              onClick={resetAllData}
              className="flex items-center gap-1.5 rounded-lg bg-red-600/25 hover:bg-red-650 text-red-300 border border-red-500/20 px-3 py-2 text-xs font-semibold transition-all"
              title="Setel Ulang Semua Data"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset Pabrik</span>
            </button>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 px-3.5 py-2 text-xs font-bold transition-all border border-white/15"
          >
            <LogOut className="h-3.5 w-3.5 text-amber-400" />
            <span>Keluar Sesi</span>
          </button>
        </div>
      </div>

      {/* Main Admin layout Container */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
        
        {/* Navigation Sidebar Tabs */}
        <div className="flex flex-col gap-1.5 rounded-xl border border-zinc-100 dark:border-blue-950/40 bg-zinc-50 dark:bg-slate-900 p-3 shadow-inner">
          <p className="px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-zinc-400">
            Daftar Modul Konten
          </p>
          
          <button
            onClick={() => setAdminTab('news')}
            className={`flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-xs font-bold transition-all ${
              adminTab === 'news'
                ? 'bg-blue-900 text-amber-400 shadow-md shadow-blue-900/10'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-slate-800'
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>Kelola Berita</span>
          </button>

          <button
            onClick={() => setAdminTab('gallery')}
            className={`flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-xs font-bold transition-all ${
              adminTab === 'gallery'
                ? 'bg-blue-900 text-amber-400 shadow-md shadow-blue-900/10'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-slate-800'
            }`}
          >
            <ImageIcon className="h-4 w-4" />
            <span>Kelola Galeri</span>
          </button>

          <button
            onClick={() => setAdminTab('achievements')}
            className={`flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-xs font-bold transition-all ${
              adminTab === 'achievements'
                ? 'bg-blue-900 text-amber-400 shadow-md shadow-blue-900/10'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-slate-800'
            }`}
          >
            <Award className="h-4 w-4" />
            <span>Kelola Prestasi</span>
          </button>

          {role === 'super_admin' && (
            <>
              <button
                onClick={() => setAdminTab('majors')}
                className={`flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-xs font-bold transition-all ${
                  adminTab === 'majors'
                    ? 'bg-blue-900 text-amber-400 shadow-md shadow-blue-900/10'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-slate-800'
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <span>Kelola Jurusan</span>
              </button>

              <button
                onClick={() => setAdminTab('banner')}
                className={`flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-xs font-bold transition-all ${
                  adminTab === 'banner'
                    ? 'bg-blue-900 text-amber-400 shadow-md shadow-blue-900/10'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-slate-800'
                }`}
              >
                <Sliders className="h-4 w-4" />
                <span>Running Text / Popup</span>
              </button>

              <button
                onClick={() => setAdminTab('profile')}
                className={`flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-xs font-bold transition-all ${
                  adminTab === 'profile'
                    ? 'bg-blue-900 text-amber-400 shadow-md shadow-blue-900/10'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-slate-800'
                }`}
              >
                <Settings className="h-4 w-4" />
                <span>Sebutkan Profil</span>
              </button>

              <button
                onClick={() => setAdminTab('ppdb')}
                className={`flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-xs font-bold transition-all ${
                  adminTab === 'ppdb'
                    ? 'bg-blue-900 text-amber-400 shadow-md shadow-blue-900/10'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-slate-800'
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                <span>Konfigurasi PPDB</span>
              </button>

              <button
                onClick={() => setAdminTab('bkk')}
                className={`flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-xs font-bold transition-all ${
                  adminTab === 'bkk'
                    ? 'bg-blue-900 text-amber-400 shadow-md shadow-blue-900/10'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-slate-800'
                }`}
              >
                <Briefcase className="h-4 w-4" />
                <span>Bursa Kerja (BKK)</span>
              </button>

              <button
                onClick={() => setAdminTab('alumni')}
                className={`flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-xs font-bold transition-all ${
                  adminTab === 'alumni'
                    ? 'bg-blue-900 text-amber-400 shadow-md shadow-blue-900/10'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-slate-800'
                }`}
              >
                <Users className="h-4 w-4" />
                <span>Testimoni Alumni</span>
              </button>

              <button
                onClick={() => setAdminTab('inbox')}
                className={`flex items-center gap-2.5 justify-between rounded-lg px-3.5 py-2.5 text-xs font-bold transition-all ${
                  adminTab === 'inbox'
                    ? 'bg-blue-900 text-amber-400 shadow-md shadow-blue-900/10'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Inbox className="h-4 w-4" />
                  <span>Isi Pesan Masuk</span>
                </div>
                {messages.filter(m => !m.isRead).length > 0 && (
                  <span className="rounded-full bg-amber-500 px-1.5 py-0.5 text-[9px] font-bold text-blue-950">
                    {messages.filter(m => !m.isRead).length}
                  </span>
                )}
              </button>
            </>
          )}

          {role === 'operator' && (
            <div className="mt-4 p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 text-[10px] text-orange-600 dark:text-orange-400 leading-relaxed border border-orange-200/40">
              <AlertTriangle className="h-4 w-4 mb-1" />
              Sebagai <strong>Operator</strong>, Anda dibatasi untuk merubah berita dan galeri. Hubungi Super Admin untuk penyesuaian profil dan finansial sekolah.
            </div>
          )}
        </div>

        {/* Dynamic Inner Tab View */}
        <div className="lg:col-span-3 rounded-2xl border border-zinc-100 dark:border-blue-950/10 bg-white dark:bg-slate-900/60 p-6 shadow-xl min-h-[500px]">
          
          {/* NEWS TAB */}
          {adminTab === 'news' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-blue-950/20 pb-4">
                <h3 className="text-lg font-black tracking-tight text-blue-900 dark:text-amber-400 uppercase">
                  MANAJEMEN ARTIKEL & BERITA
                </h3>
              </div>

              {/* Add form */}
              <form onSubmit={saveNews} className="rounded-xl border border-blue-950/10 bg-zinc-50 dark:bg-slate-950 p-4 space-y-4">
                <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  {editingNewsId ? 'Sunting Berita' : 'Tambah Berita Baru'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Judul (Indonesia)</label>
                    <input
                      type="text"
                      value={newsForm.title || ''}
                      onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                      placeholder="Masukkan judul Indonesia..."
                      className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-blue-900/40 bg-white dark:bg-slate-900 p-2 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Judul (English)</label>
                    <input
                      type="text"
                      value={newsForm.titleEn || ''}
                      onChange={(e) => setNewsForm({ ...newsForm, titleEn: e.target.value })}
                      placeholder="Masukkan judul Inggris..."
                      className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-blue-900/40 bg-white dark:bg-slate-900 p-2 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Konten Utama Berita (Bahasa Indonesia)</label>
                  <textarea
                    rows={4}
                    value={newsForm.content || ''}
                    onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                    placeholder="Tulis jalannya berita..."
                    className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-blue-900/40 bg-white dark:bg-slate-900 p-2.5 text-xs text-zinc-750 font-sans"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Kategori</label>
                    <select
                      value={newsForm.category || 'Pengumuman'}
                      onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-blue-900/40 bg-white dark:bg-slate-900 p-2 text-xs"
                    >
                      <option value="Akademik">Akademik</option>
                      <option value="Non-Akademik">Non-Akademik</option>
                      <option value="Pengumuman">Pengumuman</option>
                      <option value="Event">Event</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Gambar URL UNSPLASH / Lainnya</label>
                    <input
                      type="text"
                      value={newsForm.image || ''}
                      onChange={(e) => setNewsForm({ ...newsForm, image: e.target.value })}
                      placeholder="https://images.unsplash.com/..."
                      className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-blue-900/40 bg-white dark:bg-slate-900 p-2 text-xs"
                    />
                  </div>
                  <div className="flex items-center pt-5">
                    <label className="flex items-center gap-2 text-xs font-semibold select-none cursor-pointer">
                      <input
                        type="checkbox"
                        checked={!!newsForm.isPopular}
                        onChange={(e) => setNewsForm({ ...newsForm, isPopular: e.target.checked })}
                      />
                      <span>Tandai sebagai Populer / Utama</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  {editingNewsId && (
                    <button
                      type="button"
                      onClick={() => { setEditingNewsId(null); setNewsForm({}); }}
                      className="rounded-lg bg-zinc-200 px-4 py-2 text-xs font-bold text-zinc-700"
                    >
                      Batal
                    </button>
                  )}
                  <button
                    type="submit"
                    className="rounded-lg bg-amber-500 text-blue-950 hover:bg-amber-600 px-5  py-2 text-xs font-bold"
                  >
                    {editingNewsId ? 'Update Berita ✓' : 'Sematkan Berita +'}
                  </button>
                </div>
              </form>

              {/* List */}
              <div className="space-y-2">
                <p className="text-[10px] font-extrabold uppercase text-zinc-400">Daftar Posting Berita Aktif</p>
                <div className="divide-y divide-zinc-100 dark:divide-blue-950/20 max-h-[300px] overflow-y-auto pr-1">
                  {news.map(item => (
                    <div key={item.id} className="flex justify-between items-center py-3">
                      <div className="flex gap-3 items-center">
                        <img src={item.image} className="h-10 w-10 rounded-lg object-cover" />
                        <div>
                          <p className="text-xs font-bold line-clamp-1">{item.title}</p>
                          <span className="text-[9px] bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 rounded px-1.5 py-0.5">{item.category} • {item.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => triggerEditNews(item)} className="p-1 text-amber-500 hover:text-amber-600"><Edit2 className="h-3.5 w-3.5" /></button>
                        <button onClick={() => deleteNewsItem(item.id)} className="p-1 text-red-500 hover:text-red-700"><Trash2 className="h-3.5 w-3.5" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}


          {/* GALLERY TAB */}
          {adminTab === 'gallery' && (
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tight text-blue-900 dark:text-amber-400 uppercase">
                MANAJEMEN GALERI FOTO DAN KEGIATAN
              </h3>

              <form onSubmit={saveGallery} className="rounded-xl border border-blue-950/10 bg-zinc-50 dark:bg-slate-950 p-4 space-y-4">
                <p className="text-xs font-bold text-amber-600 uppercase">Tambah Foto Baru</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold">Judul Foto (Indo)</label>
                    <input
                      type="text"
                      placeholder="Contoh: Kunjungan Industri..."
                      onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-blue-900/40 bg-white dark:bg-slate-900 p-2 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold">Gambar URL</label>
                    <input
                      type="text"
                      placeholder="https://images.unsplash.com/..."
                      onChange={(e) => setGalleryForm({ ...galleryForm, image: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-blue-900/40 bg-white dark:bg-slate-900 p-2 text-xs"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold">Kategori Galeri</label>
                    <select
                      onChange={(e) => setGalleryForm({ ...galleryForm, category: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-zinc-200 dark:border-blue-900/40 bg-white dark:bg-slate-900 p-2 text-xs"
                    >
                      <option value="Kegiatan Sekolah">Kegiatan Sekolah</option>
                      <option value="Kegiatan Jurusan">Kegiatan Jurusan</option>
                      <option value="Kunjungan Industri">Kunjungan Industri</option>
                      <option value="Lomba">Lomba (Competitions)</option>
                      <option value="Wisuda">Wisuda</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button type="submit" className="w-full rounded-lg bg-amber-500 py-2.5 text-xs font-bold text-blue-950">
                      Sematkan Foto +
                    </button>
                  </div>
                </div>
              </form>

              <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto">
                {gallery.map(item => (
                  <div key={item.id} className="flex justify-between items-center rounded-lg border border-zinc-100 p-2">
                    <div className="flex gap-2 items-center">
                      <img src={item.image} className="h-10 w-10 object-cover rounded" />
                      <div>
                        <p className="text-[11px] font-bold line-clamp-1">{item.title}</p>
                        <span className="text-[8px] text-zinc-500">{item.category}</span>
                      </div>
                    </div>
                    <button onClick={() => deleteGalleryItem(item.id)} className="text-red-500"><Trash2 className="h-3 w-3" /></button>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* ACHIEVEMENTS TAB */}
          {adminTab === 'achievements' && (
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tight text-blue-900 dark:text-amber-400 uppercase">
                MANAJEMEN PRESTASI SEKOLAH & SISWA
              </h3>

              <form onSubmit={saveAchievement} className="rounded-xl border border-blue-950/10 bg-zinc-50 dark:bg-slate-950 p-4 space-y-4">
                <p className="text-xs font-bold text-amber-600 uppercase">Kuis Prestasi Baru</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold">Judul Prestasi (Indo)</label>
                    <input
                      type="text"
                      placeholder="Medali Emas Kaliber Nasional..."
                      onChange={(e) => setAchForm({ ...achForm, title: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-zinc-200 bg-white dark:bg-slate-900 p-2 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold">Peraih / Pemenang</label>
                    <input
                      type="text"
                      placeholder="Riri Amanda (Kelas XII RPL)..."
                      onChange={(e) => setAchForm({ ...achForm, winner: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-zinc-200 bg-white dark:bg-slate-900 p-2 text-xs"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-bold">Klasifikasi</label>
                    <select
                      onChange={(e) => setAchForm({ ...achForm, category: e.target.value as any })}
                      className="mt-1 w-full rounded-lg border border-zinc-200 bg-white dark:bg-slate-900 p-2 text-xs"
                    >
                      <option value="Siswa">Siswa</option>
                      <option value="Guru">Guru</option>
                      <option value="Sekolah">Sekolah</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold">Tingkat</label>
                    <select
                      onChange={(e) => setAchForm({ ...achForm, level: e.target.value as any })}
                      className="mt-1 w-full rounded-lg border border-zinc-200 bg-white dark:bg-slate-900 p-2 text-xs"
                    >
                      <option value="Nasional">Nasional</option>
                      <option value="Internasional">Internasional</option>
                      <option value="Provinsi">Provinsi</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button type="submit" className="w-full rounded-lg bg-amber-500 py-2 text-xs font-bold text-blue-950">
                      Sematkan Juara +
                    </button>
                  </div>
                </div>
              </form>

              <div className="space-y-1">
                {achievements.map(a => (
                  <div key={a.id} className="flex justify-between items-center border-b pb-2">
                    <p className="text-xs font-bold">{a.title} <span className="font-semibold text-zinc-500 text-[10px]">({a.winner})</span></p>
                    <button onClick={() => deleteAchievementItem(a.id)} className="text-red-500"><Trash2 className="h-3 w-3" /></button>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* COMPETENCIES / MAJORS TAB */}
          {adminTab === 'majors' && (
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tight text-blue-900 dark:text-amber-400 uppercase">
                MANAJEMEN DETAIL JURUSAN & PROGRAM STUDI
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Perbarui langsung isi deksripsi kurikulum, prospek kerja, dan fasilitas spesial di 4 jurusan utama sekolah.
              </p>

              <div className="space-y-8 max-h-[500px] overflow-y-auto pr-1">
                {competencies.map((comp, idx) => (
                  <div key={comp.id} className="rounded-xl border border-zinc-200 dark:border-blue-900/30 p-4 space-y-3 bg-zinc-50 dark:bg-slate-950">
                    <span className="rounded bg-amber-500 text-blue-950 px-2 py-0.5 text-xs font-extrabold">{comp.code} - {comp.id.toUpperCase()}</span>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold">Nama Jurusan (Indo)</label>
                        <input
                          type="text"
                          value={comp.name}
                          onChange={(e) => updateCompetencyField(idx, 'name', e.target.value)}
                          className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold">Nama Jurusan (English)</label>
                        <input
                          type="text"
                          value={comp.nameEn}
                          onChange={(e) => updateCompetencyField(idx, 'nameEn', e.target.value)}
                          className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold">Deskripsi Kurikulum (Indo)</label>
                      <textarea
                        rows={2}
                        value={comp.description}
                        onChange={(e) => updateCompetencyField(idx, 'description', e.target.value)}
                        className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* BANNERS, RUNNING TEXT & POPUPS */}
          {adminTab === 'banner' && (
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tight text-blue-900 dark:text-amber-400 uppercase">
                KONFIGURASI RUNNING TEXT & ANNOUNCEMENT POPUP
              </h3>

              {/* Running Text Config */}
              <div className="rounded-xl border border-blue-900/20 bg-blue-50/50 dark:bg-slate-950 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs font-extrabold uppercase text-blue-700 dark:text-amber-400">
                    <Megaphone className="h-4 w-4" />
                    Running Text Pengumuman
                  </span>
                  <label className="flex items-center gap-2 text-xs select-none cursor-pointer">
                    <input
                      type="checkbox"
                      checked={runningText.isActive}
                      onChange={(e) => setRunningText({ ...runningText, isActive: e.target.checked })}
                    />
                    <span>Aktifkan Running Text</span>
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-zinc-500">Teks Pengumuman (Indo)</label>
                    <textarea
                      rows={2}
                      value={runningText.text}
                      onChange={(e) => setRunningText({ ...runningText, text: e.target.value })}
                      className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-zinc-500">Teks Pengumuman (English)</label>
                    <textarea
                      rows={2}
                      value={runningText.textEn}
                      onChange={(e) => setRunningText({ ...runningText, textEn: e.target.value })}
                      className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                    />
                  </div>
                </div>
              </div>

              {/* Banner Popup Config */}
              <div className="rounded-xl border border-amber-900/25 bg-amber-50/40 dark:bg-slate-950 p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase text-amber-600 dark:text-amber-400">🚨 Popup Informasi Penting (Splash)</span>
                  <label className="flex items-center gap-2 text-xs">
                    <input
                      type="checkbox"
                      checked={popup.isActive}
                      onChange={(e) => setPopup({ ...popup, isActive: e.target.checked })}
                    />
                    <span>Aktifkan Popup saat Dibuka</span>
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold">Judul Popup (Indo)</label>
                    <input
                      type="text"
                      value={popup.title}
                      onChange={(e) => setPopup({ ...popup, title: e.target.value })}
                      className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold">Teks Tombol CTA</label>
                    <input
                      type="text"
                      value={popup.linkText}
                      onChange={(e) => setPopup({ ...popup, linkText: e.target.value })}
                      className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold">Isi Pesan Detail (Indo)</label>
                  <textarea
                    rows={2}
                    value={popup.text}
                    onChange={(e) => setPopup({ ...popup, text: e.target.value })}
                    className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                  />
                </div>
              </div>
            </div>
          )}


          {/* SCHOOL PROFILE TAB */}
          {adminTab === 'profile' && (
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tight text-blue-900 dark:text-amber-400 uppercase">
                SUAL PROFIL & IDENTITAS SEKOLAH
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold">Nama Sekolah Utama (Indo)</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold">Tagline Sekolah (Indo)</label>
                  <input
                    type="text"
                    value={profile.tagline}
                    onChange={(e) => setProfile({ ...profile, tagline: e.target.value })}
                    className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold">Teks Sejarah Singkat (Indo)</label>
                <textarea
                  rows={3}
                  value={profile.history}
                  onChange={(e) => setProfile({ ...profile, history: e.target.value })}
                  className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold">Visi (Indo)</label>
                  <textarea
                    rows={2}
                    value={profile.vision}
                    onChange={(e) => setProfile({ ...profile, vision: e.target.value })}
                    className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-amber-500">Sambutan Kepala Sekolah (Paragraf)</label>
                  <textarea
                    rows={2}
                    value={profile.schoolHead.speech}
                    onChange={(e) => setProfile({
                      ...profile,
                      schoolHead: { ...profile.schoolHead, speech: e.target.value }
                    })}
                    className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-zinc-50 dark:bg-slate-950 p-4 rounded-xl">
                <div>
                  <label className="text-[10px] font-bold">Siswa Aktif</label>
                  <input
                    type="number"
                    value={profile.stats.students}
                    onChange={(e) => setProfile({
                      ...profile,
                      stats: { ...profile.stats, students: parseInt(e.target.value) || 0 }
                    })}
                    className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold">Guru</label>
                  <input
                    type="number"
                    value={profile.stats.teachers}
                    onChange={(e) => setProfile({
                      ...profile,
                      stats: { ...profile.stats, teachers: parseInt(e.target.value) || 0 }
                    })}
                    className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold">Alumni</label>
                  <input
                    type="number"
                    value={profile.stats.alumni}
                    onChange={(e) => setProfile({
                      ...profile,
                      stats: { ...profile.stats, alumni: parseInt(e.target.value) || 0 }
                    })}
                    className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold">Akreditasi</label>
                  <input
                    type="text"
                    value={profile.accreditation}
                    onChange={(e) => setProfile({ ...profile, accreditation: e.target.value })}
                    className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                  />
                </div>
              </div>
            </div>
          )}


          {/* PPDB SETTINGS TAB */}
          {adminTab === 'ppdb' && (
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tight text-blue-900 dark:text-amber-400 uppercase">
                SETTING & STATUS QUOTA PPDB ONLINE
              </h3>

              <div className="grid grid-cols-3 gap-4 rounded-xl border p-4 bg-zinc-50 dark:bg-slate-950">
                <div>
                  <label className="text-[10px] font-bold">Total Kuota Penerimaan</label>
                  <input
                    type="number"
                    value={ppdb.quota}
                    onChange={(e) => setPpdb({ ...ppdb, quota: parseInt(e.target.value) || 360 })}
                    className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold">Siswa Baru Terdaftar</label>
                  <input
                    type="number"
                    value={ppdb.registeredCount}
                    onChange={(e) => setPpdb({ ...ppdb, registeredCount: parseInt(e.target.value) || 0 })}
                    className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold">Status Pendaftaran</label>
                  <select
                    value={ppdb.status}
                    onChange={(e) => setPpdb({ ...ppdb, status: e.target.value as any })}
                    className="mt-1 w-full rounded border p-1.5 text-xs bg-white dark:bg-slate-900"
                  >
                    <option value="Buka">Buka</option>
                    <option value="Persiapan">Persiapan</option>
                    <option value="Tutup">Tutup</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-extrabold uppercase text-zinc-400">Jadwal Event PPDB</p>
                {ppdb.schedule.map((sch, i) => (
                  <div key={i} className="flex justify-between text-xs border-b py-2">
                    <span className="font-semibold">{sch.title}</span>
                    <span className="text-zinc-500 font-mono">{sch.date} ({sch.status.toUpperCase()})</span>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* BKK TAB */}
          {adminTab === 'bkk' && (
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tight text-blue-900 dark:text-amber-400 uppercase">
                BURSA KERJA KHUSUS (BKK) & REKRUTMEN INDUSTRI
              </h3>

              <form onSubmit={saveVacancy} className="rounded-xl border border-blue-950/10 bg-zinc-50 dark:bg-slate-950 p-4 space-y-4">
                <p className="text-xs font-bold text-amber-600 uppercase">Input Loker Baru</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold">Nama Perusahaan</label>
                    <input
                      type="text"
                      placeholder="Contoh: PT Astra Auto..."
                      onChange={(e) => setVacancyForm({ ...vacancyForm, company: e.target.value })}
                      className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold">Nama Posisi Pekerjaan</label>
                    <input
                      type="text"
                      placeholder="Junior Network Specialist..."
                      onChange={(e) => setVacancyForm({ ...vacancyForm, position: e.target.value })}
                      className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-bold">Kisaran Gaji</label>
                    <input
                      type="text"
                      placeholder="Rp 5.500.000..."
                      onChange={(e) => setVacancyForm({ ...vacancyForm, salary: e.target.value })}
                      className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold">Batas Akhir</label>
                    <input
                      type="text"
                      placeholder="15 Agustus 2026..."
                      onChange={(e) => setVacancyForm({ ...vacancyForm, deadline: e.target.value })}
                      className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                    />
                  </div>
                  <div className="flex items-end">
                    <button type="submit" className="w-full rounded bg-amber-500 py-2.5 text-xs font-bold text-blue-950">
                      Sematkan Loker +
                    </button>
                  </div>
                </div>
              </form>

              <div className="space-y-1">
                {bkk.vacancies.map(v => (
                  <div key={v.id} className="flex justify-between items-center text-xs border-b py-2">
                    <div>
                      <span className="font-bold">{v.position}</span> @ <span>{v.company}</span>
                    </div>
                    <button onClick={() => deleteVacancyItem(v.id)} className="text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* ALUMNI TESTIMONIAL TAB */}
          {adminTab === 'alumni' && (
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tight text-blue-900 dark:text-amber-400 uppercase">
                TESTIMONI & JEJAK KARIER ALUMNI
              </h3>

              <form onSubmit={saveAlumni} className="rounded-xl border border-blue-950/10 bg-zinc-50 dark:bg-slate-950 p-4 space-y-4">
                <p className="text-xs font-bold text-amber-600 uppercase">Input Prestasi Alumni Baru</p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-bold">Nama Lengkap</label>
                    <input
                      type="text"
                      placeholder="Siska Handayani..."
                      onChange={(e) => setAlumniForm({ ...alumniForm, name: e.target.value })}
                      className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold">Karier Saat Ini</label>
                    <input
                      type="text"
                      placeholder="UI Designer di Singapore..."
                      onChange={(e) => setAlumniForm({ ...alumniForm, currentCareer: e.target.value })}
                      className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold">Jurusan / Angkatan</label>
                    <input
                      type="text"
                      placeholder="RPL / 2024..."
                      onChange={(e) => setAlumniForm({ ...alumniForm, competency: e.target.value })}
                      className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold">Pernyataan Testimoni (Indo)</label>
                  <textarea
                    rows={2}
                    placeholder="Saya merasa belajar di SMK sangat..."
                    onChange={(e) => setAlumniForm({ ...alumniForm, testimonial: e.target.value })}
                    className="mt-1 w-full rounded border p-2 text-xs bg-white dark:bg-slate-900"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="rounded bg-amber-500 px-6 py-2 text-xs font-bold text-blue-950">
                    Kirim Testimoni +
                  </button>
                </div>
              </form>

              <div className="space-y-1">
                {alumni.map(al => (
                  <div key={al.id} className="flex justify-between items-center text-xs border-b py-2">
                    <span><strong>{al.name}</strong> ({al.currentCareer})</span>
                    <button onClick={() => deleteAlumniItem(al.id)} className="text-red-500"><Trash2 className="h-3 w-3" /></button>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* MESSAGES / INBOX TAB */}
          {adminTab === 'inbox' && (
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tight text-blue-900 dark:text-amber-400 uppercase">
                KOTAK MASUK PESAN MAHASISWA & WALI (PERTANYAAN)
              </h3>
              <p className="text-xs text-zinc-500">
                Data di bawah adalah pengisian online dari pengunjung lewat Formulir Kontak Publik secara aktual.
              </p>

              {messages.length === 0 ? (
                <div className="text-center py-12 border rounded bg-zinc-50 dark:bg-slate-950">
                  <Inbox className="h-8 w-8 text-zinc-400 mx-auto" />
                  <p className="mt-2 text-xs text-zinc-500 font-semibold uppercase">Kotak Masuk Kosong</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[450px] overflow-y-auto pr-1">
                  {messages.map(item => (
                    <div
                      key={item.id}
                      className={`rounded-xl border p-4.5 space-y-2 transition-all ${
                        item.isRead
                          ? 'border-zinc-200 bg-white dark:bg-slate-900'
                          : 'border-amber-400 bg-amber-500/10 dark:bg-amber-400/5 shadow-md'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <strong className="text-sm">{item.name}</strong>
                          <span className="text-xs text-zinc-500 block">{item.email}</span>
                        </div>
                        <span className="text-[10px] text-zinc-400">{item.date}</span>
                      </div>
                      <div className="text-xs">
                        <p className="font-bold text-blue-900 dark:text-amber-400 underline decoration-amber-400/30">Subjek: {item.subject}</p>
                        <p className="mt-1 leading-relaxed text-zinc-700 dark:text-zinc-300 italic">"{item.message}"</p>
                      </div>
                      <div className="flex justify-end gap-2 pt-2">
                        {!item.isRead && (
                          <button
                            onClick={() => markMessageRead(item.id)}
                            className="rounded bg-emerald-500 text-white px-3 py-1 text-[10px] font-bold"
                          >
                            Tandai Telah Dibaca
                          </button>
                        )}
                        <button
                          onClick={() => deleteMessage(item.id)}
                          className="rounded text-red-500 border border-red-500/10 hover:bg-red-50 px-3 py-1 text-[10px] font-bold"
                        >
                          Hapus Permanen
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
