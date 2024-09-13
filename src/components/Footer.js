import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Information */}
        <div>
          <p className="text-xl font-bold mb-4">About Us</p>
          <h5 className="mb-4">
            We are a leading real estate company offering the best deals for buying, selling, and renting properties.
            Our mission is to provide exceptional services to our clients with transparency and professionalism.
          </h5>
          <div className="space-y-2">
            <h5 className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> 123 Real Estate St., City, State, ZIP
            </h5>
            <h5 className="flex items-center">
              <FaPhone className="mr-2" /> (123) 456-7890
            </h5>
            <h5 className="flex items-center">
              <FaEnvelope className="mr-2" /> info@realestate.com
            </h5>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <p className="text-xl font-bold mb-4">Follow Us</p>
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
          <p className="text-xl font-bold mb-4">Subscribe to Our Newsletter</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
            />
            <button
              type="submit"
              className="w-full bg-white text-black px-4 py-2 rounded hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <h5>&copy; 2024 Real Estate Company. All rights reserved.</h5>
        <h5>
          <a href="#privacy" className="hover:text-blue-500">Privacy Policy</a> | 
          <a href="#terms" className="hover:text-blue-500"> Terms & Conditions</a>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
