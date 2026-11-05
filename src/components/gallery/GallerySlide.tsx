import type { ProjectImage } from "../../types/cv.ts";
import { cx } from "@moldovanalexandruvasile/unity-marketing";

type GallerySlideProps = {
  image: ProjectImage;
  visible: boolean;
};

export const GallerySlide = ({ image, visible }: GallerySlideProps) => (
  <img
    src={image.src}
    alt={image.alt}
    loading="lazy"
    className={cx(
      "absolute inset-0 size-full object-cover transition-opacity duration-350",
      visible ? "opacity-100" : "opacity-0",
    )}
  />
);
