import { scrollToElement } from "../utils/utils";

type Props = {
  isFooter?: boolean;
};

const NavLinks = ({ isFooter = false }: Props) => {
  return (
    <div
      className={`${
        isFooter ? "h-[25dvh] lg:h-[17dvh]" : "lg:h-[17dvh]"
      }  place-content-center`}
    >
      <ul className="md:block lg:flex gap-8">
        <li
          className={`${
            isFooter
              ? "my-2 xxs:text-base sm:text-base"
              : "xxs:text-lg sm:text-lg"
          } md:text-xl lg:text-xl xl:text-2xl`}
        >
          <p
            className="nav-link cursor-pointer"
            onClick={() => scrollToElement("about")}
          >
            About
          </p>
        </li>
        <li
          className={`${
            isFooter
              ? "my-2 xxs:text-base sm:text-base"
              : "xxs:text-lg sm:text-lg"
          } md:text-xl lg:text-xl xl:text-2xl`}
        >
          <p
            className="nav-link cursor-pointer"
            onClick={() => scrollToElement("experience")}
          >
            Experience
          </p>
        </li>
        <li
          className={`${
            isFooter
              ? "my-2 xxs:text-base sm:text-base"
              : "xxs:text-lg sm:text-lg"
          } md:text-xl lg:text-xl xl:text-2xl`}
        >
          <p
            className="nav-link cursor-pointer"
            onClick={() => scrollToElement("projects")}
          >
            Projects
          </p>
        </li>
        <li
          className={`${
            isFooter
              ? "my-2 xxs:text-base sm:text-base"
              : "xxs:text-lg sm:text-lg"
          } md:text-xl lg:text-xl xl:text-2xl`}
        >
          <p
            className="nav-link cursor-pointer"
            onClick={() => scrollToElement("contact")}
          >
            Contact
          </p>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
