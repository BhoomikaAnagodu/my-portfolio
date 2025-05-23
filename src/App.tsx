import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div className="main-container mx-auto">
      <Header />
      <LandingPage />
      <ContactInfo />
      <Footer />
    </div>
  );
};
export default App;
