import EmailIcon from "../assets/email.png";
import LinkedInIcon from "../assets/linkedin.png";

const ContactInfo = () => {
  return (
    <section
      id="contact"
      className="xxs:h-[60dvh]! md:h-[70dvh]! lg:h-[70dvh]! text-center flex flex-col justify-center"
    >
      <p className="font-medium xxs:text-xs md:text-base">Get in Touch</p>
      <h1 className="xxs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium block my-2 lg:my-4">
        Contact Me
      </h1>
      <div className="block lg:flex lg:justify-center w-fit border-1 border-grey rounded-4xl p-2 mx-auto xxs:my-4 md:my-6 lg:my-8">
        <div className="flex items-center justify-center gap-2 m-2 md:m-4">
          <img
            src={LinkedInIcon}
            alt="LinkedIn Icon"
            className="xxs:h-5 sm:h-7 lg:h-8 cursor-default"
          />
          <p className="nav-link text-sm md:text-base">
            <a
              href="https://www.linkedin.com/in/bhoomika-anagodu/"
              target="_blank"
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
          <p className="nav-link text-sm md:text-base">
            <a href="mailto:bhoomika.anagodu@gmail.com">
              bhoomika.anagodu@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
