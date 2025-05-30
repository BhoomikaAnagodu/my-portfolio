import { useState } from "react";
import { EXPERIENCE_LIST } from "../utils/constant";

const Experience = () => {
  const [showStep, setShowStep] = useState<number | null>(0);

  return (
    <div className="main-container mx-auto snap-always snap-center">
      <section
        id="experience"
        className="py-[8vh] section-height text-center flex flex-col justify-center"
      >
        <p className="font-medium xxs:text-xs sm:text-sm md:text-base my-1">
          The path I’ve paved
        </p>
        <h1 className="section-heading">My Experience</h1>
        <div className="w-9/12 lg:w-10/12 ml-20 sm:mx-auto my-6 text-left">
          <ul className="border-l-2 border-wineberry-900">
            {EXPERIENCE_LIST.map((list, index) => {
              return (
                <li key={list.designation + index} className="flex">
                  <div className="relative w-3/12 sm:w-2/12 ">
                    <div
                      onClick={() => setShowStep(index)}
                      className="w-[120px] lg:w-[140px] cursor-pointer text-wrap absolute top-4 -left-[54px] lg:-left-[65px] bg-stone-50 font-extralight tracking-tighter text-[10px] lg:text-xs font-mono"
                    >
                      <p>{list.timeline}</p>
                    </div>
                  </div>
                  <div className="w-9/12 sm:w-10/12">
                    <div
                      onClick={() => setShowStep(index)}
                      className="cursor-pointer hover:bg-wineberry-50 rounded-xl px-4 py-2"
                    >
                      <p className="text-sm md:text-base font-semibold">
                        {list.designation}
                      </p>
                      <p className="text-sm md:text-base text-wineberry-800">
                        {list.company_name}
                      </p>
                    </div>
                    <div
                      className={`text-sm md:text-base px-2 py-1 md:px-4 md:py-2 overflow-hidden transition-all ease-in-out duration-700 ${
                        showStep === index
                          ? "xxs:max-h-[530px] xs:max-h-[430px] md:max-h-[320px] lg:max-h-[250px] xl:max-h-[170px]"
                          : "max-h-0 opacity-0"
                      }`}
                      dangerouslySetInnerHTML={{ __html: list.description }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Experience;
