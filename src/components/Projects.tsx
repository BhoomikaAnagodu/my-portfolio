import { useState } from "react";
import Code from "../assets/code.svg";
import UpArrow from "../assets/up-arrow.svg";

import { PROJECTS_LISTING } from "../utils/constant";
import Modal from "./Modal";
import { isMobile } from "../utils/utils";

const ProjectDetails = ({
  project,
}: {
  project: {
    name: string;
    image: string;
    description: string;
    tech_stack: string[];
    github_link: string;
    live_website_link: string;
  };
}) => {
  return (
    <div className="cursor-default lg:bg-wineberry-50/90 h-full backdrop-blur-lg lg:opacity-0 lg:absolute lg:-bottom-10 w-full transition-all duration-500 lg:rounded-xl">
      <div className="text-wineberry-900 text-left p-4 py-6">
        <h3 className="text-xl font-semibold text-wineberry-900 text-shadow-2md">
          {project.name}
        </h3>
        <p className="text-sm my-2 text-wineberry-800">{project.description}</p>
        <div className="flex flex-wrap gap-2 py-1">
          {project.tech_stack.map((stack: string, idx: number) => (
            <span
              key={`${stack}_${idx}`}
              className="bg-wineberry-900 text-wineberry-200 px-2.5 py-1 text-sm rounded-2xl"
            >
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
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const toggleModal = (index: number) => {
    if (isMobile()) {
      setSelectedProject((prev) => (prev === index ? null : index));
    }
  };

  console.log("selectedProject", selectedProject);

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
        <div className="w-10/12 lg:w-full xl:w-10/12 mx-auto grid lg:grid-cols-2 gap-10 my-8">
          {PROJECTS_LISTING.map((project, index) => (
            <div
              key={`${project.name}_${index}`}
              onClick={() => toggleModal(index)}
              className="lg:hover:[&>div]:opacity-100 lg:hover:[&>div]:bottom-0 relative bg-cover bg-center w-full h-50 xs:h-60 md:h-85 lg:h-70 rounded-xl cursor-pointer"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              {!isMobile() && <ProjectDetails project={project} />}
              <div onClick={(e) => e.stopPropagation()}>
                {selectedProject === index && (
                  <Modal onClose={() => setSelectedProject(null)}>
                    <ProjectDetails project={project} />
                  </Modal>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
