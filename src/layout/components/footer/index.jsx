import { Contact, Links, Location, Logo, Socials } from "./components";

export const Footer = () => {
  return (
    <footer className="bg-primary-black px-6 py-16 flex flex-col items-center gap-10 md:px-[39px] md:py-20 md:gap-0 xl:py-[72px] xl:pl-[165px] xl:pr-[164px]">
      {/* Upper Section/Left Section */}
      <div className="flex flex-col items-center text-center self-stretch md:flex-row md:justify-between">
        <Logo />
        {/* Divider */}
        <div className="h-[1px] w-full bg-primary-white/10 my-8 self-stretch md:hidden"></div>
        <Links />
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-primary-white/10 mb-[31px] mt-10 self-stretch hidden md:block"></div>

      {/* Lower Section/Right Section */}
      <div className="flex flex-col gap-10 items-center md:flex-row md:justify-between md:self-stretch md:items-end">
        <div className="flex flex-col gap-10 items-center md:flex-row">
          <Location />
          <Contact />
        </div>
        <Socials />
      </div>
    </footer>
  );
};
