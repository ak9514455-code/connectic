import { useState, type FormEvent } from 'react';
import { Mail, MessageCircle, Calendar, ArrowUpRight, Send } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const channels = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@connectic.studio',
      href: 'mailto:hello@connectic.studio',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat with us instantly',
      href: 'https://wa.me/10000000000',
    },
    {
      icon: Calendar,
      label: 'Book a Call',
      value: 'Schedule a 30-min intro',
      href: '#contact',
    },
  ];

  return (
    <section id="contact" className="relative py-32 sm:py-40 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-softblue/12 blur-[130px]" />

      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's create <span className="text-gradient">together.</span>
            </>
          }
          subtitle="Tell us about your project. We'll get back to you within 24 hours."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-5">
          {/* Channels */}
          <div className="reveal lg:col-span-2 flex flex-col gap-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                onClick={(e) => {
                  if (channel.href === '#contact') e.preventDefault();
                }}
                className="group flex items-center gap-4 rounded-2xl glass-card border border-navy/8 p-5 transition-all duration-500 ease-smooth hover:shadow-glass hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                  <channel.icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-navy">{channel.label}</p>
                  <p className="text-sm text-navy/45 font-light">{channel.value}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-navy/30 transition-all duration-500 ease-smooth group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2 lg:col-span-3">
            <div className="rounded-3xl glass-card border border-navy/8 shadow-glass p-8 sm:p-10">
              {submitted ? (
                <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <Send size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-navy">Message sent.</h3>
                  <p className="mt-3 text-navy/50 font-light max-w-sm">
                    Thank you, {form.name || 'there'}. We'll be in touch within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', message: '' });
                    }}
                    className="mt-6 text-sm font-medium text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Field
                    label="Name"
                    id="name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Your name"
                    required
                  />
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="you@email.com"
                    required
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy/70 mb-2"
                    >
                      Project details
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your content, goals, and timeline…"
                      className="w-full resize-none rounded-2xl border border-navy/10 bg-white/60 px-5 py-4 text-navy placeholder:text-navy/30 outline-none transition-all duration-300 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-medium text-white transition-all duration-500 ease-smooth hover:bg-primary hover:shadow-glow"
                  >
                    Send message
                    <Send
                      size={16}
                      className="transition-transform duration-500 ease-smooth group-hover:translate-x-0.5"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function Field({ label, id, value, onChange, placeholder, type = 'text', required }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy/70 mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-navy/10 bg-white/60 px-5 py-4 text-navy placeholder:text-navy/30 outline-none transition-all duration-300 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
      />
    </div>
  );
}
