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
      <div className="flex flex-col gap-6 items-center text-center px-6 py-20 bg-[#FDF3F0] text-[15px] leading-[25px]text-primary-black md:rounded-[15px] md:items-start md:px-[75px] md:py-[88px] lg:px-[95px] md:text-left md:text-base lg:flex-1">
        <h3 className="text-[32px] leading-[36px] md:text-[40px] md:leading-[48px] text-primary-peach font-medium">
          {location.country}
        </h3>
        <div className="flex flex-col gap-6 md:flex-row md:w-full lg:gap-[30px]">
          <div className="md:flex-1 lg:max-w-[255px]">
            <p className="font-bold">{location.address.officeName}</p>
            <p>{location.address.street}</p>
            <p>{location.address.city}</p>
          </div>
          <div className="md:flex-1 lg:max-w-[255px]">
            <p className="font-bold">Contact</p>
            <p>{location.contact.phone}</p>
            <p>{location.contact.mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
