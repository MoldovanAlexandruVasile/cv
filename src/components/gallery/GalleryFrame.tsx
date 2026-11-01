import type { ReactNode } from "react";

type GalleryFrameProps = {
  children: ReactNode;
};

// `group` lets the arrows inside appear when the frame is hovered.
export const GalleryFrame = ({ children }: GalleryFrameProps) => (
  <div className="group relative aspect-[16/10] overflow-hidden rounded-[10px] shadow-card">{children}</div>
);
