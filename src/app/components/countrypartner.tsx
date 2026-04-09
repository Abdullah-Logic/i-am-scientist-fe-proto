import Image from "next/image";
import React from "react";
import { partner } from "../constant/data";

const CountryPartner = () => {
  return (
    <div
      className="text-white py-6 md:py-16 bg-[linear-gradient(90deg,rgba(35,3,63)32.12%,rgba(0,50,171,0.7)100%)]
 "
    >
      <h2 className="text-3xl md:text-5xl font-bold font-misri  text-center ">
        Country Partners
      </h2>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-9 w-[90%] md:w-[70%] 2xl:w-[50%] mx-auto mt-8 gap-4 ">
        {partner.map((img) => (
          <div
            className="flex justify-center items-center bg-white rounded-lg shadow-lg p-1 max-md:h-[5.75rem]"
            key={img.id}
          >
            <Image
              src={img.src}
              alt="logo"
              width={100}
              height={70}
              className="max-md:h-[4.5rem] max-md:w-auto max-md:max-w-[min(100%,6.75rem)] max-md:object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryPartner;
