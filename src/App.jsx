import { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Who from "./components/who";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Who />
    </>
  );
}

export default App;
