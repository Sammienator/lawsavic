import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="mb-4">
            We are a leading real estate company offering the best deals for buying, selling, and renting properties.
            Our mission is to provide exceptional services to our clients with transparency and professionalism.
          </p>
          <div className="space-y-2">
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> 123 Real Estate St., City, State, ZIP
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2" /> (123) 456-7890
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> info@realestate.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
            <li><a href="#houses" className="hover:text-blue-500">Houses</a></li>
            <li><a href="#about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#blog" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook size="1.5em" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaTwitter size="1.5em" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size="1.5em" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin size="1.5em" />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2024 Real Estate Company. All rights reserved.</p>
        <p>Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
