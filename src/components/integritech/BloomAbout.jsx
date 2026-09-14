import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const BloomAbout = () => (
  <section id="about" className="scroll-mt-28 bg-white py-16 md:py-24">
    <div className="mx-auto max-w-site px-6">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl">
              What is INTEGRITECH?
            </h2>
            <a
              href="#services"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-brand hover:text-brand"
            >
              Explore now
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-base leading-relaxed text-mist md:text-lg">
            INTEGRITECH is a digital studio that helps businesses build digital systems, meaningful brands, and better digital experiences — combining strategy, design, and technology to create solutions that are simple, relevant, and focused.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
