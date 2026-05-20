import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import PlanetSection from "./components/PlanetSection";
import CTA from "./components/CTA";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <PlanetSection />
      <CTA />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;