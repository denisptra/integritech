import { useEffect, useRef, useState } from 'react';

export const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
};

export const SectionLabel = ({ children }) => (
  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
    {children}
  </p>
);

export const SectionHeader = ({ label, title, description, align = 'left' }) => (
  <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    <Reveal>
      <SectionLabel>{label}</SectionLabel>
    </Reveal>
    <Reveal delay={80}>
      <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink leading-[1.12] md:text-5xl">
        {title}
      </h2>
    </Reveal>
    {description && (
      <Reveal delay={160}>
        <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
          {description}
        </p>
      </Reveal>
    )}
  </div>
);
