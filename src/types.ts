/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'id' | 'en';

export interface SchoolHead {
  name: string;
  role: string;
  speech: string;
  speechEn: string;
  image: string;
}

export interface SchoolProfile {
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  history: string;
  historyEn: string;
  vision: string;
  visionEn: string;
  mission: string[];
  missionEn: string[];
  goals: string[];
  goalsEn: string[];
  schoolHead: SchoolHead;
  accreditation: string;
  npsn: string;
  establishedYear: string;
  address: string;
  phone: string;
  whatsApp: string;
  email: string;
  googleMapsEmbed: string;
  stats: {
    students: number;
    teachers: number;
    alumni: number;
    achievements: number;
  };
}

export interface Competency {
  id: string;
  code: string; // TJKT, RPL, DKV, AK
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  facilities: string[];
  facilitiesEn: string[];
  careerOpportunities: string[];
  careerOpportunitiesEn: string[];
  certifications: string[];
  certificationsEn: string[];
  achievements: string[];
  achievementsEn: string[];
  image: string;
}

export interface Facility {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  image: string;
}

export interface News {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  category: 'Akademik' | 'Non-Akademik' | 'Pengumuman' | 'Event' | string;
  categoryEn: 'Academic' | 'Non-Academic' | 'Announcement' | 'Event' | string;
  date: string;
  image: string;
  views: number;
  isPopular: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleEn: string;
  category: 'Kegiatan Sekolah' | 'Kegiatan Jurusan' | 'Kunjungan Industri' | 'Lomba' | 'Wisuda' | 'Dokumentasi' | string;
  categoryEn: 'School Activity' | 'Department Activity' | 'Industrial Visit' | 'Competition' | 'Graduation' | 'Documentation' | string;
  image: string;
  date: string;
  description: string;
  descriptionEn: string;
}

export interface Achievement {
  id: string;
  title: string;
  titleEn: string;
  winner: string;
  category: 'Siswa' | 'Guru' | 'Sekolah';
  categoryEn: 'Student' | 'Teacher' | 'School';
  level: 'Nasional' | 'Internasional' | 'Provinsi' | 'Kabupaten';
  levelEn: 'National' | 'International' | 'Provincial' | 'District';
  date: string;
  description: string;
  descriptionEn: string;
  image: string;
}

export interface PPDBEvent {
  title: string;
  titleEn: string;
  date: string;
  status: 'belum_buka' | 'buka' | 'tutup';
  statusEn: 'upcoming' | 'open' | 'closed';
}

export interface PPDBReq {
  id: string;
  title: string;
  titleEn: string;
  details: string[];
  detailsEn: string[];
}

export interface PPDBFlow {
  step: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export interface PPDBFee {
  category: string;
  categoryEn: string;
  amount: string;
  period: string;
  periodEn: string;
  note?: string;
  noteEn?: string;
}

export interface PPDBFaq {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}

export interface PPDBInfo {
  quota: number;
  registeredCount: number;
  status: 'Buka' | 'Tutup' | 'Persiapan';
  statusEn: 'Open' | 'Closed' | 'Preparation';
  schedule: PPDBEvent[];
  requirements: PPDBReq[];
  flow: PPDBFlow[];
  fees: PPDBFee[];
  faqs: PPDBFaq[];
}

export interface JobVacancy {
  id: string;
  company: string;
  position: string;
  positionEn: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  requirements: string[];
  requirementsEn: string[];
  deadline: string;
  logo: string;
}

export interface IndustryPartner {
  id: string;
  name: string;
  logo: string;
  sector: string;
  sectorEn: string;
}

export interface BKKInfo {
  profile: string;
  profileEn: string;
  partners: IndustryPartner[];
  vacancies: JobVacancy[];
  statistics: {
    employedPercent: number;
    entrepreneurPercent: number;
    higherEducationPercent: number;
    alumniTrackedCount: number;
  };
}

export interface Alumnus {
  id: string;
  name: string;
  graduationYear: string;
  competency: string; // RPL, TJKT, DKV, AK
  currentCareer: string;
  currentCareerEn: string;
  testimonial: string;
  testimonialEn: string;
  image: string;
  isFeatured: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  isRead: boolean;
}

export interface RunningText {
  text: string;
  textEn: string;
  isActive: boolean;
}

export interface PopupInfo {
  title: string;
  titleEn: string;
  text: string;
  textEn: string;
  linkText: string;
  linkTextEn: string;
  linkUrl: string;
  image?: string;
  isActive: boolean;
}

export interface AcademicCalendarEvent {
  id: string;
  title: string;
  titleEn: string;
  startDate: string;
  endDate: string;
  type: 'holiday' | 'exam' | 'event' | 'academic';
}

export interface DownloadFile {
  id: string;
  title: string;
  titleEn: string;
  size: string;
  category: 'dokumen' | 'formulir' | 'materi';
  categoryEn: 'document' | 'form' | 'material';
  url: string;
}
