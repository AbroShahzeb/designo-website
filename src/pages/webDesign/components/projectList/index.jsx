import { ProjectCard } from "../projectCard";

import imageExpress from "../../../../assets/web-design/desktop/image-express.jpg";
import imageTransfer from "../../../../assets/web-design/desktop/image-transfer.jpg";
import imagePhoton from "../../../../assets/web-design/desktop/image-photon.jpg";
import imageBuilder from "../../../../assets/web-design/desktop/image-builder.jpg";
import imageBlogr from "../../../../assets/web-design/desktop/image-blogr.jpg";
import imageCamp from "../../../../assets/web-design/desktop/image-camp.jpg";

const projectsData = [
  {
    id: 0,
    image: imageExpress,
    title: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    id: 1,
    image: imageTransfer,
    title: "Transfer",
    description:
      "Site for low-cost money transfers and sending money within seconds",
  },
  {
    id: 2,
    image: imagePhoton,
    title: "Photon",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    id: 3,
    image: imageBuilder,
    title: "Builder",
    description:
      "Connects users with local contractors based on their location",
  },
  {
    id: 4,
    image: imageBlogr,
    title: "Blogr",
    description:
      "Blogr is a platform for creating an online blog or publication",
  },
  {
    id: 5,
    image: imageCamp,
    title: "Camp",
    description:
      "Get expert training in coding, data, design, and digital marketing",
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
