import { Link, NavLink } from "react-router-dom";
import logoDark from "../../../assets/shared/desktop/logo-dark.png";
import iconHamburger from "../../../assets/shared/mobile/icon-hamburger.svg";
import iconClose from "../../../assets/shared/mobile/icon-close.svg";
import { MobileNav } from "./components";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav className="bg-primary-white w-full sticky top-0 z-30 ">
      <div className="bg-primary-white px-6 pb-[34px] pt-[35px] flex items-center gap-2 justify-between md:px-10 md:py-16 xl:max-w-[1111px] xl:mx-auto xl:px-0 ">
        {/* Logo */}
        <Link to="/">
          <img src={logoDark} alt="Designo Logo" className="h-[27px]" />
        </Link>

        <ul className="hidden md:flex items-center gap-[42px] uppercase text-[14px] leading-[14px] text-secondary-dark-grey tracking-[2px]">
          <li className="hover:underline transition-all">
            <NavLink
              to="/company"
              className={({ isActive }) => isActive && "underline"}
            >
              Our company
            </NavLink>
          </li>
          <li className="hover:underline transition-all">
            <NavLink
              to="/locations"
              className={({ isActive }) => isActive && "underline"}
            >
              Locations
            </NavLink>
          </li>
          <li className="hover:underline transition-all">
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive && "underline"}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
        >
          <img
            src={isMobileNavOpen ? iconClose : iconHamburger}
            alt={isMobileNavOpen ? "Close Icon" : "Hamburger Icon"}
          />
        </button>

        <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
      </div>
    </nav>
  );
};
