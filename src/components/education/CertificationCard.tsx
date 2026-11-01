import type { Certification } from "../../types/cv.ts";
import { Card } from "../common/Card.tsx";
import { KindLabel } from "../common/KindLabel.tsx";
import { CertificateThumbnail } from "./CertificateThumbnail.tsx";
import { CertificationMeta } from "./CertificationMeta.tsx";
import { VerifyButton } from "./VerifyButton.tsx";

type CertificationCardProps = {
  certification: Certification;
};

export const CertificationCard = ({ certification }: CertificationCardProps) => (
  <Card>
    <KindLabel>{certification.date}</KindLabel>
    <h3 className="mt-1.5 text-xl font-bold">{certification.name}</h3>
    <CertificationMeta certification={certification} />
    {certification.image && (
      <CertificateThumbnail name={certification.name} image={certification.image} url={certification.url} />
    )}
    {certification.url && <VerifyButton url={certification.url} />}
  </Card>
);
