import React from 'react';
import NavBar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import HouseSection from '../src/components/HouseSection';
import NewsletterSection from '../src/components/NewsletterSection';
import  BlogSection from '../src/components/BlogSection';
import Footer from '../src/components/Footer';
import ContactSection from './components/ContactSection';


import Aos from 'aos';

import './App.css';
import AboutUs from './components/AboutUs';
import Stats from './components/Stats';
import Two  from './components/Two';

// this is so cool

function App() {

  Aos.init({
    duration: 3000, // Animation duration in milliseconds
  });

  return (

      <div className="App">
        <NavBar />
        <Hero/>
        <AboutUs/>
        <Two/>
        <Stats/>
        <HouseSection/>
        <NewsletterSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
 
  );
}

export default App;
