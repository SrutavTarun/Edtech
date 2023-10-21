import { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
