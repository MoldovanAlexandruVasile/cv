type JobTitleProps = {
  title: string;
  company: string;
};

export const JobTitle = ({ title, company }: JobTitleProps) => (
  <span className="col-start-1 text-lg font-semibold">
    {title} <span className="font-normal text-muted">@ {company}</span>
  </span>
);
