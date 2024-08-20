import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";
import FooterBg from "../../assets/website/coffee-footer.jpg";
import { translate } from "../../i18n";

interface FooterLink {
  title: string;
}

const bgImage: React.CSSProperties = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer: React.FC = () => {
  const [footerLinks, setFooterLinks] = useState<FooterLink[]>([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setFooterLinks(data.footerLinks))
      .catch((error) => console.error("Error fetching footer links:", error));
  }, []);

  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Coffee Breeze
            </a>
            <p className="pt-4">{translate("enjoy")}</p>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                {translate("links")}
              </h1>
              <ul className="space-y-3">
                {footerLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {translate(data.title)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                {translate("address")}
              </h1>
              <div>
                <p className="mb-3">{translate("location")}</p>
                <p>+994 12 555 55 55</p>

                {/* Social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-inst duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-facebook duration-200" />
                  </a>
                  <a href="#">
                    <FaTwitter className="text-3xl hover:text-twitter duration-200" />
                  </a>
                  <a href="#">
                    <FaTelegramPlane className="text-3xl hover:text-telegram duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
