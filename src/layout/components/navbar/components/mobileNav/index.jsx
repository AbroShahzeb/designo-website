import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const MobileNav = ({ isOpen, setIsOpen }) => {
  const variants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    shown: {
      opacity: 1,
      height: "235px",
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-primary-black/50 z-40 top-[96px]"
            onClick={() => setIsOpen(false)}
          ></div>
          <motion.div
            initial="hidden"
            animate={isOpen ? "shown" : "hidden"}
            variants={variants}
            exit="hidden"
            className="bg-primary-black fixed top-[96px] left-0 right-0 z-50 px-6 py-12 overflow-hidden"
          >
            <ul className="flex flex-col gap-8 items-start uppercase text-primary-white text-[24px] leading-[25px] tracking-[2px] font-normal">
              <NavLink
                to="/company"
                className={({ isActive }) => isActive && "underline"}
              >
                Our Company
              </NavLink>
              <NavLink
                to="/location"
                className={({ isActive }) => isActive && "underline"}
              >
                Locations
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive && "underline"}
              >
                Contact
              </NavLink>
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};