import { OtherCategoryCard } from "../otherCategoryCard";

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
];

export const OtherCategories = () => {
  return (
    <section className="px-6 mb-[120px] lg:mb-[160px] md:px-10 xl:max-w-[1111px] xl:mx-auto xl:p-0">
      <div className="flex flex-col gap-6 lg:flex-row w-full">
        {projectData.map((card) => (
          <OtherCategoryCard card={card} key={card.id} />
        ))}
      </div>
    </section>
  );
};
