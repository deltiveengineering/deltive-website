import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const siteUrl = "https://deltiveengineering.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/our-projects", changeFrequency: "monthly", priority: 0.85 },
    { path: "/get-a-quote", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  ] as const;

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
    images: [project.images.cover, ...project.images.gallery].map((image) => `${siteUrl}${image}`),
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...projectRoutes,
  ];
}
