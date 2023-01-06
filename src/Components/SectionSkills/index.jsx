import React from "react";

function SectionSkills() {
  const urlSVG = "/public/tecnologiesSVG/";
  const tecnologiesFront = [
    "html.svg",
    "css.svg",
    "bootstrap.svg",
    "tailwind.svg",
    "jquery.svg",
    "js.svg",
    "react.svg",
    "vite.svg",
  ];
  const tecnologiesBack = [
    "node-js.svg",
    "express.svg",
    "socket-io.svg",
    "jwt.svg",
    "linux.svg",
    "docker.svg",
    "insomnia.svg",
    "mongo.svg",
    "mysql.svg",
    "postgresql.svg",
  ];
  const tecnologiesTransversal = [
    "npm.svg",
    "intellij-idea.svg",
    "vscode.svg",
    "jira.svg",
    "notion.svg",
    "todoist.svg",
  ];

  return (
    <section className={"bg-blue-section h-full py-10"}>
      <h2 className={"text-3xl font-bold text-slate-100 py-3 text-center"}>
        Full Stack Skills
      </h2>
      <h3 className="text-2xl text-slate-100 my-3 mx-3">Frontend Skills</h3>
      <div className={"grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5"}>
        {tecnologiesFront.map((tecfront) => {
          return (
            <div
              className={
                "flex justify-center bg-slate-200 py-3 border-4 border-double border-emerald-600 rounded-lg hover:rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-200 duration-300"
              }
            >
              <img
                className={"w-16"}
                src={`${urlSVG}${tecfront}`}
                alt={`${tecfront}`}
              />
            </div>
          );
        })}
      </div>
      <h3 className="text-2xl text-slate-100 my-3 mx-3">Backend Skills</h3>
      <div className={"grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5"}>
        {tecnologiesBack.map((tecBack) => {
          return (
            <div
              className={
                "flex justify-center bg-slate-200 py-3 border-4 border-double border-emerald-600 rounded-lg hover:rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-200 duration-300"
              }
            >
              <img
                className={"w-16"}
                src={`${urlSVG}${tecBack}`}
                alt={`${tecBack}`}
              />
            </div>
          );
        })}
      </div>
      <h3 className="text-2xl text-slate-100 my-3 mx-3">Transversal Skills</h3>
      <div className={"grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5"}>
        {tecnologiesTransversal.map((tecTrans) => {
          return (
            <div
              className={
                "flex justify-center bg-slate-200 py-3 border-4 border-double border-emerald-600 rounded-lg hover:rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-200 duration-300"
              }
            >
              <img
                className={"w-16"}
                src={`${urlSVG}${tecTrans}`}
                alt={`${tecTrans}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
export { SectionSkills };
