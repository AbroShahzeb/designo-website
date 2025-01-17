import { Link } from "react-router-dom";
import logoLight from "../../../../../assets/shared/desktop/logo-light.png";

export const Logo = () => {
  return (
    <Link to="/">
      <img src={logoLight} alt="Designo Logo" className="h-[27px]" />
    </Link>
  );
};
