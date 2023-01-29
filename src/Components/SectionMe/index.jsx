import React from "react";
import { BtnCV } from "../ButtonCV";
import { CardPrincipal } from "./CardAboutMe";
function SectionMe() {
  return (
    <section id="Home" className="sm:p-5 p-10 h-full">
      <div className="grid grid-cols-7 justify-center xl:gap-20 mx-10 sm:px-10">
        <div className="col-span-full xl:col-span-3 flex justify-center self-center">
          <div className="flex flex-col gap-2">
            <CardPrincipal />
            <BtnCV />
          </div>
        </div>
        <div className="col-span-4 xl:flex self-center hidden h-2/3">
          <img
            className="justify-center object-contain w-full"
            src="/peopleSVG/me-green.svg"
            alt=""
          />
          {/* <img src="/peopleSVG/cat.svg" alt="" /> */}
        </div>
      </div>
    </section>
  );
}
export { SectionMe };
