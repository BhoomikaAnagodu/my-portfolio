import { useState } from "react";

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
        <div className="text-3xl cursor-default">Bhoomika Anagodu</div>
        <div>
          <ul className="flex gap-8 text-2xl">
            <li>
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className="nav-link" href="#projects">
                Project
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        id="hamburger-nav"
        className="flex justify-around items-center lg:hidden xl:hidden 2xl:hidden h-[17dvh]"
      >
        <div className="text-3xl cursor-default">Bhoomika Anagodu</div>
        <div className="relative inline-block">
          <div
            className="flex flex-col justify-between w-8 h-6 cursor-pointer transition-all ease-in-out duration-300"
            onClick={toggleMenu}
          >
            <span
              className={`${
                openMenu ? "transform rotate-45 translate-y-2.5" : "opacity-100"
              } w-full h-1 bg-black`}
            ></span>
            <span
              className={`${openMenu ? "opacity-0" : ""} w-full h-1 bg-black`}
            ></span>
            <span
              className={`${
                openMenu ? "transform -rotate-45 -translate-y-2.5" : ""
              } w-full h-1 bg-black`}
            ></span>
          </div>
          {openMenu && (
            <ul className="absolute top-[100%] right-0 bg-white w-fit max-h-80 overflow-hidden py-2 transition-all ease-in-out duration-300">
              <li>
                <a className="menu-link" href="#about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a
                  className="menu-link"
                  href="#experience"
                  onClick={toggleMenu}
                >
                  Experience
                </a>
              </li>
              <li>
                <a className="menu-link" href="#projects" onClick={toggleMenu}>
                  Project
                </a>
              </li>
              <li>
                <a className="menu-link" href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
