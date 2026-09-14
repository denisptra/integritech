import { ArrowRight, Instagram } from 'lucide-react';
import { BRAND } from '../../data/content';
import { Reveal } from './Reveal';

export const BloomCTA = () => (
  <section id="contact" className="scroll-mt-28 border-t border-line bg-white py-24 md:py-32" aria-labelledby="cta-heading">
    <div className="mx-auto max-w-site px-6 text-center">
      <Reveal>
        <h2 id="cta-heading" className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
          Your idea deserves<br />more than just a concept.
          <span className="mt-3 block text-brand">Let's make it real.</span>
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-mist md:text-base">
          Tell us about the needs or challenges you are facing. We will help you find the right digital direction to make it happen.
        </p>
      </Reveal>

      <Reveal delay={220}>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://instagram.com/integritech.id"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand sm:w-auto"
          >
            <Instagram size={16} />
            Contact via Instagram
          </a>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <p className="mt-10 text-sm text-mist">
          {BRAND.email} · {BRAND.location}
        </p>
      </Reveal>
    </div>
  </section>
);
