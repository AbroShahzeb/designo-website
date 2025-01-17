import { Button } from "../../../generalComponents";
import { BackgroundPattern } from "./components";

export const CTA = () => {
  return (
    <div className="px-6 bg-cta-gradient-mobile md:bg-cta-gradient-tablet xl:bg-cta-gradient-desktop md:px-[39px] relative z-20">
      <div className="bg-primary-peach px-6 py-16 rounded-[15px] min-h-[379px] md:min-h-[350px] xl:min-h-[292px] relative overflow-hidden md:py-[57px] md:pl-[58px] md:pr-[59px] xl:px-[95px] xl:py-[72px] flex justify-center xl:justify-normal xl:max-w-[1111px] xl:mx-auto">
        <BackgroundPattern />

        <div className="relative z-20 flex flex-col items-center xl:flex-row xl:justify-between xl:self-stretch xl:w-full">
          <div className="text-primary-white text-center flex flex-col items-center xl:text-left xl:items-start">
            <h2 className="text-[32px] leading-[41px] md:text-[40px] md:leading-[40px] md:h-[98px] md:max-w-[335px] font-medium xl:h-[96px]">
              Let’s talk about your project
            </h2>
            <p className="mt-1.5 text-[15px] leading-[25px] xl:text-base md:w-[65ch] md:mt-0 xl:w-[450px]">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div className="mt-8 flex justify-center xl:mt-0">
            <Button label="Get in touch" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};
