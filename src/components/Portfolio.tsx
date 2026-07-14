import { SectionHeading } from './SectionHeading';

const projects = [
  {
    title: 'The Deep Dive',
    category: 'Podcast Clipping',
    image: 'https://images.pexels.com/photos/4325807/pexels-photo-4325807.jpeg?auto=compress&cs=tinysrgb&w=1600',
    span: 'lg:col-span-7',
  },
  {
    title: 'Brand Story',
    category: 'Content Production',
    image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-5',
  },
  {
    title: 'Founder Series',
    category: 'Interview Clips',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-5',
  },
  {
    title: 'Launch Film',
    category: 'Motion Production',
    image: 'https://images.pexels.com/photos/3131390/pexels-photo-3131390.jpeg?auto=compress&cs=tinysrgb&w=1600',
    span: 'lg:col-span-7',
  },
];

export function Portfolio() {
  return (
    <section id="work" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work."
          subtitle="A glimpse into the clips and content we've crafted for creators and brands."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative ${project.span} overflow-hidden rounded-3xl bg-navy/5`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.6s] ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-90" />

                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Hover indicator */}
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full glass-strong border border-white/40 text-white opacity-0 transition-all duration-500 ease-smooth group-hover:opacity-100 group-hover:scale-110">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 11L11 3M11 3H4M11 3V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
