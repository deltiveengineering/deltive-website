"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";

type ProjectMediaProps = {
  title: string;
  cover: string;
  gallery: string[];
};

function GalleryDialog({
  images,
  title,
  activeIndex,
  onClose,
  onNavigate,
}: {
  images: string[];
  title: string;
  activeIndex: number;
  onClose: () => void;
  onNavigate: (direction: -1 | 1) => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onNavigate(-1);
      if (event.key === "ArrowRight") onNavigate(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 text-white">
      <button
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute right-5 top-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={() => onNavigate(-1)}
        className="absolute left-4 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-8 md:h-14 md:w-14"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        aria-label="Next image"
        onClick={() => onNavigate(1)}
        className="absolute right-4 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8 md:h-14 md:w-14"
      >
        <ArrowRight className="h-6 w-6" />
      </button>

      <div className="flex h-full flex-col">
        <div className="flex min-h-0 flex-1 items-center justify-center px-16 py-20 md:px-28">
          <div className="relative h-full w-full max-w-6xl">
            <Image
              src={images[activeIndex]}
              alt={`${title} image ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/75">
          <span>{activeIndex + 1}</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span>{images.length}</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectHeroMedia({ title, cover, gallery }: ProjectMediaProps) {
  const images = useMemo(() => [cover, ...gallery], [cover, gallery]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navigate = (direction: -1 | 1) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + direction + images.length) % images.length;
    });
  };

  return (
    <>
      <button
        type="button"
        aria-label={`Open ${title} gallery`}
        onClick={() => setActiveIndex(0)}
        className="absolute inset-0 z-0 cursor-zoom-in overflow-hidden bg-foreground/5 text-left dark:bg-background"
      >
        <Image src={cover} alt={title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </button>

      {activeIndex !== null && (
        <GalleryDialog
          images={images}
          title={title}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={navigate}
        />
      )}
    </>
  );
}

export function ProjectGallery({ title, cover, gallery }: ProjectMediaProps) {
  const images = useMemo(() => [cover, ...gallery], [cover, gallery]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navigate = (direction: -1 | 1) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + direction + images.length) % images.length;
    });
  };

  return (
    <>
      <div className={`grid grid-cols-1 ${images.length > 1 ? "md:grid-cols-2" : ""} gap-8 pt-12 border-t border-foreground/10`}>
        {images.map((galleryImage, index) => (
          <button
            key={galleryImage}
            type="button"
            aria-label={`Open ${title} image ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-foreground/5 text-left"
          >
            <Image
              src={galleryImage}
              alt={`${title} image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {index === 0 && (
              <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Cover
              </span>
            )}
            <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <GalleryDialog
          images={images}
          title={title}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={navigate}
        />
      )}
    </>
  );
}
