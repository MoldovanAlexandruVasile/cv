type StatItemProps = {
  value: string;
  label: string;
};

export const StatItem = ({ value, label }: StatItemProps) => (
  <div>
    <dt className="text-4xl font-bold">{value}</dt>
    <dd className="text-sm text-muted">{label}</dd>
  </div>
);
