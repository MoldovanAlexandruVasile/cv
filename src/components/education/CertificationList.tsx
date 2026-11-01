import { certifications } from "../../data/certifications.ts";
import { CertificationCard } from "./CertificationCard.tsx";

export const CertificationList = () =>
  certifications.map((certification) => (
    <CertificationCard key={certification.id} certification={certification} />
  ));
