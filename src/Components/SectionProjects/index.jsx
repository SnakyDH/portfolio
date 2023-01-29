import { CardProject } from "./CardProject";
import { projects } from "../../data/projects";
function SectionProjects() {
  return (
    <section id="Projects" className="bg-purple-section sm:p-5 p-10 h-full">
      <h2 className={"text-slate-100 text-3xl font-bold text-center pb-10"}>
        Proyectos
      </h2>
      <div className="grid gird-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((project) => (
          <CardProject key={project.id.toString()} project={project} />
        ))}
      </div>
    </section>
  );
}
export { SectionProjects };
