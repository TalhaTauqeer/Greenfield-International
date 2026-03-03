"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  const slides = [
    { src: "/images/OutsideSchool.png", alt: "OutsideSchool", href: "/" },
    { src: "/images/BusStand.png", alt: "Bus Stand ", href: "/" },
    { src: "/images/Class.png", alt: "Classroom", href: "/" },
    { src: "/images/Playground.png", alt: "Playground", href: "/" },
    { src: "/images/ChemistryLab.png", alt: "ChemistryLab", href: "/" },
    { src: "/images/Auditorium.png", alt: "Auditorium", href: "/" },
  ];

  const [current, setCurrent] = useState(0);

  // Function to go to the previous slide
  const previousSlide = useCallback(() => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  }, [current, slides.length]); // Add slides.length to dependencies

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }, [current, slides.length]); // Add slides.length to dependencies

  // Automatically slide every 3-4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4000 ms (4 seconds)
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [nextSlide]); // Dependency array only includes nextSlide

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition-all ease-out duration-500`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full shrink-0">
            {slide.href ? (
              <Link href={slide.href}>
                <div className="w-full relative" style={{ paddingTop: '32.29%' }}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="absolute top-0 left-0"
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </Link>
            ) : (
              <div className="w-full relative" style={{ paddingTop: '32.29%' }}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="absolute top-0 left-0"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation and Dots Container */}
      <div className="absolute bottom-1.5 md:bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 md:gap-5 bg-transparent py-0 px-0 sm:py-1 sm:px-2 lg:py-0.5 lg:px-2.5 xl:py-1 xl:px-3 rounded-full shadow-md sm:text-sm">
        <button
          onClick={previousSlide}
          className="text-md md:text-xl lg:text-2xl text-blue-500 font-bold rounded-full p-1 md:p-2 hover:bg-gray-200 sm:p-1 sm:text-xl"
        >
          <IoIosArrowBack />
        </button>

        {/* Dots */}
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <div
              key={"circle" + i}
              onClick={() => setCurrent(i)}
              className={`rounded-full w-2 h-2 md:w-2 md:h-2 lg:w-3 lg:h-3 cursor-pointer ${
                i === current ? "bg-blue-500" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="text-md md:text-xl lg:text-2xl text-blue-500 font-bold rounded-full p-1 md:p-2 hover:bg-gray-200 sm:p-1 sm:text-xl"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
