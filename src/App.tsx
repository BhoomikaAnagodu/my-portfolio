import About from "./components/About";
import ContactInfo from "./components/ContactInfo";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div className="relative">
      <Header />
      <div
        id="scroll-container"
        className="snap-y snap-mandatory overflow-y-scroll section-height"
      >
        <LandingPage />
        <About />
        <ContactInfo />
      </div>
    </div>
  );
};
export default App;
