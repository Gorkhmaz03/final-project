import React from "react";
import { FaCoffee, FaHeart, FaAward, FaUsers } from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-coffeeDark font-cursive">
        About Coffee Breeze
      </h1>
      <div className="bg-coffeeLight p-6 rounded-lg shadow-lg">
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <FaCoffee className="text-3xl text-coffeeDark" />
            Our Story
          </h2>
          <p className="text-lg">
            Coffee Breeze began with a simple idea: to bring the finest coffee
            experiences to people everywhere. From our humble beginnings as a
            small local coffee shop, we have grown into a beloved brand, known
            for our commitment to quality, sustainability, and community.
          </p>
        </div>

        {/* Our Values */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <FaHeart className="text-3xl text-coffeeDark" />
            Our Values
          </h2>
          <ul className="list-disc list-inside pl-4 text-lg">
            <li className="mb-2">
              Quality: We are dedicated to providing the highest quality coffee,
              sourced from the best farms around the world.
            </li>
            <li className="mb-2">
              Sustainability: Our commitment to the environment is reflected in
              our sustainable sourcing and eco-friendly practices.
            </li>
            <li className="mb-2">
              Community: We believe in the power of community and strive to
              create spaces where people can connect over a great cup of coffee.
            </li>
          </ul>
        </div>

        {/* Our Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <FaAward className="text-3xl text-coffeeDark" />
            Our Achievements
          </h2>
          <p className="text-lg">
            Over the years, Coffee Breeze has been recognized with numerous
            awards for excellence in coffee brewing, sustainability, and
            customer service. We are proud to have been named "Best Coffee Shop"
            in our city multiple times, and we continue to innovate and push the
            boundaries of what great coffee can be.
          </p>
        </div>

        {/* Our Team */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <FaUsers className="text-3xl text-coffeeDark" />
            Meet Our Team
          </h2>
          <p className="text-lg">
            Our team is made up of passionate coffee enthusiasts, baristas, and
            industry professionals who are dedicated to making every cup of
            coffee an exceptional experience. We believe that great coffee
            starts with great people, and our team is the heart and soul of
            Coffee Breeze.
          </p>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-coffeeDark">
            Join Us on Our Coffee Journey
          </h2>
          <p className="text-lg">
            Whether you're a long-time coffee lover or new to the world of
            specialty coffee, we invite you to experience the Coffee Breeze
            difference. Come visit us, share a cup, and become part of our
            growing community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
