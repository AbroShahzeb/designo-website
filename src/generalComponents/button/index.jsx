export const Button = ({
  variant = "primary",
  label = "",
  disabled = false,
  onClick,
  className = "",
  type = "button",
}) => {
  const variants = {
    primary:
      "py-4 px-6 rounded-[8px] bg-primary-peach text-primary-white flex items-center justify-center text-[15px] font-medium tracking-[1px] uppercase leading-normal hover:bg-secondary-light-peach transition-all",
    secondary:
      "py-4 px-6 rounded-[8px] bg-primary-white text-primary-black flex items-center justify-center text-[15px] font-medium tracking-[1px] uppercase leading-normal hover:bg-secondary-light-peach hover:text-primary-white transition-all",
  };

  return (
    <button
      className={`${variants[variant]} ${className}`}
      disabled={disabled}
      onClick={() => onClick && onClick()}
      type={type}
    >
      {label && label}
    </button>
  );
};
