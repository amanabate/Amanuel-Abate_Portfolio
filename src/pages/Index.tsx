
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Education from '../components/Education';
import BeyondCode from '../components/BeyondCode';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Services />
      <Experience />
      <Education />
      <BeyondCode />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
