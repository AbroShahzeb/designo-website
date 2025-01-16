import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <div className="text-[14px] leading-[14px] text-primary-white uppercase tracking-[2px] flex flex-col items-center text-center gap-8 md:flex-row md:gap-[42px]">
      <Link to="/company">Our Company</Link>
      <Link to="/locations">Locations</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
