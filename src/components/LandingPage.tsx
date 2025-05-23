import ProfilePic from "../assets/profile_pic.png";
import LinkedinIcon from "../assets/linkedin.png";
import GitHubIcon from "../assets/github.png";
import BhoomikaA_Resume from "../assets/Bhoomika_A.pdf";
import { scrollToElement } from "../utils/utils";

const LandingPage = () => {
  return (
    <section className="block lg:flex justify-center lg:gap-11 xl:gap-16">
      <div className="xxs:w-[37vw] xs:w-[35vw] xs:h-[35vw] sm:w-[37vw] sm:h-[37vw] md:w-[32vw] md:h-[32vw] lg:w-[34vw] lg:h-[34vw] xl:w-100 xl:h-100 mx-auto lg:my-auto">
        <img src={ProfilePic} alt="Bhoomika Anagodu Profile Picture" />
      </div>
      <div className="my-8 lg:my-0 xl:my-0 text-center self-center">
        <p className="font-medium">Hello, I'm</p>
        <h1 className="xxs:text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl opacity-90 animate-fadeIn">
          Bhoomika Anagodu
        </h1>
        <p className="mx-auto xxs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl xxs:my-1.5 sm:my-2 md:my-2 lg:my-4 xl:my-4 whitespace-nowrap overflow-hidden animate-typewrite">
          Senior Software Engineer
        </p>
        <div className="flex justify-center gap-4 my-2 lg:my-0">
          <a
            className="btn border-2 border-dark-grey hover:bg-dark-grey hover:text-white"
            href={BhoomikaA_Resume}
            target="_blank"
          >
            Download CV
          </a>
          <button
            className="btn border-2 border-dark-grey bg-dark-grey text-white"
            onClick={() => scrollToElement("contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container" className="flex justify-center mt-4 gap-4">
          <a
            href="https://www.linkedin.com/in/bhoomika-anagodu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedinIcon}
              alt="My Linkedin Profile"
              className="icon"
            />
          </a>
          <a
            href="https://github.com/BhoomikaAnagodu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="My Github Profile" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
