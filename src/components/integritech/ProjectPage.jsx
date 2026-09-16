import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS, TRANSLATIONS } from '../../data/content';
import { Reveal } from './Reveal';

export const ProjectPage = ({ lang }) => {
  const { slug } = useParams();
  const t = TRANSLATIONS[lang];
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-white pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl font-extrabold text-ink">404</h1>
          <p className="mt-4 text-mist">{lang === 'id' ? 'Project tidak ditemukan.' : 'Project not found.'}</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand">
            <ArrowLeft size={16} />
            {lang === 'id' ? 'Kembali' : 'Back to Home'}
          </Link>
        </div>
      </section>
    );
  }

  const detail = project.detail;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden bg-grey pt-24">
        <div className="mx-auto max-w-site px-6 py-16">
          <Reveal>
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-mist transition-colors duration-200 hover:text-navy"
            >
              <ArrowLeft size={16} />
              {lang === 'id' ? 'Kembali' : 'Back'}
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-ice px-3 py-1 text-[11px] font-semibold text-navy">{project.year}</span>
              {project.services.map((s) => (
                <span key={s} className="rounded-full bg-soft px-3 py-1 text-[11px] font-semibold text-mist">{s}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-mist">
              {lang === 'id' ? detail.overviewId : detail.overview}
            </p>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <div className="mx-auto max-w-site px-6 pb-16">
            <div className="overflow-hidden rounded-2xl border border-line">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Details */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Left: Project info */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {lang === 'id' ? 'Tantangan' : 'Challenge'}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-mist">
                  {lang === 'id' ? detail.challengeId : detail.challenge}
                </p>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-12 font-display text-2xl font-extrabold tracking-tight text-ink">
                  {lang === 'id' ? 'Solusi' : 'Solution'}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-mist">
                  {lang === 'id' ? detail.solutionId : detail.solution}
                </p>
              </Reveal>
            </div>

            {/* Right: Sidebar */}
            <div>
              <Reveal>
                <div className="rounded-2xl border border-line bg-soft p-6">
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand">
                        {lang === 'id' ? 'Peran' : 'Role'}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-ink">
                        {lang === 'id' ? detail.roleId : detail.role}
                      </p>
                    </div>
                    <div className="border-t border-line" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand">
                        {lang === 'id' ? 'Timeline' : 'Timeline'}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-ink">
                        {lang === 'id' ? detail.timelineId : detail.timeline}
                      </p>
                    </div>
                    <div className="border-t border-line" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand">
                        {lang === 'id' ? 'Teknologi' : 'Tech Stack'}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {detail.techStack.map((tech) => (
                          <span key={tech} className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-mist border border-line">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-line" />
                    <a
                      href={detail.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand"
                    >
                      <ExternalLink size={15} />
                      {lang === 'id' ? 'Kunjungi Website' : 'Visit Website'}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="border-t border-line py-16 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink">
              {lang === 'id' ? 'Project Lainnya' : 'More Projects'}
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.filter((p) => p.slug !== slug).slice(0, 3).map((otherProject) => (
                <Link
                  key={otherProject.slug}
                  to={`/project/${otherProject.slug}`}
                  className="group card-in overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="overflow-hidden bg-grey">
                    <img
                      src={otherProject.image}
                      alt={otherProject.imageAlt}
                      loading="lazy"
                      className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-base font-extrabold tracking-tight text-ink">
                        {otherProject.title}
                      </h3>
                      <ArrowUpRight size={16} className="text-mist transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
                    </div>
                    <p className="mt-2 text-sm text-mist">
                      {lang === 'id' ? otherProject.descriptionId : otherProject.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
