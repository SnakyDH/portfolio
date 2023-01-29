import React from "react";

function CardTech(props) {
  return (
    <div
      className={
        //
        "flex justify-center bg-slate-200 border-4  border-emerald-600 py-3  rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-green-200 duration-300"
      }
    >
      <img
        className={"w-16"}
        src={`${props.urlSVG}${props.tecnology}`}
        alt={`${props.tecnology}`}
      />
    </div>
  );
}

export { CardTech };
