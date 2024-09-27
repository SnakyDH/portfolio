"use client";
import { useEffect, useState } from "react";
import { Author } from "../../../lib/Author";
import Image from "next/image";
import Divider from "./Divider";
import SocialMediaGrid from "../../socialMedia/SocialMediaGrid";

export default function AboutMe() {
  const [title, setTitle] = useState<string>(Author.titles[0]);

  useEffect(() => {
    const titles = Author.titles;
    let index = 1;
    const interval = setInterval(() => {
      setTitle(titles[index]);
      index = (index + 1) % titles.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex flex-col lg:flex-row items-center md:justify-center gap-4 lg:gap-44">
      <Image
        src="/images/daniel.jpg"
        width={300}
        height={300}
        alt={Author.name}
        objectFit="cover"
        className="rounded-3xl lg:hidden block"
      />
      <Image
        src="/images/daniel.jpg"
        width={400}
        height={400}
        alt={Author.name}
        objectFit="cover"
        className="rounded-3xl hidden lg:block"
      />
      <main className="flex flex-col lg:gap-7 gap-3">
        <h1 className="text-onBackground lg:text-4xl md:text-3xl text-xl font-bold text-center">
          {Author.name}
        </h1>
        <Divider />
        <h2 className="text-onBackground lg:text-2xl md:text-xl text-md font-semibold text-center ">
          {title.split(" ").map((word, index) =>
            index % 2 === 0 ? (
              <span key={index} className="text-primary">
                {word + " "}
              </span>
            ) : (
              <span key={index} className="text-onPrimary">
                {word}
              </span>
            )
          )}
        </h2>
        <SocialMediaGrid />
      </main>
    </section>
  );
}
