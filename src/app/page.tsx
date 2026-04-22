import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { siteCopy } from "@/content/site-copy";
import { Target, PenTool, Cog, Factory, ArrowRight, ChevronDown } from 'lucide-react';

const clientLogos = [
  { src: '/images/brand_assets/client logos/53b11647-924c-4362-b21b-e0aff940a538 (1).png', alt: 'Client 1' },
  { src: '/images/brand_assets/client logos/b0a0b6b8-1b1f-4ced-bbcc-af97407c17db (1).png', alt: 'Client 2' },
  { src: '/images/brand_assets/client logos/Ontwerp zonder titel (9) (1).png', alt: 'Client 3' },
  { src: '/images/brand_assets/client logos/Ontwerp zonder titel (10) (1).png', alt: 'Client 4' },
  { src: '/images/brand_assets/client logos/1776845894487.png', alt: 'Client 5' },
  { src: '/images/brand_assets/client logos/Ontwerp zonder titel (14) (1).png', alt: 'Client 6' },
  { src: '/images/brand_assets/client logos/RUben (1) (1).png', alt: 'Client 7' },
];

const serviceIcons: Record<string, React.ReactNode> = {
  strategy: <Target className="h-7 w-7" />,
  design: <PenTool className="h-7 w-7" />,
  engineering: <Cog className="h-7 w-7" />,
  manufacturing: <Factory className="h-7 w-7" />,
};

export default function Home() {
  const allProjects = projects;
  const copy = siteCopy.home;

  return (
    <div className="flex flex-col w-full">

      {/* HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/scraped/image-00.jpg"
            alt="Engineering workstation"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
          {/* Layered overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
        </div>

        {/* Hero content */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
          {/* Tagline */}
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/50 mb-6 animate-fade-in-delay-1">
            A-Z Product Development
          </p>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-8 animate-fade-in-delay-2">
            <span className="text-brand font-bold">Change</span> that works
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed mb-10 animate-fade-in-delay-3">
            We design, engineer and industrialize end to end - from first sketch to factory floor.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
            <Link
              href="/our-projects"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide text-white bg-brand rounded-full hover:bg-brand/90 transition-all duration-300 shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5"
            >
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/40" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold tracking-wider uppercase mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {copy.about.tagline}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">
                {copy.about.title}
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed mb-8">
                {copy.about.paragraph}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand/80 transition-colors group"
              >
                Explore our capabilities
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/brand_assets/cinematics/Production_broll_image_milling.jpg" alt="Deltive engineering workshop" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-xl p-5 border border-foreground/5 hidden md:block">
                <p className="text-3xl font-bold text-brand">A-Z</p>
                <p className="text-xs text-foreground/50 font-medium mt-1">Full-cycle development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold tracking-wider uppercase mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {copy.services.tagline}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight whitespace-pre-line">{copy.services.title}</h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand/80 transition-colors group">
              {copy.services.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="group relative bg-background p-8 rounded-2xl border border-foreground/5 hover:border-brand/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-6 transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand/20">
                  {serviceIcons[service.id]}
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight">{service.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">{service.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand/0 via-brand to-brand/0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold tracking-wider uppercase mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Portfolio
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{copy.projects.title}</h2>
            </div>
            <Link href="/our-projects" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand/80 transition-colors group">
              {copy.projects.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={project.images.cover}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="inline-flex items-center gap-2 text-white text-sm font-semibold">
                      View project <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1.5 group-hover:text-brand transition-colors duration-300">{project.title}</h3>
                <p className="text-foreground/50 text-sm line-clamp-2 leading-relaxed">{project.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-black overflow-hidden">
        <div className="mb-14 px-6 text-center">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-white/45 md:text-base">
            Trusted by innovative teams
          </p>
        </div>
        <div className="relative w-full">
          <div className="flex w-max animate-logo-marquee">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0 gap-16 pr-16 md:gap-28 md:pr-28">
                {clientLogos.map((logo, i) => (
                  <div
                    key={`${group}-${logo.src}-${i}`}
                    className="relative h-24 w-64 shrink-0 opacity-70 grayscale transition-opacity duration-300 hover:opacity-100 md:h-28 md:w-80"
                  >
                    <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="320px" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY HERO */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/brand_assets/cinematics/Production_broll_image_milling.jpg"
          alt="CNC milling production"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/40 mb-4">From concept to production</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Precision at <span className="text-brand">every</span> stage
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-foreground text-background">
        <div className="max-w-3xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/50 text-xs font-bold tracking-wider uppercase mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {copy.inquiries.tagline}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {copy.inquiries.title}
          </h2>
          <p className="text-lg text-background/50 mb-10 max-w-lg mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24 hours with a tailored proposal.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-foreground bg-background rounded-full hover:bg-background/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            {copy.inquiries.cta}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
