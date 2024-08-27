import React, { useState, useEffect } from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useLanguage, translate, LanguageData } from "../../i18n.tsx";
import { Link, Outlet } from "react-router-dom";
import FooterLinks from "../Footer/FooterLinks";
import Account from "../../components/Acoount/Account";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { persistor } from "../../redux/store";
import { logOutAction } from "../../redux/slices/accountSlice";
import { useDisclosure } from "@chakra-ui/react";
import CartModal from "../Cart/CartModal";

interface MenuItem {
  link: string;
  id: number;
  name: string;
}

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const { currentLanguage, setLanguage } = useLanguage();
  const isAuthenticated = useSelector(
    (state: RootState) => state.account.isAuthenticated
  );

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data.menu);
      });
  }, [currentLanguage]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLanguage = event.target.value as keyof LanguageData;
    setLanguage(newLanguage);
  };

  const handleAuthAction = () => {
    if (isAuthenticated) {
      dispatch(logOutAction());
      persistor.purge();
    } else {
      toggleModal();
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white ">
        <div className="container mx-auto px-4 py-2 md:py-3">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-10 sm:w-14" />
                Coffee Breeze
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="hidden md:flex justify-between items-center gap-6"
            >
              <ul className="flex items-center gap-4">
                {menuItems.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      to={menu.link}
                      className="inline-block text-sm sm:text-base py-2 sm:py-4 px-2 sm:px-4 text-white/70 hover:text-white duration-200"
                    >
                      {translate(menu.name)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <button
                  onClick={onOpen}
                  className="bg-primary/70 hover:scale-105 duration-200 text-white px-3 py-2 rounded-full flex items-center gap-2 sm:gap-3"
                >
                  {translate("order")}
                  <FaCoffee className="text-lg sm:text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
                <button
                  onClick={handleAuthAction}
                  className="bg-secondary/70 hover:scale-105 duration-200 text-white px-3 py-2 rounded-full flex items-center gap-2 sm:gap-3"
                >
                  {isAuthenticated ? translate("logout") : translate("login")}
                  {isAuthenticated ? (
                    <FaSignOutAlt className="text-lg sm:text-xl text-white drop-shadow-sm cursor-pointer" />
                  ) : (
                    <FaSignInAlt className="text-lg sm:text-xl text-white drop-shadow-sm cursor-pointer" />
                  )}
                </button>
                <select
                  value={currentLanguage}
                  onChange={handleLanguageChange}
                  className="bg-coffeeBrown text-white px-3 py-2 rounded-lg border border-coffeeDark outline-none cursor-pointer shadow-md transition-colors duration-300 hover:bg-coffeeDark focus:ring-2 focus:ring-coffee-light focus:border-coffeeLight"
                >
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                </select>
              </div>
            </div>

            <CartModal isOpen={isOpen} onClose={onClose} cartSys={[]} />
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-coffeeBrown text-white px-4 py-6">
            <ul className="flex flex-col gap-4">
              {menuItems.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="block text-lg py-2 px-4 text-white/70 hover:text-white duration-200"
                    onClick={toggleMenu}
                  >
                    {translate(menu.name)}
                  </Link>
                </li>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <button
                  onClick={onOpen}
                  className="bg-primary/70 hover:scale-105 duration-200 w-1/3 text-white px-4 py-2 rounded-full flex items-center gap-3"
                >
                  {translate("order")}
                  <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>

                <button
                  onClick={handleAuthAction}
                  className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full w-1/3 flex items-center gap-3"
                >
                  {isAuthenticated ? translate("logout") : translate("login")}
                  {isAuthenticated ? (
                    <FaSignOutAlt className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  ) : (
                    <FaSignInAlt className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  )}
                </button>

                <select
                  value={currentLanguage}
                  onChange={handleLanguageChange}
                  className="bg-coffeeBrown text-white px-3 py-2 rounded-lg border border-coffeeDark outline-none cursor-pointer shadow-md transition-colors duration-300 hover:bg-coffeeDark focus:ring-2 focus:ring-coffee-light focus:border-coffeeLight"
                >
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                </select>
              </div>
            </ul>
          </div>
        )}
      </div>
      <Outlet />
      <FooterLinks />
      <Account isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
};

export default Navbar;
