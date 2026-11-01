type HeroNameProps = {
  name: string;
};

// The first line never breaks, so "Alexandru-Vasile" can't split at its hyphen;
// the font scales with the screen so it still fits on small phones.
export const HeroName = ({ name }: HeroNameProps) => {
  const [first, ...rest] = name.split(" ");

  return (
    <h1 className="text-[clamp(30px,9.4vw,84px)] font-bold">
      <span className="whitespace-nowrap">{first}</span>
      <br />
      <span className="text-accent">{rest.join(" ")}</span>
    </h1>
  );
};
