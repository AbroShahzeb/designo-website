import { Button } from "../../../generalComponents";

export const CTA = () => {
  return (
    <div className="px-6 bg-cta-gradient-mobile">
      <div className="bg-primary-peach px-6 py-16 rounded-[15px] min-h-[379px]">
        <div className="text-primary-white text-center">
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
  );
};
