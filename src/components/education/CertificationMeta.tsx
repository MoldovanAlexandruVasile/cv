import { CARD_TAGLINE } from "../../styles/ui.ts";
import type { Certification } from "../../types/cv.ts";

type CertificationMetaProps = {
  certification: Certification;
};

export const CertificationMeta = ({ certification }: CertificationMetaProps) => (
  <p className={CARD_TAGLINE}>
    {certification.issuer} · {certification.platform ?? "online course"}
    {certification.hours ? ` · ${certification.hours} hours` : null}
  </p>
);
