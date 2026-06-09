/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  SchoolProfile,
  Competency,
  Facility,
  News,
  GalleryItem,
  Achievement,
  PPDBInfo,
  BKKInfo,
  Alumnus,
  RunningText,
  PopupInfo,
  AcademicCalendarEvent,
  DownloadFile,
  ContactMessage
} from './types';
import {
  INITIAL_PROFILE,
  INITIAL_COMPETENCIES,
  INITIAL_FACILITIES,
  INITIAL_NEWS,
  INITIAL_GALLERY,
  INITIAL_ACHIEVEMENTS,
  INITIAL_PPDB,
  INITIAL_BKK,
  INITIAL_ALUMNI,
  INITIAL_RUNNING_TEXT,
  INITIAL_POPUP,
  INITIAL_ACADEMIC_EVENTS,
  INITIAL_DOWNLOADS
} from './data';

export function useSchoolState() {
  const [profile, setProfile] = useState<SchoolProfile>(() => {
    const data = localStorage.getItem('smk_profile');
    return data ? JSON.parse(data) : INITIAL_PROFILE;
  });

  const [competencies, setCompetencies] = useState<Competency[]>(() => {
    const data = localStorage.getItem('smk_competencies');
    return data ? JSON.parse(data) : INITIAL_COMPETENCIES;
  });

  const [facilities, setFacilities] = useState<Facility[]>(() => {
    const data = localStorage.getItem('smk_facilities');
    return data ? JSON.parse(data) : INITIAL_FACILITIES;
  });

  const [news, setNews] = useState<News[]>(() => {
    const data = localStorage.getItem('smk_news');
    return data ? JSON.parse(data) : INITIAL_NEWS;
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const data = localStorage.getItem('smk_gallery');
    return data ? JSON.parse(data) : INITIAL_GALLERY;
  });

  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    const data = localStorage.getItem('smk_achievements');
    return data ? JSON.parse(data) : INITIAL_ACHIEVEMENTS;
  });

  const [ppdb, setPpdb] = useState<PPDBInfo>(() => {
    const data = localStorage.getItem('smk_ppdb');
    return data ? JSON.parse(data) : INITIAL_PPDB;
  });

  const [bkk, setBkk] = useState<BKKInfo>(() => {
    const data = localStorage.getItem('smk_bkk');
    return data ? JSON.parse(data) : INITIAL_BKK;
  });

  const [alumni, setAlumni] = useState<Alumnus[]>(() => {
    const data = localStorage.getItem('smk_alumni');
    return data ? JSON.parse(data) : INITIAL_ALUMNI;
  });

  const [runningText, setRunningText] = useState<RunningText>(() => {
    const data = localStorage.getItem('smk_running_text');
    return data ? JSON.parse(data) : INITIAL_RUNNING_TEXT;
  });

  const [popup, setPopup] = useState<PopupInfo>(() => {
    const data = localStorage.getItem('smk_popup');
    return data ? JSON.parse(data) : INITIAL_POPUP;
  });

  const [academicEvents, setAcademicEvents] = useState<AcademicCalendarEvent[]>(() => {
    const data = localStorage.getItem('smk_academic_events');
    return data ? JSON.parse(data) : INITIAL_ACADEMIC_EVENTS;
  });

  const [downloads, setDownloads] = useState<DownloadFile[]>(() => {
    const data = localStorage.getItem('smk_downloads');
    return data ? JSON.parse(data) : INITIAL_DOWNLOADS;
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const data = localStorage.getItem('smk_messages');
    return data ? JSON.parse(data) : [];
  });

  const [visitorCount, setVisitorCount] = useState<number>(() => {
    const cnt = localStorage.getItem('smk_visitors');
    if (cnt) {
      const parsed = parseInt(cnt, 10);
      return isNaN(parsed) ? 14820 : parsed;
    }
    return 14820;
  });

  // Track changes and commit to local storage
  useEffect(() => {
    localStorage.setItem('smk_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('smk_competencies', JSON.stringify(competencies));
  }, [competencies]);

  useEffect(() => {
    localStorage.setItem('smk_facilities', JSON.stringify(facilities));
  }, [facilities]);

  useEffect(() => {
    localStorage.setItem('smk_news', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem('smk_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('smk_achievements', JSON.stringify(achievements));
  }, [achievements]);

  useEffect(() => {
    localStorage.setItem('smk_ppdb', JSON.stringify(ppdb));
  }, [ppdb]);

  useEffect(() => {
    localStorage.setItem('smk_bkk', JSON.stringify(bkk));
  }, [bkk]);

  useEffect(() => {
    localStorage.setItem('smk_alumni', JSON.stringify(alumni));
  }, [alumni]);

  useEffect(() => {
    localStorage.setItem('smk_running_text', JSON.stringify(runningText));
  }, [runningText]);

  useEffect(() => {
    localStorage.setItem('smk_popup', JSON.stringify(popup));
  }, [popup]);

  useEffect(() => {
    localStorage.setItem('smk_academic_events', JSON.stringify(academicEvents));
  }, [academicEvents]);

  useEffect(() => {
    localStorage.setItem('smk_downloads', JSON.stringify(downloads));
  }, [downloads]);

  useEffect(() => {
    localStorage.setItem('smk_messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('smk_visitors', visitorCount.toString());
  }, [visitorCount]);

  // Simulate visitors increment on mount
  useEffect(() => {
    setVisitorCount(prev => prev + Math.floor(Math.random() * 5) + 1);
  }, []);

  const addMessage = (msg: Omit<ContactMessage, 'id' | 'date' | 'isRead'>) => {
    const newMessage: ContactMessage = {
      ...msg,
      id: "msg-" + Date.now(),
      date: new Date().toISOString().split('T')[0],
      isRead: false
    };
    setMessages(prev => [newMessage, ...prev]);
  };

  const markMessageRead = (id: string) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, isRead: true } : m));
  };

  const deleteMessage = (id: string) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const resetAllData = () => {
    if (window.confirm("Apakah Anda yakin ingin menyetel ulang semua data kembali ke bawaan pabrik?")) {
      localStorage.clear();
      setProfile(INITIAL_PROFILE);
      setCompetencies(INITIAL_COMPETENCIES);
      setFacilities(INITIAL_FACILITIES);
      setNews(INITIAL_NEWS);
      setGallery(INITIAL_GALLERY);
      setAchievements(INITIAL_ACHIEVEMENTS);
      setPpdb(INITIAL_PPDB);
      setBkk(INITIAL_BKK);
      setAlumni(INITIAL_ALUMNI);
      setRunningText(INITIAL_RUNNING_TEXT);
      setPopup(INITIAL_POPUP);
      setAcademicEvents(INITIAL_ACADEMIC_EVENTS);
      setDownloads(INITIAL_DOWNLOADS);
      setMessages([]);
      setVisitorCount(14820);
      window.location.reload();
    }
  };

  return {
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
    visitorCount, setVisitorCount,
    addMessage,
    markMessageRead,
    deleteMessage,
    resetAllData
  };
}
export type SchoolState = ReturnType<typeof useSchoolState>;
