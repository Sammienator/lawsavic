import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBullseye, FaEye } from 'react-icons/fa';
import mission from '../assets/mission.jpg'
import vision from '../assets/vision.jpg'


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
            <FaBullseye className="text-4xl text-black mx-auto md:mx-0 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              Our mission is to provide exceptional real estate services to our clients by
              understanding their needs and exceeding their expectations.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-6">
            <img
              src={mission}
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="flex flex-col md:flex-row items-center mb-12" data-aos="fade-up">
          <div className="w-full md:w-1/2 p-6 order-2 md:order-1">
            <img
              src={vision}
              alt="Our Vision"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left p-6 order-1 md:order-2">
            <FaEye className="text-4xl text-black mx-auto md:mx-0 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg mb-4">
              Our vision is to be the leading real estate company, known for our integrity,
              innovation, and commitment to our clients.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="team-member text-center p-4">
              <img
                src={mission}
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO</p>
              <blockquote className="mt-4 italic">"Our mission is to innovate and inspire."</blockquote>
            </div>

            <div className="team-member text-center p-4">
              <img
                src="/path/to/your/team-member2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO</p>
              <blockquote className="mt-4 italic">"Our mission is to innovate and inspire."</blockquote>
            </div>


            <div className="team-member text-center p-4">
              <img
                src="/path/to/your/team-member3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO</p>
              <blockquote className="mt-4 italic">"Our mission is to innovate and inspire."</blockquote>
            </div>



            <div className="team-member text-center p-4">
              <img
                src="/path/to/your/team-member4.jpg"
                alt="Team Member 4"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
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
