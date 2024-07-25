import React from 'react';
import heroImage from '../assets/heroImage.jpg'; // Adjust the path according to your folder structure
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Hero = () => {
  return (
    <div id="home" className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50" data-aos="fade-in" data-aos-duration="1500">
        <div className="text-center text-white" data-aos="zoom-in" data-aos-delay="500">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="mb-8">Browse through our newest listings and find the perfect home for you.</p>
          <div className="space-x-4">
            <button onClick={() => document.getElementById('houses').scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black px-4 py-2 rounded transform hover:scale-110 transition-transform duration-300">View Houses</button>
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="bg-black px-4 py-2 rounded transform hover:scale-110 transition-transform duration-300">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
