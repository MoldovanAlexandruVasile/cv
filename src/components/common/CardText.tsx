import type { ReactNode } from "react";

type CardTextProps = {
  children: ReactNode;
};

export const CardText = ({ children }: CardTextProps) => <p className="text-[15px] text-muted">{children}</p>;
