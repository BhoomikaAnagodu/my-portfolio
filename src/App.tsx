import ContactInfo from "./components/ContactInfo";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div className="relative">
      <Header />
      <div className="snap-y snap-mandatory overflow-y-scroll section-height">
        <LandingPage />
        <ContactInfo />
      </div>
    </div>
  );
};
export default App;
