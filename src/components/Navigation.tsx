import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useReveal';

const links = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'motion', label: 'Motion' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

const ids = links.map((l) => l.id);

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-700 ease-smooth w-[calc(100%-2rem)] max-w-3xl"
        aria-label="Primary"
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ease-smooth ${
            scrolled
              ? 'glass-strong shadow-glass border border-white/60'
              : 'glass shadow-soft border border-white/40'
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
            aria-label="CONNECTIC home"
          >
            <Logo />
            <span className="text-sm font-semibold tracking-[0.18em] text-navy">
              CONNECTIC
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ease-smooth ${
                  active === link.id
                    ? 'text-primary'
                    : 'text-navy/55 hover:text-navy'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleClick('contact')}
            className="hidden md:inline-flex items-center rounded-full bg-navy px-5 py-2 text-sm font-medium text-white transition-all duration-300 ease-smooth hover:bg-primary hover:shadow-glow"
          >
            Book a Call
          </button>

          <button
            className="md:hidden p-1.5 text-navy"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-smooth ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-canvas/80 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute left-4 right-4 top-24 rounded-3xl glass-strong shadow-glass-lg border border-white/60 p-6 transition-all duration-500 ease-smooth ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`px-4 py-3 text-left text-lg font-medium rounded-2xl transition-colors ${
                  active === link.id
                    ? 'text-primary bg-primary/5'
                    : 'text-navy/70 hover:bg-navy/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('contact')}
              className="mt-3 rounded-2xl bg-navy px-4 py-3.5 text-center text-base font-medium text-white hover:bg-primary transition-colors"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Logo() {
  return (
    <svg width="22" height="22" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path
        d="M50 18 L74 50 L50 82 L26 50 Z"
        stroke="url(#logo-grad)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="50" r="5" fill="#2563EB" />
      <defs>
        <linearGradient id="logo-grad" x1="26" y1="18" x2="74" y2="82">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
