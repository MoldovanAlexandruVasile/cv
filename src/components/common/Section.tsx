import type { ReactNode } from "react";
import { SectionHeader } from "./SectionHeader.tsx";

type SectionProps = {
  id: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
};

export const Section = ({ id, title, aside, children }: SectionProps) => (
  <section id={id} className="border-t border-line py-14">
    <SectionHeader title={title} aside={aside} />
    {children}
  </section>
);
