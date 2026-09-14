import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { SOCIAL_POSTS, SOCIAL_LINKS, MANAGED_ACCOUNTS } from '../../data/content';
import { Reveal, SectionHeader } from './Reveal';

export const Social = () => (
  <section className="bg-white py-20 md:py-28" aria-labelledby="social-heading">
    <div className="mx-auto max-w-site px-6">
      <SectionHeader
        label="07 / Stay connected"
        title={<span id="social-heading">What we're building.<br />What we're thinking.</span>}
        description="Follow our process, work, and insights on technology, design, and the digital world."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
        {SOCIAL_POSTS.map((post, i) => (
          <Reveal key={post.id} delay={i * 100} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
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
              className="group flex items-center gap-4 rounded-lg border border-line bg-soft px-5 py-4 transition-all duration-300 hover:border-brand/40 hover:bg-white hover:shadow-soft"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
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

      <Reveal delay={150}>
        <div className="mt-11 flex flex-col items-center gap-6 border-t border-line pt-10 sm:flex-row sm:justify-between">
          <a
            href={SOCIAL_LINKS[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand"
          >
            Follow @integritech.id
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <ul className="flex items-center gap-3" aria-label="INTEGRITECH.id social media">
            {SOCIAL_LINKS.filter((s) => s.id !== 'instagram').map((social) => {
              const Icon = social.id === 'linkedin' ? Linkedin : Instagram;
              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-mist transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-white"
                  >
                    <Icon size={16} strokeWidth={1.7} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);
