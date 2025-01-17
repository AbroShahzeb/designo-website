import {
  Hero,
  Locations,
  RealDealSection,
  WorldClassTalentSection,
} from "./components";

import { CTA } from "../../layout/components";

export const Company = () => {
  return (
    <div>
      <Hero />
      <WorldClassTalentSection />
      <Locations />
      <RealDealSection />
      <CTA />
    </div>
  );
};
