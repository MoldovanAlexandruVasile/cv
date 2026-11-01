type HeroRoleProps = {
  role: string;
};

export const HeroRole = ({ role }: HeroRoleProps) => <p className="mt-5 mb-2 text-xl font-semibold">{role}</p>;
