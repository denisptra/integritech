import { useState } from 'react';
import { ArrowUpRight, ArrowRight, FolderOpen } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/content';
import { Reveal, SectionHeader } from './Reveal';

const ORYZA_INSTAGRAM = 'https://instagram.com/oryza.lokabasa';

const ProjectCard = ({ project, index, socialMode }) => (
  <article
    style={{ animationDelay: `${index * 90}ms` }}
    className="card-in group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-grey">
      <img src={project.image} alt={project.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
        {socialMode ? 'Social Media' : project.categories[0]}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-6 md:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-extrabold tracking-tight text-ink md:text-xl">
          {project.title}
        </h3>
        <span className="shrink-0 text-xs font-semibold text-mist">{project.year}</span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-mist">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project services">
        {project.services.map((s) => (
          <li key={s} className="rounded-full bg-ice px-3 py-1 text-[11px] font-semibold text-navy">{s}</li>
        ))}
      </ul>

      <a
        href={socialMode ? ORYZA_INSTAGRAM : project.caseStudyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors duration-200 hover:text-brand"
      >
        {socialMode ? 'View Instagram' : 'View Case Study'}
        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  </article>
);

export const Projects = () => {
  const [active, setActive] = useState('All');

  const availableCategories = PROJECT_CATEGORIES.filter(
    (cat) => cat === 'All' || PROJECTS.some((p) => p.categories.includes(cat))
  );

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(active));

  return (
    <section id="work" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-site px-6">
        <SectionHeader
          label="03 / Selected case studies"
          title={<>Selected work.<br />Real outcomes.</>}
          description="A selection of projects we have built to help businesses, organizations, and brands deliver better digital solutions."
        />

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Project filter">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors duration-200 ${
                  active === cat
                    ? 'border-navy bg-navy text-white'
                    : 'border-line bg-white text-mist hover:border-brand hover:text-brand'
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
              <ProjectCard key={project.slug} project={project} index={i} socialMode={false} />
            ))}
          </div>
        ) : (
          <div className="card-in mt-9 flex flex-col items-center rounded-lg border border-dashed border-line bg-soft px-6 py-14 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ice text-navy">
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
              className="group inline-flex items-center gap-2 rounded-md border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
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
