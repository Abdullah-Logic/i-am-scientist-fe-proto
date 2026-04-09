"use client";

import { useMemo, useState, useCallback } from "react";
import type { ReactElement } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: `"Winning the gold medal in the AI contest was such an amazing feeling. I'm really grateful for my family's support throughout the journey."`,
    name: "Sufiyan",
    video: "/summerContest/review.mp4",
  },
  {
    quote: `"I had a great experience competing in the AI contest. Winning 1st place pushed me to think differently, and I'm excited to take on even bigger challenges ahead."`,
    name: "Yunaish",
    video: "/summerContest/review2.mp4",
  },
  {
    quote: `"Receiving the gold medal at the AI championship was a truly memorable experience. I'm so grateful to Ma'am Mariyam and Sir Arsalan for their guidance and support throughout."`,
    name: "Hania Kareem",
    video: "/summerContest/review3.mp4",
  },
  {
    quote: `"Achieving the gold medal at the AI championship means a lot to me. It's been an honour to be recognised and I'm really proud of how far I've come."`,
    name: "Zara Ahmed",
    video: "/summerContest/review4.mp4",
  },
];

const slidesData = Array.from({ length: testimonials.length }, (_, i) => ({
  id: i,
}));

const clampIndex = (index: number, length: number) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

const getOffset = (index: number, active: number, length: number) => {
  let diff = index - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
};

type PositionStyle = {
  x: string;
  scale: number;
  z: number;
  opacity: number;
};

const positionStyles: Record<number, PositionStyle> = {
  0: { x: "0%", scale: 1, z: 30, opacity: 1 },
  1: { x: "32%", scale: 0.85, z: 20, opacity: 0.6 },
  [-1]: { x: "-32%", scale: 0.85, z: 20, opacity: 0.6 },
  2: { x: "0%", scale: 0.75, z: 10, opacity: 0 },
  [-2]: { x: "0%", scale: 0.75, z: 10, opacity: 0 },
};

const TestimonialCarousel = (): ReactElement => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const length = slidesData.length;

  const visibleSlides = useMemo(
    () =>
      slidesData.map((slide) => ({
        ...slide,
        offset: getOffset(slide.id, active, length),
      })),
    [active, length],
  );

  const go = useCallback(
    (next: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActive(next);
        setAnimating(false);
      });
    },
    [animating],
  );

  const handlePrev = () => go(clampIndex(active - 1, length));
  const handleNext = () => go(clampIndex(active + 1, length));

  return (
    <section className="w-full overflow-hidden py-5">
      <div className="relative w-full h-[700px] sm:h-[560px] md:h-[500px] flex items-center justify-center">
        {visibleSlides.map((slide) => {
          const style = positionStyles[slide.offset];
          if (!style) return null;
          const isActive = slide.offset === 0;
          const testimonial = testimonials[slide.id];

          return (
            <div
              key={slide.id}
              onClick={() => !isActive && !animating && go(slide.id)}
              className="absolute left-1/2 transition-all duration-500 ease-out w-[92vw] sm:w-[85vw] md:w-[750px]"
              style={{
                transform: `translateX(calc(-50% + ${style.x})) scale(${style.scale})`,
                zIndex: style.z,
                opacity: style.opacity,
                cursor: isActive ? "default" : "pointer",
              }}
            >
              <div
                className={`rounded-2xl transition-all duration-500 ${
                  isActive
                    ? "bg-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] border border-[#E2E8F0]"
                    : "bg-[#C4B5FD]/60 border border-[#A78BFA]/30"
                }`}
              >
                <div className="flex flex-col md:hidden gap-4 p-4">
                  <div className="relative w-full h-[480px] rounded-2xl overflow-hidden">
                    <video
                      src={testimonial.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative pb-4 px-2">
                    <Quote
                      className="text-gray-500 opacity-40 absolute top-0 right-0"
                      size={60}
                      fill="#6b7280"
                    />
                    <p className="text-[#4B5563] text-[14px] md:text-[18px] leading-relaxed mt-2 pr-10">
                      {testimonial.quote}
                    </p>
                    <div className="mt-4">
                      <h3 className="text-xl font-extrabold leading-tight text-[#1F1F1F]">
                        {testimonial.name}
                      </h3>
                      <div className="flex flex-row items-center justify-center gap-1 mt-2">
                        <div className="w-8 h-[3px] rounded-full bg-[#7C3AED]" />
                        <div className="w-[3px] h-[3px] rounded-full bg-[#7C3AED]" />
                        <div className="w-[3px] h-[3px] rounded-full bg-[#7C3AED]" />
                        <div className="w-[3px] h-[3px] rounded-full bg-[#7C3AED]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-row items-stretch gap-6 p-6 h-[440px]">
                  <div className="relative flex-shrink-0 w-[250px] rounded-2xl overflow-hidden">
                    <video
                      src={testimonial.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-2 relative overflow-hidden">
                    <Quote
                      className="text-gray-500 opacity-40 absolute top-0 right-0"
                      size={100}
                      fill="#6b7280"
                    />
                    <div className="flex-1 flex items-center">
                      <p className="text-[#4B5563] text-[14px] md:text-[18px] leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-3xl font-extrabold leading-tight text-[#1F1F1F]">
                        {testimonial.name}
                      </h3>
                      <div className="flex flex-row items-center justify-center gap-1 mt-2">
                        <div className="w-10 h-[3px] rounded-full bg-[#7C3AED]" />
                        <div className="w-[3px] h-[3px] rounded-full bg-[#7C3AED]" />
                        <div className="w-[3px] h-[3px] rounded-full bg-[#7C3AED]" />
                        <div className="w-[3px] h-[3px] rounded-full bg-[#7C3AED]" />
                        <div className="w-[3px] h-[3px] rounded-full bg-[#7C3AED]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute inset-x-0 top-1/2 md:top-1/2 flex md:block justify-between px-6 md:px-0 pointer-events-none">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={handlePrev}
            disabled={animating}
            className="pointer-events-auto absolute left-5 translate-y-[17rem] md:left-10 lg:left-40 xl:left-64 md:-translate-y-1/2 h-10 w-10 md:h-14 md:w-14 rounded-full bg-white shadow-[0_8px_24px_rgba(15,23,42,0.14)] flex items-center justify-center border border-[#E2E8F0] z-40 hover:bg-[#F8FAFC] transition-colors disabled:opacity-40"
          >
            <ChevronLeft size={18} className="text-[#64748B]" />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={handleNext}
            disabled={animating}
            className="pointer-events-auto absolute right-5 translate-y-[17rem] md:right-10 lg:right-40 xl:right-64 md:-translate-y-1/2 h-10 w-10 md:h-14 md:w-14 rounded-full bg-white shadow-[0_8px_24px_rgba(15,23,42,0.14)] flex items-center justify-center border border-[#E2E8F0] z-40 hover:bg-[#F8FAFC] transition-colors disabled:opacity-40"
          >
            <ChevronRight size={18} className="text-[#64748B]" />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {slidesData.map((slide) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => go(slide.id)}
            className={`transition-all duration-300 rounded-full ${
              active === slide.id
                ? "w-6 h-2 bg-[#7C3AED]"
                : "w-2 h-2 bg-[#C4B5FD]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
