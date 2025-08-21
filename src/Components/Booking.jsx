import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Wedding Makeup",
    date: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, your booking request is received!`);
    // Integrate API or backend handling here
  };

  return (
    <section
      id="booking"
      className="booking-section max-w-lg mx-auto bg-white rounded-3xl shadow-xl p-10 mt-12"
      aria-label="Booking form to schedule an appointment"
    >
      <h2 className="text-4xl font-extrabold text-pink-700 text-center mb-10 tracking-wide">
        Book Your Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold text-pink-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full py-3 px-5 border-2 border-pink-300 rounded-lg text-base placeholder-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-300 transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-pink-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full py-3 px-5 border-2 border-pink-300 rounded-lg text-base placeholder-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-300 transition"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 font-semibold text-pink-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="^\+?\d{10,15}$"
            title="Enter a valid phone number"
            className="w-full py-3 px-5 border-2 border-pink-300 rounded-lg text-base placeholder-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-300 transition"
          />
        </div>

        <div>
          <label htmlFor="service" className="block mb-2 font-semibold text-pink-700">
            Select Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full py-3 px-5 border-2 border-pink-300 rounded-lg text-base focus:outline-none focus:ring-4 focus:ring-pink-300 transition"
          >
            <option>Wedding Makeup</option>
            <option>Custom Party Wear</option>
            <option>Everyday Glam</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block mb-2 font-semibold text-pink-700">
            Appointment Date
          </label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
            className="w-full py-3 px-5 border-2 border-pink-300 rounded-lg text-base placeholder-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-300 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl font-semibold text-lg tracking-wider shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-400"
        >
          Submit Request
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
