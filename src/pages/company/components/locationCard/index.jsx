import { Link } from "react-router-dom";
import { Button } from "../../../../generalComponents";

export const LocationCard = ({ location }) => {
  return (
    <div className="flex flex-col items-center lg:flex-1">
      <div>
        <img
          src={location.illustration}
          alt={`${location.title} Illustration`}
        />
      </div>
      <div className="mt-12 flex flex-col items-center gap-8">
        <p className="text-[20px] leading-[26px] tracking-[5px] uppercase text-primary-black">
          {location.title}
        </p>
        <Link to={location.to} className="mt-8">
          <Button label="See Location" />
        </Link>
      </div>
    </div>
  );
};
