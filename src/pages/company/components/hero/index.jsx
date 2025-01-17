import imageHeroMobile from "../../../../assets/about/mobile/image-about-hero.jpg";
import imageHeroTablet from "../../../../assets/about/tablet/image-about-hero.jpg";
import imageHeroDesktop from "../../../../assets/about/desktop/image-about-hero.jpg";

import bubblePattern from "../../../../assets/home/desktop/bubble-pattern.svg";

export const Hero = () => {
  return (
    <div className="relative">
      {/* Bubble pattern for large screens */}
      <div className="absolute z-0 left-0 rotate-180 top-[166px] hidden lg:block">
        <img src={bubblePattern} alt="Bubble Pattern" />
      </div>
      <header className="md:px-10 lg:flex lg:flex-row-reverse md:mb-[160px] relative xl:max-w-[1111px] xl:mx-auto xl:px-0">
        <div className="w-full h-[320px]  lg:w-[476px] lg:h-[480px] md:rounded-t-[15px] lg:rounded-t-none lg:rounded-r-[15px] md:overflow-hidden flex-shrink-0 relative z-10">
          <img
            src={imageHeroMobile}
            alt="Hero Image"
            className="md:hidden w-full h-[320px] object-cover"
          />
          <img
            src={imageHeroTablet}
            alt="Hero Image"
            className="hidden md:block lg:hidden object-cover h-[320px] w-full"
          />
          <img
            src={imageHeroDesktop}
            alt="Hero Image"
            className="hidden lg:block w-[476px] h-[480px] object-cover flex-shrink-0"
          />
        </div>
        <div className="bg-primary-peach text-primary-white px-6 py-20 md:px-[58px] md:py-16 flex flex-col items-center text-center lg:items-start lg:text-left lg:justify-center gap-6 md:gap-8  overflow-hidden md:rounded-b-[15px] lg:rounded-b-none lg:rounded-l-[15px] xl:py-[135px] lg:pl-[95px] lg:pr-6 lg:h-[480px] lg:flex-1 relative z-10">
          {/* Background Pattern */}
          <div className="size-[292px] md:size-[640px] md:-left-[120px] md:bottom-[101px] md:translate-y-0 md:top-auto md:right-auto rounded-full bg-circle-pattern absolute right-0 top-8 -translate-y-1/2 opacity-[0.3089] rotate-90 z-10 lg:bottom-0 lg:left-0 lg:right-auto lg:top-auto lg:rotate-[-270deg]"></div>

          <h2 className="text-[32px] leading-[36px] md:text-[48px] md:leading-[48px] font-medium relative z-20">
            About Us
          </h2>
          <p className="text-[15px] leading-[25px] md:text-base relative z-20 xl:max-w-[458px]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </header>
    </div>
  );
};
