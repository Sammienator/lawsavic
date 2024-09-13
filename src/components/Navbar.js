import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-transparent" data-aos="fade-up" data-aos-duration="1500">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold" id='logo'>Lawsavic Investment Limited</div>
        <div id='navs' className="hidden text-xl md:flex space-x-4">
          <a href="#home" className="text-white">Home</a>
          <a href="#houses" className="text-white">Houses</a>
          <a href="#blog" className="text-white">Blog</a>
          <a href="#contact" className="text-white">Contact</a>
        </div>
        
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <a href="#home" className="block px-4 py-2" onClick={toggleMenu}>Home</a>
          <a href="#houses" className="block px-4 py-2" onClick={toggleMenu}>Houses</a>
          <a href="#blog" className="block px-4 py-2" onClick={toggleMenu}>Blog</a>
          <a href="#contact" className="block px-4 py-2" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
