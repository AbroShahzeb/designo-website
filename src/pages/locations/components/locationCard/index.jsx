export const LocationCard = ({ location }) => {
  return (
    <div
      className={`flex flex-col md:gap-8 lg:flex-row lg:gap-[30px] ${location.flexDirection}`}
    >
      <div className="h-[320px] lg:h-[326px] w-full lg:w-auto md:rounded-[15px] md:overflow-hidden">
        <img
          src={location.mapTablet}
          alt={`${location.country} Map`}
          className="lg:hidden h-[320px] w-full  object-cover"
        />
        <img
          src={location.mapDesktop}
          alt={`${location.country} Map`}
          className="hidden lg:block h-[326px] w-[350px] object-cover rounded-[15px] "
        />
      </div>
      <div className="flex flex-col gap-6 items-center text-center px-6 py-20 bg-[#FDF3F0] text-[15px] leading-[25px]text-primary-black md:rounded-[15px] md:items-start md:px-[75px] md:py-[88px] lg:px-[95px] md:text-left md:text-base lg:flex-1 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="grid grid-cols-[292px_292px] grid-rows-[292px_292px] opacity-[0.06] absolute left-0 -bottom-[150px] md:bottom-0 md:left-0 ">
          <div className="size-[292px] bg-circle-pattern rounded-full col-start-1 col-end-2 row-start-1 row-end-2"></div>
          <div className="size-[292px] bg-circle-pattern rounded-full col-start-1 col-end-2 row-start-2 row-end-3"></div>
          <div className="size-[292px] bg-circle-pattern rounded-full col-start-2 col-end-3 row-start-2 row-end-3"></div>
        </div>

        <h3 className="text-[32px] leading-[36px] md:text-[40px] md:leading-[48px] text-primary-peach font-medium relative z-20">
          {location.country}
        </h3>
        <div className="flex flex-col gap-6 md:flex-row md:w-full lg:gap-[30px] relative z-20">
          <div className="md:flex-1 lg:max-w-[255px]">
            <p className="font-bold">{location.address.officeName}</p>
            <p>{location.address.street}</p>
            <p>{location.address.city}</p>
          </div>
          <div className="md:flex-1 lg:max-w-[255px] relative z-20">
            <p className="font-bold">Contact</p>
            <p>{location.contact.phone}</p>
            <p>{location.contact.mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
