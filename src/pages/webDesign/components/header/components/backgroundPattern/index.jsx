export const BackgroundPattern = () => {
  return (
    <div className="absolute top-0 right-0 z-10 opacity-[0.3089] md:grid md:grid-cols-3 md:grid-rows-2 md:top-1/2 md:-translate-y-1/2 md:-right-[165.75px] overflow-hidden rotate-180 lg:right-0">
      <div className="bg-circle-pattern size-[292px] rounded-full rotate-90"></div>
      <div className="hidden md:block bg-circle-pattern size-[292px] rounded-full"></div>
      <div className="hidden md:block bg-circle-pattern size-[292px] rounded-full md:opacity-0"></div>
      <div className="hidden md:block bg-circle-pattern size-[292px] rounded-full "></div>
      <div className="hidden md:block bg-circle-pattern size-[292px] rounded-full "></div>
      <div className="hidden md:block bg-circle-pattern size-[292px] rounded-full md:rotate-[90deg]"></div>
    </div>
  );
};
