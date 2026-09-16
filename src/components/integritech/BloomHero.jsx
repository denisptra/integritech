import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { IndonesiaMap } from './IndonesiaMap';
import { TRANSLATIONS } from '../../data/content';

export const BloomHero = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="top" className="relative flex h-[100dvh] flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Gradient blobs */}
        <div className="absolute -top-20 -left-32 h-[500px] w-[500px] rounded-full bg-brand/15 blur-[120px]" />
        <div className="absolute -bottom-32 -right-20 h-[450px] w-[450px] rounded-full bg-navy/12 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-gold/10 blur-[100px]" />

        {/* Grid pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#292A73" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Large geometric shapes */}
        <div className="absolute top-16 left-[8%] h-32 w-32 rounded-3xl border-2 border-brand/15 rotate-12" />
        <div className="absolute top-28 right-[10%] h-24 w-24 rounded-full border-2 border-navy/10" />
        <div className="absolute bottom-48 left-[6%] h-20 w-20 rounded-2xl border-2 border-brand/12 -rotate-6" />
        <div className="absolute top-1/3 right-[5%] h-14 w-14 rounded-full border-2 border-gold/15" />

        {/* Solid dots */}
        <div className="absolute top-24 left-[22%] h-3 w-3 rounded-full bg-brand/40" />
        <div className="absolute top-40 right-[18%] h-2.5 w-2.5 rounded-full bg-navy/35" />
        <div className="absolute bottom-52 left-[20%] h-2 w-2 rounded-full bg-brand/50" />
        <div className="absolute top-1/2 right-[14%] h-3.5 w-3.5 rounded-full bg-gold/45" />
        <div className="absolute bottom-[38%] left-[12%] h-2 w-2 rounded-full bg-navy/30" />
        <div className="absolute top-36 left-[45%] h-2 w-2 rounded-full bg-brand/35" />

        {/* Dot grid patterns */}
        <svg className="absolute top-16 right-[25%] h-24 w-24 opacity-30" viewBox="0 0 96 96">
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={8 + col * 16} cy={8 + row * 16} r="2" fill="#292A73" />
            ))
          )}
        </svg>

        <svg className="absolute bottom-28 left-[22%] h-20 w-20 opacity-25" viewBox="0 0 80 80">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={8 + col * 16} cy={8 + row * 16} r="2" fill="#6677E8" />
            ))
          )}
        </svg>

        {/* Decorative lines */}
        <svg className="absolute top-1/3 left-[5%] h-px w-28 opacity-20" viewBox="0 0 112 1">
          <line x1="0" y1="0.5" x2="112" y2="0.5" stroke="#292A73" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
        <svg className="absolute bottom-1/3 right-[6%] h-px w-32 opacity-20" viewBox="0 0 128 1">
          <line x1="0" y1="0.5" x2="128" y2="0.5" stroke="#6677E8" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-site px-6 text-center z-10">
        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-ink">{t.heroTitle1}</span>
            <span className="block text-brand">{t.heroTitle2}</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-mist md:text-base">
            {t.heroDesc}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand"
            >
              {t.heroCta}
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-8 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-colors duration-300 hover:border-navy hover:text-navy"
            >
              {t.heroCtaSecondary}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Map */}
      <Reveal delay={400}>
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-5xl px-6 pb-6 z-10">
          <IndonesiaMap />
        </div>
      </Reveal>
    </section>
  );
};
