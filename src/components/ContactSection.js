import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const houseData = [
  { id: 1, title: 'Modern Family Home' },
  { id: 2, title: 'Luxury Villa' },
  { id: 3, title: 'Cozy Cottage' },
  // Add more houses here
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    house: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.house) formErrors.house = "House selection is required";
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        house: '',
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div id="contact" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-bold mb-8 text-center" data-aos="fade-up">Contact Us</h2>
        {isSubmitted && <p className="text-green-500 text-center mb-4">Thank you! Your message has been sent.</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
          <div className="h-96 md:h-auto">
            <iframe 
              title="map"
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.00313871233!2d36.9566279!3d-1.4724963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f9f013e53b135%3A0x70bd2f07a2851aa9!2sLawsavic%20Investment%20ltd!5e0!3m2!1sen!2ske!4v1720987872056!5m2!1sen!2ske"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Select House</label>
              <select
                name="house"
                value={formData.house}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              >
                <option value="">Select a house</option>
                {houseData.map((house) => (
                  <option key={house.id} value={house.title}>
                    {house.title}
                  </option>
                ))}
              </select>
              {errors.house && <p className="text-red-500 text-sm">{errors.house}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                rows="5"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
