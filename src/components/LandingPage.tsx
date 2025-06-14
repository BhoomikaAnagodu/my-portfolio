import ProfilePic from "../assets/profile_pic.webp";
import LinkedinIcon from "../assets/linkedin.png";
import GitHubIcon from "../assets/github.png";

const LandingPage = () => {
  return (
    <div className="main-container mx-auto snap-always snap-center">
      <section
        id="home"
        className="py-[15vh] min-h-[70vh] section-height grid md:grid-cols-1 gap-15 lg:gap-0 lg:flex"
      >
        <div className="lg:w-4/9 my-auto md:mx-auto">
          <img
            src={ProfilePic}
            className="xxs:w-3/5 xs:w-3/6 md:w-5/12 lg:w-6/8 mx-auto"
            alt="Bhoomika Anagodu Profile Picture"
          />
        </div>
        <div className="lg:w-5/9 lg:my-auto text-center">
          <p className="font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-[45px] xl:text-6xl font-semibold my-2 opacity-90 animate-fadeIn">
            Bhoomika Anagodu
          </h1>
          <p className="text-lg tracking-wide md:text-xl xl:text-2xl font-medium my-2 mx-auto whitespace-nowrap overflow-hidden animate-typewrite text-wineberry-950">
            Senior Software Engineer
          </p>
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
