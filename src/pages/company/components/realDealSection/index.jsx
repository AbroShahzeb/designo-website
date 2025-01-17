import imageRealDealMobile from "../../../../assets/about/mobile/image-real-deal.jpg";
import imageRealDealTablet from "../../../../assets/about/tablet/image-real-deal.jpg";
import imageRealDealDesktop from "../../../../assets/about/desktop/image-real-deal.jpg";

import bubblePattern from "../../../../assets/home/desktop/bubble-pattern.svg";

export const RealDealSection = () => {
  return (
    <section className="relative ">
      {/* Bubble Background Pattern */}
      <div className="absolute -right-[561px] -top-[342px]">
        <img src={bubblePattern} alt="Bubble Background Pattern" />
      </div>

      <div className="md:px-10 lg:flex lg:flex-row-reverse mb-[120px] lg:mb-[160px] relative xl:max-w-[1111px] xl:mx-auto xl:px-0">
        <div className="w-full h-[320px]  lg:w-[476px] lg:h-[640px] md:rounded-t-[15px] lg:rounded-t-none lg:rounded-r-[15px] md:overflow-hidden flex-shrink-0 relative z-10">
          <img
            src={imageRealDealMobile}
            alt="Image World Class Talent"
            className="md:hidden w-full h-[320px] object-cover"
          />
          <img
            src={imageRealDealTablet}
            alt="Image World Class Talent"
            className="hidden md:block lg:hidden object-cover h-[320px] w-full"
          />
          <img
            src={imageRealDealDesktop}
            alt="Image World Class Talent"
            className="hidden lg:block w-[476px] h-[640px] object-cover flex-shrink-0"
          />
        </div>
        <div className="bg-[#FDF3F0] text-primary-black px-6 py-20 md:px-[58px] md:py-16 flex flex-col items-center text-center lg:items-start lg:text-left lg:justify-center gap-6 md:gap-8  overflow-hidden md:rounded-b-[15px] lg:rounded-b-none lg:rounded-l-[15px] xl:py-[135px] lg:px-[95px] lg:h-[640px] lg:flex-1 relative z-10">
          {/* Background Pattern */}
          <div className="grid grid-cols-[292px_292px] grid-rows-[292px_292px] opacity-[0.06] absolute left-0 bottom-0 md:bottom-[44px] md:left-1/2 md:-translate-x-1/2">
            <div className="size-[292px] bg-circle-pattern rounded-full col-start-1 col-end-2 row-start-1 row-end-2"></div>
            <div className="size-[292px] bg-circle-pattern rounded-full col-start-1 col-end-2 row-start-2 row-end-3"></div>
            <div className="size-[292px] bg-circle-pattern rounded-full col-start-2 col-end-3 row-start-2 row-end-3"></div>
          </div>

          <h2 className="text-[32px] leading-[36px] md:text-[48px] md:leading-[48px] font-medium relative z-20 text-primary-peach">
            The real deal
          </h2>
          <p className="text-[15px] leading-[25px] md:text-base relative z-20 xl:max-w-[458px]">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="text-[15px] leading-[25px] md:text-base relative z-20 xl:max-w-[458px]">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </section>
  );
};
