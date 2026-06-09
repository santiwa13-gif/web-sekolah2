/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  DownloadFile
} from './types';

export const INITIAL_PROFILE: SchoolProfile = {
  name: "SMK Modern Unggulan Nusantara",
  nameEn: "Nusantara Modern Vocational High School",
  tagline: "Membentuk Generasi Unggul, Kompeten, Berkarakter & Siap Menghadapi Industri Global",
  taglineEn: "Developing Excellent, Competent, Characterful & Globally Prepared Generations",
  history: "Didirikan pada tahun 2012, SMK Modern Unggulan Nusantara lahir sebagai jawaban atas tingginya kebutuhan industri global terhadap tenaga kerja terampil di bidang teknologi digital dan ekonomi kreatif. Berawal dari 1 kompetensi keahlian, sekolah kami kini telah berkembang pesat menjadi SMK Pusat Keunggulan (Center of Excellence) nasional dengan 4 kompetensi unggulan, didukung oleh kemitraan erat bersama puluhan korporasi multinasional, fasilitas laboratorium standar industri, tenaga pendidik bersertifikasi internasional, dan reputasi mengagumkan di kancah nasional maupun dunia.",
  historyEn: "Established in 2012, Nusantara Modern Vocational High School was born in response to the high demand of the global industry for skilled workers in digital technology and creative economy. Starting with just 1 major, our school has rapidly grown into a national Center of Excellence with 4 major competencies, backed by robust partnerships with dozens of multinational corporations, industry-standard laboratories, internationally certified teachers, and an outstanding reputation.",
  vision: "Menjadi Sekolah Menengah Kejuruan rujukan nasional yang menghasilkan lulusan unggul, religius, berjiwa wirausaha, menguasai teknologi mutakhir, dan berdaya saing global pada tahun 2030.",
  visionEn: "To become a national benchmark vocational high school producing excellent, religious, entrepreneurial graduates who master state-of-the-art technology and hold global competitiveness by 2030.",
  mission: [
    "Menyelenggarakan sistem pendidikan vokasi yang terintegrasi dengan kebutuhan industri modern (Link and Match).",
    "Membentuk karakter Islami dan moral luhur berlandaskan nilai-nilai ketakwaan, kedisiplinan, dan etos kerja tinggi.",
    "Mengembangkan kurikulum inovatif berbasis teknologi masa kini dan sertifikasi keahlian berstandar internasional.",
    "Menumbuhkan jiwa kewirausahaan (entrepreneurship) kreatif melalui Unit Produksi dan program Inkubator Bisnis.",
    "Bekerjasama secara agresif dengan kemitraan lokal dan global demi menjamin penyerapan lulusan di industri-industri terkemuka."
  ],
  missionEn: [
    "Conducting a vocational education system tightly integrated with modern industrial needs (Link and Match).",
    "Shaping supreme moral character based on devotion, hard work, and professional discipline.",
    "Developing innovative curricula driven by present technology and international professional certifications.",
    "Fostering creative entrepreneurship mindsets through Production Units and Business Incubator programs.",
    "Inking high-impact partnerships with local and global industries to assure elite graduate placements."
  ],
  goals: [
    "Mencapai persentase penyerapan lulusan sebesar 95% di industri terkemuka, studi lanjut, ataupun berwirausaha mandiri dalam 6 bulan setelah kelulusan.",
    "Membekali setiap siswa dengan minimal 2 sertifikasi keahlian tingkat nasional (LSP) dan internasional (Microsoft, Cisco, Adobe, MYOB).",
    "Melatih seluruh pendidik agar bersertifikasi kompetensi industri dan aktif melakukan riset terapan.",
    "Menyediakan ekosistem pembelajaran modern berpola kerja industri nyata (Teaching Factory)."
  ],
  goalsEn: [
    "Achieve a graduate placement rate of 95% in leading industries, higher studies, or self-employment within 6 months of graduation.",
    "Equip every student with at least 2 national (LSP) and international skill certifications (Microsoft, Cisco, Adobe, MYOB).",
    "Upskill all educators with industry certification and active applied research experience.",
    "Provide a modern learning ecosystem reflecting a real industrial work environment (Teaching Factory)."
  ],
  schoolHead: {
    name: "Dr. Pratama WIjaya, M.T., Ph.D.",
    role: "Kepala Sekolah / Principal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    speech: "Selamat datang di portal informasi resmi SMK Modern Unggulan Nusantara. Di era revolusi industri, pendidikan kejuruan bukan lagi sekadar opsi alternatif, melainkan garda terdepan pembentuk inovator masa kini. Kami berkomitmen menyatukan pendidikan akademis berkualitas tinggi dengan praktik kerja riil industri. Kita tidak hanya melatih siswa untuk mencari pekerjaan, melainkan mendidik calon pemimpin industri yang siap menciptakan karya besar.",
    speechEn: "Welcome to the official information portal of Nusantara Modern Vocational High School. In this industrial revolution era, vocational education is no longer just an alternative option, but is the front guard forming today's innovators. We are committed to merging top-tier academic instruction with real hands-on industry work. We do not just train students to seek jobs, we shape industrial leaders primed to produce massive impact."
  },
  accreditation: "A (Sangat Memuaskan/Excellent)",
  npsn: "20409832",
  establishedYear: "2012",
  address: "Jl. Boulevard Utama No. 88, Kawasan Pendidikan Digital, Jakarta Timur, 13440, Indonesia",
  phone: "+62 21-8274-1920",
  whatsApp: "6281234567890",
  email: "info@smkmodernnusantara.sch.id",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.04859016186!2d106.900412!3d-6.230489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698cbcf8ec042b%3A0xb1f9712a32608bdc!2sJakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
  stats: {
    students: 1250,
    teachers: 75,
    alumni: 3410,
    achievements: 182
  }
};

