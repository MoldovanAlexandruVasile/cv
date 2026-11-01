import type { ReactNode } from "react";
import { SectionTitle } from "./SectionTitle.tsx";

type SectionHeaderProps = {
  title: string;
  aside?: ReactNode;
};

// With an aside (such as filters) the title and aside share a row.
export const SectionHeader = ({ title, aside }: SectionHeaderProps) =>
  aside ? (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <SectionTitle title={title} />
      {aside}
    </div>
  ) : (
    <SectionTitle title={title} />
  );
