import { Monitor, Fingerprint, Globe } from 'lucide-react';
import { SERVICES } from '../../data/content';
import { Reveal } from './Reveal';

const ICONS = { monitor: Monitor, fingerprint: Fingerprint, globe: Globe };

const GRADIENTS = [
  'from-brand/5 to-brand/10',
  'from-gold/5 to-gold/10',
  'from-ice to-brand/5',
];

export const BloomFeatures = () => (
  <section id="services" className="scroll-mt-28 bg-white py-12 md:py-16">
    <div className="mx-auto max-w-site px-6">
      <Reveal>
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
            02 / What we do
          </p>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink leading-[1.12] md:text-5xl">
            Technology that works.<br />Design that speaks.
          </h2>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3 md:gap-5">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <Reveal key={service.id} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${GRADIENTS[i]}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={40} strokeWidth={1.2} className="text-navy/20" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
