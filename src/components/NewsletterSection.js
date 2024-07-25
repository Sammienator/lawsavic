import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="mb-8">Stay updated with the latest deals and news</p>
        <form className="flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-2 rounded-l" />
          <button type="submit" className="bg-white text-black px-4 py-2 rounded-r">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default NewsletterSection;
