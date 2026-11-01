import type { MailOption } from "../../types/mail.ts";
import { isMailto } from "../../utils/mailOptions.ts";
import { MENU_ITEM } from "./menuItem.ts";

type MailOptionLinkProps = {
  option: MailOption;
  onPick: () => void;
};

export const MailOptionLink = ({ option, onPick }: MailOptionLinkProps) => (
  <a
    role="menuitem"
    className={MENU_ITEM}
    href={option.href}
    target={isMailto(option.href) ? undefined : "_blank"}
    rel="noreferrer"
    onClick={onPick}
  >
    Write with {option.label}
  </a>
);
