import React from "react";
import { FaTruck, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { translate } from "../../i18n.tsx";

const DeliveryInfo: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-coffeeDark font-cursive">
        {translate("delService")}
      </h1>
      <div className="bg-coffeeLight p-6 rounded-lg shadow-lg">
        {/* Delivery Overview */}
        <div className="flex items-center gap-4 mb-6">
          <FaTruck className="text-5xl text-coffeeDark" />
          <h2 className="text-2xl font-semibold">{translate("fast")}</h2>
        </div>
        <p className="text-lg mb-4">{translate("fastDesc")}</p>
        <ul className="list-disc list-inside pl-4 mb-6">
          <li>{translate("time")}</li>
          <li>{translate("time2")}</li>
          <li>{translate("time3")}</li>
          <li>{translate("time4")}</li>
        </ul>

        {/* Delivery Areas */}
        <div className="flex items-center gap-4 mb-6">
          <FaMapMarkerAlt className="text-4xl text-coffeeDark" />
          <h3 className="text-xl font-semibold">{translate("rayon")}</h3>
        </div>
        <p className="text-lg mb-4">{translate("rayonTitle")}</p>
        <ul className="list-disc list-inside pl-4">
          <li>{translate("down")}</li>
          <li>{translate("up")}</li>
          <li>{translate("sub")}</li>
          <li>{translate("beyond")}</li>
        </ul>

        {/* Contact Information */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaPhone className="text-2xl text-coffeeDark" />{" "}
            {translate("contacts")}
          </h3>
          <p className="text-lg">{translate("contacts2")}</p>
          <p className="text-lg font-semibold mt-2">
            {translate("phone")}{" "}
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
