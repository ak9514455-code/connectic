import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto text-center' : 'text-left'} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <p className="reveal text-xs font-medium uppercase tracking-[0.22em] text-primary/70 mb-6">
          {eyebrow}
        </p>
      )}
      <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl md:text-6xl font-semibold text-navy tracking-tightest text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="reveal reveal-delay-2 mt-6 text-lg sm:text-xl text-navy/55 font-light leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
