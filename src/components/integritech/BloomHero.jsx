import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { IndonesiaMap } from './IndonesiaMap';
import { TRANSLATIONS } from '../../data/content';

export const BloomHero = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white pt-20">
      <div className="mx-auto max-w-site px-6 pb-8 pt-16 text-center">
        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-ink">{t.heroTitle1}</span>
            <span className="block text-brand">{t.heroTitle2}</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-mist md:text-base">
            {t.heroDesc}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <a
            href="#work"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand"
          >
            {t.heroCta}
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>

      <Reveal delay={400}>
        <div className="mx-auto max-w-4xl px-6 pb-12">
          <IndonesiaMap />
        </div>
      </Reveal>
    </section>
  );
};
