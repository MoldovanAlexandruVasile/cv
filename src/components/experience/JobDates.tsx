type JobDatesProps = {
  start: string;
  end: string;
};

export const JobDates = ({ start, end }: JobDatesProps) => (
  <span className="font-mono text-xs font-medium text-accent">
    {start} – {end}
  </span>
);
