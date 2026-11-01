type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => <h2 className="mb-2 text-[32px] font-bold max-md:text-[28px]">{title}</h2>;
