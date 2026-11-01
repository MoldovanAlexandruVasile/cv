import type { ProjectImage } from "../../types/cv.ts";
import { classNames } from "../../utils/classNames.ts";

type GallerySlidesProps = {
  images: ProjectImage[];
  index: number;
};

// All slides are stacked; only the current one is visible, so switching cross-fades.
export const GallerySlides = ({ images, index }: GallerySlidesProps) =>
  images.map((image, n) => (
    <img
      key={image.src}
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className={classNames(
        "absolute inset-0 size-full object-cover transition-opacity duration-350",
        n === index ? "opacity-100" : "opacity-0",
      )}
    />
  ));
