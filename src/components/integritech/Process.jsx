import { PROCESS_STEPS } from '../../data/content';
import { Reveal, SectionHeader } from './Reveal';

export const Process = () => (
  <section className="border-t border-line bg-soft py-20 md:py-28" aria-labelledby="process-heading">
    <div className="mx-auto max-w-site px-6">
      <SectionHeader
        label="06 / How we work"
        title={<span id="process-heading">From idea to impact.</span>}
        description="We turn complex needs into a process that is clear, focused, and easy to follow."
      />

      <ol className="mt-12 grid grid-cols-1 gap-11 md:mt-16 md:grid-cols-5 md:gap-7">
        {PROCESS_STEPS.map((step, i) => (
          <Reveal key={step.index} delay={i * 90} as="li" className="relative pl-9 md:pl-0 md:pt-11">
            {i < PROCESS_STEPS.length - 1 && (
              <>
                <span className="absolute bottom-[-2.5rem] left-[5px] top-7 w-px bg-line md:hidden" aria-hidden="true" />
                <span className="absolute left-6 top-[5px] hidden h-px w-[calc(100%+0.75rem)] bg-line md:block" aria-hidden="true" />
              </>
            )}

            <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full bg-brand ring-4 ring-ice md:left-0 md:top-0" aria-hidden="true" />

            <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              {step.index}
            </p>
            <h3 className="mt-1.5 font-display text-lg font-extrabold tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-mist">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
