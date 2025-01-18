import imageHero from "../../../../assets/home/mobile/hero-mobile.png";
import imageHeroTablet from "../../../../assets/home/tablet/image-hero.png";
import imageHeroDesktop from "../../../../assets/home/desktop/image-hero.png";

import bubblePattern from "../../../../assets/home/desktop/bubble-pattern.svg";

import { Button } from "../../../../generalComponents";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <header className="md:px-10 xl:h-[640px] mb-[120px] lg:mb-[160px] lg:relative">
      {/* Bubble Patter For Large Screens */}
      <div className="absolute rotate-180 left-0 -bottom-[274px] hidden lg:block">
        <img src={bubblePattern} alt="Chat Bubble Pattern" />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between xl:max-w-[1111px] xl:mx-auto lg:gap-4 xl:gap-0 lg:h-[600px] xl:h-[640px] lg:pl-[95px] lg:pr-[96px] items-center text-center bg-primary-peach relative overflow-hidden md:rounded-[15px]">
        {/* Background Circle Pattern */}
        <div className="size-[640px] rounded-full bg-circle-pattern absolute top-1/2 -translate-y-1/2 left-0 opacity-[0.3089] z-10 -rotate-180 md:-right-[121.55px] md:left-auto lg:right-0 lg:-rotate-90"></div>

        <div className="text-center  px-6 py-20 md:px-[58px] md:pt-[60px] md:pb-[69px] text-primary-white relative z-20 lg:p-0 lg:text-left">
          <h1 className="text-[32px] leading-[36px] md:text-[48px] md:leading-[48px] font-medium md:max-w-[537px] md:mx-auto md:h-[165px]">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-[15px] leading-[25px] mt-[14px] md:max-w-[445px] md:mx-auto md:text-base md:mt-2 lg:mx-0 lg:mt-[11px] lg:max-w-[420px]">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link
            className="mt-6 flex justify-center md:mt-5 lg:justify-start lg:mt-10"
            to="/company"
          >
            <Button label="Learn more" variant="secondary" />
          </Link>
        </div>
        <div className="relative z-20 lg:self-end">
          <img
            src={imageHero}
            alt="Phone Mockup Image"
            className="w-[284px] md:hidden relative z-20"
          />
          <img
            src={imageHeroTablet}
            alt="Phone Mockup Image"
            className="w-[284px] hidden md:block lg:hidden relative z-20"
          />
          <img
            src={imageHeroDesktop}
            alt="Phone Mockup Image"
            className="w-[284px] hidden lg:block relative z-20"
          />

          {/* Mockup Shadow */}
          <div className="absolute inset-0 translate-x-4 -translate-y-2 scale-[1.06] bg-[rgb(169,73,60)] blur-xl z-10"></div>
        </div>
      </div>
    </header>
  );
};
