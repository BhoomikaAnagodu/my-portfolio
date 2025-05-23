import { useState } from "react";
import NavLinks from "./NavLinks";
import { scrollToElement } from "../utils/utils";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <>
      <nav
        id="desktop-nav"
        className="hidden lg:flex xl:flex 2xl:flex justify-around items-center h-[17dvh] "
      >
        <div className="text-xl md:text-2xl lg:text-3xl xl:text-3xl cursor-default">
          Bhoomika Anagodu
        </div>
        <NavLinks />
      </nav>
      <nav
        id="hamburger-nav"
        className="flex justify-around items-center lg:hidden xl:hidden 2xl:hidden h-[17dvh]"
      >
        <div className="xxs:text-2xl xs:text-2xl md:text-3xl lg:text-3xl xl:text-4xl cursor-default">
          Bhoomika Anagodu
        </div>
        <div className="relative inline-block">
          <div
            className="flex flex-col justify-between w-7 h-5 md:w-8 md:h-6 cursor-pointer transition-all ease-in-out duration-300"
            onClick={toggleMenu}
          >
            <span
              className={`${
                openMenu
                  ? "transform rotate-45 translate-y-2 md:translate-y-[11px]"
                  : "opacity-100"
              } w-full h-0.5 bg-black`}
            ></span>
            <span
              className={`${openMenu ? "opacity-0" : ""} w-full h-0.5 bg-black`}
            ></span>
            <span
              className={`${
                openMenu
                  ? "transform -rotate-45 -translate-y-[9px] md:-translate-y-[10px]"
                  : ""
              } w-full h-0.5 bg-black`}
            ></span>
          </div>
          {openMenu && (
            <ul className="absolute top-[100%] right-0 bg-transparent w-fit max-h-80 overflow-hidden py-2 transition-all ease-in-out duration-300">
              <li>
                <p
                  className="menu-link cursor-pointer"
                  onClick={() => {
                    scrollToElement("about");
                    toggleMenu();
                  }}
                >
                  About
                </p>
              </li>
              <li>
                <p
                  className="menu-link cursor-pointer"
                  onClick={() => {
                    scrollToElement("experience");
                    toggleMenu();
                  }}
                >
                  Experience
                </p>
              </li>
              <li>
                <p
                  className="menu-link cursor-pointer"
                  onClick={() => {
                    scrollToElement("projects");
                    toggleMenu();
                  }}
                >
                  Project
                </p>
              </li>
              <li>
                <p
                  className="menu-link cursor-pointer"
                  onClick={() => {
                    scrollToElement("contact");
                    toggleMenu();
                  }}
                >
                  Contact
                </p>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
