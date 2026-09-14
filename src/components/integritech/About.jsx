import { STATS } from '../../data/content';
import { Reveal, SectionLabel } from './Reveal';

export const About = () => (
  <section id="about" className="scroll-mt-28 border-t border-line bg-soft py-20 md:py-28">
    <div className="mx-auto max-w-site px-6">
      <Reveal>
        <div className="rounded-xl border border-line bg-white px-7 py-10 shadow-soft md:px-12 md:py-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <SectionLabel>04 / Studio principle</SectionLabel>
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

            <dl className="grid grid-cols-3 gap-6 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-line lg:border-l lg:border-line lg:pl-14">
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
