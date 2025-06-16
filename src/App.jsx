import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App bg-[#001524] text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <LanguageSelector />
      </div>
    </LanguageProvider>
  );
}

export default App;
