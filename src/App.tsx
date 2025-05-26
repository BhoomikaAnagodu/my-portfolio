import About from "./components/About";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
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
        <Skills />
        <ContactInfo />
        <div className="text-center py-4 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
