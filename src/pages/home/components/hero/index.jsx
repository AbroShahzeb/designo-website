import imageHero from "../../../../assets/home/mobile/hero-mobile.png";
import { Button } from "../../../../generalComponents";

export const Hero = () => {
  return (
    <header>
      <div className="flex flex-col items-center text-center bg-primary-peach relative overflow-hidden">
        {/* Background Circle Pattern */}
        <div className="size-[640px] rounded-full bg-circle-pattern absolute top-1/2 -translate-y-1/2 left-0 opacity-[0.3089] z-10 -rotate-180"></div>

        <div className="text-center  px-6 py-20 text-primary-white relative z-20">
          <h1 className="text-[32px] leading-[36px] font-medium">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-[15px] leading-[25px] mt-[14px]">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <div className="mt-6 flex justify-center">
            <Button label="Learn more" variant="secondary" />
          </div>
        </div>
        <div className="relative z-20 ">
          <img
            src={imageHero}
            alt="Phone Mockup Image"
            className="w-[284px] "
          />
        </div>
      </div>
    </header>
  );
};
