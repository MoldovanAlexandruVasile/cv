type JobPointsProps = {
  points: string[];
};

export const JobPoints = ({ points }: JobPointsProps) => (
  <ul className="list-disc space-y-1.5 pl-[18px] text-muted">
    {points.map((point) => (
      <li key={point}>{point}</li>
    ))}
  </ul>
);
