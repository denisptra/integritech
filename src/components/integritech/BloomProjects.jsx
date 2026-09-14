import { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data/content';
import { Reveal } from './Reveal';

const TABS = ['Website', 'Branding'];

const ProjectCard = ({ project, index }) => (
  <article
    style={{ animationDelay: `${index * 90}ms` }}
    className="card-in group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-grey">
      <img src={project.image} alt={project.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
    </div>
    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-extrabold tracking-tight text-ink md:text-xl">
          {project.title}
        </h3>
        <span className="shrink-0 rounded-full bg-ice px-3 py-1 text-[11px] font-semibold text-navy">
          {project.year}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-mist">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project services">
        {project.services.map((s) => (
          <li key={s} className="rounded-full bg-soft px-3 py-1 text-[11px] font-semibold text-mist">{s}</li>
        ))}
      </ul>
      <a
        href={project.caseStudyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors duration-200 hover:text-brand"
      >
        View Case Study
        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  </article>
);

export const BloomProjects = () => {
  const [active, setActive] = useState('Website');

  const websiteProjects = PROJECTS.filter((p) => p.categories.includes('Website')).slice(0, 2);

  return (
    <section id="work" className="scroll-mt-28 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
                INTEGRITECH.id in Action
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl">
                Selected work.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
                A selection of projects we have built to help businesses, organizations, and brands deliver better digital solutions.
              </p>
            </div>

            <div>
              <div className="flex gap-6 border-b border-line">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActive(tab)}
                    className={`pb-3 text-sm font-semibold transition-colors duration-200 ${
                      active === tab
                        ? 'border-b-2 border-navy text-navy'
                        : 'text-mist hover:text-ink'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                {active === 'Website' ? (
                  <>
                    <div className="grid grid-cols-1 gap-5 md:gap-6">
                      {websiteProjects.map((project, i) => (
                        <ProjectCard key={project.slug} project={project} index={i} />
                      ))}
                    </div>
                    <div className="mt-8">
                      <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors duration-200 hover:text-brand"
                      >
                        Lihat semua project
                        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-start rounded-2xl border border-line bg-soft p-8">
                    <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                      Branding Projects
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      We manage branding and social media for Oryza Lokabasa — an arts, language, and culture community.
                    </p>
                    <a
                      href="https://instagram.com/oryza.lokabasa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand"
                    >
                      View on Instagram
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
