import { STATS, TEAM } from '../../data/content';
import { Reveal } from './Reveal';

export const BloomStats = () => (
  <section className="border-y border-white/20 bg-gradient-to-b from-ice to-white py-12 md:py-16">
    <div className="mx-auto max-w-site px-6">
      <Reveal>
        <div className="rounded-2xl border border-white/30 bg-white/40 px-7 py-10 shadow-soft backdrop-blur-md md:px-12 md:py-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
                04 / Studio principle
              </p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-ink md:text-[2.6rem]">
                Small team.<br />Big ideas.
              </h2>
              <p className="mt-6 font-display text-base font-bold text-navy md:text-lg">
                Focused on quality, not bureaucracy.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-mist md:text-[15px]">
                We are a small team with complementary skills. We work closely on every project, from understanding the problem to delivering solutions that are ready to use.
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-6 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-white/20 lg:border-l lg:border-white/20 lg:pl-14">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col justify-center lg:py-6 lg:first:pt-0 lg:last:pb-0">
                  <dd className="order-1 font-display text-4xl font-extrabold tracking-tight text-navy md:text-5xl lg:text-[3.4rem]">
                    {stat.value}
                  </dd>
                  <dt className="order-2 mt-2 text-xs font-semibold text-mist md:text-sm">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const TeamCard = ({ member, delay }) => (
  <Reveal delay={delay} className="h-full">
    <article className="group h-full overflow-hidden rounded-2xl border border-white/30 bg-white/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-lift">
      <div className="relative aspect-[4/5] overflow-hidden bg-grey">
        <img
          src={member.photo}
          alt={member.photoAlt}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale transition-all duration-700 ease-in-out group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </div>
      <h3 className="p-5 text-center font-display text-lg font-extrabold tracking-tight text-ink">
        {member.name}
      </h3>
    </article>
  </Reveal>
);

export const BloomTeam = () => (
  <section className="bg-white py-16 md:py-24" aria-labelledby="team-heading">
    <div className="mx-auto max-w-site px-6">
      <Reveal>
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
            05 / Collective craft
          </p>
          <h2 id="team-heading" className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink leading-[1.12] md:text-5xl">
            Three minds.<br />One direction.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
            Three different kinds of expertise, one goal: creating solutions that are relevant, meaningful, and impactful.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
        {TEAM.map((member, i) => (
          <TeamCard key={member.name} member={member} delay={i * 110} />
        ))}
      </div>
    </div>
  </section>
);
