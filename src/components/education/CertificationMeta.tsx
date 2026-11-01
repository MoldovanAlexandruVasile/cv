import type { Certification } from "../../types/cv.ts";
import { CardTagline } from "../common/CardTagline.tsx";

type CertificationMetaProps = {
  certification: Certification;
};

export const CertificationMeta = ({ certification }: CertificationMetaProps) => (
  <CardTagline>
    {certification.issuer} · {certification.platform ?? "online course"}
    {certification.hours ? ` · ${certification.hours} hours` : null}
  </CardTagline>
);
