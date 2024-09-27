import Image from "next/image";

type IconSocialMediaPros = {
  name: string;
  url: string;
  pathImage: string;
};

export default function IconSocialMedia({
  name,
  url,
  pathImage,
}: IconSocialMediaPros) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="bg-white rounded-2xl p-2"
    >
      <Image src={pathImage} width={40} height={40} alt={name} />
    </a>
  );
}
