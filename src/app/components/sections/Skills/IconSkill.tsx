import Image from "next/image";
export function IconSkill() {
  return (
    <div className="flex flex-col items-center">
      <Image
        className=" rounded-2xl"
        src="/images/icon.png"
        alt="Divider"
        width={70}
        height={70}
      />
      <span className="text-onBackground mt-2">Skills</span>
    </div>
  );
}
