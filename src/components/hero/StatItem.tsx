type StatItemProps = {
  value: string;
  label: string;
};

export const StatItem = ({ value, label }: StatItemProps) => (
  <div>
    <dt className="text-4xl font-bold max-md:text-3xl">{value}</dt>
    <dd className="text-sm text-muted max-md:mt-1 max-md:text-xs max-md:leading-snug">{label}</dd>
  </div>
);
