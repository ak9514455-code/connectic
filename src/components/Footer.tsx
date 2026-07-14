import { Instagram, Youtube, Twitter } from 'lucide-react';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'motion', label: 'Motion' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export function Footer() {
  const handleClick = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-navy/8 bg-white">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <svg width="22" height="22" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <path
                  d="M50 18 L74 50 L50 82 L26 50 Z"
                  stroke="url(#footer-grad)"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="50" r="5" fill="#2563EB" />
                <defs>
                  <linearGradient id="footer-grad" x1="26" y1="18" x2="74" y2="82">
                    <stop stopColor="#60A5FA" />
                    <stop offset="1" stopColor="#2563EB" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-sm font-semibold tracking-[0.18em] text-navy">
                CONNECTIC
              </span>
            </div>
            <p className="text-sm text-navy/40 font-light max-w-xs">
              Premium clipping and content production for creators, brands, and
              businesses.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className="text-sm text-navy/50 font-light transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy/50 transition-all duration-500 ease-smooth hover:border-primary/30 hover:text-primary hover:-translate-y-0.5"
              >
                <social.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-navy/8 pt-8">
          <p className="text-xs text-navy/35 font-light">
            © {new Date().getFullYear()} CONNECTIC. All rights reserved.
          </p>
          <p className="text-xs text-navy/35 font-light">
            Crafting content that connects.
          </p>
        </div>
      </div>
    </footer>
  );
}
