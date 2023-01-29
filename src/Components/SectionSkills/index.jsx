import React from "react";
import { CardTech } from "./CardTech";
function SectionSkills() {
  const urlSVG = "/tecnologiesSVG/";
  const tecnologiesFront = [
    {
      id: 1,
      text: "HTML.svg",
    },
    {
      id: 2,
      text: "CSS.svg",
    },
    {
      id: 3,
      text: "Bootstrap.svg",
    },
    {
      id: 4,
      text: "Tailwind.svg",
    },
    {
      id: 5,
      text: "JQuery.svg",
    },
    {
      id: 6,
      text: "JavaScript.svg",
    },
    {
      id: 7,
      text: "React.svg",
    },
    {
      id: 8,
      text: "Vite.svg",
    },
  ];
  const tecnologiesBack = [
    {
      id: 1,
      text: "Node.svg",
    },
    {
      id: 2,
      text: "Express.svg",
    },
    {
      id: 3,
      text: "Socket.io.svg",
    },
    {
      id: 4,
      text: "JWT.svg",
    },
    {
      id: 5,
      text: "Mongo.svg",
    },
    {
      id: 6,
      text: "Insomnia.svg",
    },
    {
      id: 7,
      text: "Postman.svg",
    },
    {
      id: 8,
      text: "Postgresql.svg",
    },
    {
      id: 9,
      text: "MySQL.svg",
    },
  ];
  const tecnologiesTransversal = [
    {
      id: 1,
      text: "npm.svg",
    },
    {
      id: 2,
      text: "Git.svg",
    },
    {
      id: 3,
      text: "Docker.svg",
    },
    {
      id: 4,
      text: "Linux.svg",
    },
    {
      id: 5,
      text: "IntellijIdea.svg",
    },
    {
      id: 6,
      text: "Visual Studio Code.svg",
    },
    {
      id: 7,
      text: "Jira.svg",
    },
    {
      id: 8,
      text: "Notion.svg",
    },
    {
      id: 9,
      text: "Todoist.svg",
    },
  ];

  return (
    <section className={"bg-purple-section h-full p-5 xl:p-10"}>
      <h2
        className={
          "text-3xl font-extrabold text-slate-100 py-3 text-center sticky top-0"
        }
      >
        Full Stack Skills
      </h2>
      <h3 className="text-2xl font-bold text-slate-100 my-3">Frontend</h3>
      <ul className={"grid lg:grid-cols-4 grid-cols-2 gap-4"}>
        {tecnologiesFront.map((tecFront) => (
          <li key={tecFront.id} className={"flex flex-col justify-center"}>
            <CardTech urlSVG={urlSVG} tecnology={tecFront.text} />
            <p className={"text-slate-100 text-center py-1"}>
              {tecFront.text.split(".").at(0)}
            </p>
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-bold text-slate-100 my-3">Backend</h3>
      <ul className={"grid lg:grid-cols-4 grid-cols-2 gap-4"}>
        {tecnologiesBack.map((tecBack) => (
          <li key={tecBack.id} className={"flex flex-col justify-center"}>
            <CardTech urlSVG={urlSVG} tecnology={tecBack.text} />
            <p className={"text-slate-100 text-center py-1"}>
              {tecBack.text.split(".").at(0)}
            </p>
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-bold text-slate-100 my-3">
        Herramientas y utilidades
      </h3>
      <ul className={"grid lg:grid-cols-4 grid-cols-2 gap-4"}>
        {tecnologiesTransversal.map((tecTrans) => (
          <li key={tecTrans.id} className={"flex flex-col justify-center"}>
            <CardTech urlSVG={urlSVG} tecnology={tecTrans.text} />
            <p className={"text-slate-100 text-center py-1"}>
              {tecTrans.text.split(".").at(0)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
export { SectionSkills };
