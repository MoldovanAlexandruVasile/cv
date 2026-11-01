type ContactMenuHeaderProps = {
  email: string;
};

export const ContactMenuHeader = ({ email }: ContactMenuHeaderProps) => (
  <p className="mb-1 border-b border-line px-3 py-2 text-[13px] text-muted">{email}</p>
);
