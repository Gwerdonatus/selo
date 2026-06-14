"use client";

import Image from "next/image";

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroProps {
  images: HeroImage[];
}

export default function Hero({ images }: HeroProps) {
  return (
    <section className="w-full px-8 pb-8">
      <div className="flex justify-center gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full max-w-[420px] aspect-[3/4] bg-purple-950 overflow-hidden rounded-2xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
