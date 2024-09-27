import React, { useState } from "react";
import "flowbite/dist/flowbite.css";

import slideImage1 from "../assets/Carousel_photo1.jpg";
import slideImage2 from "../assets/Carousel_photo2.jpg";
import slideImage3 from "../assets/coooordi.jpg";
import slideImage4 from "../assets/photoq.jpg";
import slideImage5 from "../assets/1684315531854-IT_Building,_NIT_Jalandhar_05.jpeg";
import Team from "../components/Team";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 1, image: slideImage1, text: "Primer Slide" },
    { id: 2, image: slideImage2, text: "" },
    { id: 3, image: slideImage3, text: "" },
    { id: 4, image: slideImage4, text: "" },
    { id: 5, image: slideImage5, text: "" },
  ];

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="max-w-10xl mt-0 mx-auto mh-auto">
      <div className="relative" data-carousel="static">
        <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${
                index === activeIndex ? "block" : "hidden"
              } duration-700 ease-in-out absolute inset-0`}
              data-carousel-item
            >
              {slide.text && (
                <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl">
                  {slide.text}
                </span>
              )}
              <img
                src={slide.image}
                className="block absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-white" : "bg-gray-300"
              }`}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={prevSlide}
          data-carousel-prev
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">left</span>
          </span>
        </button>

        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={nextSlide}
          data-carousel-next
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">right</span>
          </span>
        </button>
      </div>
      <Team></Team>

      <div className="announcements">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl text-center">
          Announcement
        </h2>
        <div className="announcement-container">
          <div className="announcement">
            <p>➔ Launch of Logo Making Competition. Register NOW!</p>
            <p>➔ Pace Society 2024 </p>
          </div>
          <div className="announcement">
            <p>➔ NITJ 2024</p>
            <p>➔ Orientation Session for the junior of NIT Jalandhar. </p>
          </div>
          <div className="announcement">
            <p>➔ Engineer Day 2024</p>
            <p>
              ➔ Nurturing Future Engineers. Stay tuned for r the fun activities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
