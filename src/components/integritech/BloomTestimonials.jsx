import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const LOGOS = [
  { name: 'Garuda Indonesia', label: 'GARUDA' },
  { name: 'Telkom Indonesia', label: 'TELKOM' },
  { name: 'Pertamina', label: 'PERTAMINA' },
  { name: 'Astra International', label: 'ASTRA' },
  { name: 'Bank BRI', label: 'BANK BRI' },
  { name: 'Indosat Ooredoo', label: 'INDOSAT' },
];

const TESTIMONIALS = [
  {
    quote:
      'INTEGRITECH has been a strategic partner in our digital transformation journey. Their team is professional, responsive, and truly understands our needs.',
    author: 'Director of Technology',
    company: 'Enterprise Partner',
  },
  {
    quote:
      'The website and branding developed by INTEGRITECH helped our arts and culture community connect with a nationwide audience effortlessly.',
    author: 'Community Lead',
    company: 'Oryza Lokabasa',
  },
  {
    quote:
      'Modern, intuitive, and built with extreme attention to detail. Our platform traffic and engagement scaled significantly after launch.',
    author: 'Operations Lead',
    company: 'Agrowisata Darangdan',
  },
];

export const BloomTestimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section className="border-t border-slate-100 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* ── TRUSTED BY LOGO BAR ────────────────────────────────────────── */}
        <div className="border-b border-slate-100 pb-16">
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-brand"></span>
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
                TRUSTED BY
              </p>
            </div>
            <h3 className="mt-3 font-display text-lg font-bold text-[#11152F] sm:text-xl">
              Trusted by organizations building what comes next.
            </h3>
          </Reveal>

          {/* Clean Monochrome Partner Logos */}
          <Reveal delay={150}>
            <div className="mt-10 grid grid-cols-3 items-center justify-items-center gap-8 md:grid-cols-6">
              {LOGOS.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center font-display text-sm font-extrabold tracking-widest text-slate-400 grayscale transition-colors duration-200 hover:text-[#11152F]"
                >
                  {logo.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
        <div className="pt-16">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left: Heading */}
            <div className="lg:col-span-4">
              <Reveal>
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-brand"></span>
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
                    TESTIMONIAL
                  </p>
                </div>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#11152F] sm:text-4xl">
                  What our clients say about us
                </h2>
              </Reveal>
            </div>

            {/* Right: Quote, Author, and Navigation Arrows */}
            <div className="lg:col-span-8 lg:pl-6">
              <Reveal delay={150}>
                <div className="flex items-start gap-4">
                  <Quote size={32} className="shrink-0 text-slate-300" />
                  <div className="flex-1">
                    <p className="text-lg font-medium leading-relaxed text-[#11152F] sm:text-xl">
                      "{TESTIMONIALS[current].quote}"
                    </p>

                    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <p className="font-display text-sm font-bold text-[#11152F]">
                          — {TESTIMONIALS[current].author}
                        </p>
                        <p className="text-xs text-slate-500">
                          {TESTIMONIALS[current].company}
                        </p>
                      </div>

                      {/* Navigation Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={prev}
                          aria-label="Previous testimonial"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-[#1A1C3D] hover:bg-[#1A1C3D] hover:text-white"
                        >
                          <ArrowLeft size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={next}
                          aria-label="Next testimonial"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-[#1A1C3D] hover:bg-[#1A1C3D] hover:text-white"
                        >
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
