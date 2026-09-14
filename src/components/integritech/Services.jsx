import { Monitor, Fingerprint, Globe } from 'lucide-react';
import { SERVICES } from '../../data/content';
import { Reveal, SectionHeader } from './Reveal';

const ICONS = { monitor: Monitor, fingerprint: Fingerprint, globe: Globe };

const ServiceCard = ({ service, delay }) => {
  const Icon = ICONS[service.icon];
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col rounded-lg border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ice text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
            <Icon size={18} strokeWidth={1.6} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </span>
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-mist">
            {service.index} / {service.eyebrow}
          </span>
        </div>

        <h3 className="mt-7 font-display text-xl font-extrabold tracking-tight text-ink">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-mist">
          {service.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-7" aria-label={`${service.title} services`}>
          {service.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line bg-soft px-3 py-1 text-[11px] font-semibold text-mist">
              {tag}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
};

export const Services = () => (
  <section id="services" className="scroll-mt-28 border-t border-line bg-soft py-20 md:py-28">
    <div className="mx-auto max-w-site px-6">
      <SectionHeader
        label="02 / What we do"
        title={<>Technology that works.<br />Design that speaks.</>}
        description="We combine strategy, design, and technology to help businesses build digital solutions that are simple, relevant, and focused."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.id} service={service} delay={i * 110} />
        ))}
      </div>
    </div>
  </section>
);
