import { useState } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, TRANSLATIONS } from '../../data/content';
import { Reveal } from './Reveal';

export const BloomProjects = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = TRANSLATIONS[lang];

  const project = PROJECTS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="work" className="scroll-mt-28 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
                {t.workLabel}
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl">
                {t.workTitle}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
                {t.workDesc}
              </p>
            </div>

            <div>
              <div className="card-in group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:flex-row">
                <div className="relative w-full overflow-hidden bg-grey md:w-2/5">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:h-full"
                  />
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
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {lang === 'id' ? project.descriptionId : project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project services">
                    {project.services.map((s) => (
                      <li key={s} className="rounded-full bg-soft px-3 py-1 text-[11px] font-semibold text-mist">{s}</li>
                    ))}
                  </ul>
                  <Link
                    to={`/project/${project.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors duration-200 hover:text-brand"
                  >
                    {lang === 'id' ? 'Lihat Project' : 'View Project'}
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">
                    {currentIndex + 1} / {PROJECTS.length}
                  </span>
                  <div className="flex gap-1.5">
                    {PROJECTS.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCurrentIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === currentIndex ? 'w-6 bg-brand' : 'w-2 bg-line hover:bg-mist'
                        }`}
                        aria-label={`Go to project ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-navy hover:text-navy"
                    aria-label="Previous project"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-navy hover:text-navy"
                    aria-label="Next project"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
