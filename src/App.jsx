import "./styles/App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Who from "./components/who";
import WhatCanYouDoSection from "./components/whatCanYouSection";
import HowToUseUsSection from "./components/howToUseUsSection";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Services /> */}
      <Who />
      <WhatCanYouDoSection />
      <HowToUseUsSection />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
