"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleSlides = windowWidth >= 768 ? 3 : 1;
  const slideWidth = windowWidth >= 768 ? 300 : 200;

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleUserInteraction = (callback: () => void) => {
    setIsUserInteracting(true);
    callback();
    setTimeout(() => setIsUserInteracting(false), 3000);
  };

  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    if (isUserInteracting) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (direction === "forward") {
          if (prev >= images.length - 1) {
            setDirection("backward");
            return prev - 1;
          }
          return prev + 1;
        } else {
          if (prev <= 0) {
            setDirection("forward");
            return prev + 1;
          }
          return prev - 1;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [direction, isUserInteracting, images.length]);

  const getOffset = (index: number) => index - currentIndex;

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="relative flex justify-center items-center h-[350px] md:h-[400px]">
        {images.map((image, index) => {
          const offset = getOffset(index);
          const scale = Math.max(0.7, 1 - Math.abs(offset) * 0.15);
          const translateX = offset * slideWidth;
          const zIndex = 50 - Math.abs(offset);

          return (
            <div
              key={index}
              className="absolute transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                zIndex,
              }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[300px] md:h-[350px] object-cover"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        onClick={() => handleUserInteraction(prevSlide)}
        disabled={currentIndex === 0}
        className={`absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:bg-gray-200 transition z-50 ${
          currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => handleUserInteraction(nextSlide)}
        disabled={currentIndex === images.length - 1}
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:bg-gray-200 transition z-50 ${
          currentIndex === images.length - 1
            ? "opacity-40 cursor-not-allowed"
            : ""
        }`}
      >
        <FaArrowRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition ${
              currentIndex === idx ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
