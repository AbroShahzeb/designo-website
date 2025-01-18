import { ProjectCard } from "./components";

const projectData = [
  {
    id: 0,

    title: "Web Design",
    to: "/web-design",
    additionalStyles: "lg:row-start-1 lg:row-end-3",
    bg: "mobile-web-design md:tablet-web-design lg:desktop-web-design",
  },
  {
    id: 1,
    title: "App Design",
    to: "/app-design",
    additionalStyles: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    bg: "mobile-app-design md:tablet-app-design lg:desktop-app-design",
  },
  {
    id: 2,
    title: "Graphic Design",
    to: "/graphic-design",
    additionalStyles: "lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-3",
    bg: "mobile-graphic-design md:tablet-graphic-design lg:desktop-graphic-design",
  },
];

export const Projects = () => {
  return (
    <section className="px-6 mb-[120px] lg:mb-[160px] md:px-10 xl:max-w-[1111px] xl:mx-auto xl:p-0">
      <div className="grid grid-cols-1 grid-rows-[250px_250px_250px] lg:grid-cols-[1fr_1fr] lg:grid-rows-[308px_308px] gap-6 lg:gap-x-[30px]">
        {projectData.map((card) => (
          <ProjectCard card={card} key={card.id} />
        ))}
      </div>
    </section>
  );
};
