import React from "react";

function Footer() {
  return (
    <>
      <hr className="bg-green-600 p-3" />
      <footer className={"bg-blue-section h-80"}>
        <div>
          <h2
            className={"text-white text-center text-4xl font-extrabold pt-10"}
          >
            Daniel García Romero
          </h2>
        </div>
        <div className={"flex justify-around pt-10"}>
          <div>
            <img
              className={"rounded-full w-16 sm:w-28 invert hover:invert-0"}
              src={"/public/socialMediaSVG/github.svg"}
              alt={"github"}
            />
            <p className={"py-3 text-white text-center"}>GitHub</p>
          </div>
          <div>
            <img
              className={"rounded-full w-16 sm:w-28 invert hover:invert-0"}
              src="/public/socialMediaSVG/email.svg"
              alt={"Linkedin"}
            />
            <p className={"py-3 text-white text-center"}>LinkedIn</p>
          </div>
          <div>
            <img
              className={"rounded-full w-16 sm:w-28 invert hover:invert-0"}
              src="/public/socialMediaSVG/linkedin.svg"
              alt={"Linkedin"}
            />
            <p className={"py-3 text-white text-center"}>Email</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export { Footer };
