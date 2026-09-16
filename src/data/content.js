export const BRAND = {
  name: "INTEGRITECH.id",
  tagline: "Integrating Business Intelligence with Digital Technology",
  email: "integritech@gmail.com",
  location: "Jakarta, Indonesia"
};

export const SOCIAL_LINKS = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com/integritech.id" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/integritech" },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/6281234567890" }
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Selected Work", href: "#work" },
  { label: "About Studio", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Selected Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const SERVICES = [
  {
    id: "digital-system",
    index: "01",
    eyebrow: "System",
    title: "Digital System",
    titleId: "Sistem Digital",
    description: "We build websites, applications, dashboards, and digital systems designed around your business requirements.",
    descriptionId: "Kami membangun situs web, aplikasi, dashboard, dan sistem digital yang dirancang sesuai kebutuhan bisnis Anda.",
    icon: "monitor"
  },
  {
    id: "brand-identity",
    index: "02",
    eyebrow: "Identity",
    title: "Brand Identity",
    titleId: "Identitas Merek",
    description: "We develop visual identities that are consistent, recognizable, and aligned with your brand positioning.",
    descriptionId: "Kami mengembangkan identitas visual yang konsisten, mudah dikenali, dan sejalan dengan posisi merek Anda.",
    icon: "fingerprint"
  },
  {
    id: "digital-presence",
    index: "03",
    eyebrow: "Presence",
    title: "Digital Presence",
    titleId: "Kehadiran Digital",
    description: "We grow your digital footprint through strategic content, social media management, and meaningful online experiences.",
    descriptionId: "Kami mengembangkan jejak digital Anda melalui konten strategis, manajemen media sosial, dan pengalaman online yang bermakna.",
    icon: "globe"
  }
];

export const PROJECTS = [
  {
    title: "Oryza Lokabasa",
    slug: "oryza-lokabasa",
    categories: ["Website", "Branding"],
    description: "Website company profile with product showcase and ordering system.",
    descriptionId: "Website company profile dengan showcase produk dan sistem ordering.",
    image: "https://oryzalokabasa.com/Community.jpg",
    imageAlt: "Oryza Lokabasa company profile website",
    services: ["UX/UI", "Web Dev", "Branding"],
    year: "2026",
    featured: true,
    caseStudyUrl: "https://oryzalokabasa.com",
    detail: {
      overview: "A company profile website for PT Oryza Loka Basa, featuring premium rice product showcase and an integrated ordering system.",
      overviewId: "Website company profile untuk PT Oryza Loka Basa, menampilkan showcase produk beras premium dan sistem ordering terintegrasi.",
      challenge: "The client needed a professional digital presence to showcase their premium rice products and streamline the ordering process for B2B and B2C customers.",
      challengeId: "Klien membutuhkan kehadiran digital yang profesional untuk memamerkan produk beras premium mereka dan menyederhanakan proses pemesanan untuk pelanggan B2B dan B2C.",
      solution: "We developed a responsive website with product catalog, integrated ordering system, and content management capabilities. The design reflects the brand's premium positioning.",
      solutionId: "Kami mengembangkan situs web responsif dengan katalog produk, sistem pemesanan terintegrasi, dan kemampuan manajemen konten. Desain mencerminkan posisi premium merek.",
      role: "Full-Stack Development & Branding",
      roleId: "Pengembangan Full-Stack & Branding",
      timeline: "3 Months",
      timelineId: "3 Bulan",
      techStack: ["React", "Node.js", "Tailwind CSS", "Figma"],
      liveUrl: "https://oryzalokabasa.com"
    }
  },
  {
    title: "Agrowisata Darangdan",
    slug: "agrowisata-darangdan",
    categories: ["Website"],
    description: "Agricultural tourism website with tour booking and photo gallery.",
    descriptionId: "Website agrowisata dengan booking tur dan galeri foto.",
    image: "https://image.thum.io/get/width/600/crop/400/https://agrowisatadarangdan.oryzalokabasa.com",
    imageAlt: "Agrowisata Darangdan tourism platform",
    services: ["UX/UI", "Web Dev"],
    year: "2025",
    featured: true,
    caseStudyUrl: "https://agrowisatadarangdan.oryzalokabasa.com",
    detail: {
      overview: "A tourism website for Agrowisata Darangdan, providing information about farm activities, tour booking, and a photo gallery of the agricultural experience.",
      overviewId: "Website pariwisata untuk Agrowisata Darangdan, menyediakan informasi tentang aktivitas pertanian, booking tur, dan galeri foto pengalaman agrowisata.",
      challenge: "The client needed a digital platform to manage visitor reservations and promote their agricultural tourism offerings to a wider audience.",
      challengeId: "Klien membutuhkan platform digital untuk mengelola reservasi pengunjung dan mempromosikan penawaran agrowisata mereka ke audiens yang lebih luas.",
      solution: "We built a responsive website with an intuitive booking interface, farm activity listings, and a visual gallery to showcase the agricultural experience.",
      solutionId: "Kami membangun situs web responsif dengan antarmuka booking yang intuitif, daftar aktivitas pertanian, dan galeri visual untuk menampilkan pengalaman agrowisata.",
      role: "UX/UI Design & Web Development",
      roleId: "Desain UX/UI & Pengembangan Web",
      timeline: "2 Months",
      timelineId: "2 Bulan",
      techStack: ["React", "Tailwind CSS", "Figma"],
      liveUrl: "https://agrowisatadarangdan.oryzalokabasa.com"
    }
  },
  {
    title: "Padjadjaran Pusat",
    slug: "padjadjaran-pusat",
    categories: ["Website"],
    description: "Organization website with content management and activity information.",
    descriptionId: "Website organisasi dengan manajemen konten dan informasi kegiatan.",
    image: "https://image.thum.io/get/width/600/crop/400/https://padjadjaranpusat.org",
    imageAlt: "Padjadjaran Pusat organization website",
    services: ["UX/UI", "Web Dev"],
    year: "2025",
    featured: false,
    caseStudyUrl: "https://padjadjaranpusat.org",
    detail: {
      overview: "An organization website for Padjadjaran Pusat, featuring content management system and comprehensive activity information for community engagement.",
      overviewId: "Website organisasi untuk Padjadjaran Pusat, menampilkan sistem manajemen konten dan informasi kegiatan yang komprehensif untuk keterlibatan komunitas.",
      challenge: "The organization needed to centralize their communications and event management to improve member engagement.",
      challengeId: "Organisasi perlu menyebarluaskan komunikasi dan pengelolaan acara mereka untuk meningkatkan keterlibatan anggota.",
      solution: "We developed a clean, professional website with event listings, member directories, and an admin dashboard for easy content management.",
      solutionId: "Kami mengembangkan situs web yang bersih dan profesional dengan daftar acara, direktori anggota, dan dashboard admin untuk manajemen konten yang mudah.",
      role: "UX/UI Design & Web Development",
      roleId: "Desain UX/UI & Pengembangan Web",
      timeline: "2 Months",
      timelineId: "2 Bulan",
      techStack: ["React", "Tailwind CSS", "Figma"],
      liveUrl: "https://padjadjaranpusat.org"
    }
  },
  {
    title: "Desa Sidomulyo",
    slug: "sidomulyo-batu",
    categories: ["Website"],
    description: "Official village website with community programs and local information.",
    descriptionId: "Website resmi desa dengan program komunitas dan informasi lokal.",
    image: "https://image.thum.io/get/width/600/crop/400/https://sidomulyobatu.id",
    imageAlt: "Desa Sidomulyo official village website",
    services: ["UX/UI", "Web Dev"],
    year: "2026",
    featured: false,
    caseStudyUrl: "https://sidomulyobatu.id",
    detail: {
      overview: "The official village website for Desa Sidomulyo, serving as a digital gateway for community programs, government announcements, and local business promotion.",
      overviewId: "Website resmi desa untuk Desa Sidomulyo, berfungsi sebagai pintu gerbang digital untuk program komunitas, pengumuman pemerintah, dan promosi bisnis lokal.",
      challenge: "The village needed a modern digital presence to communicate with residents and promote local tourism and products.",
      challengeId: "Desa membutuhkan kehadiran digital yang modern untuk berkomunikasi dengan penduduk dan mempromosikan pariwisata serta produk lokal.",
      solution: "We created an accessible village website featuring community news, event calendars, local business directories, and tourism information.",
      solutionId: "Kami membuat situs web desa yang mudah diakses dengan fitur berita komunitas, kalender acara, direktori bisnis lokal, dan informasi pariwisata.",
      role: "Full-Stack Development",
      roleId: "Pengembangan Full-Stack",
      timeline: "1 Month",
      timelineId: "1 Bulan",
      techStack: ["React", "Tailwind CSS", "Figma"],
      liveUrl: "https://sidomulyobatu.id"
    }
  },
  {
    title: "Artics Digital Strategy",
    slug: "artics-digital-strategy",
    categories: ["UI/UX"],
    description: "UI/UX design for a digital strategy agency. Landing page, dashboard, and client management system.",
    descriptionId: "Desain UI/UX untuk agensi digital strategy. Landing page, dashboard, dan sistem manajemen klien.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Artics Digital Strategy UI/UX design",
    services: ["UI/UX Design"],
    year: "2025",
    featured: false,
    caseStudyUrl: "#",
    detail: {
      overview: "UI/UX design project for Artics, a digital strategy agency. The scope included landing page design, dashboard interface, and client management system.",
      overviewId: "Proyek desain UI/UX untuk Artics, agensi digital strategy. Cakupan meliputi desain landing page, antarmuka dashboard, dan sistem manajemen klien.",
      challenge: "The agency needed a cohesive design system that could scale across their digital products while maintaining brand consistency.",
      challengeId: "Agensi membutuhkan sistem desain yang kohesif yang dapat diskalakan di seluruh produk digital mereka sambil mempertahankan konsistensi merek.",
      solution: "We designed a comprehensive UI/UX system including responsive landing pages, data-rich dashboard interfaces, and streamlined client management workflows.",
      solutionId: "Kami merancang sistem UI/UX yang komprehensif termasuk landing page responsif, antarmuka dashboard yang kaya data, dan alur kerja manajemen klien yang efisien.",
      role: "UI/UX Design",
      roleId: "Desain UI/UX",
      timeline: "2 Months",
      timelineId: "2 Bulan",
      techStack: ["Figma"],
      liveUrl: "#"
    }
  },
  {
    title: "Nukang",
    slug: "nukang",
    categories: ["UI/UX"],
    description: "Mobile app UI/UX for a trusted construction worker service marketplace.",
    descriptionId: "Desain UI/UX aplikasi mobile untuk marketplace jasa tukang bangunan terpercaya.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Nukang mobile app UI/UX design",
    services: ["UI/UX Design"],
    year: "2025",
    featured: false,
    caseStudyUrl: "#",
    detail: {
      overview: "Mobile application UI/UX design for Nukang, a platform connecting users with verified construction workers for home improvement projects.",
      overviewId: "Desain UI/UX aplikasi mobile untuk Nukang, platform yang menghubungkan pengguna dengan tukang bangunan terverifikasi untuk proyek perbaikan rumah.",
      challenge: "The app needed to build trust between users and service providers while making the booking process simple and efficient.",
      challengeId: "Aplikasi perlu membangun kepercayaan antara pengguna dan penyedia layanan sambil membuat proses pemesanan sederhana dan efisien.",
      solution: "We designed an intuitive mobile interface with worker profiles, booking system, real-time tracking, and secure payment integration.",
      solutionId: "Kami merancang antarmuka mobile yang intuitif dengan profil pekerja, sistem pemesanan, pelacakan real-time, dan integrasi pembayaran yang aman.",
      role: "UI/UX Design",
      roleId: "Desain UI/UX",
      timeline: "3 Months",
      timelineId: "3 Bulan",
      techStack: ["Figma"],
      liveUrl: "#"
    }
  },
  {
    title: "Phalanxium",
    slug: "phalanxium",
    categories: ["UI/UX"],
    description: "UI/UX design for an action strategy game with formation-based defense mechanics.",
    descriptionId: "Desain UI/UX game action strategy dengan mekanik pertahanan formasi.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Phalanxium game UI/UX design",
    services: ["UI/UX Design"],
    year: "2025",
    featured: false,
    caseStudyUrl: "#",
    detail: {
      overview: "UI/UX design for Phalanxium, a PC action strategy game featuring formation-based defense mechanics and tactical gameplay.",
      overviewId: "Desain UI/UX untuk Phalanxium, game action strategy PC dengan mekanik pertahanan berbasis formasi dan gameplay taktis.",
      challenge: "The game interface needed to communicate complex tactical information while remaining visually engaging and easy to navigate during gameplay.",
      challengeId: "Antarmuka game perlu menyampaikan informasi taktis yang kompleks tetapi tetap secara visual menarik dan mudah dinavigasi selama gameplay.",
      solution: "We designed a HUD system, menu interfaces, and in-game overlays that balance information density with visual clarity for an immersive gaming experience.",
      solutionId: "Kami merancang sistem HUD, antarmuka menu, dan overlay dalam game yang menyeimbangkan kepadatan informasi dengan kejelasan visual untuk pengalaman gaming yang imersif.",
      role: "UI/UX Design",
      roleId: "Desain UI/UX",
      timeline: "2 Months",
      timelineId: "2 Bulan",
      techStack: ["Figma"],
      liveUrl: "#"
    }
  },
  {
    title: "Health Mobile Apps",
    slug: "health-mobile-apps",
    categories: ["UI/UX"],
    description: "Health mobile app with activity tracking, medication schedules, and doctor consultations.",
    descriptionId: "Aplikasi mobile kesehatan dengan tracking aktivitas, jadwal minum obat, dan konsultasi dokter.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Health mobile app UI/UX design",
    services: ["UI/UX Design"],
    year: "2025",
    featured: false,
    caseStudyUrl: "#",
    detail: {
      overview: "UI/UX design for a health mobile application featuring activity tracking, medication scheduling, and telemedicine doctor consultations.",
      overviewId: "Desain UI/UX untuk aplikasi mobile kesehatan dengan fitur tracking aktivitas, penjadwalan obat, dan konsultasi dokter telemedicine.",
      challenge: "Health data is sensitive and complex. The interface needed to present medical information clearly while maintaining user trust and engagement.",
      challengeId: "Data kesehatan bersifat sensitif dan kompleks. Antarmuka perlu menyajikan informasi medis dengan jelas sambil mempertahankan kepercayaan dan keterlibatan pengguna.",
      solution: "We designed an intuitive health dashboard with clear data visualization, medication reminders, and a seamless teleconsultation booking flow.",
      solutionId: "Kami merancang dashboard kesehatan yang intuitif dengan visualisasi data yang jelas, pengingat obat, dan alur pemesanan telekonsultasi yang mulus.",
      role: "UI/UX Design",
      roleId: "Desain UI/UX",
      timeline: "3 Months",
      timelineId: "3 Bulan",
      techStack: ["Figma"],
      liveUrl: "#"
    }
  },
  {
    title: "168 Trans",
    slug: "168-trans",
    categories: ["UI/UX", "Apps"],
    description: "Transportation and expedition service app with booking, tracking, and fleet management.",
    descriptionId: "Aplikasi jasa transportasi dan ekspedisi dengan booking, tracking, dan manajemen armada.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "168 Trans transportation app design",
    services: ["UI/UX Design", "App Dev"],
    year: "2025",
    featured: false,
    caseStudyUrl: "#",
    detail: {
      overview: "UI/UX design and application development for 168 Trans, a transportation and expedition service with booking, real-time tracking, and fleet management.",
      overviewId: "Desain UI/UX dan pengembangan aplikasi untuk 168 Trans, layanan transportasi dan ekspedisi dengan booking, pelacakan real-time, dan manajemen armada.",
      challenge: "The platform needed to handle complex logistics operations while providing a simple booking experience for end users and efficient management tools for operators.",
      challengeId: "Platform perlu menangani operasi logistik yang kompleks sambil memberikan pengalaman pemesanan yang sederhana untuk pengguna akhir dan alat manajemen yang efisien untuk operator.",
      solution: "We designed dual interfaces: a customer-facing booking app with real-time tracking, and an admin dashboard for fleet and order management.",
      solutionId: "Kami merancang antarmuka ganda: aplikasi pemesanan yang menghadap pelanggan dengan pelacakan real-time, dan dashboard admin untuk manajemen armada dan pesanan.",
      role: "UI/UX Design & App Development",
      roleId: "Desain UI/UX & Pengembangan Aplikasi",
      timeline: "4 Months",
      timelineId: "4 Bulan",
      techStack: ["Figma", "React Native"],
      liveUrl: "#"
    }
  },
  {
    title: "Museum VR Game",
    slug: "museum-vr-game",
    categories: ["Game Dev"],
    description: "VR educational game about Indonesian museum history. Players explore rooms and discover historical artifacts.",
    descriptionId: "Game edukasi VR tentang sejarah museum Indonesia. Pemain menjelajahi ruangan dan menemukan artefak bersejarah.",
    image: "https://image.thum.io/get/width/600/crop/400/https://polytato.itch.io/uts-vr001-kelompok1",
    imageAlt: "Museum VR educational game",
    services: ["Game Dev", "3D Modeling"],
    year: "2025",
    featured: false,
    caseStudyUrl: "https://polytato.itch.io/uts-vr001-kelompok1",
    detail: {
      overview: "A VR educational game that allows players to explore Indonesian museums in virtual reality, discovering historical artifacts and learning about cultural heritage.",
      overviewId: "Game edukasi VR yang memungkinkan pemain menjelajahi museum Indonesia dalam realitas virtual, menemukan artefak bersejarah dan mempelajari warisan budaya.",
      challenge: "Creating an immersive educational experience that accurately represents Indonesian museum environments while making history engaging for players.",
      challengeId: "Menciptakan pengalaman edukasi yang imersif yang secara akurat mewakili lingkungan museum Indonesia sambil membuat sejarah menarik bagi pemain.",
      solution: "We developed a VR game with detailed 3D environments, interactive artifact exploration, and contextual information panels for an engaging learning experience.",
      solutionId: "Kami mengembangkan game VR dengan lingkungan 3D yang detail, eksplorasi artefak interaktif, dan panel informasi konteks untuk pengalaman belajar yang menarik.",
      role: "Game Development",
      roleId: "Pengembangan Game",
      timeline: "3 Months",
      timelineId: "3 Bulan",
      techStack: ["Unity", "C#", "Blender"],
      liveUrl: "https://polytato.itch.io/uts-vr001-kelompok1"
    }
  },
  {
    title: "Kapur VR Game",
    slug: "kapur-vr-game",
    categories: ["Game Dev"],
    description: "Casual VR puzzle game with chalk art style graphics and unique gameplay mechanics.",
    descriptionId: "Game puzzle VR kasual dengan grafik unik chalk art style.",
    image: "https://image.thum.io/get/width/600/crop/400/https://polytato.itch.io/uas-vr001-kelompok1",
    imageAlt: "Kapur VR puzzle game",
    services: ["Game Dev", "3D Modeling"],
    year: "2025",
    featured: false,
    caseStudyUrl: "https://polytato.itch.io/uas-vr001-kelompok1",
    detail: {
      overview: "A casual VR puzzle game with a unique chalk art visual style, offering players an innovative gameplay experience with creative puzzle mechanics.",
      overviewId: "Game puzzle VR kasual dengan gaya visual chalk art yang unik, menawarkan pengalaman gameplay inovatif dengan mekanik puzzle kreatif.",
      challenge: "Designing a puzzle game that leverages VR capabilities while maintaining the distinctive chalk art aesthetic throughout the gameplay experience.",
      challengeId: "Merancang game puzzle yang memanfaatkan kemampuan VR sambil mempertahankan estetika chalk art yang khas di seluruh pengalaman gameplay.",
      solution: "We created a VR puzzle experience with chalk-textured environments, physics-based interactions, and progressive difficulty levels wrapped in a charming art style.",
      solutionId: "Kami menciptakan pengalaman puzzle VR dengan lingkungan bertekstur kapur, interaksi berbasis fisik, dan tingkat kesulitan progresif yang dibungkus dalam gaya seni yang menawan.",
      role: "Game Development",
      roleId: "Pengembangan Game",
      timeline: "2 Months",
      timelineId: "2 Bulan",
      techStack: ["Unity", "C#", "Blender"],
      liveUrl: "https://polytato.itch.io/uas-vr001-kelompok1"
    }
  }
];

export const STATS = [
  { value: "03", label: "Team Members", labelId: "Anggota Tim" },
  { value: "18+", label: "Projects Delivered", labelId: "Proyek Selesai" },
  { value: "100%", label: "Commitment", labelId: "Komitmen" }
];

export const TEAM = [
  { name: "Deni Trio Saputra", photo: "/assets/team/Deni.png", photoAlt: "Portrait of Deni Trio Saputra" },
  { name: "Violetha Nazwa Simaremare", photo: "/assets/team/Letha.jpeg", photoAlt: "Portrait of Violetha Nazwa Simaremare" },
  { name: "Sari Wulandari", photo: "/assets/team/Sari.jpeg", photoAlt: "Portrait of Sari Wulandari" }
];

export const PROCESS_STEPS = [
  { index: "01", title: "Discover", titleId: "Temukan", description: "Understanding the business, users, needs, and goals.", descriptionId: "Memahami bisnis, pengguna, kebutuhan, dan tujuan." },
  { index: "02", title: "Define", titleId: "Tentukan", description: "Defining the core problem and the solution direction.", descriptionId: "Menentukan masalah inti dan arah solusi." },
  { index: "03", title: "Design", titleId: "Rancang", description: "Shaping the experience, identity, and visual direction.", descriptionId: "Membentuk pengalaman, identitas, dan arah visual." },
  { index: "04", title: "Build", titleId: "Bangun", description: "Turning solutions into usable digital products.", descriptionId: "Mengubah solusi menjadi produk digital yang dapat digunakan." },
  { index: "05", title: "Deliver", titleId: "Hadiahkan", description: "Launching, refining, and continuously growing.", descriptionId: "Meluncurkan, menyempurnakan, dan terus berkembang." }
];

export const TRANSLATIONS = {
  en: {
    heroTitle1: "BUILD DIGITAL.",
    heroTitle2: "CREATE IMPACT.",
    heroDesc: "We design and develop digital systems, brand identities, and web experiences for businesses and organizations.",
    heroCta: "View Our Work",
    heroCtaSecondary: "About Studio",
    aboutTitle: "About INTEGRITECH",
    aboutDesc: "INTEGRITECH is a digital studio specializing in web development, UI/UX design, and brand identity. We combine strategy, design, and technology to deliver digital products that are functional and visually refined.",
    aboutCta: "See our services",
    servicesLabel: "02 / What we do",
    servicesTitle: "Technology that works.\nDesign that speaks.",
    workLabel: "Selected Work",
    workTitle: "Recent projects.",
    workDesc: "A curated selection of projects we have delivered across web development, UI/UX design, and game development.",
    tabWebsite: "Website",
    tabBranding: "Branding",
    brandingTitle: "Branding Projects",
    brandingDesc: "We manage branding and social media for Oryza Lokabasa — an arts, language, and culture community.",
    brandingCta: "View on Instagram",
    statsLabel: "04 / Studio principle",
    statsTitle: "Small team.\nBig ideas.",
    statsSub: "Focused on quality, not bureaucracy.",
    statsDesc: "A small team with complementary skills. We work closely on every project, from understanding the problem to delivering production-ready solutions.",
    teamLabel: "05 / The team",
    teamTitle: "Three people.\nOne vision.",
    teamDesc: "Three different areas of expertise, unified by one goal: delivering digital solutions that are effective and well-crafted.",
    processLabel: "06 / How we work",
    processTitle: "From concept to launch.",
    processDesc: "A structured process that turns complex requirements into clear, actionable phases — from discovery to delivery.",
    ctaTitle: "Have a project in mind?",
    ctaSub: "Let's discuss.",
    ctaDesc: "Tell us about your project or challenge. We will help you determine the right approach and deliver a solution that works.",
    ctaBtn: "Contact via Instagram",
    footerDesc: "Integrating Business Intelligence with Digital Technology",
    studio: "Studio",
    contact: "Contact",
    viewCaseStudy: "View Case Study"
  },
  id: {
    heroTitle1: "BANGUN DIGITAL.",
    heroTitle2: "CIPTAKAN DAMPAK.",
    heroDesc: "Kami merancang dan mengembangkan sistem digital, identitas merek, dan pengalaman web untuk bisnis dan organisasi.",
    heroCta: "Lihat Proyek Kami",
    heroCtaSecondary: "Tentang Studio",
    aboutTitle: "Tentang INTEGRITECH",
    aboutDesc: "INTEGRITECH adalah studio digital yang mengkhususkan diri dalam pengembangan web, desain UI/UX, dan identitas merek. Kami menggabungkan strategi, desain, dan teknologi untuk menghasilkan produk digital yang fungsional dan divisual yang baik.",
    aboutCta: "Lihat layanan kami",
    servicesLabel: "02 / Apa yang kami lakukan",
    servicesTitle: "Teknologi yang bekerja.\nDesain yang berbicara.",
    workLabel: "Pilihan Proyek",
    workTitle: "Proyek terbaru.",
    workDesc: "Kurasi proyek yang telah kami kerjakan dalam pengembangan web, desain UI/UX, dan pengembangan game.",
    tabWebsite: "Website",
    tabBranding: "Branding",
    brandingTitle: "Proyek Branding",
    brandingDesc: "Kami mengelola branding dan media sosial untuk Oryza Lokabasa — komunitas seni, bahasa, dan budaya.",
    brandingCta: "Lihat di Instagram",
    statsLabel: "04 / Prinsip studio",
    statsTitle: "Tim kecil.\nIde besar.",
    statsSub: "Fokus pada kualitas, bukan birokrasi.",
    statsDesc: "Tim kecil dengan keterampilan yang saling melengkapi. Kami bekerja erat di setiap proyek, dari memahami masalah hingga menghasilkan solusi yang siap produksi.",
    teamLabel: "05 / Tim kami",
    teamTitle: "Tiga orang.\nSatu visi.",
    teamDesc: "Tiga bidang keahlian yang berbeda, disatukan oleh satu tujuan: menghasilkan solusi digital yang efektif dan berkualitas.",
    processLabel: "06 / Cara kami bekerja",
    processTitle: "Dari konsep hingga peluncuran.",
    processDesc: "Proyek terstruktur yang mengubah kebutuhan kompleks menjadi fase yang jelas dan terukur — dari discovery hingga delivery.",
    ctaTitle: "Punya proyek?",
    ctaSub: "Mari diskusi.",
    ctaDesc: "Ceritakan proyek atau tantangan Anda. Kami akan membantu menentukan pendekatan yang tepat dan menghasilkan solusi yang berfungsi.",
    ctaBtn: "Hubungi via Instagram",
    footerDesc: "Mengintegrasikan Kecerdasan Bisnis dengan Teknologi Digital",
    studio: "Studio",
    contact: "Kontak",
    viewCaseStudy: "Lihat Studi Kasus"
  }
};
