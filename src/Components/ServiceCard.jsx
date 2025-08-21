import React from "react";

const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl cursor-pointer transition">
    <div className="text-brandGold text-4xl mb-4">{icon}</div>
    <h3 className="font-heading font-bold text-xl mb-2 text-brandRed">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ServiceCard;
