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
    description: "We design and build websites, applications, dashboards, and digital systems tailored to your business needs.",
    descriptionId: "Kami merancang dan membangun situs web, aplikasi, dashboard, dan sistem digital yang disesuaikan dengan kebutuhan bisnis Anda.",
    icon: "monitor"
  },
  {
    id: "brand-identity",
    index: "02",
    eyebrow: "Identity",
    title: "Brand Identity",
    titleId: "Identitas Merek",
    description: "We help build consistent visual identities so your brand is easier to recognize and trust.",
    descriptionId: "Kami membantu membangun identitas visual yang konsisten agar merek Anda lebih mudah dikenali dan dipercaya.",
    icon: "fingerprint"
  },
  {
    id: "digital-presence",
    index: "03",
    eyebrow: "Presence",
    title: "Digital Presence",
    titleId: "Keberadaan Digital",
    description: "We help businesses grow their digital presence through content, social media, and purposeful digital experiences.",
    descriptionId: "Kami membantu bisnis tumbuh melalui kehadiran digital, konten, media sosial, dan pengalaman digital yang bermakna.",
    icon: "globe"
  }
];

export const PROJECTS = [
  {
    title: "Oryza Lokabasa",
    slug: "oryza-lokabasa",
    categories: ["Website", "Branding"],
    description: "Arts, language, and culture community platform.",
    descriptionId: "Platform komunitas seni, bahasa, dan budaya.",
    image: "https://oryzalokabasa.com/Community.jpg",
    imageAlt: "Oryza Lokabasa arts and culture community website",
    services: ["UX/UI", "Web Development", "Branding"],
    year: "2026",
    featured: true,
    caseStudyUrl: "https://oryzalokabasa.com"
  },
  {
    title: "Agrowisata Darangdan",
    slug: "agrowisata-darangdan",
    categories: ["Website"],
    description: "Agricultural tourism platform with booking features.",
    descriptionId: "Platform agrowisata dengan fitur pemesanan.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Agrowisata Darangdan tourism platform",
    services: ["UX/UI", "Web Development"],
    year: "2025",
    featured: true,
    caseStudyUrl: "https://agrowisatadarangdan.oryzalokabasa.com"
  },
  {
    title: "Padjadjaran Pusat",
    slug: "padjadjaran-pusat",
    categories: ["Website"],
    description: "Organization hub for community engagement.",
    descriptionId: "Pusat organisasi untuk keterlibatan komunitas.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Padjadjaran Pusat organization hub",
    services: ["UX/UI", "Web Development"],
    year: "2025",
    featured: false,
    caseStudyUrl: "https://padjadjaranpusat.org"
  },
  {
    title: "Desa Sidomulyo",
    slug: "sidomulyo-batu",
    categories: ["Website"],
    description: "Official village website for community programs.",
    descriptionId: "Situs web resmi desa untuk program komunitas.",
    image: "https://sidomulyobatu.id/logo_desa_sidomulyo.jpeg",
    imageAlt: "Desa Sidomulyo official village website",
    services: ["UX/UI", "Web Development"],
    year: "2026",
    featured: false,
    caseStudyUrl: "https://sidomulyobatu.id"
  }
];

