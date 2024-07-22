import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

AOS.init();

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Buying Your First Home',
    excerpt: 'Buying your first home is an exciting milestone. Learn the essential steps and tips to make the process smoother.',
    image: blog1,
    link: '#'
  },
  {
    id: 2,
    title: 'Top 10 Home Renovation Ideas',
    excerpt: 'Discover the top 10 home renovation ideas that can add value to your property and improve your living space.',
    image: blog2,
    link: '#'
  },
  {
    id: 3,
    title: 'How to Find the Best Real Estate Agent',
    excerpt: 'Finding the right real estate agent is crucial. Here are some tips on how to choose the best agent for your needs.',
    image: blog3,
    link: '#'
  },
  // Add more blog posts here
];

const BlogSection = () => {
  return (
    <div id="blog" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a href={post.link} className="text-blue-500 hover:text-blue-700">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
