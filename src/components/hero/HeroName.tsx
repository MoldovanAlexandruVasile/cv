type HeroNameProps = {
  name: string;
};

export const HeroName = ({ name }: HeroNameProps) => {
  const [first, ...rest] = name.split(" ");

  return (
    <h1 className="text-[clamp(44px,8vw,84px)] font-bold">
      {first}
      <br />
      <span className="text-accent">{rest.join(" ")}</span>
    </h1>
  );
};
