import { useTranslation } from "react-i18next";

type CertificateThumbnailProps = {
  name: string;
  image: string;
  url?: string;
};

// mt-auto pins the image (and the button after it) to the bottom of the card,
// so thumbnails line up across cards with titles of different lengths.
export const CertificateThumbnail = ({ name, image, url }: CertificateThumbnailProps) => {
  const { t } = useTranslation();

  return (
    <a
      className="mt-auto block overflow-hidden rounded-[10px] border border-line"
      href={url ?? image}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="block aspect-[1600/1190] w-full object-cover"
        src={image}
        alt={t("education.certificateAlt", { name })}
        loading="lazy"
      />
    </a>
  );
};
