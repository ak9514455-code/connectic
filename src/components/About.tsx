import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              We turn hours of content
              <br />
              into moments that <span className="text-gradient">matter.</span>
            </>
          }
        />

        <div className="reveal reveal-delay-3 mx-auto mt-14 max-w-prose text-center">
          <p className="text-xl sm:text-2xl font-light text-navy/70 leading-relaxed text-balance">
            CONNECTIC transforms long-form podcasts, interviews, and footage
            into premium short-form experiences — cinematic clips engineered to
            stop the scroll, hold attention, and build connection.
          </p>
        </div>

        {/* Stats */}
        <div className="reveal reveal-delay-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-navy/8 bg-navy/5">
          {[
            { value: '2,400+', label: 'Clips delivered' },
            { value: '180M+', label: 'Views generated' },
            { value: '60+', label: 'Creators served' },
            { value: '4.9', label: 'Average rating' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-canvas px-6 py-10 text-center transition-colors duration-500 hover:bg-white"
            >
              <p className="text-3xl sm:text-4xl font-semibold text-navy tracking-tightest">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-navy/45 font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
