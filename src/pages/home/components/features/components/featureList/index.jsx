import illustrationFriendly from "../../../../../../assets/home/desktop/illustration-friendly.svg";
import illustrationPassionate from "../../../../../../assets/home/desktop/illustration-passionate.svg";
import illustrationResourceful from "../../../../../../assets/home/desktop/illustration-resourceful.svg";
import illustrationFriendlyLarge from "../../../../../../assets/home/desktop/illustration-friendly-lg.svg";
import illustrationPassionateLarge from "../../../../../../assets/home/desktop/illustration-passionate-lg.svg";
import illustrationResourcefulLarge from "../../../../../../assets/home/desktop/illustration-resourceful-lg.svg";
import { Feature } from "../feature";

const featuresData = [
  {
    id: 0,
    illustration: illustrationPassionate,
    illustrationLg: illustrationPassionateLarge,
    title: "PASSIONATE",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    id: 1,
    illustration: illustrationResourceful,
    illustrationLg: illustrationResourcefulLarge,
    title: "RESOURCEFUL",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    id: 2,
    illustration: illustrationFriendly,
    illustrationLg: illustrationFriendlyLarge,
    title: "FRIENDLY",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

export const FeatureList = () => {
  return (
    <div className="flex flex-col gap-20 md:gap-8 lg:flex-row lg:gap-[30px]">
      {featuresData.map((feature) => (
        <Feature feature={feature} />
      ))}
    </div>
  );
};
