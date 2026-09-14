import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { IndonesiaMap } from './IndonesiaMap';

export const BloomHero = () => (
  <section id="top" className="relative overflow-hidden bg-white pt-20">
    <div className="mx-auto max-w-site px-6 pb-8 pt-16 text-center md:pt-24">
      <Reveal>
        <div className="mx-auto mb-6 flex h-10 w-10 items-center justify-center">
          <span className="text-2xl font-bold text-navy">+</span>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block text-ink">BUILD DIGITAL.</span>
          <span className="block text-brand">CREATE IMPACT.</span>
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-mist md:text-base">
          We build digital systems, strengthen brand identities, and create experiences that help businesses grow.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <a
          href="#work"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand"
        >
          Try it now
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </Reveal>
    </div>

    <Reveal delay={400}>
      <div className="mx-auto max-w-5xl px-6">
        <IndonesiaMap />
      </div>
    </Reveal>
  </section>
);
