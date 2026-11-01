import type { ReactNode } from "react";

type CardTaglineProps = {
  children: ReactNode;
};

export const CardTagline = ({ children }: CardTaglineProps) => <p className="mt-1.5 mb-3 font-medium">{children}</p>;
