import { Monitor, Fingerprint, Globe } from 'lucide-react';
import { SERVICES } from '../../data/content';
import { Reveal } from './Reveal';

const ICONS = { monitor: Monitor, fingerprint: Fingerprint, globe: Globe };

export const BloomFeatures = () => (
  <section id="services" className="scroll-mt-28 bg-white py-12 md:py-20">
    <div className="mx-auto max-w-site px-6">
      <Reveal>
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
            02 / What we do
          </p>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink leading-[1.12] md:text-5xl">
            Technology that works.<br />Design that speaks.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
            We combine strategy, design, and technology to help businesses build digital solutions that are simple, relevant, and focused.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <Reveal key={service.id} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative h-44 overflow-hidden bg-ice">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={28} strokeWidth={1.4} className="text-navy" />
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-5">
                    <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-mist">
                      {service.index} / {service.eyebrow}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${service.title} services`}>
                    {service.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-ice px-3 py-1 text-[11px] font-semibold text-navy">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
