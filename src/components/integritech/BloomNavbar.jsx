import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, TRANSLATIONS } from '../../data/content';
import { Logo } from './Logo';

export const BloomNavbar = ({ lang, setLang }) => {
  const [open, setOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-mist transition-colors duration-200 hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="rounded-full border border-line bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-mist transition-colors hover:border-navy hover:text-navy"
          >
            {lang === 'en' ? 'ID' : 'EN'}
          </button>
          <a
            href="https://instagram.com/integritech.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-navy px-5 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-brand md:inline-flex"
          >
            {t.heroCta === 'Try it now' ? 'Contact Us' : 'Hubungi Kami'}
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
        <div className="fixed inset-0 z-40 bg-white px-6 pt-20 md:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-display text-xl font-bold text-ink"
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
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-center font-semibold text-white"
          >
            {t.heroCta === 'Try it now' ? 'Contact Us' : 'Hubungi Kami'}
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
};
