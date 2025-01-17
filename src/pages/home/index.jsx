import { CTA } from "../../layout/components";
import { Features, Hero, Projects } from "./components";

export const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <Features />
      <CTA />
    </main>
  );
};
