import illustrationAustralia from "../../../../assets/shared/desktop/illustration-australia.svg";
import illustrationCanada from "../../../../assets/shared/desktop/illustration-canada.svg";
import illustrationUK from "../../../../assets/shared/desktop/illustration-united-kingdom.svg";
import { LocationCard } from "../locationCard";

const locationData = [
  {
    id: 0,
    illustration: illustrationCanada,
    title: "Canada",
    to: "/locations",
  },
  {
    id: 1,
    illustration: illustrationAustralia,
    title: "Australia",
    to: "/locations",
  },
  {
    id: 0,
    illustration: illustrationUK,
    title: "United Kingdom",
    to: "/locations",
  },
];

export const Locations = () => {
  return (
    <section className="relative z-20 px-6 flex flex-col items-center gap-20 mb-[120px] lg:mb-[160px] lg:flex-row xl:max-w-[1111px] xl:mx-auto xl:px-0">
      {locationData.map((location) => (
        <LocationCard location={location} key={location.id} />
      ))}
    </section>
  );
};
