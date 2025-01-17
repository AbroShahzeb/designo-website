import { ProjectCard } from "../projectCard";

import imageAirFilter from "../../../../assets/app-design/desktop/image-airfilter.jpg";
import imageEyeCam from "../../../../assets/app-design/desktop/image-eyecam.jpg";
import imageFaceIt from "../../../../assets/app-design/desktop/image-faceit.jpg";
import imageTodo from "../../../../assets/app-design/desktop/image-todo.jpg";
import imageLoopStudios from "../../../../assets/app-design/desktop/image-loopstudios.jpg";

const projectsData = [
  {
    id: 0,
    image: imageAirFilter,
    title: "AIRFILTER",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    id: 1,
    image: imageEyeCam,
    title: "EYECAM",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    id: 2,
    image: imageFaceIt,
    title: "Faceit",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
  },

  {
    id: 4,
    image: imageTodo,
    title: "Todo",
    description: "A todo app that features cloud sync with light and dark mode",
  },
  {
    id: 5,
    image: imageLoopStudios,
    title: "Loopstudios",
    description: "A VR experience app made for Loopstudios",
  },
];

export const ProjectList = () => {
  return (
    <div className="px-6 md:px-10 xl:max-w-[1111px] xl:mx-auto xl:px-0 flex flex-col gap-10 items-center lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-[30px] lg:gap-y-[32px] relative z-20 mb-[120px] lg:mb-[160px]">
      {projectsData.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};
