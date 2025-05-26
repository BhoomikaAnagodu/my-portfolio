import { TECH_STACK } from "../utils/constant";

const Skills = () => {
  return (
    <div className="main-container mx-auto snap-always snap-center">
      <section
        id="skills"
        className="xxs:my-[10vh] xs:my-[7vh] md:my-0 md:min-h-[70vh] section-height text-center flex flex-col justify-center"
      >
        <p className="font-medium xxs:text-xs sm:text-sm md:text-base my-1 lg:my-2">
          Tools & Tech I Use
        </p>
        <h1 className="section-heading">My Skills</h1>
        <div className="w-11/12 mx-auto my-4 md:my-6 lg:my-8">
          <div className="flex gap-2 flex-wrap items-center justify-center">
            {TECH_STACK.map((stack) => {
              return (
                <div className="flex items-center m-1 py-2 px-4 border-1 border-brown rounded-lg cursor-default bg-neutral-50 hover:scale-103 transform duration-300 ease-in">
                  <img
                    src={stack.icon}
                    alt={`${stack.name} Icon`}
                    className="w-5"
                  />
                  <p className="text-base md:text-lg px-2">{stack.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
