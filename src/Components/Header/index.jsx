import React, { useState } from "react";
import { ReactDOM } from "react-dom";
function Header() {
  //const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const data = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
    //todo add laboral experience
  ];
  return (
    <>
      <header className={"bg-green-600 w-auto sticky top-0"}>
        <nav className={"flex items-end justify-between flex-wrap p-6"}>
          <div className={"flex items-center flex-shrink-0 text-white mr-6"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>

            <span
              className={
                "font-semibold text-3xl tracking-tight mx-3 p-3 content"
              }
            >
              SnakyDH
            </span>
          </div>
          <div className={"block lg:hidden"}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={
                "flex items-center px-3 py-2 border rounded text-slate-100 border-slate-100"
              }
            >
              <svg
                className={"fill-current h-3 w-3"}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`text-center w-full flex-grow lg:flex lg:items-center lg:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div
              className={
                "text-sm lg:flex-grow lg:flex lg:justify-center lg:gap-20"
              }
            >
              {data.map((item) => {
                return (
                  <a
                    key={item.name}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={item.href}
                    className={
                      "text-xl block mt-4 lg:inline-block lg:mt-0  rounded p-3 text-slate-200 font-extrabold hover:bg-slate-200 hover:text-green-900 mr-4"
                    }
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export { Header };
