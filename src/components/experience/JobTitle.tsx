type JobTitleProps = {
  title: string;
  company: string;
};

// On phones the company drops to its own line instead of wrapping mid-name.
export const JobTitle = ({ title, company }: JobTitleProps) => (
  <span className="col-start-1 text-lg font-semibold max-md:text-base">
    {title} <span className="font-normal text-muted max-md:block max-md:text-sm">@ {company}</span>
  </span>
);
