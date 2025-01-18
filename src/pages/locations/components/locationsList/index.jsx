import mapUKTablet from "../../../../assets/locations/tablet/image-map-uk.png";
import mapCanadaTablet from "../../../../assets/locations/tablet/image-map-canada.png";
import mapAustraliaTablet from "../../../../assets/locations/tablet/image-map-australia.png";
import mapUKDesktop from "../../../../assets/locations/desktop/image-map-united-kingdom.png";
import mapCanadaDesktop from "../../../../assets/locations/desktop/image-map-canada.png";
import mapAustraliaDesktop from "../../../../assets/locations/desktop/image-map-australia.png";
import { LocationCard } from "../locationCard";
const locationsData = [
  {
    id: 0,
    mapTablet: mapCanadaTablet,
    mapDesktop: mapCanadaDesktop,
    country: "Canada",
    address: {
      officeName: "Designo Central Office",
      street: "3886 Wellington Street",
      city: "Toronto, Ontario M9C 3J5",
    },
    contact: {
      phone: "P : +1 253-863-8967",
      mail: "M : contact@designo.co",
    },
    flexDirection: "lg:flex-row-reverse",
  },
  {
    id: 1,
    mapTablet: mapAustraliaTablet,
    mapDesktop: mapAustraliaDesktop,
    country: "Australia",
    address: {
      officeName: "Designo AU Office",
      street: "19 Balonne Street",
      city: "New South Wales 2443",
    },
    contact: {
      phone: "P : (02) 6720 9092",
      mail: "M : contact@designo.au",
    },
    flexDirection: "lg:flex-row",
  },
  {
    id: 2,
    mapTablet: mapUKTablet,
    mapDesktop: mapUKDesktop,
    country: "United Kingdom",
    address: {
      officeName: "Designo UK Office",
      street: "13  Colorado Way",
      city: "Rhyd-y-fro SA8 9GA",
    },
    contact: {
      phone: "P : 078 3115 1400",
      mail: "M : contact@designo.uk",
    },
    flexDirection: "lg:flex-row-reverse",
  },
];

export const LocationsList = () => {
  return (
    <div className="flex flex-col gap-10 mb-[120px] lg:mb-[160px] md:mx-10 md:gap-[120px] lg:gap-8 xl:max-w-[1111px] xl:mx-auto">
      {locationsData.map((location) => (
        <LocationCard location={location} key={location.id} />
      ))}
    </div>
  );
};
