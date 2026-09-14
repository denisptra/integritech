import { Instagram, ArrowUpRight } from 'lucide-react';
import { SOCIAL_POSTS, MANAGED_ACCOUNTS } from '../../data/content';
import { Reveal } from './Reveal';

export const BloomSocial = () => (
  <section className="bg-white py-16 md:py-24" aria-labelledby="social-heading">
    <div className="mx-auto max-w-site px-6">
      <Reveal>
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
            07 / Stay connected
          </p>
          <h2 id="social-heading" className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink leading-[1.12] md:text-5xl">
            What we're building.<br />What we're thinking.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
            Follow our process, work, and insights on technology, design, and the digital world.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
        {SOCIAL_POSTS.map((post, i) => (
          <Reveal key={post.id} delay={i * 100} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="relative aspect-[16/10] overflow-hidden bg-grey">
                <img src={post.image} alt={post.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                  {post.category}
                </p>
                <h3 className="mt-3 font-display text-base font-extrabold leading-snug tracking-tight text-ink">
                  {post.title}
                </h3>
                <p className="mt-auto flex items-center gap-2 pt-5 text-xs font-semibold text-mist">
                  <Instagram size={13} strokeWidth={1.8} />
                  {post.meta}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {MANAGED_ACCOUNTS.map((account) => (
            <a
              key={account.handle}
              href={account.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-soft px-5 py-4 transition-all duration-300 hover:border-brand/40 hover:bg-white hover:shadow-soft"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                <Instagram size={17} strokeWidth={1.7} />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-sm font-extrabold tracking-tight text-ink">{account.handle}</span>
                <span className="block text-xs font-medium text-mist">{account.note}</span>
              </span>
              <ArrowUpRight size={15} className="ml-auto shrink-0 text-mist transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
