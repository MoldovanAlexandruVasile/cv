import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
};

const TITLE = "mb-2 text-[32px] font-bold";

export const Section = ({ id, title, aside, children }: SectionProps) => (
  <section id={id} className="border-t border-line py-14">
    {aside ? (
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className={TITLE}>{title}</h2>
        {aside}
      </div>
    ) : (
      <h2 className={TITLE}>{title}</h2>
    )}
    {children}
  </section>
);
