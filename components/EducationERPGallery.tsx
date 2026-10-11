"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectGlimpse = {
  title: string;
  description: string;
  images: string[];
};

type SelectedImage = {
  glimpseIndex: number;
  imageIndex: number;
};

type EducationERPGalleryProps = {
  glimpses: ProjectGlimpse[];
};

export default function EducationERPGallery({ glimpses }: EducationERPGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedImage((current) => {
          if (!current) return current;
          const imageCount = glimpses[current.glimpseIndex].images.length;
          return {
            ...current,
            imageIndex: (current.imageIndex - 1 + imageCount) % imageCount,
          };
        });
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedImage((current) => {
          if (!current) return current;
          const imageCount = glimpses[current.glimpseIndex].images.length;
          return {
            ...current,
            imageIndex: (current.imageIndex + 1) % imageCount,
          };
        });
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [glimpses, selectedImage]);

  const changeImage = (direction: -1 | 1) => {
    setSelectedImage((current) => {
      if (!current) return current;
      const imageCount = glimpses[current.glimpseIndex].images.length;
      return {
        ...current,
        imageIndex: (current.imageIndex + direction + imageCount) % imageCount,
      };
    });
  };

  const activeGlimpse = selectedImage ? glimpses[selectedImage.glimpseIndex] : null;
  const activeImage = selectedImage
    ? glimpses[selectedImage.glimpseIndex]?.images[selectedImage.imageIndex]
    : undefined;

  return (
    <>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {glimpses.map((glimpse, glimpseIndex) => (
          <figure
            key={glimpse.title}
            className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900/60"
          >
            <div
              aria-label={`${glimpse.title} screenshots`}
              className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
            >
              {glimpse.images.length > 0 ? (
                glimpse.images.map((image, imageIndex) => (
                  <button
                    key={`${glimpse.title}-${imageIndex}`}
                    type="button"
                    aria-label={`Open ${glimpse.title} screenshot ${imageIndex + 1}`}
                    onClick={() => setSelectedImage({ glimpseIndex, imageIndex })}
                    className="relative aspect-video w-full shrink-0 snap-center bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
                  >
                    <Image
                      src={image}
                      alt={`${glimpse.title} screenshot ${imageIndex + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </button>
                ))
              ) : (
                <div className="flex aspect-video w-full shrink-0 snap-center items-center justify-center bg-slate-800">
                  <span className="px-4 text-center text-sm text-slate-400">
                    Add screenshots to this image list
                  </span>
                </div>
              )}
            </div>
            <figcaption className="p-4">
              <h3 className="font-semibold text-sky-300">{glimpse.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{glimpse.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {activeGlimpse && activeImage && selectedImage && (
        <div
          role="presentation"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label={`${activeGlimpse.title} screenshot viewer`}
            onClick={(event) => event.stopPropagation()}
            className="relative flex h-full max-h-[calc(100dvh-2rem)] w-full max-w-6xl flex-col"
          >
            <header className="flex items-center justify-between gap-4 pb-4 text-white">
              <div>
                <h2 className="font-semibold">{activeGlimpse.title}</h2>
                <p className="text-sm text-slate-300">
                  {selectedImage.imageIndex + 1} of {activeGlimpse.images.length}
                </p>
              </div>
              <button
                type="button"
                autoFocus
                aria-label="Close image viewer"
                onClick={() => setSelectedImage(null)}
                className="rounded-full p-2 text-2xl leading-none text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
              >
                &times;
              </button>
            </header>

            <div className="relative min-h-[200px] min-w-0 flex-1">
              <Image
                src={activeImage}
                alt={`${activeGlimpse.title} screenshot ${selectedImage.imageIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => changeImage(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 sm:left-4 sm:p-3"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor">
                  <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={() => changeImage(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 sm:right-4 sm:p-3"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor">
                  <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
