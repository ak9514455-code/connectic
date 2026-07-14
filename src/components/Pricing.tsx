import { Check, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const plans = [
  {
    name: 'Starter',
    price: '$1,200',
    cadence: 'per month',
    description: 'For creators beginning to scale their short-form presence.',
    features: [
      '20 clips per month',
      'Hook-driven editing',
      'Custom captions',
      '2 platforms formatted',
      '48-hour delivery',
    ],
    cta: 'Start with Starter',
    highlighted: false,
  },
  {
    name: 'Studio',
    price: '$2,800',
    cadence: 'per month',
    description: 'For established creators and brands that demand more.',
    features: [
      '50 clips per month',
      'Cinematic editing & motion',
      'Custom thumbnails',
      'All platforms formatted',
      'Priority 24-hour delivery',
      'Dedicated editor',
    ],
    cta: 'Choose Studio',
    highlighted: true,
  },
  {
    name: 'Production',
    price: 'Custom',
    cadence: 'tailored to you',
    description: 'Full content production for brands and teams.',
    features: [
      'Original content production',
      'Creative direction',
      'Cinematic motion graphics',
      'Sound design & color',
      'Unlimited platforms',
      'Dedicated team',
    ],
    cta: 'Talk to us',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent plans."
          subtitle="Choose the level of craft that matches your ambition. Every plan is fully managed."
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${i + 1} group relative flex flex-col rounded-3xl border p-8 transition-all duration-700 ease-smooth hover:-translate-y-1 ${
                plan.highlighted
                  ? 'glass-card border-primary/30 shadow-glass-lg lg:scale-[1.04]'
                  : 'glass-card border-navy/8 shadow-soft hover:shadow-glass'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-medium text-white shadow-glow">
                    Most popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold text-navy">{plan.name}</h3>
              <p className="mt-2 text-sm text-navy/50 font-light leading-relaxed min-h-[2.5rem]">
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold text-navy tracking-tightest">
                  {plan.price}
                </span>
                <span className="text-sm text-navy/40 font-light">{plan.cadence}</span>
              </div>

              <div className="my-7 h-px bg-navy/8" />

              <ul className="flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-navy/70">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${plan.highlighted ? 'text-primary' : 'text-navy/40'}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className={`group/btn mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3 text-sm font-medium transition-all duration-500 ease-smooth ${
                  plan.highlighted
                    ? 'bg-navy text-white hover:bg-primary hover:shadow-glow'
                    : 'glass border border-navy/10 text-navy hover:bg-white hover:shadow-soft'
                }`}
              >
                {plan.cta}
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-500 ease-smooth group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
