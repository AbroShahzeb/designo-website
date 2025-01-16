import { Button } from "../../../generalComponents";
import bgThreeCirclePattern from "../../../assets/shared/desktop/bg-pattern-three-circles.svg";

export const CTA = () => {
  return (
    <div className="px-6 bg-cta-gradient-mobile">
      <div className="bg-primary-peach px-6 py-16 rounded-[15px] min-h-[379px] relative overflow-hidden">
        <div className="absolute z-10 -right-6 top-1/2 -translate-y-1/2 grid grid-cols-[292px_292px] grid-rows-[292px_292px] ">
          <div className="size-[292px] bg-circle-pattern rounded-full shrink-0 opacity-[0.3089] col-start-2 col-end-3 row-start-1 row-end-2"></div>
          <div className="size-[292px] bg-circle-pattern rounded-full shrink-0 opacity-[0.3089] col-start-2 col-end-3 row-start-2 row-end-3"></div>
          <div className="size-[292px] bg-circle-pattern rounded-full shrink-0 opacity-[0.3089] col-start-1 col-end-2 row-start-2 row-end-3 -rotate-90"></div>
        </div>

        <div className="relative z-20">
          <div className="text-primary-white text-center ">
            <h2 className="text-[32px] leading-[41px] font-medium">
              Let’s talk about your project
            </h2>
            <p className="mt-1.5 text-[15px] leading-[25px] ">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Button label="Get in touch" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};
