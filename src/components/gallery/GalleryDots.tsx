import type { ProjectImage } from "../../types/cv.ts";
import { GalleryDot } from "./GalleryDot.tsx";

type GalleryDotsProps = {
  images: ProjectImage[];
  index: number;
  onPick: (index: number) => void;
};

export const GalleryDots = ({ images, index, onPick }: GalleryDotsProps) => (
  <div className="flex justify-center gap-2">
    {images.map((image, n) => (
      <GalleryDot key={image.src} label={image.alt} active={n === index} onClick={() => onPick(n)} />
    ))}
  </div>
);
