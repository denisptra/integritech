export const BRAND = {
  name: "INTEGRITECH.id",
  tagline: "Integrating Business Intelligence with Digital Technology",
  email: "integritech@gmail.com",
  location: "Jakarta, Indonesia"
};

export const SOCIAL_LINKS = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com/integritech.id" },
  { id: "linkedin", label: "LinkedIn", href: "#" },
  { id: "whatsapp", label: "WhatsApp", href: "#" }
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
    description: "We design and build websites, applications, dashboards, and digital systems tailored to your business needs.",
    tags: ["Website", "Web App", "Dashboard", "Custom System"],
    icon: "monitor"
  },
  {
    id: "brand-identity",
    index: "02",
    eyebrow: "Identity",
    title: "Brand Identity",
    description: "We help build consistent visual identities so your brand is easier to recognize and trust.",
    tags: ["Visual Identity", "Brand Guidelines", "Art Direction", "Social Media"],
    icon: "fingerprint"
  },
  {
    id: "digital-presence",
    index: "03",
    eyebrow: "Presence",
    title: "Digital Presence",
    description: "We help businesses grow their digital presence through content, social media, and purposeful digital experiences.",
    tags: ["Content Design", "Social Media", "UX Writing", "Digital Experience"],
    icon: "globe"
  }
];

export const PROJECT_CATEGORIES = ["All", "Website", "Branding", "Social Media"];

export const PROJECTS = [
  {
    title: "Oryza Lokabasa — Arts, Language & Culture Community",
    slug: "oryza-lokabasa",
    categories: ["Website", "Branding"],
    description: "Designed and built the website for an arts, language, and culture community — and we continue to manage its branding and social media presence.",
    image: "https://oryzalokabasa.com/Community.jpg",
    imageAlt: "Oryza Lokabasa arts and culture community website",
    services: ["UX/UI", "Web Development", "Branding", "Social Media Management"],
    year: "2026",
    featured: true,
    caseStudyUrl: "https://oryzalokabasa.com"
  },
  {
    title: "Agrowisata Darangdan — Tourism Platform",
    slug: "agrowisata-darangdan",
    categories: ["Website"],
    description: "A tourism platform for Agrowisata Darangdan, showcasing agricultural tourism experiences, booking features, and location information.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Agrowisata Darangdan tourism platform",
    services: ["UX/UI", "Web Development"],
    year: "2025",
    featured: true,
    caseStudyUrl: "https://agrowisatadarangdan.oryzalokabasa.com"
  },
  {
    title: "Padjadjaran Pusat — Organization Hub",
    slug: "padjadjaran-pusat",
    categories: ["Website"],
    description: "A centralized digital hub for Padjadjaran Pusat, providing organizational information, news, and community engagement features.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Padjadjaran Pusat organization hub",
    services: ["UX/UI", "Web Development"],
    year: "2025",
    featured: false,
    caseStudyUrl: "https://padjadjaranpusat.org"
  },
  {
    title: "Desa Sidomulyo — Official Village Website",
    slug: "sidomulyo-batu",
    categories: ["Website"],
    description: "Designed and developed the official website for Desa Sidomulyo, providing digital access to village information, services, and community programs.",
    image: "https://sidomulyobatu.id/logo_desa_sidomulyo.jpeg",
    imageAlt: "Desa Sidomulyo official village website",
    services: ["UX/UI", "Web Development"],
    year: "2026",
    featured: false,
    caseStudyUrl: "https://sidomulyobatu.id"
  }
];

export const STATS = [
  { value: "03", label: "Team Members" },
  { value: "18+", label: "Projects & Experiences" },
  { value: "100%", label: "Commitment" }
];

export const TEAM = [
  { name: "Deni Trio Saputra", photo: "/assets/team/Deni.png", photoAlt: "Portrait of Deni Trio Saputra", socialLinks: [] },
  { name: "Violetha Nazwa Simaremare", photo: "/assets/team/Letha.jpeg", photoAlt: "Portrait of Violetha Nazwa Simaremare", socialLinks: [] },
  { name: "Sari Wulandari", photo: "/assets/team/Sari.jpeg", photoAlt: "Portrait of Sari Wulandari", socialLinks: [] }
];

export const PROCESS_STEPS = [
  { index: "01", title: "Discover", description: "Understanding the business, users, needs, and goals." },
  { index: "02", title: "Define", description: "Defining the core problem and the solution direction." },
  { index: "03", title: "Design", description: "Shaping the experience, identity, and visual direction." },
  { index: "04", title: "Build", description: "Turning solutions into usable digital products." },
  { index: "05", title: "Deliver", description: "Launching, refining, and continuously growing." }
];
