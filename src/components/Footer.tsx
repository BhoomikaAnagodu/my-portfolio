import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <div className="place-items-center sm:h-[20dvh] md:h-[26dvh]">
      <NavLinks isFooter={true} />
      <p className="text-grey font-light xxs:text-[10px] sm:text-sm">
        Copyright © 2025 Bhoomika Anagodu. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
