import React from "react";
import { GrDirections } from "react-icons/gr";

const MapWithOverlay = () => {
  return (
    <div className="relative w-full h-[400px]  md:h-[500px] 2xl:h-[700px]">
      {/* Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5384392360133!2d-0.14625432341703493!3d51.52168337181657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad65ef3a8a7%3A0x328b74f0f66523e3!2s5th%20Floor%2C%20167%20%E2%80%93%20169%20Great%20Portland%20St%2C%20London%20W1W%205PF%2C%20UK!5e0!3m2!1sen!2s!4v1774470939521!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      ></iframe>

      {/* Custom Card */}
      <div className="absolute top-2 left-1 md:left-2 bg-white p-4 2xl:p-6 rounded-lg shadow-xl w-72 md:w-80 2xl:w-96 font-popins">
        <div className="flex justify-between items-center gap-2">
          <div>
            <h2 className="text-sm 2xl:text-lg font-bold text-black">
              London UK
            </h2>
            <p className="text-xs 2xl:text-sm font-bold text-black mt-2">
              167-169 Great Portland Street, 5th Floor, London, England, W1W 5PF
            </p>
          </div>
          <div>
            <a
              href="https://maps.app.goo.gl/yRVmyNVqJ14LFX5f9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-[#FF00EA] font-light text-sm 2xl:text-lg"
            >
              <span className="flex justify-center font-bold text-center">
                <GrDirections size={30} />
              </span>
              Directions
            </a>
          </div>
        </div>
        <p className="text-xs 2xl:text-sm text-black font-bold mt-2">
          4.4 <span className="text-yellow-300 ml-1">★</span>{" "}
          <span className="text-yellow-300">★</span>{" "}
          <span className="text-yellow-300">★</span>{" "}
          <span className="text-yellow-300">★</span>{" "}
          <span className="text-gray-300 mr-1">★</span>{" "}
          <span className="text-[#FF00EA] font-light text-sm 2xl:text-lg ">
            2,213 Reviews
          </span>
        </p>
      </div>
    </div>
  );
};

export default MapWithOverlay;
