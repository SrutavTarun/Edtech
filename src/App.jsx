//import { useState } from 'react'
import React from 'react';
import './App.css';
//import Navbar from './components/navbar';
import WhatCanYouDoSection from './components/whatCanYouSection'; // Correct import statement
import './App.css'
import HowToUseUsSection from './components/howToUseUsSection';
import './components/howToUseUsSection'
import Navbar from './components/navbar'
import './components/whatCanYouSection'
import Why from './components/styles/why';
function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
  <WhatCanYouDoSection />
  <HowToUseUsSection /> 
    <Why />
    </>
  )
}

export default App
