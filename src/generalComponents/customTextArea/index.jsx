import React, { useState } from "react";
import iconError from "../../assets/contact/desktop/icon-error.svg";

export const CustomTextArea = ({
  placeholder = "Text Field",
  value = "",

  error = "",

  setValue,
  icon,
  label = "",
  className = "",
  register,
  validationRules,
  name,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  return (
    <>
      {label && <p className="text-dark mb-1">{label}</p>}
      <div
        className={`flex  items-center border-primary-white bg-transparent pb-3 px-4 w-full ${className}  ${
          isActive ? "border-b-4" : "border-b"
        }`}
      >
        {/* Prefix Icon */}
        {icon && <span className={`mr-3  flex-shrink-0`}>{icon}</span>}

        {/* Input Field */}
        <textarea
          type="text"
          placeholder={placeholder}
          {...register(name, validationRules)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full bg-transparent focus:outline-none text-body-m placeholder:text-dark/50  placeholder:text-primary-white/50 text-primary-white text-[15px] font-medium leading-[26px] h-[102px]`}
        ></textarea>

        {/* Error Message */}
        {error && (
          <div className="text-primary-white italic text-[12px] leading-[26px] whitespace-nowrap flex items-center gap-[9px]">
            <span>{error}</span>
            <span className="flex-shrink-0 mr-4">
              <img src={iconError} alt="Error icon" />
            </span>
          </div>
        )}
      </div>
    </>
  );
};
