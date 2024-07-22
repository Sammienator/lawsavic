import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaHome } from 'react-icons/fa';

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div ref={ref} className="stat-item p-6 bg-white rounded-lg shadow-lg">
            <FaHome className="text-4xl text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Houses Sold</h3>
            {inView && <CountUp end={300} duration={5} className="text-2xl font-bold" />}
          </div>
          <div ref={ref} className="stat-item p-6 bg-white rounded-lg shadow-lg">
            <FaHome className="text-4xl text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Homes Rented</h3>
            {inView && <CountUp end={150} duration={8} className="text-2xl font-bold" />}
          </div>
          <div ref={ref} className="stat-item p-6 bg-white rounded-lg shadow-lg">
            <FaHome className="text-4xl text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Clients Benefited</h3>
            {inView && <CountUp end={500} duration={13} className="text-2xl font-bold" />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
