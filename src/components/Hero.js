import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage1 from '../assets/heroImage.jpg'; // Adjust the paths according to your folder structure
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';

AOS.init();

const images = [
  { src: heroImage1, alt: 'A beautiful modern house with a spacious lawn' },
  { src: home1, alt: 'Luxurious villa with a pool and garden view' },
  { src: home2, alt: 'Cozy family home with a welcoming front porch' }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeEffect, setFadeEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeEffect(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFadeEffect(false);
      }, 1000); // Duration of the fade effect
    }, 6000); // Image stays visible for 5 seconds, with 1 second fade

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="h-screen relative">
      <div
        className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ${fadeEffect ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${images[currentImage].src})` }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50" data-aos="fade-in" data-aos-duration="1500">
          <div className="text-center text-white" data-aos="zoom-in" data-aos-delay="500">
            <h1 className="text-8xl font-bold mb-4">Find Your Dream Home</h1>
            <p className="mb-8 text-3xl italic">Browse through our newest listings and find the perfect home for you.</p>
            <div className="space-x-4">
              <button onClick={() => document.getElementById('houses').scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black text-2xl px-4 py-2 rounded transform hover:scale-110 transition-transform duration-300">View Houses</button>
              <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="bg-black px-4 py-2 text-2xl rounded transform hover:scale-110 transition-transform duration-300">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sr-only">
        <p>{images[currentImage].alt}</p> {/* Screen reader text for accessibility */}
      </div>
    </div>
  );
};

export default Hero;
