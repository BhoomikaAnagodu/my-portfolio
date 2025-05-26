import EmailIcon from "../assets/email.png";
import LinkedInIcon from "../assets/linkedin.png";

const ContactInfo = () => {
  return (
    <div className="main-container mx-auto snap-always snap-center">
      <section
        id="contact"
        className="relative my-auto xxs:min-h-[30vh] sm:min-h-[40vh] md:min-h-[30vh] lg:min-h-[85vh] text-center flex flex-col justify-center"
      >
        <p className="font-medium xxs:text-xs sm:text-sm md:text-base lg:my-2">
          Get in Touch
        </p>
        <h1 className="section-heading block my-2 lg:my-4">Contact Me</h1>
        <div className="block md:flex md:justify-center w-fit border-1 border-dark-brown rounded-2xl p-2 px-8 mx-auto xxs:my-4 md:my-6 lg:my-8">
          <div className="flex items-center justify-center gap-2 m-2 md:m-4">
            <img
              src={LinkedInIcon}
              alt="LinkedIn Icon"
              className="xxs:h-5 sm:h-7 lg:h-8 cursor-default"
            />
            <p className="contact-link text-sm md:text-base my-2 md:my-0">
              <a
                href="https://www.linkedin.com/in/bhoomika-anagodu/"
                target="_blank"
                className="no-underline focus:no-underline"
              >
                Bhoomika A
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 m-2 md:m-4">
            <img
              src={EmailIcon}
              alt="Email Icon"
              className="xxs:h-7 sm:h-9 lg:h-10 cursor-default"
            />
            <p className="contact-link text-sm md:text-base my-2 md:my-0">
              <a
                href="mailto:bhoomika.anagodu@gmail.com"
                className="no-underline focus:no-underline"
              >
                bhoomika.anagodu@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
