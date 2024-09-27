import IconSocialMedia from "./IconSocialMedia";

export default function SocialMediaGrid() {
  return (
    <div className="grid grid-cols-2 place-content-center place-items-center">
      <IconSocialMedia
        name="LinkedIn"
        url="https://www.linkedin.com/in/dangarciadh/"
        pathImage="/svg/linkedIn.svg"
      />
      <IconSocialMedia
        name="GitHub"
        url="https://www.github.com/SnakyDH"
        pathImage="/svg/github-mark.svg"
      />
    </div>
  );
}
