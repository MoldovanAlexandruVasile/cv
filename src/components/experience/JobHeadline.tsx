type JobHeadlineProps = {
  headline: string;
};

export const JobHeadline = ({ headline }: JobHeadlineProps) => (
  <span className="col-start-1 text-sm text-muted">{headline}</span>
);
