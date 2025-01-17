import { FeatureList } from "./components";
import bubblePattern from "../../../../assets/home/desktop/bubble-pattern.svg";

export const Features = () => {
  return (
    <section className="lg:relative">
      {/* Bubble Background Pattern */}
      <div className="absolute right-0 -bottom-[306px] z-10 hidden lg:block">
        <img src={bubblePattern} alt="Chat Bubble Pattern" />
      </div>
      <div className="px-6 mb-[120px] lg:mb-[160px] md:px-10 xl:max-w-[1111px] xl:mx-auto xl:p-0 relative z-20">
        <FeatureList />
      </div>
    </section>
  );
};
