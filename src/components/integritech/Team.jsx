import { TEAM } from '../../data/content';
import { Reveal, SectionHeader } from './Reveal';

const TeamCard = ({ member, delay }) => (
  <Reveal delay={delay} className="h-full">
    <article className="group h-full rounded-lg border border-line bg-white p-3 pb-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-grey">
        <img
          src={member.photo}
          alt={member.photoAlt}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale transition-all duration-700 ease-in-out group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </div>
      <h3 className="mt-5 px-2 text-center font-display text-lg font-extrabold tracking-tight text-ink">
        {member.name}
      </h3>
    </article>
  </Reveal>
);

export const Team = () => (
  <section className="bg-white py-20 md:py-28" aria-labelledby="team-heading">
    <div className="mx-auto max-w-site px-6">
      <SectionHeader
        label="05 / Collective craft"
        title={<span id="team-heading">Three minds.<br />One direction.</span>}
        description="Three different kinds of expertise, one goal: creating solutions that are relevant, meaningful, and impactful."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
        {TEAM.map((member, i) => (
          <TeamCard key={member.name} member={member} delay={i * 110} />
        ))}
      </div>
    </div>
  </section>
);
