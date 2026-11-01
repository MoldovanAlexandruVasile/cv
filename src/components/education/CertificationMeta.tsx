import { useTranslation } from "react-i18next";
import type { Certification } from "../../types/cv.ts";
import { CardTagline } from "../common/CardTagline.tsx";

type CertificationMetaProps = {
  certification: Certification;
};

export const CertificationMeta = ({ certification }: CertificationMetaProps) => {
  const { t } = useTranslation();

  return (
    <CardTagline>
      {certification.issuer} · {certification.platform ?? t("education.onlineCourse")}
      {certification.hours ? ` · ${t("education.hours", { count: certification.hours })}` : null}
    </CardTagline>
  );
};
