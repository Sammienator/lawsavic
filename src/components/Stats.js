import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaHome, FaHandshake } from 'react-icons/fa';
import {GiHouseKeys} from "react-icons/gi";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-7xl font-extrabold text-center mb-8 ">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div ref={ref} className="stat-item p-6  rounded-lg shadow-lg">
            <FaHome className="text-6xl text-black mx-auto mb-4" />
            <p className=" font-semibold">Houses Sold</p>
            {inView && <CountUp end={300} duration={5} className="text-2xl font-bold" />}
          </div>
          <div ref={ref} className="stat-item p-6  rounded-lg shadow-lg">
            <GiHouseKeys className="text-6xl text-black mx-auto mb-4" />
            <p className=" font-semibold">Homes Rented</p>
            {inView && <CountUp end={150} duration={8} className="text-2xl font-bold" />}
          </div>
          <div ref={ref} className="stat-item p-6  rounded-lg shadow-lg">
            <FaHandshake className="text-6xl text-black mx-auto mb-4" />
            <p className=" font-semibold">Clients Benefited</p>
            {inView && <CountUp end={500} duration={13} className="text-2xl font-bold" />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
