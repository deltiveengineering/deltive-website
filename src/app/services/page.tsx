import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/content/services';
import { siteCopy } from '@/content/site-copy';
import { ArrowRight, CheckCircle2, Cog, Factory, PenTool, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'We design, engineer and industrialize end to end.',
};

const serviceIcons: Record<string, React.ReactNode> = {
  strategy: <Target className="h-7 w-7" />,
  design: <PenTool className="h-7 w-7" />,
  engineering: <Cog className="h-7 w-7" />,
  manufacturing: <Factory className="h-7 w-7" />,
};

const processSteps = [
  'Define the brief',
  'Shape the concept',
  'Engineer the details',
  'Prepare production',
];

export default function ServicesPage() {
  const copy = siteCopy.services;

  return (
    <div className="flex w-full flex-col bg-background">
      <section className="relative min-h-[78vh] overflow-hidden bg-black px-6 pb-20 pt-40 text-white lg:px-8">
        <Image
          src="/images/brand_assets/cinematics/Production_broll_image_milling.jpg"
          alt="Deltive product development workshop"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/72 to-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-end">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brand">
            Change that works
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Product development from first direction to production-ready detail.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
            Strategy, design, engineering and manufacturing support in one focused workflow for physical products, prototypes and technical installations.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 pb-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 border-t border-white/12 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="border-b border-white/12 py-8 md:border-b-0 md:border-r md:px-7 last:md:border-r-0">
              <p className="mb-5 text-sm font-bold text-brand">0{index + 1}</p>
              <h2 className="text-xl font-semibold tracking-tight">{step}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand">
              {copy.header.title}
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Four connected services, one disciplined product path.
            </h2>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <article
                key={service.id}
                className={`grid grid-cols-1 gap-8 rounded-lg border p-7 md:grid-cols-12 md:p-10 ${
                  index % 2 === 0
                    ? 'border-foreground/10 bg-foreground/[0.025]'
                    : 'border-black bg-black text-white'
                }`}
              >
                <div className="md:col-span-4">
                  <div className={`mb-8 inline-flex h-14 w-14 items-center justify-center rounded-lg ${
                    index % 2 === 0 ? 'bg-brand/10 text-brand' : 'bg-white/10 text-brand'
                  }`}>
                    {serviceIcons[service.id]}
                  </div>
                  <p className={`mb-3 text-sm font-bold ${index % 2 === 0 ? 'text-foreground/35' : 'text-white/35'}`}>
                    0{index + 1}
                  </p>
                  <h3 className="text-3xl font-bold tracking-tight">{service.title}</h3>
                </div>

                <div className="md:col-span-8">
                  <p className={`text-xl leading-8 ${index % 2 === 0 ? 'text-foreground/72' : 'text-white/72'}`}>
                    {service.detail}
                  </p>

                  <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium ${
                          index % 2 === 0
                            ? 'border-foreground/10 bg-background text-foreground/70'
                            : 'border-white/12 bg-white/5 text-white/72'
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 rounded-lg bg-foreground p-8 text-background md:grid-cols-12 md:p-12">
          <div className="md:col-span-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand">
              {copy.ctaLayer.tagline}
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              {copy.ctaLayer.title}
            </h2>
            <p className="mt-5 max-w-2xl text-background/60">
              Share the idea, constraints, target quantity or prototype goal. We will help translate it into a practical next step.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground transition-all hover:bg-background/90"
            >
              {copy.ctaLayer.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
