import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { TRANSLATIONS } from '../../data/content';

export const BloomAbout = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="scroll-mt-28 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-site px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
                01 / About
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink md:text-[2.75rem] leading-[1.1]">
                {t.aboutTitle}
              </h2>
              <p className="mt-6 text-base leading-[1.8] text-mist md:text-lg">
                {t.aboutDesc}
              </p>
              <a
                href="#services"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand"
              >
                {t.aboutCta}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-grey">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Team collaboration at INTEGRITECH studio"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
