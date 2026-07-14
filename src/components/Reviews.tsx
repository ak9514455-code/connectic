import { Star, Quote } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const reviews = [
  {
    quote:
      'CONNECTIC transformed our three-hour podcast into a month of viral clips. The quality is simply unmatched — every cut feels intentional.',
    name: 'Marcus Reid',
    role: 'Podcast Host, The Deep Dive',
    avatar: 'https://images.pexels.com/photos/220817/pexels-photo-220817.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      "They don't just edit — they understand storytelling. Our engagement jumped 4x after we switched to CONNECTIC for our short-form content.",
    name: 'Sofia Chen',
    role: 'Head of Content, Lumen Studio',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'The motion graphics work is on another level. Every frame feels cinematic. Our brand finally looks the way we always imagined it.',
    name: 'James Okonkwo',
    role: 'Founder, Atlas Ventures',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'Working with CONNECTIC feels like having an in-house creative team — but better. Fast, reliable, and genuinely invested in our success.',
    name: 'Elena Vasquez',
    role: 'Creator, 1.2M subscribers',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-32 sm:py-40 bg-white">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Reviews"
          title="Trusted by creators."
          subtitle="The people we work with say it better than we can."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {reviews.map((review, i) => (
            <figure
              key={review.name}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative flex flex-col rounded-3xl glass-card border border-navy/8 p-8 sm:p-10 transition-all duration-700 ease-smooth hover:shadow-glass hover:-translate-y-1`}
            >
              <Quote
                size={32}
                className="text-softblue/30 mb-6"
                aria-hidden="true"
              />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={15}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-lg sm:text-xl font-light text-navy/75 leading-relaxed">
                "{review.quote}"
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-navy">{review.name}</p>
                  <p className="text-sm text-navy/45 font-light">{review.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
