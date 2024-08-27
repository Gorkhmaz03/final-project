import React from "react";
import { FaCoffee, FaHeart, FaAward, FaUsers } from "react-icons/fa";
import { translate } from "../../i18n.tsx";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-coffeeDark font-cursive">
        {translate("aboutSection")}
      </h1>
      <div className="bg-coffeeLight p-6 rounded-lg shadow-lg">
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <FaCoffee className="text-3xl text-coffeeDark" />
            {translate("story")}
          </h2>
          <p className="text-lg">{translate("storyDesc")}</p>
        </div>

        {/* Our Values */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <FaHeart className="text-3xl text-coffeeDark" />
            {translate("value")}
          </h2>
          <ul className="list-disc list-inside pl-4 text-lg">
            <li className="mb-2">{translate("quality")}</li>
            <li className="mb-2">{translate("sustainability")}</li>
            <li className="mb-2">{translate("community")}</li>
          </ul>
        </div>

        {/* Our Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <FaAward className="text-3xl text-coffeeDark" />
            {translate("achievements")}
          </h2>
          <p className="text-lg">{translate("achievementsDesc")}</p>
        </div>

        {/* Our Team */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <FaUsers className="text-3xl text-coffeeDark" />
            {translate("meet")}
          </h2>
          <p className="text-lg">{translate("meetDesc")}</p>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-coffeeDark">
            {translate("join")}
          </h2>
          <p className="text-lg">{translate("joinDesc")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
