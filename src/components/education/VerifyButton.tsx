import { ACTIONS } from "../../styles/ui.ts";
import { ExternalButton } from "../common/ExternalButton.tsx";

type VerifyButtonProps = {
  url: string;
};

export const VerifyButton = ({ url }: VerifyButtonProps) => (
  <div className={`${ACTIONS} justify-center pt-4`}>
    <ExternalButton href={url}>Verify certificate ↗</ExternalButton>
  </div>
);
