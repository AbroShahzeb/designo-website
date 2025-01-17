export const Feature = ({ feature }) => {
  return (
    <div className="flex flex-col items-center text-center gap-12 text-primary-black md:flex-row md:text-left lg:flex-col lg:text-center">
      <div className="flex-shrink-0">
        <img src={feature.illustration} className="size-[202px] md:hidden" />
        <img
          src={feature.illustrationLg}
          className="size-[202px] hidden md:block"
        />
      </div>
      <div className="flex flex-col gap-8 md:gap-4 lg:gap-8">
        <h3 className="text-[20px] leading-[26px] tracking-[5px] uppercase font-medium">
          {feature.title}
        </h3>
        <p className="text-base font-normal">{feature.description}</p>
      </div>
    </div>
  );
};
