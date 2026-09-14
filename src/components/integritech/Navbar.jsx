import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/content';
import { Logo } from './Logo';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
      document.addEventListener('keydown', onKey);
      return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey); };
    }
    document.body.style.overflow = '';
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
        <div className={`mx-auto mt-3 flex max-w-site items-center justify-between rounded-lg border bg-white px-4 py-2.5 transition-shadow duration-300 sm:px-5 ${scrolled ? 'border-line shadow-lift' : 'border-line shadow-soft'}`}>
          <Logo />

          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold text-mist transition-colors duration-200 hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group hidden items-center gap-1.5 rounded-md bg-navy px-4 py-2 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-brand md:inline-flex"
            >
              Let's Talk
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink transition-colors hover:bg-soft md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="menu-in fixed inset-0 z-40 flex flex-col bg-white px-6 pb-10 pt-24 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${60 + i * 50}ms` }}
                className="card-in border-b border-line py-5 font-display text-2xl font-extrabold tracking-tight text-ink transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-brand"
          >
            Let's Talk
            <ArrowUpRight size={18} />
          </a>

          <p className="mt-auto pt-10 text-sm text-mist">
            Integrating Business Intelligence with Digital Technology
          </p>
        </div>
      )}
    </>
  );
};
