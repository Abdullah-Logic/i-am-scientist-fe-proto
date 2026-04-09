import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center bg-[#280253] h-auto px-6 py-6 md:px-0 md:pb-12  w-full">
    
      <div className="flex flex-col items-center gap-4 font-popins mx-auto text-center my-6 md:my-14 ">
        <h2 className="text-[#3096FC] font-bold text-3xl md:text-5xl">
          Instructions
        </h2>
        <div className="min-w-36 h-1 rounded-lg bg-white mb-4"></div>

        <p className="text-gray-300 font-semibold text-sm md:text-lg">
          Please read the following instructions carefully before proceeding
          with the registration:
        </p>
        <ul className="text-gray-300 font-semibold text-sm md:text-lg list-disc list-inside">
          <li>Fill in all the required fields in the registration form.</li>
          <li>Ensure that the email addresses provided are valid.</li>
          <li>Double-check all information before submitting the form.</li>
        </ul>
      </div>
      <div className="md:mt-10 flex flex-col items-center gap-4 font-popins mx-auto text-center ">
        <h2 className="text-[#3096FC] font-bold text-2xl md:text-4xl">
          AI Sciences Contest
        </h2>
        <div className="min-w-36 h-1 rounded-lg bg-white mb-4"></div>

        <ul className="text-white text-sm md:text-lg">
          <li>The registration fee is Rs. 2500.</li>
          <li>
            The fee can also be directly transferred to our A/C titled:
            <br />
            <strong>CREATIVE LEARNING SERVICES</strong>
            <br />
            A/C No: <strong>0033100890451</strong>, IBAN:{" "}
            <strong>PK03ALFH0033100890451</strong>
            <br />
            Bank Name: <strong>BANK ALFALAH</strong>
            <br />
            Branch: H-BLOCK, DHA, PHASE – I, LAHORE.
          </li>
        </ul>
      </div>
      <button className="bg-[#FF00FF] text-white font-bold py-2 px-6 rounded-lg mt-8 hover:bg-pink-600 transition duration-300">
        Proceed to Registration
      </button>
    </div>
  );
};

export default page;
