export const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-[15px] overflow-hidden max-w-[327px] md:w-full md:max-w-full md:h-[310px] md:flex  bg-[#FDF3F0] hover:bg-primary-peach group lg:flex-col  lg:h-[478px] lg:w-[350px] ">
      <div>
        <img
          src={project.image}
          alt={`${project.title} thumbnail`}
          className="h-[320px] md:w-[339px] md:h-[310px] lg:w-[350px]  lg:h-[320px] object-cover"
        />
      </div>
      <div className=" px-[30px] py-8 flex flex-col gap-4 md:gap-[14.66px] text-center md:px-8 md:justify-center  cursor-pointer lg:p-8 lg:gap-4">
        <h3 className="text-[20px] leading-[26px] uppercase tracking-[5px] text-primary-peach group-hover:text-primary-white">
          {project.title}
        </h3>
        <p className="text-base text-primary-black group-hover:text-primary-white">
          {project.description}
        </p>
      </div>
    </div>
  );
};
