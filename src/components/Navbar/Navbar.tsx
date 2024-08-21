import React, { useState, useEffect } from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee, FaSignInAlt, FaTimes } from "react-icons/fa";
import { setLanguage, translate } from "../../i18n";
import { Link, Outlet } from "react-router-dom";
import FooterLinks from "../Footer/FooterLinks";

interface MenuItem {
  link: string;
  id: number;
  name: string;
}

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    localStorage.getItem("language") || "en"
  );
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data.menu);
      });
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-3xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Coffee Breeze
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {menuItems.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      to={`${menu.link}`}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {translate(menu.name)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 items-center">
                <button className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
                  {translate("order")}
                  <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
                <button
                  onClick={toggleModal}
                  className="bg-secondary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3"
                >
                  {translate("login")}
                  <FaSignInAlt className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
                <select
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="bg-coffeeBrown text-white px-3 py-2 rounded-lg border border-coffeeDark outline-none cursor-pointer shadow-md transition-colors duration-300 hover:bg-coffeeDark focus:ring-2 focus:ring-coffee-light focus:border-coffeeLight"
                >
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <FooterLinks />
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80 relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">
              {translate("login_or_register")}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  {translate("email")}
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder={translate("email")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  {translate("password")}
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder={translate("password")}
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
              >
                {translate("login_button")}
              </button>
              <div className="mt-4">
                <p className="text-sm">
                  {translate("dont_have_account")}{" "}
                  <button
                    type="button"
                    className="text-primary hover:underline"
                  >
                    {translate("register")}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
