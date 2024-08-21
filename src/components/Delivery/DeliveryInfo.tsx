import React from "react";
import { FaTruck, FaCoffee, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const DeliveryInfo: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-coffeeDark font-cursive">
        Coffee Delivery Service
      </h1>
      <div className="bg-coffeeLight p-6 rounded-lg shadow-lg">
        {/* Delivery Overview */}
        <div className="flex items-center gap-4 mb-6">
          <FaTruck className="text-5xl text-coffeeDark" />
          <h2 className="text-2xl font-semibold">Fast & Reliable Delivery</h2>
        </div>
        <p className="text-lg mb-4">
          At Coffee Breeze, we pride ourselves on delivering freshly brewed
          coffee right to your doorstep. Our delivery service is designed to be
          quick and convenient, ensuring that you can enjoy your favorite coffee
          without ever leaving your home.
        </p>
        <ul className="list-disc list-inside pl-4 mb-6">
          <li>Delivery available 7 days a week, 8 AM - 8 PM</li>
          <li>Fresh coffee guaranteed to be delivered within 30 minutes</li>
          <li>Wide range of coffee varieties to choose from</li>
          <li>Contactless delivery options for your safety</li>
        </ul>

        {/* Delivery Areas */}
        <div className="flex items-center gap-4 mb-6">
          <FaMapMarkerAlt className="text-4xl text-coffeeDark" />
          <h3 className="text-xl font-semibold">Delivery Areas</h3>
        </div>
        <p className="text-lg mb-4">We deliver to the following areas:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Downtown</li>
          <li>Uptown</li>
          <li>Suburban areas within a 10-mile radius</li>
          <li>Special arrangements for deliveries beyond our standard areas</li>
        </ul>

        {/* Contact Information */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaPhone className="text-2xl text-coffeeDark" /> Contact Us
          </h3>
          <p className="text-lg">
            If you have any questions about our delivery service or need
            assistance, feel free to contact us at:
          </p>
          <p className="text-lg font-semibold mt-2">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-coffeeDark hover:underline"
            >
              +994 12 333 33 33
            </a>
          </p>
          <p className="text-lg font-semibold mt-2">
            Email:{" "}
            <a
              href="mailto:delivery@coffeebreeze.com"
              className="text-coffeeDark hover:underline"
            >
              delivery@coffeebreeze.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
