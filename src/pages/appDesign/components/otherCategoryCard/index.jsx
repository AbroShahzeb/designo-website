import { Link } from "react-router-dom";

import iconRightArrow from "../../../../assets/shared/desktop/icon-right-arrow.svg";

export const OtherCategoryCard = ({ card }) => {
  return (
    <Link
      className={`rounded-[15px] relative overflow-hidden ${card?.additionalStyles} ${card?.bg} bg-no-repeat bg-cover px-6 cursor-pointer h-[250px] md:h-[200px] lg:h-[308px] w-full`}
      to={card?.to}
    >
      {/* <div className={`${card?.bg} w-full bg-cover bg-no-repeat bg-left`}></div> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center flex-col gap-3 md:gap-6 text-primary-white  font-medium uppercase w-full">
        <h2 className="text-[28px] leading-[36px] tracking-[1.5px] md:text-[40px] md:leading-[48px] md:tracking-[2px]">
          {card.title}
        </h2>
        <p className="flex items-center gap-4 text-[15px] tracking-[5px]">
          <span>View Projects</span>
          <span>
            <img src={iconRightArrow} alt="Right Arrow Icon" />
          </span>
        </p>
      </div>
    </Link>
  );
};
