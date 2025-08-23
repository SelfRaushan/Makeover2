import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        alert(`Thank you, ${formData.name}! Your message has been received.`);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.");
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-pink-50 py-16 px-6 sm:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left - Contact Info */}
          <div className="p-8 bg-pink-100 flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-extrabold text-pink-700">
              Get In Touch
            </h2>
            <p className="text-pink-800 leading-relaxed">
              Reach out for consultations, appointments, or any questions.
              We’re here to help you shine on your special day!
            </p>

            <div className="space-y-4 text-pink-700">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-pink-600 w-6 h-6" />
                <span className="text-lg">+91 98772 78125</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-pink-600 w-6 h-6" />
                <span className="text-lg">info@makeover.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-pink-600 w-6 h-6" />
                <span className="text-lg">
                  Leena Pandey, Vastu Ganga Colony, Gola Road, Patna, Bihar,
                  801503, India
                </span>
              </div>
            </div>

            
          </div>

          {/* Right - Contact Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-pink-700"
                >
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-pink-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-lg font-semibold text-pink-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-pink-700"
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="mt-1 w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                ></textarea>
              </div>

              {error && (
                <p className="text-red-600 text-sm font-semibold">{error}</p>
              )}

              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full w-full transition"
              >
                Send Message
              </button>

              {submitted && (
                <p className="mt-4 text-green-600 font-semibold">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>   
        </div>
        
      </div>
      {/* Google Map Embed */}
            <div className="rounded-lg overflow-hidden mt-6 shadow-lg">
              <iframe
                title="Makeover Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.5838583627906!2d85.12134571502737!3d25.644946483704082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f47ed746bf4c79%3A0x3d71ff729ced1678!2sVastu%20Ganga%20Colony%2C%20Patna%2C%20Bihar%20801503%2C%20India!5e0!3m2!1sen!2sus!4v1687512345678!5m2!1sen!2sus"
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen
                className="border-0"
              ></iframe>
            </div>
    </motion.div>
  );
};

export default Contact;
