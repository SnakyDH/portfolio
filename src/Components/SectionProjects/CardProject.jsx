import { useState } from "react";
const CardProject = ({ project }) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div
      onClick={() => setIsClick(!isClick)}
      className="bg-blue-200 rounded-3xl hover:cursor-pointer"
    >
      <figure className="flex justify-center">
        <img
          className="rounded-t-3xl object-cover"
          src={project.imgUrl}
          alt=""
        />
      </figure>
      <h2 className="font-extrabold text-xl text-center p-5">
        {project.title}
      </h2>
      {/*
      <div className="flex justify-around">
        <button className="bg-green-600 rounded-xl p-3">Repositorio</button>
        <button className="bg-indigo-600 rounded-xl p-3">Probar</button>
      </div>
  */}
    </div>
  );
};
export { CardProject };
