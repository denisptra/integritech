import { PROCESS_STEPS } from '../../data/content';
import { Reveal } from './Reveal';

export const BloomProcess = () => (
  <section className="border-t border-white/20 bg-gradient-to-b from-white to-ice py-16 md:py-24" aria-labelledby="process-heading">
    <div className="mx-auto max-w-site px-6">
      <Reveal>
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
            06 / How we work
          </p>
          <h2 id="process-heading" className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink leading-[1.12] md:text-5xl">
            From idea to impact.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
            We turn complex needs into a process that is clear, focused, and easy to follow.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-3 lg:grid-cols-5 md:gap-5">
        {PROCESS_STEPS.map((step, i) => (
          <Reveal key={step.index} delay={i * 90}>
            <div className="relative h-full rounded-2xl border border-white/30 bg-white/40 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-lift md:p-6">
              <span className="mb-3 inline-block font-display text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                {step.index}
              </span>
              <h3 className="font-display text-base font-extrabold tracking-tight text-ink md:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-mist">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
