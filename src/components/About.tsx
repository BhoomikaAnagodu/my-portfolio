import { useEffect, useRef, useState } from "react";
import { ABOUT_CARD_ITEMS } from "../utils/constant";

const About = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAnimation(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="main-container mx-auto snap-always snap-center"
    >
      <section
        id="about"
        className="section-height text-center flex flex-col justify-center"
      >
        <p className="font-medium xxs:text-xs sm:text-sm md:text-base">
          Get To Know More
        </p>
        <h1 className="section-heading">About Me</h1>
        <div className="xl:w-11/12 mx-auto grid gap-2 lg:flex lg:gap-10 xxs:my-2 sm:my-4 md:my-6 lg:my-8">
          <div className="w-11/12 md:w-4/5 mx-auto lg:w-1/2 text-base md:text-lg tracking-wide text-left">
            <p className="my-4">
              Software Developer with a passion for creating high-performance,
              user-focused applications.
            </p>
            <p>
              I specialize in building intuitive and engaging software
              solutions, with a strong emphasis on clean design, efficiency, and
              adaptability. Known for being a collaborative team player, I
              thrive in dynamic environments where requirements evolve and
              innovation is encouraged. Proficient across a wide range of
              languages, frameworks, and tools.
            </p>
            <p className="my-4">Let’s build something great together!</p>
          </div>
          <div className="w-full my-5 lg:my-0 md:w-3/4 lg:w-1/2 gap-4 md:gap-6 lg:gap-0 flex flex-col items-center justify-around mx-auto">
            {ABOUT_CARD_ITEMS.map((items, index) => {
              const delay = `${index * 200}ms`;
              return (
                <div
                  key={items.heading}
                  className={`w-10/12 opacity-90 ${
                    showAnimation
                      ? `animate-fadeInTop delay-[${delay}] lg:animate-fadeInRight`
                      : "opacity-0"
                  } text-center bg-neutral-50 shadow-menu hover:shadow-lg hover:shadow-brown-400 transition-shadow duration-300 rounded-xl p-4`}
                >
                  <div className="flex items-center">
                    <div className="w-2/12">
                      <img
                        src={items.icon}
                        alt="experience icon"
                        className="icon mx-auto"
                      />
                    </div>
                    <div className="w-10/12 text-left">
                      <h3 className="font-semibold text-dark-brown">
                        {items.heading}
                      </h3>
                      <p className="text-sm">{items.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