export const STATS = [
  { value: "03", label: "Team Members", labelId: "Anggota Tim" },
  { value: "18+", label: "Projects & Experiences", labelId: "Proyek & Pengalaman" },
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
    heroDesc: "We build digital systems, strengthen brand identities, and create experiences that help businesses grow.",
    heroCta: "Try it now",
    aboutTitle: "What is INTEGRITECH?",
    aboutDesc: "INTEGRITECH is a digital studio that helps businesses build digital systems, meaningful brands, and better digital experiences — combining strategy, design, and technology to create solutions that are simple, relevant, and focused.",
    aboutCta: "Explore now",
    servicesLabel: "02 / What we do",
    servicesTitle: "Technology that works.\nDesign that speaks.",
    workLabel: "INTEGRITECH.id in Action",
    workTitle: "Selected work.",
    workDesc: "A selection of projects we have built to help businesses, organizations, and brands deliver better digital solutions.",
    tabWebsite: "Website",
    tabBranding: "Branding",
    tabViewAll: "Lihat semua project",
    brandingTitle: "Branding Projects",
    brandingDesc: "We manage branding and social media for Oryza Lokabasa — an arts, language, and culture community.",
    brandingCta: "View on Instagram",
    trustedLabel: "Trusted across key industries",
    trustedDesc: "We work with businesses across various industries to deliver digital solutions.",
    tabAll: "All",
    statsLabel: "04 / Studio principle",
    statsTitle: "Small team.\nBig ideas.",
    statsSub: "Focused on quality, not bureaucracy.",
    statsDesc: "We are a small team with complementary skills. We work closely on every project, from understanding the problem to delivering solutions that are ready to use.",
    teamLabel: "05 / Collective craft",
    teamTitle: "Three minds.\nOne direction.",
    teamDesc: "Three different kinds of expertise, one goal: creating solutions that are relevant, meaningful, and impactful.",
    processLabel: "06 / How we work",
    processTitle: "From idea to impact.",
    processDesc: "We turn complex needs into a process that is clear, focused, and easy to follow.",
    ctaTitle: "Your idea deserves\nmore than just a concept.",
    ctaSub: "Let's make it real.",
    ctaDesc: "Tell us about the needs or challenges you are facing. We will help you find the right digital direction to make it happen.",
    ctaBtn: "Contact via Instagram",
    footerDesc: "Integrating Business Intelligence with Digital Technology",
    studio: "Studio",
    contact: "Contact",
    viewCaseStudy: "View Case Study"
  },
  id: {
    heroTitle1: "BANGUN DIGITAL.",
    heroTitle2: "CIPTAKAN DAMPAK.",
    heroDesc: "Kami membangun sistem digital, memperkuat identitas merek, dan menciptakan pengalaman yang membantu bisnis tumbuh.",
    heroCta: "Coba sekarang",
    aboutTitle: "Apa itu INTEGRITECH?",
    aboutDesc: "INTEGRITECH adalah studio digital yang membantu bisnis membangun sistem digital, merek bermakna, dan pengalaman digital yang lebih baik — menggabungkan strategi, desain, dan teknologi untuk menciptakan solusi yang sederhana, relevan, dan terfokus.",
    aboutCta: "Eksplor sekarang",
    servicesLabel: "02 / Apa yang kami lakukan",
    servicesTitle: "Teknologi yang bekerja.\nDesain yang berbicara.",
    workLabel: "INTEGRITECH.id dalam Aksi",
    workTitle: "Pilihan karya.",
    workDesc: "Kumpulan proyek yang telah kami bangun untuk membantu bisnis, organisasi, dan merek memberikan solusi digital yang lebih baik.",
    tabWebsite: "Situs Web",
    tabBranding: "Branding",
    tabViewAll: "Lihat semua project",
    brandingTitle: "Proyek Branding",
    brandingDesc: "Kami mengelola branding dan media sosial untuk Oryza Lokabasa — komunitas seni, bahasa, dan budaya.",
    brandingCta: "Lihat di Instagram",
    trustedLabel: "Dipercaya di berbagai industri",
    trustedDesc: "Kami bekerja dengan bisnis di berbagai industri untuk memberikan solusi digital.",
    tabAll: "Semua",
    statsLabel: "04 / Prinsip studio",
    statsTitle: "Tim kecil.\nIde besar.",
    statsSub: "Fokus pada kualitas, bukan birokrasi.",
    statsDesc: "Kami adalah tim kecil dengan keterampilan yang saling melengkapi. Kami bekerja sama di setiap proyek, dari memahami masalah hingga memberikan solusi yang siap digunakan.",
    teamLabel: "05 / Kolektif",
    teamTitle: "Tiga pikiran.\nSatu arah.",
    teamDesc: "Tiga jenis keahlian yang berbeda, satu tujuan: menciptakan solusi yang relevan, bermakna, dan berdampak.",
    processLabel: "06 / Cara kami bekerja",
    processTitle: "Dari ide hingga dampak.",
    processDesc: "Kami mengubah kebutuhan yang kompleks menjadi proses yang jelas, terfokus, dan mudah diikuti.",
    ctaTitle: "Ide Anda layak lebih\ndari sekadar konsep.",
    ctaSub: "Wujudkan nyata.",
    ctaDesc: "Ceritakan kebutuhan atau tantangan yang Anda hadapi. Kami akan membantu Anda menemukan arah digital yang tepat untuk mewujudkannya.",
    ctaBtn: "Hubungi via Instagram",
    footerDesc: "Mengintegrasikan Kecerdasan Bisnis dengan Teknologi Digital",
    studio: "Studio",
    contact: "Kontak",
    viewCaseStudy: "Lihat Studi Kasus"
  }
};
