import type { ProjectImage } from "../../types/cv.ts";
import { classNames } from "../../utils/classNames.ts";

type GalleryDotsProps = {
  images: ProjectImage[];
  index: number;
  onPick: (index: number) => void;
};

export const GalleryDots = ({ images, index, onPick }: GalleryDotsProps) => (
  <div className="flex justify-center gap-2">
    {images.map((image, n) => (
      <button
        key={image.src}
        className={classNames(
          "h-2 rounded-full transition-[width,background-color] duration-200",
          n === index ? "w-6 bg-accent" : "w-2 bg-line",
        )}
        onClick={() => onPick(n)}
        aria-label={`Show ${image.alt}`}
      />
    ))}
  </div>
);
