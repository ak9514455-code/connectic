import { Scissors, Clapperboard, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const services = [
  {
    icon: Scissors,
    title: 'Clipping',
    description:
      'We extract the most compelling moments from your long-form content and reshape them into scroll-stopping short-form videos — edited, captioned, and formatted for every platform.',
    points: ['Podcast & interview clips', 'Hook-driven editing', 'Platform-native formatting'],
    image: 'https://images.pexels.com/photos/6141176/pexels-photo-6141176.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Clapperboard,
    title: 'Content Production',
    description:
      'From concept to final cut, we produce original short-form content that embodies your brand — cinematic visuals, precise sound design, and storytelling crafted frame by frame.',
    points: ['Concept & creative direction', 'Cinematic editing & motion', 'Sound design & color'],
    image: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 sm:py-40 bg-white">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Services"
          title="Two crafts. One standard."
          subtitle="Everything we deliver is held to the same cinematic standard — whether we're cutting clips from your existing content or producing something entirely new."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-3xl border border-navy/8 bg-canvas transition-all duration-700 ease-smooth hover:shadow-glass-lg hover:-translate-y-1`}
            >
              {/* Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
                <div className="absolute bottom-5 left-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full glass-strong border border-white/60 text-white">
                    <service.icon size={20} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-base sm:text-lg text-navy/60 font-light leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-sm text-navy/70"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group/btn mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-primary"
                >
                  Learn more
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-500 ease-smooth group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
