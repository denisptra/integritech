import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/content';
import { Logo } from './Logo';

export const BloomNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/30 backdrop-blur-lg">
      <div className="mx-auto flex max-w-site items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-ink/70 transition-colors duration-200 hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/integritech.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-navy/20 bg-navy/80 px-5 py-2 text-[13px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-navy md:inline-flex"
          >
            Let's Contact
            <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(v => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-white/80 backdrop-blur-xl px-6 pt-20 md:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy/10 py-4 font-display text-xl font-bold text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://instagram.com/integritech.id"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy/20 bg-navy/80 px-6 py-3 text-center font-semibold text-white backdrop-blur-sm"
          >
            Let's Contact
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
};
