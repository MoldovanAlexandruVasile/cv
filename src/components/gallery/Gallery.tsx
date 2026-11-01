import { useCarousel } from "../../hooks/useCarousel.ts";
import type { ProjectImage } from "../../types/cv.ts";
import { GalleryArrow } from "./GalleryArrow.tsx";
import { GalleryDots } from "./GalleryDots.tsx";
import { GallerySlides } from "./GallerySlides.tsx";

type GalleryProps = {
  images: ProjectImage[];
};

export const Gallery = ({ images }: GalleryProps) => {
  const { index, next, previous, goTo } = useCarousel(images.length);

  return (
    <div className="flex flex-col justify-center gap-3 bg-page p-5">
      <div className="group relative aspect-[16/10] overflow-hidden rounded-[10px] shadow-card">
        <GallerySlides images={images} index={index} />
        <GalleryArrow direction="prev" onClick={previous} />
        <GalleryArrow direction="next" onClick={next} />
      </div>
      <GalleryDots images={images} index={index} onPick={goTo} />
    </div>
  );
};
