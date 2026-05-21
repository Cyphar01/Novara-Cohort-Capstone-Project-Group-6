import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import PlanetSection from "./components/PlanetSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

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


export default App
