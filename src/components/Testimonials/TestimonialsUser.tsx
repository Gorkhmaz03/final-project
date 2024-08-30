import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useLanguage } from "../../i18n.tsx";
import en from "../../locales/en.json";
import ru from "../../locales/ru.json";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  img: string;
}
interface Translations {
  [key: string]: string;
}

const translations: Record<string, Translations> = {
  en: en as Translations,
  ru: ru as Translations,
};

const TestimonialsUsers: React.FC = () => {
  const [testimonialData, setTestimonialData] = useState<Testimonial[]>([]);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        const translatedData = data.testimonials.map(
          (testimonial: Testimonial) => ({
            ...testimonial,
            name:
              translations[currentLanguage][
                testimonial.name as keyof Translations
              ] || testimonial.name,
            text:
              translations[currentLanguage][
                testimonial.text as keyof Translations
              ] || testimonial.text,
          })
        );
        setTestimonialData(translatedData);
      });
  }, [currentLanguage]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            {translations[currentLanguage]["testimonials"] || "Testimonials"}{" "}
          </h1>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10  relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>{" "}
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsUsers;
