import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/content/projects';
import { siteCopy } from '@/content/site-copy';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Deltive Engineering projects in product design, mechanical engineering, prototyping and manufacturing-ready product development.',
  alternates: {
    canonical: '/our-projects',
  },
};

export default function OurProjectsPage() {
  const copy = siteCopy.ourProjects;

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="pt-44 pb-16 px-6 lg:px-8 bg-foreground/5 md:pt-52">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{copy.header.title}</h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            {copy.header.subtitle}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.slug}`} className="group block">
                <div className="aspect-[4/3] bg-foreground/5 rounded-2xl overflow-hidden mb-6 relative">
                  <Image src={project.images.cover} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h2>
                <p className="text-foreground/60 line-clamp-3">
                  {project.fullDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
