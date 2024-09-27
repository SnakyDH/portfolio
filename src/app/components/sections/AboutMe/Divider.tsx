import Image from "next/image";

export default function Divider() {
  return (
    <>
      <div className="flex items-center">
        <hr className="w-1/2 h-1 bg-primary rounded-full"></hr>
        <Image
          className=" mx-5 rounded-2xl"
          src="/images/icon.png"
          alt="Divider"
          width={70}
          height={70}
        />
        <hr className="w-1/2 h-1 bg-primary rounded-full"></hr>
      </div>
    </>
  );
}
