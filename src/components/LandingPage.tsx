import ProfilePic from "../assets/profile_pic.png";
import LinkedinIcon from "../assets/linkedin.png";
import GitHubIcon from "../assets/github.png";
import BhoomikaA_Resume from "../assets/Bhoomika_A.pdf";

const LandingPage = () => {
  return (
    <section className="flex justify-center gap-20 ">
      <div className="w-100 h-100 my-auto">
        <img src={ProfilePic} alt="Bhoomika Anagodu Profile Picture" />
      </div>
      <div className="text-center self-center">
        <p className="font-semibold">Hello, I'm</p>
        <h1 className="text-5xl opacity-90 animate-fadeIn">Bhoomika Anagodu</h1>
        <p className="mx-auto text-2xl my-4 whitespace-nowrap overflow-hidden animate-typewrite">
          Senior Software Engineer
        </p>
        <div className="flex justify-center gap-4">
          <a
            className="btn border-2 border-dark-grey hover:bg-dark-grey hover:text-white"
            href={BhoomikaA_Resume}
            target="_blank"
          >
            Download CV
          </a>
          <button
            className="btn border-2 border-dark-grey bg-dark-grey text-white"
            onClick={() => window.open("./#contact")}
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
