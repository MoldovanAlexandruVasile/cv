type HeroLocationProps = {
  location: string;
};

export const HeroLocation = ({ location }: HeroLocationProps) => (
  <p className="mb-4 font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-accent">{location}</p>
);
