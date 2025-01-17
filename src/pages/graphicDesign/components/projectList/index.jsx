import { ProjectCard } from "../projectCard";

import imageChange from "../../../../assets/graphic-design/desktop/image-change.jpg";
import imageBoxedWater from "../../../../assets/graphic-design/desktop/image-boxed-water.jpg";
import imageScience from "../../../../assets/graphic-design/desktop/image-science.jpg";

const projectsData = [
  {
    id: 0,
    image: imageChange,
    title: "TIM BROWN",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
  },
  {
    id: 1,
    image: imageBoxedWater,
    title: "BOXED WATER",
    description: "A simple packaging concept made for Boxed Water",
  },
  {
    id: 2,
    image: imageScience,
    title: "SCIENCE!",
    description: "A poster made in collaboration with the Federal Art Project",
  },
];

export const ProjectList = () => {
  return (
    <div className="px-6 md:px-10 xl:max-w-[1111px] xl:mx-auto xl:px-0 flex flex-col gap-10 items-center lg:grid lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[32px] relative z-20 mb-[120px] lg:mb-[160px]">
      {projectsData.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};
