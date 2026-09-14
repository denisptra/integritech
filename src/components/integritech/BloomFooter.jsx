import { Instagram, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import { BRAND, SOCIAL_LINKS, FOOTER_LINKS } from '../../data/content';
import { Logo } from './Logo';

const SOCIAL_ICONS = { instagram: Instagram, linkedin: Linkedin, whatsapp: MessageCircle };

export const BloomFooter = () => (
  <footer className="border-t border-white/20 bg-white/30 backdrop-blur-lg" aria-label="Footer">
    <div className="mx-auto max-w-site px-6 py-14 md:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-mist">
            {BRAND.tagline}
          </p>
          <ul className="mt-6 flex items-center gap-2.5" aria-label="Social media">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.id] || Instagram;
              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/40 text-mist backdrop-blur-sm transition-all duration-200 hover:border-navy hover:bg-navy hover:text-white"
                  >
                    <Icon size={15} strokeWidth={1.7} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav className="md:col-span-3" aria-label="Navigasi footer">
          <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink">Studio</h3>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[13px] font-medium text-mist transition-colors duration-200 hover:text-navy">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink">Contact</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2.5 text-[13px] font-medium text-mist transition-colors duration-200 hover:text-navy">
                <Mail size={14} strokeWidth={1.7} />
                {BRAND.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5 text-[13px] font-medium text-mist">
              <MapPin size={14} strokeWidth={1.7} />
              {BRAND.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-mist">&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <p className="text-xs text-mist">
          Digital System <span className="text-gold">-</span> Brand Identity <span className="text-gold">-</span> Digital Presence
        </p>
      </div>
    </div>
  </footer>
);
