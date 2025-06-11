export const scrollToElement = (id: string) => {
  console.log("scrollToElement Called");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const isMobile = () => window.innerWidth < 1024;
