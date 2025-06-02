import About from "./components/About";
import ContactInfo from "./components/ContactInfo";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="relative">
      <Header />
      <div
        id="scroll-container"
        className="overflow-y-auto snap-none lg:snap-y lg:snap-mandatory section-height"
      >
        <LandingPage />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ContactInfo />
        <div className="text-center py-4 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
