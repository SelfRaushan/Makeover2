import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Wedding Makeup",
    date: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.phone || !formData.date) {
    setError("Please fill all required fields.");
    setMessage("");
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    setMessage('Booking request sent successfully! We will contact you soon.');
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Wedding Makeup",
      date: "",
    });
  } catch (error) {
    setError('Failed to send booking. Please try again later.');
    setMessage('');
  }
};


  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-pink-700 mb-6 text-center">Book Your Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block">
          <span className="text-pink-700 font-semibold">Full Name *</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-pink-300 rounded-md p-2 focus:ring-2 focus:ring-pink-600"
            required
          />
        </label>

        <label className="block">
          <span className="text-pink-700 font-semibold">Email Address *</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-pink-300 rounded-md p-2 focus:ring-2 focus:ring-pink-600"
            required
          />
        </label>

        <label className="block">
          <span className="text-pink-700 font-semibold">Phone Number *</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border border-pink-300 rounded-md p-2 focus:ring-2 focus:ring-pink-600"
            required
          />
        </label>

        <label className="block">
          <span className="text-pink-700 font-semibold">Select Service *</span>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1 block w-full border border-pink-300 rounded-md p-2 focus:ring-2 focus:ring-pink-600"
          >
            <option>Wedding Makeup</option>
            <option>Custom Party Wear</option>
            <option>Everyday Glam</option>
          </select>
        </label>

        <label className="block">
          <span className="text-pink-700 font-semibold">Appointment Date *</span>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full border border-pink-300 rounded-md p-2 focus:ring-2 focus:ring-pink-600"
            required
          />
        </label>

        {error && <p className="text-red-600 font-semibold">{error}</p>}
        {message && <p className="text-green-600 font-semibold">{message}</p>}

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded-full font-bold hover:bg-pink-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
