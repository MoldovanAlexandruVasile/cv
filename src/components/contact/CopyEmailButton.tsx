import { useCopyFeedback } from "../../hooks/useCopyFeedback.ts";
import { MENU_ITEM } from "./menuItem.ts";

type CopyEmailButtonProps = {
  email: string;
};

export const CopyEmailButton = ({ email }: CopyEmailButtonProps) => {
  const [copied, copy] = useCopyFeedback();

  return (
    <button role="menuitem" className={MENU_ITEM} onClick={() => copy(email)}>
      {copied ? "Copied ✓" : "Copy address"}
    </button>
  );
};
