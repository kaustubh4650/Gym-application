import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero"
import WorkoutSessions from "./components/WorkoutSessions"
import Gallery from "./components/Gallery"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import BMICalculator from "./components/BMICalculator"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <WorkoutSessions />
        <Gallery />
        <Pricing />
        <Contact />
        <BMICalculator />
        <Footer />
        <ToastContainer position="top-center" theme="dark" />
      </Router>
    </>
  )
}

export default App;