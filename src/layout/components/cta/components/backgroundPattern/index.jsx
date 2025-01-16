export const BackgroundPattern = () => {
  return (
    <div className="absolute z-10 -right-6 top-1/2 -translate-y-1/2 grid grid-cols-[292px_292px] grid-rows-[292px_292px] md:grid-cols-[292px_292px_292px] opacity-[0.3089]">
      <div className="size-[292px] bg-circle-pattern rounded-full shrink-0  col-start-2 col-end-3 row-start-1 row-end-2"></div>
      <div className="size-[292px] bg-circle-pattern rounded-full shrink-0  col-start-2 col-end-3 row-start-2 row-end-3 md:col-start-3 md:row-start-1"></div>
      <div className="size-[292px] bg-circle-pattern rounded-full shrink-0  col-start-1 col-end-2 row-start-2 row-end-3 -rotate-90 md:col-start-1"></div>

      <div className="size-[292px] bg-circle-pattern rounded-full shrink-0  col-start-2 col-end-3 row-start-2 row-end-3 hidden md:block md:col-start-2"></div>
      <div className="size-[292px] bg-circle-pattern rounded-full shrink-0  col-start-1 col-end-2 row-start-2 row-end-3 -rotate-90 hidden md:block md:col-start-3 md:col-end-4"></div>
    </div>
  );
};
