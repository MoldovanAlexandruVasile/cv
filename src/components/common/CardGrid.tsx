import type { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
};

export const CardGrid = ({ children }: CardGridProps) => (
  <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 max-md:grid-cols-1">{children}</div>
);
