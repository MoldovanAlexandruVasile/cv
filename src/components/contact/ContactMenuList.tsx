import { buildMailOptions } from "../../utils/mailOptions.ts";
import { ContactMenuHeader } from "./ContactMenuHeader.tsx";
import { CopyEmailButton } from "./CopyEmailButton.tsx";
import { MailOptionLink } from "./MailOptionLink.tsx";

type ContactMenuListProps = {
  email: string;
  onPick: () => void;
};

export const ContactMenuList = ({ email, onPick }: ContactMenuListProps) => (
  <div
    className="absolute top-[calc(100%+8px)] left-0 z-5 grid min-w-60 rounded-xl border border-line bg-surface p-1.5 shadow-card"
    role="menu"
  >
    <ContactMenuHeader email={email} />
    {buildMailOptions(email).map((option) => (
      <MailOptionLink key={option.label} option={option} onPick={onPick} />
    ))}
    <CopyEmailButton email={email} />
  </div>
);
