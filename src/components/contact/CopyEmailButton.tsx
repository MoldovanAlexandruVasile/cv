import { useTranslation } from "react-i18next";
import { useCopyFeedback } from "../../hooks/useCopyFeedback.ts";
import { MENU_ITEM } from "./menuItem.ts";

type CopyEmailButtonProps = {
  email: string;
};

export const CopyEmailButton = ({ email }: CopyEmailButtonProps) => {
  const { t } = useTranslation();
  const [copied, copy] = useCopyFeedback();

  return (
    <button role="menuitem" className={MENU_ITEM} onClick={() => copy(email)}>
      {copied ? t("contact.copied") : t("contact.copy")}
    </button>
  );
};
