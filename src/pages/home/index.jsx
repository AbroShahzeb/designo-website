import { CTA } from "../../layout/components";
import { Features, Hero, Projects } from "./components";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Features />
      <CTA />
    </div>
  );
};
