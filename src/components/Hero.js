import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import da1 from '../assets/da1.jpeg';
import da2 from '../assets/da2.jpeg';
import da3 from '../assets/da3.jpeg';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';

AOS.init();

const images = [
  { src: da1, alt: 'Prime Upper High School Land For Sale.' },
  { src: da2, alt: 'Fully Equipped Facilities' },
  { src: da3, alt: 'State of the art Learning Facility' },
  { src: home1, alt: 'Luxurious villas with pools and garden views' },
  { src: home2, alt: 'Cozy family homes with welcoming Spaces' }
];

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Set `isAtTop` to true only if scroll position is at the top (0); else, set to false
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full transition-transform duration-300 ${isAtTop ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-white shadow-md p-4"> {/* Navbar content */}
        <h1>My Navbar</h1>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeEffect, setFadeEffect] = useState(false);
  const [currentAlt, setCurrentAlt] = useState(images[0].alt);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeEffect(true);
      setTimeout(() => {
        const nextImage = (currentImage + 1) % images.length;
        setCurrentImage(nextImage);
        setCurrentAlt(images[nextImage].alt);
        setFadeEffect(false);
      }, 1000); // Duration of the fade effect
    }, 8000); // Image stays visible for 8 seconds, with 1 second fade

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div id="home" className="h-screen relative ">
      <Navbar /> {/* Add the Navbar here */}
      <div
        className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ${fadeEffect ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${images[currentImage].src})` }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50" data-aos="fade-in" data-aos-duration="1500">
          <div className="text-center text-white" data-aos="zoom-in" data-aos-delay="500">
            <h1 className="text-5xl font-bold mt-24">{currentAlt}</h1>
            <p className="mb-8 text-xl italic">Browse through our newest listings and find the perfect home for you.</p>
            <div className="space-x-4">
              <button onClick={() => document.getElementById('houses').scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black text-2xl px-4 py-2 rounded transform hover:scale-110 transition-transform duration-300">View Houses</button>
              <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="bg-black px-4 py-2 text-2xl rounded transform hover:scale-110 transition-transform duration-300">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sr-only">
        <p>{images[currentImage].alt}</p>
      </div>
    </div>
  );
};

export default Hero;