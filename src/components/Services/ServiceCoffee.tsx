import React, { useState, useEffect } from "react";
import { translate } from "../../i18n";
import Img2 from "../../assets/coffee2.png";

interface Service {
  id: number;
  img: string;
  name: string;
  description: string;
  price: number;
  aosDelay: string;
}

const ServicesCoffee: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [cart, setCart] = useState<Service[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6;

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const addToCart = (service: Service): void => {
    setCart([...cart, service]);
    alert(`${translate(service.name)} has been added to your cart.`);
  };

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="bg-primary/10">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              {translate("best")}
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-10 place-items-center">
            {currentServices.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] mb-8"
              >
                <div className="h-[160px]">
                  <img
                    src={Img2}
                    alt={translate(service.name)}
                    className="max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">
                    {translate(service.name)}
                  </h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {translate(service.description)}
                  </p>
                  <div className="mt-4">
                    <span className="text-lg font-semibold">
                      ${service.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(service)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 mt-2 mx-auto hover:bg-blue-600"
                    >
                      {translate("addToCart")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <ul className="flex list-none">
              {Array.from(
                { length: Math.ceil(services.length / servicesPerPage) },
                (_, index) => (
                  <li key={index} className="mx-1">
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`px-3 py-1 rounded-full ${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCoffee;
