type HeroSummaryProps = {
  summary: string;
};

export const HeroSummary = ({ summary }: HeroSummaryProps) => (
  <p className="max-w-[640px] text-lg text-muted max-md:text-base">{summary}</p>
);
