import { useEffect, useRef, useState } from "react";

import { scrollToElement } from "../utils/utils";
import { NAV_ITEMS } from "../utils/constant";

import Hamburger_Menu from "../assets/hamburger-menu.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string>(
    NAV_ITEMS[0].value
  );

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");

    const handleSnapScroll = () => {
      const threshold = window.innerHeight / 2;

      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.value);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < threshold) {
            setActiveNavItem(item.value);
            break;
          }
        }
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleSnapScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleSnapScroll);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 bg-white w-full z-110 shadow-header">
      <div className="main-container mx-auto">
        {/* Desktop View Header */}
        <nav
          id="desktop-nav"
          className="hidden lg:flex justify-between items-center xl:px-8 lg:h-18 xl:h-20"
        >
          <div className="font-allura text-dark-brown lg:text-[28px] xl:text-3xl cursor-default">
            Bhoomika Anagodu
          </div>
          <ul className="lg:flex items-center lg:gap-6 xl:gap-8 nav-list">
            {NAV_ITEMS.map((item) => {
              return (
                <li key={item.label} className="nav-link cursor-pointer">
                  <p
                    className={
                      activeNavItem === item.value
                        ? "text-brown underline decoration-brown-600 underline-offset-10"
                        : ""
                    }
                    onClick={() => {
                      setActiveNavItem(item.value);
                      scrollToElement(item.value);
                    }}
                  >
                    {item.label}
                  </p>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile/iPad View Header */}
        <nav
          id="hamburger-nav"
          className="relative flex justify-between items-center w-11/12 md:w-10/12 mx-auto lg:hidden xl:hidden h-12 md:h-16"
        >
          <div className="font-allura text-dark-brown xxs:text-xl xs:text-2xl md:text-3xl cursor-default">
            Bhoomi
          </div>
          <div className="relative" ref={menuRef}>
            <div className="w-7 md:w-8 cursor-pointer" onClick={toggleMenu}>
              <img src={Hamburger_Menu} />
            </div>
            {openMenu && (
              <ul className="absolute right-0 bg-white shadow-menu rounded-xl w-fit overflow-hidden xxs:my-4 xs:my-4 md:my-6 z-120 p-2">
                {NAV_ITEMS.map((item) => {
                  return (
                    <li key={item.label} className="menu-link cursor-pointer">
                      <p
                        className={`${
                          activeNavItem === item.value ? "active-menu-link" : ""
                        } px-2`}
                        onClick={() => {
                          setActiveNavItem(item.value);
                          scrollToElement(item.value);
                          toggleMenu();
                        }}
                      >
                        {item.label}
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
