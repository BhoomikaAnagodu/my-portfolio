import ProfilePic from "../assets/profile_pic.png";
import LinkedinIcon from "../assets/linkedin.png";
import GitHubIcon from "../assets/github.png";
// import BhoomikaA_Resume from "../assets/Bhoomika_A.pdf";
// import { scrollToElement } from "../utils/utils";

const LandingPage = () => {
  return (
    <div className="main-container mx-auto snap-always snap-center">
      <section id="home" className="section-height grid md:grid-cols-1 lg:flex">
        <div className="lg:w-1/2 my-auto md:mx-auto">
          <img
            src={ProfilePic}
            className="xxs:w-4/5 xs:w-3/4 md:w-3/5 lg:w-3/4 xl:w-3/4 mx-auto"
            alt="Bhoomika Anagodu Profile Picture"
          />
        </div>
        <div className="lg:w-1/2 mt-10 lg:my-auto text-center">
          <p className="font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-[45px] xl:text-6xl font-semibold my-2 opacity-90 animate-fadeIn">
            Bhoomika Anagodu
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl font-medium my-2 mx-auto whitespace-nowrap overflow-hidden animate-typewrite text-dark-brown">
            Senior Software Engineer
          </p>
          {/* <div className="flex justify-center gap-4 my-2 lg:my-6">
            <a
              className="btn border-2 border-zinc-800 hover:bg-zinc-800 hover:text-neutral-100"
              href={BhoomikaA_Resume}
              target="_blank"
            >
              Download CV
            </a>
            <button
              className="btn border-2 border-zinc-800 bg-zinc-800 text-neutral-100"
              onClick={() => scrollToElement("contact")}
            >
              Contact Info
            </button>
          </div> */}
          <div
            id="socials-container"
            className="flex justify-center my-4 gap-4"
          >
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
    </div>
  );
};

export default LandingPage;
