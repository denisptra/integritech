import { useState } from 'react';
import { ArrowUpRight, ArrowRight, FolderOpen } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/content';
import { Reveal } from './Reveal';

const ProjectCard = ({ project, index }) => (
  <article
    style={{ animationDelay: `${index * 90}ms` }}
    className="card-in group flex h-full flex-col overflow-hidden rounded-2xl border border-white/30 bg-white/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-lift"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-grey">
      <img src={project.image} alt={project.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy backdrop-blur-sm">
        {project.categories[0]}
      </span>
    </div>
    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-extrabold tracking-tight text-ink md:text-xl">
          {project.title}
        </h3>
        <span className="shrink-0 text-xs font-semibold text-mist">{project.year}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-mist">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project services">
        {project.services.map((s) => (
          <li key={s} className="rounded-full border border-navy/10 bg-white/50 px-3 py-1 text-[11px] font-semibold text-navy backdrop-blur-sm">{s}</li>
        ))}
      </ul>
      <a
        href={project.caseStudyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors duration-200 hover:text-brand"
      >
        View Case Study
        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  </article>
);

export const BloomProjects = () => {
  const [active, setActive] = useState('All');

  const availableCategories = PROJECT_CATEGORIES.filter(
    (cat) => cat === 'All' || PROJECTS.some((p) => p.categories.includes(cat))
  );

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(active));

  return (
    <section id="work" className="scroll-mt-28 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
              03 / Selected case studies
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink leading-[1.12] md:text-5xl">
              Selected work.<br />Real outcomes.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
              A selection of projects we have built to help businesses, organizations, and brands deliver better digital solutions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Project filter">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-[13px] font-semibold backdrop-blur-sm transition-all duration-200 ${
                  active === cat
                    ? 'border-navy/30 bg-navy/80 text-white'
                    : 'border-white/30 bg-white/50 text-mist hover:border-brand hover:text-brand'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {filtered.length > 0 ? (
          <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6" key={active}>
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="card-in mt-9 flex flex-col items-center rounded-2xl border border-dashed border-white/30 bg-white/30 px-6 py-14 text-center backdrop-blur-md">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/50 text-navy">
              <FolderOpen size={20} strokeWidth={1.6} />
            </span>
            <p className="mt-4 font-display text-base font-bold text-ink">Projects for this category are on the way.</p>
            <p className="mt-2 max-w-sm text-sm text-mist">We are curating our best {active} work to showcase here.</p>
          </div>
        )}

        <Reveal delay={120}>
          <div className="mt-11 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-navy/30 bg-navy/80 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-navy"
            >
              View All Projects
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
