import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { IndonesiaMap } from './IndonesiaMap';

const INDICATORS = ['Digital System', 'Brand Identity', 'Digital Presence'];

export const BloomHero = () => (
  <section id="top" className="relative overflow-hidden bg-gradient-to-b from-ice via-white to-white pt-20">
    <div className="mx-auto max-w-site px-6 pb-12 pt-16 text-center md:pt-24">
      <Reveal>
        <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-brand">
          01 / Digital Studio
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="mt-6 font-display text-[2.65rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.1rem]">
          <span className="block text-navy">BUILD DIGITAL.</span>
          <span className="block text-brand">CREATE IMPACT.</span>
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-mist md:text-base">
          We build digital systems, strengthen brand identities, and create experiences that help businesses grow.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-navy/80 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-navy"
          >
            View Selected Work
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-navy/10 bg-white/50 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:border-brand hover:text-brand"
          >
            Let's Work Together
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>

      <Reveal delay={400}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-bold uppercase tracking-[0.18em] text-mist">
          {INDICATORS.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />}
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>

    <Reveal delay={450}>
      <div className="mx-auto max-w-5xl px-6">
        <IndonesiaMap />
      </div>
    </Reveal>
  </section>
);
