import Code from "../assets/code.svg";
import UpArrow from "../assets/up-arrow.svg";
import { PROJECTS_LISTING } from "../utils/constant";

const Projects = () => {
  return (
    <div className="main-container mx-auto snap-always snap-center">
      <section
        id="projects"
        className="py-[8vh] section-height text-center flex flex-col justify-center"
      >
        <p className="font-medium xxs:text-xs sm:text-sm md:text-base my-1">
          Ideas brought to life
        </p>
        <h1 className="section-heading">My Projects</h1>
        <div className="w-10/12 mx-auto grid grid-cols-2 gap-10 my-8">
          {PROJECTS_LISTING.map((project) => (
            <div
              className="hover:[&>div]:opacity-100 hover:[&>div]:bottom-0 relative bg-cover bg-center w-full h-70 rounded-xl cursor-pointer"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="bg-gray-800/20 backdrop-blur-lg opacity-0 absolute -bottom-10 w-full transition-all duration-500 rounded-b-xl">
                <div className="text-wineberry-950 text-left p-4 py-6">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-sm my-1">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tech_stack.map((stack) => (
                      <span className="bg-wineberry-300/80 px-2 py-1 text-sm rounded-2xl">
                        {stack}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 items-center mt-4">
                    <a
                      href={project.github_link}
                      target="_blank"
                      className="hover:opacity-40 hover:scare-90"
                    >
                      <img src={Code} className="w-5" />
                    </a>
                    <a
                      href={project.live_website_link}
                      target="_blank"
                      className="hover:opacity-40 hover:scare-90"
                    >
                      <img src={UpArrow} className="w-5 rotate-45" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
