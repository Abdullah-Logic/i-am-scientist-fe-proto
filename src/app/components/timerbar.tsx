"use client";
import React, { useState, useEffect } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Banner = ({ date }: any) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(`${date}, 2026 00:00:00`).getTime();
    const currentDate = new Date().getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Initial call to avoid 1-second delay
    if (currentDate < targetDate) {
      // console.log(currentDate,targetDate)
      updateTimer();
    }

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="bg-purple-800 text-white h-[240px] md:h-[120px]">
      <div className="w-full md:w-[70%] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 text-base md:text-xl text-center sm:text-left pt-3 md:pt-0">
          <p>Get ready to show your skills and creativity in our contest</p>
        </div>

        <div className="bg-gradient-to-r mt-3 md:mt-0 from-[#2E98FC] to-[#E01CF4] py-4 px-6 h-[120px] text-center flex flex-col items-center justify-center">
          <p className="font-inter font-bold text-base md:text-xl">
            {timeLeft.days > 0 ||
            timeLeft.hours > 0 ||
            timeLeft.minutes > 0 ||
            timeLeft.seconds > 0
              ? "Contest Starts In"
              : "Contest Starts Soon!"}
          </p>
          {timeLeft.days > 0 ||
          timeLeft.hours > 0 ||
          timeLeft.minutes > 0 ||
          timeLeft.seconds > 0 ? (
            <div className="ml-4 flex space-x-2 mt-3 font-inter">
              <div className="text-center">
                <p className="text-lg font-bold">{timeLeft.days}</p>
                <p className="text-sm">Days</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">{timeLeft.hours}</p>
                <p className="text-sm">Hours</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">{timeLeft.minutes}</p>
                <p className="text-sm">Minutes</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">{timeLeft.seconds}</p>
                <p className="text-sm">Seconds</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Banner;
