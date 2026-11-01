import type { ProjectImage } from "../../types/cv.ts";
import { GallerySlide } from "./GallerySlide.tsx";

type GallerySlidesProps = {
  images: ProjectImage[];
  index: number;
};

// All slides are stacked; only the current one is visible, so switching cross-fades.
export const GallerySlides = ({ images, index }: GallerySlidesProps) =>
  images.map((image, n) => <GallerySlide key={image.src} image={image} visible={n === index} />);
