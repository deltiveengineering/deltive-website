import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { projects, getProjectBySlug } from '@/content/projects';
import { ProjectGallery, ProjectHeroMedia } from '@/components/project/ProjectMedia';

const siteUrl = 'https://deltiveengineering.com';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: `${project.shortDescription} A Deltive Engineering product development project.`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Deltive Engineering`,
      description: project.shortDescription,
      url: `${siteUrl}/projects/${project.slug}`,
      siteName: 'Deltive Engineering',
      images: [
        {
          url: project.images.cover,
          alt: `${project.title} by Deltive Engineering`,
        },
      ],
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Project Hero */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <ProjectHeroMedia title={project.title} cover={project.images.cover} gallery={project.images.gallery} />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-end h-full pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">{project.title}</h1>
            {project.client && (
              <p className="text-sm font-bold tracking-widest uppercase text-foreground/70">
                Client: {project.client}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-foreground/90">
              {project.fullDescription}
            </p>
          </div>

          {/* Project Gallery */}
          {project.images.gallery.length > 0 && (
            <ProjectGallery title={project.title} cover={project.images.cover} gallery={project.images.gallery} />
          )}

          <div className="pt-24 flex justify-between items-center border-t border-foreground/10">
            <Link 
              href="/our-projects"
              className="text-sm font-bold tracking-wider uppercase hover:text-foreground/70 transition-colors"
            >
              &larr; Back to Projects
            </Link>
            <Link 
              href="/get-a-quote"
              className="text-sm font-bold tracking-wider uppercase hover:text-foreground/70 transition-colors"
            >
              Start a Project &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
