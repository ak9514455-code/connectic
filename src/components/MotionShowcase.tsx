import { SectionHeading } from './SectionHeading';

export function MotionShowcase() {
  return (
    <section id="motion" className="relative py-32 sm:py-40 bg-white overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-softblue/10 blur-[140px]" />

      <div className="relative mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Motion Showcase"
          title={
            <>
              Motion in <span className="text-gradient">Every Frame.</span>
            </>
          }
          subtitle="A glimpse of the visual experiences we create."
        />

        <div className="reveal reveal-delay-3 mt-16">
          <div className="group relative mx-auto max-w-5xl">
            {/* Glass frame */}
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-navy/5 p-2 shadow-glass-lg transition-all duration-700 ease-smooth group-hover:shadow-glow">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy">
                <video
                  className="h-full w-full object-cover transition-transform duration-[1.6s] ease-smooth group-hover:scale-[1.02]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1600"
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Subtle top gradient for depth */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
            </div>

            {/* Floating caption */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
              <p className="text-sm font-medium text-navy">Featured Motion Reel</p>
              <span className="hidden sm:inline h-1 w-1 rounded-full bg-navy/20" />
              <p className="text-sm text-navy/45 font-light">
                Cinematic editing · Sound design · Color grading
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
