import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBullseye, FaEye } from 'react-icons/fa';
import woman from '../assets/woman.png'
import vision from '../assets/vision.jpg'
import mission from '../assets/mission.jpg'
import man from  '../assets/man.png'


const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="about-us bg-gray-100 py-12">
      <div className="container mx-auto">
        {/* Our Mission Section */}
        <div className="flex flex-col md:flex-row items-center mb-12" data-aos="fade-up">
          <div className="w-full md:w-1/2 text-center md:text-left p-6">
            <FaBullseye className="text-4xl text-center text-black mx-auto md:mx-0 mb-4" />
            <h2 className="text-6xl text-center font-bold mb-4">Our Mission</h2>
            <p className=" text-center mb-4">
            "For Lawsavic Investments Ltd; Our mission is to provide transparent and reliable real estate services that foster growth and a sense of family.  

            </p>

            <p className='text-center' > " With a decade of expertise in lands, property management, and consultancy, we are dedicated to offering tailored solutions for everyone. <br/> For us, real estate is more than a transaction—it's a journey."</p>
          </div>
          <div className="w-full md:w-1/2 p-8 ">
            <img
              src={mission}
              alt="Our Mission"
              className="w-3/4 h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="flex flex-col md:flex-row items-center mb-12" data-aos="fade-up">
          <div className="w-full md:w-1/2 p-6 order-2 md:order-1">
            <img
              src={vision}
              alt="Our Vision"
              className="w-3/4 h-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left p-6 order-1 md:order-2">
            <FaEye className="text-4xl text-black mx-auto md:mx-0 mb-4" />
            <h2 className="text-6xl text-center font-bold mb-4">Our Vision</h2>
            <p className=" text-center mb-4">
            " Our vision at is to be the trusted partner in real estate, known for our commitment to transparency, fostering growth, and nurturing a sense of family. We aspire to create communities where extended families, starting-up couples, and singles can find their perfect home."
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section p-8" data-aos="fade-up">
          <h2 className="text-7xl font-extrabold text-center mb-8 ">Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="team-member text-center p-4">
              <img
                src={woman}
                alt="Team Member 1"
                className="w-28 h-28 rounded-full mx-auto mb-4"
              />
              <h4 className=" font-semibold">Wangari Maathai</h4>
              <p className="text-gray-600">Sales and Marketing</p>
              <blockquote className="mt-4 italic">"Our mission is to innovate and inspire."</blockquote>
            </div>

            <div className="team-member text-center p-4">
              <img
                src={man}
                alt="Team Member 2"
                className="w-28 h-28 rounded-full mx-auto mb-4"
              />
              <h4 className=" font-semibold">Dedan Kimathi</h4>
              <p className="text-gray-600">Operations & Administration</p>
              <blockquote className="mt-4 italic">"Our mission is to innovate and inspire."</blockquote>
            </div>


            <div className="team-member text-center p-4">
              <img
                src={woman}
                alt="Team Member 3"
                className="w-28 h-28 rounded-full mx-auto mb-4"
              />
              <h4 className=" font-semibold">Mekatilili wa Menza</h4>
              <p className="text-gray-600">Manager</p>
              <blockquote className="mt-4 italic">"Our mission is to innovate and inspire."</blockquote>
            </div>



            <div className="team-member text-center p-4">
              <img
                src={man}
                alt="Team Member 4"
                className="w-28 h-28 rounded-full mx-auto mb-4"
              />
              <h4 className=" font-semibold">Tom Mboya</h4>
              <p className="text-gray-600">Managing Director</p>
              <blockquote className="mt-4 italic">"We strive for excellence in all we do."</blockquote>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
