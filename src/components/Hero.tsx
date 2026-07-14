import { ArrowUpRight, Play } from 'lucide-react';

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[8%] left-[12%] h-[32rem] w-[32rem] rounded-full bg-softblue/20 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[10%] right-[8%] h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[120px] animate-float" />
        <div className="absolute top-[40%] left-[55%] h-[20rem] w-[20rem] rounded-full bg-navy/10 blur-[100px] animate-float-slow" />
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />

      {/* Geometric logo-inspired elements */}
      <GeometricElements />

      <div className="relative mx-auto max-w-content px-6 text-center">
        <div className="reveal inline-flex items-center gap-2 rounded-full glass border border-white/50 px-4 py-1.5 text-xs font-medium text-navy/70 shadow-soft mb-10">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Premium clipping &amp; content production
        </div>

        <h1 className="reveal reveal-delay-1 text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tightest text-navy text-balance leading-[0.95]">
          Crafting Content
          <br />
          <span className="text-gradient">That Connects.</span>
        </h1>

        <p className="reveal reveal-delay-2 mx-auto mt-8 max-w-xl text-lg sm:text-xl text-navy/55 font-light leading-relaxed text-balance">
          Premium clipping and content production for creators, brands, and
          businesses.
        </p>

        <div className="reveal reveal-delay-3 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('contact')}
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 ease-smooth hover:bg-primary hover:shadow-glow"
          >
            Book a Call
            <ArrowUpRight
              size={16}
              className="transition-transform duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
          <button
            onClick={() => scrollTo('work')}
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full glass border border-white/50 px-7 py-3.5 text-sm font-medium text-navy transition-all duration-500 ease-smooth hover:bg-white/80 hover:shadow-soft"
          >
            <Play size={15} className="fill-current" />
            View Portfolio
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 reveal reveal-delay-5">
        <div className="flex h-9 w-5.5 items-start justify-center rounded-full border border-navy/20 p-1.5">
          <div className="h-1.5 w-1 rounded-full bg-navy/30 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function GeometricElements() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Large rotating diamond outline */}
      <svg
        className="absolute -right-20 top-1/4 h-72 w-72 text-softblue/15 animate-spin-slow"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M100 10 L190 100 L100 190 L10 100 Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M100 40 L160 100 L100 160 L40 100 Z"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>

      {/* Small floating diamond */}
      <svg
        className="absolute left-[8%] bottom-[20%] h-16 w-16 text-primary/20 animate-float"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M50 10 L90 50 L50 90 L10 50 Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      {/* Dot grid accent */}
      <svg
        className="absolute right-[10%] bottom-[15%] h-24 w-24 text-navy/10"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <circle
              key={`${r}-${c}`}
              cx={10 + c * 20}
              cy={10 + r * 20}
              r="1.5"
              fill="currentColor"
            />
          )),
        )}
      </svg>
    </div>
  );
}
