import { BackgroundPattern } from "./components";
import bubblePattern from "../../../../assets/home/desktop/bubble-pattern.svg";

export const Header = () => {
  return (
    <div className="lg:relative mb-[120px] lg:mb-[160px]">
      {/* Bubble Patter For Large Screens */}
      <div className="absolute rotate-180 left-0 top-[126px] hidden lg:block">
        <img src={bubblePattern} alt="Chat Bubble Pattern" />
      </div>
      <header className="px-6 md:mx-10 relative z-20 h-[320px] md:h-[252px] flex items-center justify-center bg-primary-peach md:rounded-[15px] overflow-hidden  xl:max-w-[1111px] xl:mx-auto">
        <BackgroundPattern />
        <div className="w-full flex flex-col gap-6 items-center text-center text-primary-white relative z-20">
          <h2 className="text-[32px] leading-[36px] md:text-[48px] md:leading-[48px] font-normal md:font-medium">
            App Design
          </h2>
          <p className="text-[15px] leading-[25px] md:text-[16px] md:leading-[26px] md:max-w-[400px]">
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </div>
      </header>
    </div>
  );
};
