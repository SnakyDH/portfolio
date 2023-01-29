import React from "react";
import { AwardCard } from "./AwardCard";
const awardsInfo = [
  {
    id: 1,
    title: "Beca Futuros Tecnologos Globales Platzi x Terminal.io",
    date: "Oct 2022 - Nov 2022",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex quia
        odit aspernatur quo libero consequuntur. Accusantium, tempore dolor
        porro quae, ab consectetur hic quas et eos dignissimos quisquam
        exercitationem. Ipsa voluptatum unde ea pariatur quidem, adipisci ut
        odit officia autem totam obcaecati. Pariatur dicta ab aspernatur,
        accusantium quam nostrum, maxime possimus dolorem magni harum quas
        animi. Harum, quod cumque?`,
    imgs: [
      {
        iconLink: "/tecnologiesSVG/Platzi.svg",
        iconAlt: "Platzi Icono",
      },
      {
        iconLink:
          "https://pbs.twimg.com/profile_images/1113436540766523392/Y9dKStew_400x400.png",
        iconAlt: "Terminal Icono",
      },
    ],
  },
  {
    id: 2,
    title: "Asociado a Blanc Labs por medio de Digital Academy",
    date: "Agt 2022 - 2023",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex quia
        odit aspernatur quo libero consequuntur. Accusantium, tempore dolor
        porro quae, ab consectetur hic quas et eos dignissimos quisquam
        exercitationem. Ipsa voluptatum unde ea pariatur quidem, adipisci ut
        odit officia autem totam obcaecati. Pariatur dicta ab aspernatur,
        accusantium quam nostrum, maxime possimus dolorem magni harum quas
        animi. Harum, quod cumque?`,
    imgs: [
      {
        iconLink:
          "https://pbs.twimg.com/profile_images/1471107042035347461/WprYyWmF_400x400.jpg",
        iconAlt: "BlancLabs Icono",
      },
    ],
  },
];
function SectionAwards() {
  const awardOne = awardsInfo.at(0);
  const awardTwo = awardsInfo.at(1);

  return (
    <section id="Goals" className="sm:p-5 p-10 h-full">
      <h2 className="text-5xl font-extrabold text-center pb-20">
        Premios y logros
      </h2>
      <div className="flex flex-col xl:flex-row gap-10">
        <AwardCard
          key={awardOne.id.toString()}
          title={awardOne.title}
          date={awardOne.date}
          desc={awardOne.desc}
          imgsArray={awardOne.imgs}
        />
        <AwardCard
          key={awardTwo.id.toString()}
          title={awardTwo.title}
          date={awardTwo.date}
          desc={awardTwo.desc}
          imgsArray={awardTwo.imgs}
        />
      </div>
    </section>
  );
}
export { SectionAwards };