export const INITIAL_COMPETENCIES: Competency[] = [
  {
    id: "rpl",
    code: "RPL",
    name: "Rekayasa Perangkat Lunak (Pengembangan Perangkat Lunak & Gim)",
    nameEn: "Software Engineering & Game Development",
    description: "Kompetensi Keahlian RPL membekali siswa dengan pemahaman mendalam tentang siklus pengembangan perangkat lunak modern. Mulai dari perancangan arsitektur systems, pemrograman berorientasi objek, rekayasa web, database SQL & NoSQL, mobile app development (Android/iOS) hingga teknik pembuatan game interaktif 2D/3D yang siap bersaing di pasar global.",
    descriptionEn: "Software Engineering teaches deep mastery of modern software life-cycles. From system architecture design, object-oriented programming, web engineering, SQL & NoSQL databases, mobile app development (Android/iOS) to 2D/3D interactive game composition.",
    facilities: [
      "Laboratorium Mac & iOS Development Standard Apple",
      "Software Engineering Studio dengan VR & Smart TV Presentasi",
      "Server Cloud Computing Mandiri khusus Deployment Project Kreatif",
      "Co-working Space Mahasiwa untuk Kolaborasi Tech-Startup Siswa"
    ],
    facilitiesEn: [
      "Apple Standard Mac & iOS Development Laboratory",
      "Software Engineering Studio with VR & Smart Presentation TVs",
      "Independent Cloud Computing Server for Student Project Deployments",
      "Student Co-working Space for Tech-Startup Incubations"
    ],
    careerOpportunities: [
      "Fullstack Web Developer",
      "Mobile Applications Engineer (Android/iOS)",
      "Game Programmer / Designer",
      "Database Administrator & System Analyst",
      "IT Software Consultant"
    ],
    careerOpportunitiesEn: [
      "Fullstack Web Developer",
      "Mobile Applications Engineer (Android/iOS)",
      "Game Programmer / Designer",
      "Database Administrator & System Analyst",
      "IT Software Consultant"
    ],
    certifications: [
      "Oracle Certified Associate Open Java Developer",
      "Dicoding Certified Android & Web Developer",
      "BNSP Junior Web Programmer Certificate (LSP 1)"
    ],
    certificationsEn: [
      "Oracle Certified Associate Open Java Developer",
      "Dicoding Certified Android & Web Developer",
      "BNSP Junior Web Programmer Certificate (LSP 1)"
    ],
    achievements: [
      "Juara 1 Lomba Kompetensi Siswa (LKS) Tingkat Nasional Bidang Web Technologies 2025",
      "Juara 2 National Youth Tech-Innovation Awards 2024",
      "Best Game Design at Youth Indie Game Expo 2025"
    ],
    achievementsEn: [
      "1st Winner of National Student Competency Competition (LKS) in Web Technologies 2025",
      "2nd Winner of National Youth Tech-Innovation Awards 2024",
      "Best Game Design at Youth Indie Game Expo 2025"
    ],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tjkt",
    code: "TJKT",
    name: "Teknik Jaringan Komputer dan Telekomunikasi",
    nameEn: "Computer Network & Telecommunication Engineering",
    description: "Kompetensi Keahlian TJKT mengajarkan keahlian krusial dalam perencanaan, pemasangan, pemeliharaan, serta pertahanan sistem komunikasi jaringan. Siswa diajarkan administrasi server Linux/Windows, konfigurasi infrastruktur router & switch profesional CISCO/Mikrotik, Fiber Optic splicing, Internet of Things (IoT), hingga pertahanan Cyber Security handal.",
    descriptionEn: "Network & Telecom major focuses on solid mastery of engineering, architecture, implementation, and security of network-based systems. Covers server administration, Mikrotik/CISCO routing configurations, Fiber Optic splicing, IoT, and Cyber Security.",
    facilities: [
      "Cisco & Mikrotik Authorized Academy Training Center Lab",
      "Ruang Praktik Fiber Optic & Splicer Tools Modern",
      "Laboratorium Smart Cyber Security & NOC Monitoring System",
      "IoT Lab Berstandar Industri Otomasi Logistik"
    ],
    facilitiesEn: [
      "Cisco & Mikrotik Authorized Training Center Laboratory",
      "Fiber Optic & Splicer professional tooling room",
      "Cyber Security Sandbox Labs & NOC Live Monitoring Station",
      "Logistics Automation Standard Internet-of-Things (IoT) Laboratory"
    ],
    careerOpportunities: [
      "Network Architect & Engineer",
      "System Administrator Server & Security Linux",
      "Cyber Security Specialist / Analyst",
      "Fiber Optic Technician Specialist",
      "Cloud Infrastructure Admin"
    ],
    careerOpportunitiesEn: [
      "Network Architect & Engineer",
      "System Administrator Server & Security Linux",
      "Cyber Security Specialist / Analyst",
      "Fiber Optic Technician Specialist",
      "Cloud Infrastructure Admin"
    ],
    certifications: [
      "CCNA (Cisco Certified Network Associate) Routing and Switching",
      "MTCNA (MikroTik Certified Network Associate)",
      "BNSP Certificate of Computer Technical Support"
    ],
    certificationsEn: [
      "CCNA (Cisco Certified Network Associate) Routing and Switching",
      "MTCNA (MikroTik Certified Network Associate)",
      "BNSP Certificate of Computer Technical Support"
    ],
    achievements: [
      "Juara 1 LKS Network Systems Administration Nasional 2024",
      "Top 10 International Cyber Defense Student Competition 2025",
      "Sertifikasi Mikrotik 100% Kelulusan Bagi Kelas Kelas Industri 2024"
    ],
    achievementsEn: [
      "1st Winner in National LKS Network Systems Administration 2024",
      "Top 10 International Cyber Defense Student Competition 2025",
      "100% Industry Class Passing Rate for Mikrotik Certificate 2024"
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dkv",
    code: "DKV",
    name: "Desain Komunikasi Visual",
    nameEn: "Visual Communication Design",
    description: "DKV mempersiapkan siswa untuk menjadi desainer kreatif, kreator konten, animator, dan videografer profesional. Kurikulum komprehensif mematangkan teknik branding korporasi, ilustrasi digital, UI/UX interface designer, fotografi studio, 3D modelling, editing video, sountrack, and visual effect (VFX) sinematik.",
    descriptionEn: "DKV guides students into professional creative designers, content creators, animators, and cinematographers. Curriculum equips styling for company branding, digital illustrations, UI/UX mockups, photography, 3D modelling, video editing, and VFX.",
    facilities: [
      "Studio Fotografi Profesional dengan Green Screen & Lighting Kit",
      "Laboratorium Multimedia & Animasi Wacom Tablet",
      "Ruang Broadcast, Podcasting & Sound Isolation Room",
      "Studio Desain Grafis & Mac Editorial Suite"
    ],
    facilitiesEn: [
      "Professional Photography Studio with Green Screen & Studio Lights",
      "Multimedia & Animation Laboratory with Wacom Cintiq Digital Tablets",
      "Professional Podcast, Broadcast, & Audio Acoustic Isolation Chamber",
      "Graphic Design Studio & Mac Editorial Suite"
    ],
    careerOpportunities: [
      "Graphic Designer / Illustrator",
      "UI/UX Visual Interface Designer",
      "Video Editor & Creative Content Director",
      "Professional Studio Photographer",
      "Animator & 3D Modeler Artist"
    ],
    careerOpportunitiesEn: [
      "Graphic Designer / Illustrator",
      "UI/UX Visual Interface Designer",
      "Video Editor & Creative Content Director",
      "Professional Studio Photographer",
      "Animator & 3D Modeler Artist"
    ],
    certifications: [
      "Adobe Certified Professional in Graphic Design & Video Design",
      "BNSP Certificate for Multimedia Creator (LSP 1)",
      "Autodesk 3ds Max / Maya Certification"
    ],
    certificationsEn: [
      "Adobe Certified Professional in Graphic Design & Video Design",
      "BNSP Certificate for Multimedia Creator (LSP 1)",
      "Autodesk 3ds Max / Maya Certification"
    ],
    achievements: [
      "Juara 1 Lomba Desain Poster Nasional di UI 2025",
      "Best Young Filmmaker Award at SE Asia Student Film Fest 2024",
      "Juara 3 Graphic Design Technology LKS Tingkat Provinsi 2025"
    ],
    achievementsEn: [
      "1st Place in National Poster Design Competition at UI 2025",
      "Best Young Filmmaker Award at SE Asia Student Film Fest 2024",
      "3rd Place in Graphic Design Technology LKS Provincial Level 2025"
    ],
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "ak",
    code: "AK",
    name: "Akuntansi dan Keuangan Lembaga",
    nameEn: "Accounting & Corporate Finance",
    description: "Mempersiapkan tenaga terampil di bidang pelaporan keuangan korporat, perpajakan, audit independen, dan digital corporate finance. Siswa dilatih mahir mengelola transaksi akuntansi konvensional, audit, perpajakan negara (e-SPT), spreadsheet analisis mutakhir, serta software akuntansi industri berstandar dunia seperti MYOB dan Accurate.",
    descriptionEn: "Preparing highly skilled professionals in financial reporting, corporate auditing, state taxations (e-SPT), advanced spreadsheet analysis, and globally integrated accounting systems like MYOB and Accurate.",
    facilities: [
      "Laboratorium Akuntansi Manual & Digital Spreadsheet",
      "Bank Mini Praktik Mandiri Sebagai Unit Pelayanan Keuangan Siswa",
      "Ruang Praktik Simulasi Kantor Akuntan Publik",
      "Software Accurate & MYOB Industry Certified Lab"
    ],
    facilitiesEn: [
      "Manual Accounting & Advanced Digital Spreadsheet Laboratory",
      "Self-sustaining Mini Bank Practice Unit serving School Transactions",
      "Corporate Auditor & Public Accounting Firm Simulated Office Room",
      "Industry Certified Accurate & MYOB Enterprise Lab Hub"
    ],
    careerOpportunities: [
      "Corporate Accountant Assistant",
      "Financial Planner & Auditor",
      "Tax Administrator Specialist",
      "Bank Teller & Credit Admin Assistant",
      "Office Executive Administrator"
    ],
    careerOpportunitiesEn: [
      "Corporate Accountant Assistant",
      "Financial Planner & Auditor",
      "Tax Administrator Specialist",
      "Bank Teller & Credit Admin Assistant",
      "Office Executive Administrator"
    ],
    certifications: [
      "MYOB Certified professional User",
      "Accurate Accounting Certification",
      "Zahir Accounting Professional Certificate",
      "BNSP Teknisi Akuntansi Pratama"
    ],
    certificationsEn: [
      "MYOB Certified Professional User",
      "Accurate Accounting Certification",
      "Zahir Accounting Professional Certificate",
      "BNSP Junior Accounting Technician"
    ],
    achievements: [
      "Juara 1 Lomba Akuntansi & Perpajakan Universitas Indonesia (UI) 2025",
      "Juara 2 LKS Akuntansi Tingkat Nasional 2024",
      "Sertifikasi Akreditasi BNSP Klasifikasi Gold bagi Mini Bank Sekolah"
    ],
    achievementsEn: [
      "1st Place in National Accounting & Tax Competition at UI 2025",
      "2nd Place in National LKS Accounting Level 2024",
      "Gold Accreditation Status from National Board (BNSP) for Mini Bank Unit"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
  }
];

export const INITIAL_FACILITIES: Facility[] = [
  {
    id: "fac-1",
    name: "Laboratorium Komputer & Apple Mac Core Lab",
    nameEn: "Apple Mac Core Computer Laboratory",
    category: "Laboratorium Komputer",
    categoryEn: "Computer Laboratory",
    description: "Laboratorium komputer mutakhir berisikan puluhan unit Apple iMac M3 termutakhir untuk kebutuhan riset rekayasa perangkat lunak, editing video beresolusi ultra, pengolahan AI, serta mobile programming.",
    descriptionEn: "Cutting-edge suite packed with high-end Apple iMac M3 computers targeting software engineering, ultra-high resolution video production, AI engineering, and iOS development.",
    image: "https://images.unsplash.com/photo-1562774053-f01089e378e6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-2",
    name: "Cisco & Mikrotik Networking Laboratory",
    nameEn: "Cisco & Mikrotik Networking Laboratory",
    category: "Laboratorium Jaringan",
    categoryEn: "Network Laboratory",
    description: "Laboratorium jaringan khusus yang dikonfigurasi bersama Cisco Systems dan Router Mikrotik berlisensi asli. Dilengkapi rak server server kelas menengah, splicer fiber optic, dan firewall system.",
    descriptionEn: "Highly specialized network space structured in association with Cisco and Mikrotik Corporation. Houses medium-range blade servers, fiber optic fusion splicers, and firewall setups.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-3",
    name: "Perpustakaan Digital Serta E-Library Corner",
    nameEn: "Modern E-Library & Reading Pavilion",
    category: "Perpustakaan",
    categoryEn: "Library",
    description: "E-Library modern dengan ribuan koleksi buku fisik, e-book berkualitas, tumpukan jurnal sains internasional, tablet akses nirkabel gratis, serta ruang membaca bergaya kafe modern yang sunyi dan kondusif.",
    descriptionEn: "Integrated modern e-library offering thousands of physical books, curated electronic books, journals, free-to-use search tablets, and acoustic reading corners resembling elite silent cafes.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-4",
    name: "Ruang Kelas Pintar Ber-AC & Proyektor Interaktif",
    nameEn: "Smart AC Classrooms with Interactive Projectors",
    category: "Ruang Kelas",
    categoryEn: "Classroom",
    description: "Setiap ruang kelas di SMK kami dilengkapi dengan pengatur suhu AC, Smart TV Interaktif 75 inci, koneksi Wi-Fi berkecepatan 200 Mbps, serta tata meja ergonomis berpola pembelajaran diskusi proaktif.",
    descriptionEn: "Every classroom comes equipped with centralized AC climatization, a 75-inch smart TV, high-speed 200 Mbps Wi-Fi, and modular ergonomic desk arrays promoting dynamic group learning.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-5",
    name: "Mushola Al-Kautsar Yang Luas dan Sejuk",
    nameEn: "Al-Kautsar Mosque & Spiritual Center",
    category: "Mushola",
    categoryEn: "Mosque",
    description: "Fasilitas tempat ibadah umat Muslim yang mampu menampung ratusan jamaah. Ber-AC sejuk, bersih, dilengkapi tempat wudhu higienis yang nyaman bagi seluruh siswa dan pegawai.",
    descriptionEn: "Integrated clean Muslim prayer hall hosting hundreds of students. Features fresh air conditioning and premium hygienic washing facilities supporting clean daily prayers.",
    image: "https://images.unsplash.com/photo-1594913785162-e6785b49eed5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-6",
    name: "Gelanggang Olahraga & Lapangan Multifungsi",
    nameEn: "Sports Center & Multifunction Arena",
    category: "Lapangan",
    categoryEn: "Sports Field",
    description: "Lapangan olahraga outdoor dan indoor berstandar nasional untuk latihan Basket, Futsal, Badminton, Voli, hingga upacara resmi kedisiplinan dan perayaan pentas seni sekolah.",
    descriptionEn: "Outdoor and indoor sports facilities designed for active Basketball, Futsal, Volleyball, and Badminton, alongside state ceremonies and student performing arts.",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-7",
    name: "Teaching Factory & Creative Studio Studio DKV",
    nameEn: "Teaching Factory & Creative DKV Studio",
    category: "Ruang Praktik",
    categoryEn: "Practice Studio",
    description: "Kawasan praktik komersial nyata di mana siswa mendesain, memotret, memproduksi video, serta melaksanakan order branding klien nyata di bawah supervise desainer senior.",
    descriptionEn: "A commercial-grade workspace where visual design students direct professional photoshoots, product advertising, and model active client branding under creative industry supervision.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
  }
];

export const INITIAL_NEWS: News[] = [
  {
    id: "news-1",
    title: "SMK Modern Unggulan Nusantara Raih Predikat Pusat Keunggulan Internasional",
    titleEn: "Nusantara Vocational High School Awarded International Center of Excellence Status",
    content: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi secara resmi menaikkan status SMK Modern Unggulan Nusantara menjadi SMK Pusat Keunggulan Skema Internasional. Penghargaan fenomenal ini diraih menyusul integrasi kurikulum global 100% bersama raksasa teknologi Apple, Mikrotik, dan Microsoft. Dengan predikat prestisius ini, sekolah akan menerima dukungan dana hibah riset bernilai miliaran rupiah serta akses langsung penyaluran kerja alumni ke pasar kerja regional ASEAN.",
    contentEn: "The Ministry of Education has formally elevated Nusantara Vocational School to an International Center of Excellence status. This follows historical curriculum alignment with industry icons including Apple, Mikrotik, and Microsoft. Under this elite stature, the campus will absorb massive research grants alongside direct placement networks into the Southeast Asian market.",
    category: "Pengumuman",
    categoryEn: "Announcement",
    date: "2026-06-05",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    views: 1256,
    isPopular: true
  },
  {
    id: "news-2",
    title: "Siswa RPL Berhasil Merilis Game Edukasi Berbasis Kebudayaan Nusantara di Google Play Store",
    titleEn: "Junior Developers Release Cultural Educational Game on Google Play Store",
    content: "Kolaborasi kreatif dari 4 siswa kelas XI jurusan Rekayasa Perangkat Lunak (RPL) sukses menerobos pasar game mobile dengan merilis game petualangan edukatif 'Nusantara Heritage'. Game petualangan RPG ini mengajak anak-anak belajar sejarah budaya Nusantara lewat animasi pixel art yang memukau. Dalam waktu dua minggu saja, game ini telah diunduh lebih dari sepuluh ribu pengguna dan meraih tanggapan bintang lima dari pengulas nasional.",
    contentEn: "A talented team of four Year 11 Software Engineering students have accomplished a remarkable tech project: designing and publishing 'Nusantara Heritage' on the Google Play Store. The pixel-art educational RPG challenges young gamers with cultural quests, hitting 10,000+ download milestones with immaculate reviews in just two weeks.",
    category: "Akademik",
    categoryEn: "Academic",
    date: "2026-05-28",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800",
    views: 945,
    isPopular: true
  },
  {
    id: "news-3",
    title: "Pembukaan Pendaftaran PPDB Tahun Ajaran 2026/2027 Gelombang Kedua",
    titleEn: "Opening of Student Admissions (PPDB) 2026/2027 Second Enrollment Wave",
    content: "Kami sampaikan kepada bapak dan ibu calon wali murid bahwa pendaftaran PPDB Online Gelombang 2 telah resmi dibuka mulai hari ini. Sehubungan kuota pendaftaran kelas industri RPL dan TJKT yang kian terbatas, kami menghimbau para pelamar untuk segera melakukan registrasi berkas pendaftaran serta mengunggah surat keterangan nilai rapor minimal kelas IX secara tepat waktu di portal PPDB kami. Ujian saringan masuk dijadwalkan secara online pada akhir bulan depan.",
    contentEn: "We inform prospective parents that Wave 2 of Student Admissions (PPDB) is officially open. Given the highly competitive and limited seats in Apple and Cisco Industry Classes (RPL/TJKT), applicants are strongly encouraged to finalize files and submit Year 9 scores directly via our online portal. Virtual entry evaluations will take place late next month.",
    category: "Pengumuman",
    categoryEn: "Announcement",
    date: "2026-06-01",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    views: 2420,
    isPopular: false
  },
  {
    id: "news-4",
    title: "Lulusan SMK Sukses Menembus Pasar Kerja Jerman Melalui Program Magang Industri G2G",
    titleEn: "Vocational Graduates Secure Dynamic Careers in Germany via G2G Program",
    content: "Kabar gembira datang dari Bursa Kerja Khusus (BKK) SMK Modern Nusantara. Sebanyak tujuh orang alumni fresh graduate angkatan ke-12 berhasil lolos seleksi kerja program Government to Government (G2G) magang teknisi infrastruktur WAN di Munich, Jerman. Setelah menjalani pembekalan intensif bahasa asing dan sertifikasi CCNA selama enam bulan penuh di kampus, mereka dijadwalkan terbang menuju Munich pada akhir pekan ini untuk kontrak kerja profesional tiga tahun.",
    contentEn: "Brilliant updates from our Placement Office (BKK). Seven recent graduates have cleared rigorous selections for Germany's G2G vocational technical internship in Munich. Supported by intensive German linguistic lectures and CCNA network classes on-campus for 6 months, they will depart this weekend under a signed 3-year professional contract.",
    category: "Non-Akademik",
    categoryEn: "Non-Academic",
    date: "2026-05-15",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    views: 1850,
    isPopular: true
  },
  {
    id: "news-5",
    title: "Menggelar Workshop Creative Branding Bersama Praktisi Agensi Kreatif Nasional",
    titleEn: "Hosting a Dynamic Creative Branding Workshop with National Ad Agency Directors",
    content: "Siswa jurusan Desain Komunikasi Visual (DKV) mendapatkan kesempatan berharga mengikuti workshop eksklusif bertema 'Visual Art in AI Era' yang dibawakan langsung oleh Creative Director dari Hakuhodo Indonesia. Selama dua hari penuh, siswa belajar membangun brand positioning, teknik copywriting modern, serta strategi memanfaatkan tools generative AI secara cerdas dalam merancang poster iklan luar ruang komersial.",
    contentEn: "Visual Design (DKV) students had the prestigious opportunity to join an elite private masterclass: 'Visual Art in AI Era' directed by the Creative Director of Hakuhodo Indonesia. Over two immersive days, students mastered commercial layout psychology, active copywriting, and strategic deployment of generative canvas software.",
    category: "Event",
    categoryEn: "Event",
    date: "2026-05-10",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    views: 710,
    isPopular: false
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Upacara Hari Lahir Pancasila & Pembinaan Disiplin Siswa",
    titleEn: "National Ceremony & Discipline Training",
    category: "Kegiatan Sekolah",
    categoryEn: "School Activity",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    date: "2026-06-01",
    description: "Kegiatan upacara bendera memperingati Hari Lahir Pancasila diikuti seluruh civitas akademika dengan hikmat dan penuh patriotisme.",
    descriptionEn: "Sovereign national student ceremony celebrating Pancasila day, attended by more than 1,000 active students and academic officers."
  },
  {
    id: "gal-2",
    title: "Uji Kompetensi Keahlian (UKK) Mandiri Berstandar Apple developer",
    titleEn: "Classroom Software Assessment with External Examiners",
    category: "Kegiatan Jurusan",
    categoryEn: "Department Activity",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    date: "2026-05-18",
    description: "Para siswa Rekayasa Perangkat Lunak (RPL) saat mempertahankan produk startup ciptaan mereka di hadapan tim penguji eksternal industri.",
    descriptionEn: "Year 12 developer students defending custom React & Flutter portfolios in front of executive assessors during external technical reviews."
  },
  {
    id: "gal-3",
    title: "Kunjungan Industri Jurusan TJKT ke Data Center Telkomsigma",
    titleEn: "Industrial Visit TJKT Major at Telkomsigma Data Center",
    category: "Kunjungan Industri",
    categoryEn: "Industrial Visit",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800",
    date: "2026-05-12",
    description: "Kunjungan lapangan siswa kelas TJKT guna melihat langsung tata kelola server cloud, server security, dan monitoring network tier 3.",
    descriptionEn: "On-site industrial inspection of enterprise class 3 data facilities, network mainframes, and global backup units in digital clusters."
  },
  {
    id: "gal-4",
    title: "Raihan Medali Emas LKS Nasional Bidang IT Network",
    titleEn: "Aviation/IT Gold Academic Medals Ceremony",
    category: "Lomba",
    categoryEn: "Competition",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800",
    date: "2025-10-14",
    description: "Penyerahan piala penghargaan oleh Gubernur Jakarta kepada siswa didik berprestasi pemenang medali emas di ajang LKS Nasional.",
    descriptionEn: "Direct presentation of gold trophies and technical achievement awards by the Governor to elite network system awardees."
  },
  {
    id: "gal-5",
    title: "Prosesi Wisuda dan Pelepasan Alumni Angkatan Ke-13",
    titleEn: "Graduation Ceremony Class of 13th Alumni Division",
    category: "Wisuda",
    categoryEn: "Graduation",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    date: "2026-05-22",
    description: "Suasana haru penuh kebanggaan saat prosesi kelulusan 350 siswa yang 80% diantaranya telah dikontrak kerja sebelum lulus.",
    descriptionEn: "An heartwarming celebration marking the successful graduation of 350 graduates, with 80% already holding signed work offers."
  },
  {
    id: "gal-6",
    title: "Pemberian Bantuan CSR Router Core dari PT Mikrotik Indonesia",
    titleEn: "Mikrotik CSR Hardware Integration Meeting",
    category: "Dokumentasi",
    categoryEn: "Documentation",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    date: "2026-04-10",
    description: "Simbolis serah terima sepuluh unit router modular tercanggih dari Direktur CSR Mikrotik untuk fasilitas lab networking.",
    descriptionEn: "Official partnership ceremony dedicating modular high-power routing hardware to the school's certified Cisco laboratory."
  }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "Medali Emas Lomba Kompetensi Siswa (LKS) Tingkat Nasional Bidang Cloud Computing",
    titleEn: "Gold Medal National Student Skill Championship in Cloud Computing",
    winner: "Rian Aditya (Siswa RPL Kelas XII)",
    category: "Siswa",
    categoryEn: "Student",
    level: "Nasional",
    levelEn: "National",
    date: "2025-10-12",
    description: "Mengalahkan puluhan finalis berbakat dari 34 provinsi, Rian sukses mendesain manajemen arsitektur cloud server tangguh anti-DDoS dalam waktu ujian 15 jam.",
    descriptionEn: "Competing against elite developers from 34 provinces, Rian successfully framed AWS server setups with DDoS defense modules in a challenging 15-hour live exam.",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ach-2",
    title: "Gelar Guru Inovatif Terbaik Bidang Pembelajaran AI tingkat ASEAN",
    titleEn: "Best Innovative Educator award in South-East Asia AI Learning Standards",
    winner: "Siti Rahmawati, S.Kom., M.T.",
    category: "Guru",
    categoryEn: "Teacher",
    level: "Internasional",
    levelEn: "International",
    date: "2025-11-20",
    description: "Siti Rahmawati dianugerahi penghargaan tertinggi di Brunei Darussalam berkat penelitian beliau dalam memanfaatkan AI generative untuk penilaian materi koding siswa.",
    descriptionEn: "Siti Rahmawati was honored with the gold medal in Brunei Darussalam for integrating generative language models safely into real-time student tech coding reviews.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ach-3",
    title: "Sekolah Berkinerja Terbaik Tingkat Nasional (Kemdikbudristek Award)",
    titleEn: "National Best Performing Vocational High School (Ministry Executive Award)",
    winner: "SMK Modern Unggulan Nusantara",
    category: "Sekolah",
    categoryEn: "School",
    level: "Nasional",
    levelEn: "National",
    date: "2026-02-15",
    description: "Apresiasi khusus diserahkan langsung oleh Menteri Pendidikan atas kesuksesan SMK kami mencapai serapan kerja lulusan tercepat dan sinkronisasi kurikulum industri.",
    descriptionEn: "Elite state honor presented by the Federal Secretary of Education acknowledging the fastest graduate hiring rates and deep corporate partnership models.",
    image: "https://images.unsplash.com/photo-1552581230-2641474dd5b4?auto=format&fit=crop&q=80&w=800"
  }
];

export const INITIAL_PPDB: PPDBInfo = {
  quota: 360,
  registeredCount: 285,
  status: "Buka",
  statusEn: "Open",
  schedule: [
    {
      title: "Pendaftaran Online & Upload Berkas Gelombang I",
      titleEn: "Online Enrollment & File Upload Phase 1",
      date: "01 Februari – 15 April 2026",
      status: "tutup",
      statusEn: "closed"
    },
    {
      title: "Ujian Seleksi & Pengumuman Gelombang I",
      titleEn: "Competency Evaluations & Wave 1 Results",
      date: "20 April 2026",
      status: "tutup",
      statusEn: "closed"
    },
    {
      title: "Pendaftaran Online & Upload Berkas Gelombang II",
      titleEn: "Online Enrollment & File Upload Phase 2",
      date: "01 Mei – 30 Juni 2026",
      status: "buka",
      statusEn: "open"
    },
    {
      title: "Ujian Seleksi Online Gelombang II",
      titleEn: "Interactive Competency Test Wave II",
      date: "05 Juli 2026",
      status: "belum_buka",
      statusEn: "upcoming"
    },
    {
      title: "Pengumuman Hasil Kelulusan Gelombang II",
      titleEn: "Official Graduation Announcements Wave II",
      date: "12 Juli 2026",
      status: "belum_buka",
      statusEn: "upcoming"
    },
    {
      title: "Daftar Ulang & Orientasi Fisik Siswa Baru",
      titleEn: "Student Re-registration & Tactical Orientation",
      date: "15 – 20 Juli 2026",
      status: "belum_buka",
      statusEn: "upcoming"
    }
  ],
  requirements: [
    {
      id: "req-1",
      title: "Persyaratan Administratif",
      titleEn: "Administrative Prerequisites",
      details: [
        "Telah lulus SMP/MTs/Sederajat dibuktikan dengan ijazah atau Surat Keterangan Lulus (SKL) asli.",
        "Fotokopi Kartu Keluarga (KK) dan Akta Kelahiran sebanyak 2 lembar.",
        "Fotokopi rapor semester 1-5 SMP asli yang dilegalisir kepala sekolah.",
        "Pasfoto formal berwarna ukuran 3x4 (latar merah) sebanyak 4 lembar."
      ],
      detailsEn: [
        "Certified junior high school graduate holding official diplomas or original Graduation Letters.",
        "Certified photocopies of household registry books (KK) and birth certificates (2 copies).",
        "Official junior high transcripts spanning Semesters 1 to 5, legally sealed.",
        "Colored official portrait photographs in 3x4 size (red backdrop) (4 copies)."
      ]
    },
    {
      id: "req-2",
      title: "Persyaratan Khusus Jurusan",
      titleEn: "Major Specific Prerequisites",
      details: [
        "RPL / TJKT: Sehat jasmani & rohani, tidak buta warna parsial maupun total demi efektivitas koding dan perakitan kabel jaringan.",
        "DKV: Wajib melampirkan portofolio lukisan tangan bertema bebas / digital art sebagai bahan evaluasi bakat bawaan.",
        "Akuntansi: Memiliki nilai rapor rata-rata IPS dan Matematika minimal 80.00."
      ],
      detailsEn: [
        "RPL / TJKT: Physically sound, zero active instances of color-blindness to ensure precision coding and cable assemblies.",
        "DKV: Must present a personal visual portfolio (manual sketching or digital vector arts) for review.",
        "Accounting: Holds minimal GPA of 80.00 on quantitative subjects (Mathematics and Social Sciences)."
      ]
    }
  ],
  flow: [
    {
      step: 1,
      title: "Pendaftaran Online",
      titleEn: "Online Application",
      description: "Mengisi formulir biodata pendaftar secara online lengkap di portal pendaftaran sekolah dan memilih jurusannya.",
      descriptionEn: "Complete full digital bio-data records via the smart school portal choosing primary vocational majors."
    },
    {
      step: 2,
      title: "Verifikasi Berkas & Rapor",
      titleEn: "File Verifications",
      description: "Tim panitia memvalidasi keaslian rapor, prestasi, sertifikat kompetensi serta memantau syarat kelengkapan fisik.",
      descriptionEn: "The admissions committee thoroughly evaluates transcribing scores, medical forms, and high-impact sports certificates."
    },
    {
      step: 3,
      title: "Ujian Seleksi Online",
      titleEn: "Competency Test",
      description: "Menempuh tes saringan berupa matematika terapan, logika algoritma, bahasa inggris dasar, serta tes bakat khusus.",
      descriptionEn: "Participating in comprehensive evaluation modules: applied math, algorithmic reasoning, dynamic English, and spatial skills."
    },
    {
      step: 4,
      title: "Wawancara Siswa & Wali",
      titleEn: "Parent & Student Interview",
      description: "Pertemuan wawancara guna menyelaraskan visi komitmen belajar, asrama (bagi yang mendaftar), serta pembiayaan kerja.",
      descriptionEn: "Interactive interview mapping student aspirations, accommodation boarding (if requested), and mutual development commitments."
    },
    {
      step: 5,
      title: "Pengumuman Pengumuman & Daftar Ulang",
      titleEn: "Result & Re-Registration",
      description: "Pengumuman kelulusan resmi diakses secara realtime lewat akun login PPDB dilanjutkan pelunasan dana investasi sekolah.",
      descriptionEn: "Receiving official entry approvals from the dashboard, followed by institutional investment contributions and book logistics."
    }
  ],
  fees: [
    {
      category: "Formulir Pendaftaran Seleksi",
      categoryEn: "Registration & Selection Forms Fee",
      amount: "Rp 150.000",
      period: "Sekali bayar",
      periodEn: "One-time payment"
    },
    {
      category: "Dana Pengembangan Fasilitas (Uang Pangkal)",
      categoryEn: "Institutional Facility Development Fund (Capitation)",
      amount: "Rp 6.500.000",
      period: "Sekali bayar (Bisa diangsur 3x)",
      periodEn: "One-time payment (Installable up to 3 payments)",
      note: "Sudah mencakup seragam 5 stel, iuran asuransi kecelakaan, serta kuota akun premium cloud lab selama 3 tahun.",
      noteEn: "Includes 5 custom uniform sets, basic health premium safety insurances, and full access to standard digital laboratory subscriptions."
    },
    {
      category: "Iuran Bulanan Pendidikan (Sumbangan Pembinaan)",
      categoryEn: "Monthly Education Tuition (SPP Contribution)",
      amount: "Rp 450.000",
      period: "Per bulan",
      periodEn: "Per month",
      note: "Bebas biaya bagi siswa berprestasi yang lolos saringan ujian ranking 10 besar seleksi awal.",
      noteEn: "100% exempted for outstanding talents ranking among Top 10 entrants during selections."
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Apakah tersedia program beasiswa di SMK Modern?",
      questionEn: "Are scholarships offered at Modern Vocational school?",
      answer: "Ya, sekolah kami menyediakan beasiswa prestasi penuh 100% (bebas SPP & Uang pangkal) untuk juara umum kelas, peraih medali LKS, serta beasiswa sosial bagi keluarga kurang mampu dibuktikan surat keterangan dinas sosial.",
      answerEn: "Yes, we provide full 100% merit-based scholarships (completely free tuitions & facilities development funds) for class valedictorians, verified LKS medalists, alongside social grants for underprivileged families."
    },
    {
      id: "faq-2",
      question: "Apakah lulusan jurusan DKV terjamin tersalurkan kerja di BKK?",
      questionEn: "Is DKV major covered by the Placement office network?",
      answer: "Tentu saja. Perusahaan mitra industri kami mencakup media penyiaran nasional, digital agency ternama di Jakarta, serta software development house yang aktif menyerap lulusan bidang keahlian desain interface web / mobile serta fotografer studio.",
      answerEn: "Absolutely. Our industrial placement network holds deep agreements with nationwide creative advertising corporations, TV media groupings, and software studios hiring visual designers."
    },
    {
      id: "faq-3",
      question: "Bagaimanakah format pelaksanaan tes ujian seleksi awal?",
      questionEn: "What is the structure of the incoming evaluations?",
      answer: "Tes penyeleksian dilaksanakan secara online lewat Learning Management System (LMS) sekolah. Calon siswa akan dikirimi token masuk ujian via WhatsApp serta email sehari sebelum jadwal tes dimulai.",
      answerEn: "Admissions exams are coordinated online through the school LMS. Registrants receive verified login codes via WhatsApp and email one day prior to designated dates."
    }
  ]
};

export const INITIAL_BKK: BKKInfo = {
  profile: "Bursa Kerja Khusus (BKK) 'Nusantara Karya' SMK Modern Unggulan Nusantara adalah lembaga pembinaan dan penyaluran kerja internal berlisensi resmi dari Dinas Tenaga Kerja. Berdiri kokoh sebagai jembatan strategis, BKK kami menghubungkan lulusan bertalenta dengan puluhan industri multinasional dan regional secara berkala. Berkat program sinkronisasi industri yang matang, BKK sukses membekali lulusan dengan kesiapan mental kerja tingkat tinggi, penyusunan berkas portofolio profesional, simulasi corporate interview, serta fasilitasi rekrutmen jemput bola langsung dari ruang auditorium sekolah.",
  profileEn: "The 'Nusantara Karya' Career Placement Office (BKK) is an authorized school department licensed by the Ministry of Manpower. Structuring strategic industrial actions, our BKK coordinates internships and permanent jobs with dozens of multinational corporations and regional giants. With sophisticated vocational alignments, the BKK guides students through professional portfolio assembly, corporate mock interviews, and coordinates on-campus private hiring events in the school auditorium.",
  partners: [
    { id: "p-1", name: "PT Telkom Indonesia Tbk", logo: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=150", sector: "Telekomunisasi & Digital Service", sectorEn: "Telecommunication" },
    { id: "p-2", name: "PT Tokopedia (GoTo Group)", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=150", sector: "E-Commerce & Tech Industry", sectorEn: "Tech & eCommerce" },
    { id: "p-3", name: "Astra International", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=150", sector: "Otomotif & Manufaktur Modern", sectorEn: "Manufacturing & Autos" },
    { id: "p-4", name: "Hakuhodo Indonesia AD Agency", logo: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=150", sector: "Advertising & Creative Creative", sectorEn: "Agency & Advertisement" },
    { id: "p-5", name: "KAP Tanubrata Sutanto Chibata (BDO)", logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=150", sector: "Auditor Pajak & Keuangan Lembaga", sectorEn: "Accounting & Tax auditing" }
  ],
  vacancies: [
    {
      id: "vac-1",
      company: "PT Tokopedia Tech Hub",
      position: "Junior Front-End Developer Web",
      positionEn: "Junior Front-End Web Engineer",
      location: "Jakarta Barat (Hybrid)",
      salary: "Rp 6.500.000 - Rp 8.000.000",
      type: "Full-time",
      requirements: [
        "Lulusan SMK jurusan RPL / Rekayasa Perangkat Lunak.",
        "Menguasai bahasa JavaScript dasar, React JS, CSS Tailwind.",
        "Memiliki portofolio aplikasi web responsif di repositori GitHub."
      ],
      requirementsEn: [
        "Graduate from Software Engineering (RPL) major.",
        "Demonstrates solid Javascript, ReactJS, and Tailwind utilities skills.",
        "Presents an active GitHub repository of responsive web applications."
      ],
      deadline: "30 June 2026",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "vac-2",
      company: "PT Telkom Akses Regional",
      position: "Optical Network Field Specialist",
      positionEn: "Optical Network Field Specialist",
      location: "Jakarta Timur & Bekasi",
      salary: "Rp 5.200.000 - Rp 6.000.000",
      type: "Full-time",
      requirements: [
        "Lulusan SMK jurusan TJKT / Jaringan.",
        "Memahami teknik krimp serat optik (splicing) dan monitoring OTDR.",
        "Wajib memiliki SIM C aktif (tunjangan bensin disediakan penuh)."
      ],
      requirementsEn: [
        "Vocational graduate from Networking (TJKT) major.",
        "Masters fiber splicing techniques, OTDR analysis, and WAN routers.",
        "Holds an active motorbike license (SIM C)."
      ],
      deadline: "25 June 2026",
      logo: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "vac-3",
      company: "Hakuhodo Creative Division",
      position: "Creative Graphic & Motion Designer",
      positionEn: "Creative Graphic & Motion Designer",
      location: "Kuningan, Jakarta",
      salary: "Rp 5.500.000 - Rp 7.000.000",
      type: "Full-time",
      requirements: [
        "Lulusan DKV / Multi Media.",
        "Kombinasi skill Illustrator, After Effects, Photoshop.",
        "Mengirimkan portofolio visual post sosial media dan reels video."
      ],
      requirementsEn: [
        "Vibrant graduate from DKV / Visual Arts division.",
        "Familiar with Adobe Illustrator, After Effects, and Premiere.",
        "Accompanied by portfolio containing social media campaigns and motion videos."
      ],
      deadline: "15 July 2026",
      logo: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=150"
    }
  ],
  statistics: {
    employedPercent: 78,
    entrepreneurPercent: 12,
    higherEducationPercent: 8,
    alumniTrackedCount: 3120
  }
};

export const INITIAL_ALUMNI: Alumnus[] = [
  {
    id: "al-1",
    name: "Ahmad Fauzi",
    graduationYear: "2023",
    competency: "RPL",
    currentCareer: "Software Engineer di GoTo Group",
    currentCareerEn: "Software Engineer at GoTo Group",
    testimonial: "Ilmu pemrograman web dan database yang diajarkan guru koding di kelas RPL benar-benar berstandar industri. Ditambah sertifikat Oracle Java yang saya ikuti sewaktu sekolah membantu saya melesat melewati tahap kualifikasi seleksi rekayasawan handal.",
    testimonialEn: "The software engineering and databases classes were exceptionally aligned. The Oracle Java license I secured on-campus was the ultimate factor allowing me to clear competitive coding and system design interviews.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "al-2",
    name: "Siska Amelia",
    graduationYear: "2022",
    competency: "DKV",
    currentCareer: "Lead UI/UX Designer di Digital Agency Singapore",
    currentCareerEn: "Lead UI/UX Designer at Singapore Digital Agency",
    testimonial: "DKV SMK Modern mengajar lebih dari sekadar menggambar manual. Di sini kami belajar logika psikologi visual iklan, user journey, and riset kegunaan interface. Saya bisa melakukan remote-working secara mapan sebelum genap berusia 21 tahun.",
    testimonialEn: "DKV didn't just teach sketching basics. We were deep inside layout psychology, customer journey patterns, and usability testing. I landed full-time remote digital work before turning 21.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "al-3",
    name: "Reyhan Saputra",
    graduationYear: "2024",
    competency: "TJKT",
    currentCareer: "Cyber Security Specialist di PT Telkomsigma",
    currentCareerEn: "Cyber Security Specialist at PT Telkomsigma",
    testimonial: "Raihan sertifikasi Cisco CCNA yang saya selesaikan di kelas 11 berpasangan lab NOC Cisco termegah sekolah memuluskan rujukan BKK menjemput saya langsung untuk posisi administrator penanganan malware jaringan.",
    testimonialEn: "Earning standard Cisco CCNA certifications in year 11 in association with the campus NOC laboratory paved my quick hiring into digital forensics and enterprise infrastructure monitoring panels.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  }
];

export const INITIAL_RUNNING_TEXT: RunningText = {
  text: "🚨 PENGUMUMAN PENTING: Pendaftaran PPDB Gelombang Kedua tahun pelajaran 2026/2027 telah dibuka secara online dari tanggal 01 Mei hingga 30 Juni 2026. Lulusan LKS dibebaskan dari Uang Pangkal Pembelajaran 100%! Kuota tersisa kelas Cisco (TJKT) & Apple (RPL) tinggal 12%! 🚀 Kampus bekerjasama dengan Astra, Tokopedia, dan Telkom.",
  textEn: "🚨 IMPORTANT INFO: Student enrollment Wave II for 2026/2027 academic periods is actively open online starting May 1st to June 30th, 2026. National olympiad champions are exempted from 100% development fees! Remaining spots for tech classes are at 12%! 🚀",
  isActive: true
};

export const INITIAL_POPUP: PopupInfo = {
  title: "Apresiasi Pencapaian Prestisius 🌟",
  titleEn: "Prestigious Achievement Tribute 🌟",
  text: "Selamat kepada Tim Riset Robotika & Web Dev SMK Modern Unggulan atas rekor gemilang menyabet JUARA UMUM LKS Tingkat Nasional 2025. Terbuka Jalur Penjaringan Khusus Siswa Berprestasi tanpa seleksi berkas administrasi dan potongan sumbangan investasi bagi pemegang kartu Indonesia Pintar.",
  textEn: "Congratulations to Nusantara Modern Robotics team for clinching the National Champion Title in the 2025 Skill Championship. Direct fast-track admission is active for high-ranking academic and sports achievers.",
  linkText: "Klaim Jalur Prestasi Sekarang →",
  linkTextEn: "Claim Merit Admissions Now →",
  linkUrl: "#ppdb",
  image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=400",
  isActive: true
};

export const INITIAL_ACADEMIC_EVENTS: AcademicCalendarEvent[] = [
  { id: "cal-1", title: "Awal Masuk Pembelajaran Semester Ganjil", titleEn: "Odd Semester Classes Start Day", startDate: "2026-07-21", endDate: "2026-07-21", type: "academic" },
  { id: "cal-2", title: "Masa Orientasi Kepemimpinan & Pengenalan Lingkungan Sekolah", titleEn: "Student Leadership Orientation Period (MPLS)", startDate: "2026-07-22", endDate: "2026-07-24", type: "event" },
  { id: "cal-3", title: "Lomba Reka Cipta Software & Games (Internal Hackathon)", titleEn: "Internal Hackathon & Software Development Shootout", startDate: "2026-08-15", endDate: "2026-08-16", type: "event" },
  { id: "cal-4", title: "Asesmen Nasional Berbasis Komputer Utama (ANBK)", titleEn: "National Digital Academic Standard Assessment (ANBK)", startDate: "2026-09-07", endDate: "2026-09-09", type: "exam" },
  { id: "cal-5", title: "Libur Khusus Maulid Nabi Muhammad SAW", titleEn: "Mawlid Holiday Observance", startDate: "2026-09-15", endDate: "2026-09-15", type: "holiday" },
  { id: "cal-6", title: "Kunjungan Sentra Industri Kreatif & Media Studio", titleEn: "Industrial Outing Creative Marketing", startDate: "2026-10-18", endDate: "2026-10-20", type: "event" }
];

export const INITIAL_DOWNLOADS: DownloadFile[] = [
  { id: "dl-1", title: "Brosur Digital Lengkap SMK Modern Nusantara 2026-PDF", titleEn: "Admissions PDF digital prospectus booklet 2026", size: "4.8 MB", category: "dokumen", categoryEn: "document", url: "#" },
  { id: "dl-2", title: "Surat Pernyataan Bebas Narkoba & Kesediaan Taat Tata Tertib", titleEn: "Medical Affidavit & Student Code of Conduct agreements", size: "1.2 MB", category: "formulir", categoryEn: "form", url: "#" },
  { id: "dl-3", title: "Berkas Panduan e-Syllabus Kurikulum Merdeka Kompetensi RPL", titleEn: "e-Syllabus documentation of Software Engineering (RPL)", size: "2.4 MB", category: "materi", categoryEn: "material", url: "#" },
  { id: "dl-4", title: "Buku Panduan Karir BKK & Sinkronisasi Magang Luar Negeri", titleEn: "Internship & Placement Guides and G2G regulations booklet", size: "3.1 MB", category: "dokumen", categoryEn: "document", url: "#" }
];
