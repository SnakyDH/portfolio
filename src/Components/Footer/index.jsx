import React from "react";

function Footer() {
  return (
    <>
      <hr className="bg-green-600 p-3" />
      {
        //todo fix background image error
      }
      <footer className={"text-white h-full w-full"}>
        <div>
          <h2 className={"text-center text-4xl font-extrabold pt-10"}>
            Daniel García Romero
          </h2>
        </div>
        <div className={"flex justify-around pt-10"}>
          <div>
            <img
              className={
                "rounded-full w-16 sm:w-28 invert hover:invert-0 hover:shadow-xl hover:shadow-slate-500"
              }
              src={"/socialMediaSVG/github.svg"}
              alt={"github"}
            />
            <p className={"py-3 text-center"}>GitHub</p>
          </div>
          <div>
            <img
              className={
                "bg-slate-200 rounded-full w-16 sm:w-28 invert hover:invert-0 hover:shadow-xl hover:shadow-rose-600"
              }
              src="/socialMediaSVG/email.svg"
              alt={"email"}
            />
            <p className={"py-3 text-center"}>Email</p>
          </div>
          <div>
            <img
              className={
                "rounded-full w-16 sm:w-28 invert hover:invert-0 hover:shadow-xl hover:shadow-blue-500"
              }
              src="/socialMediaSVG/linkedin.svg"
              alt={"Linkedin"}
            />
            <p className={"py-3 text-center font-bold rounded-lg"}>LinkedIn</p>
          </div>
        </div>
        <p className="text-center py-5">
          Made With ❤ by
          <a href="https://github.com/SnakyDH/portfolio" target={"_blank"}>
            {" SnakyDH"}
          </a>
        </p>
      </footer>
    </>
  );
}
export { Footer };
