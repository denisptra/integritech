import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { IndonesiaMap } from './IndonesiaMap';

const INDICATORS = ['Digital System', 'Brand Identity', 'Digital Presence'];

export const Hero = () => (
  <section id="top" className="relative overflow-hidden bg-white">
    <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-12 px-6 pb-16 pt-32 sm:pt-36 lg:grid-cols-[1.02fr_1fr] lg:gap-8 lg:pb-20 lg:pt-36">
      <div>
        <Reveal>
          <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-brand">
            01 / Digital Studio
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 font-display text-[2.65rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.1rem]">
            <span className="block text-navy sm:whitespace-nowrap">BUILD DIGITAL.</span>
            <span className="block text-brand sm:whitespace-nowrap">CREATE IMPACT.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mist md:text-base">
            We build digital systems, strengthen brand identities, and create experiences that help businesses grow.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand"
            >
              View Selected Work
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
            >
              Let's Work Together
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-bold uppercase tracking-[0.18em] text-mist">
            {INDICATORS.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />}
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={250} className="lg:pl-4">
        <IndonesiaMap />
      </Reveal>
    </div>
  </section>
);
