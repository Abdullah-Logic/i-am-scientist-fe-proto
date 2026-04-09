import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import Container from "../components/container/container";

const page = () => {
  const contestDetails = [
    {
      section: "Event Details",
      details: [
        "Online Contest: Participate from the comfort of your home or school.",
        "No student should be refused the chance to participate if they pay the registration fee.",
        "Eligibility: Open to all students from Grade 1 to 12. Schools are encouraged to register as many students as possible.",
      ],
    },
    {
      section: "Registration Info",
      details: [
        "Individual Student Fee: Rs. 1500 per student (covers all contest-related expenses).",
        "School Group Fee: There is a fee of Rs. 1000 for institutions enrolling their students.",
      ],
    },
    {
      section: "How It Works",
      details: [
        "Venue: The contest will be conducted online, so you can participate from anywhere with an internet connection.",
      ],
    },
    {
      section: "Who Can Participate",
      details: [
        "Students can participate individually or as part of a school team, at their grade level or a higher level if they are enrolled in advanced AI programs.",
      ],
    },
    {
      section: "Contest Format",
      details: [
        "A Multiple Choice Test designed to challenge your AI knowledge, problem-solving and critical thinking skills.",
        "To get a head start, check out past contest questions available in the download section of our website.",
      ],
    },
    {
      section: "Awards & Prizes",
      details: [
        "Medals for top performers who score the highest in their category.",
        "District & School Level Prizes for excellence at local levels.",
        "Many other prizes for standout participants at each level.",
        "Every participant receives a certificate for their efforts.",
      ],
    },
  ];

  return (
    <Container>
      {/* Hero section start */}
      <div
        className="relative z-40 h-auto md:h-[300px] 2xl:h-[350px] bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: "url('/about-us/Hero-BG.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center text-[#FFFFFF] mb-8 w-full md:w-10/12 px-3">
          <p className="font-misri mt-6 text-2xl md:text-4xl text-md font-bold">
            General Overview
          </p>
          <p className="text-md md:text-2xl font-semibold font-misri w-full leading-relaxed mt-3 text-center px-2 md:px-0">
            A global challenge where AI enthusiasts come.
          </p>
        </div>
      </div>
      {/* Hero section end */}

      <div className="bg-[#280253] relative text-white py-2 md:py-12 2xl:py-24 flex flex-col items-center justify-center px-3 md:px-0">
        <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80 z-10"></div>
        <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute -top-12 left-0 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full opacity-60 z-10"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 left-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full opacity-60"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full opacity-60"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80 z-10"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80 z-10"></div>

        {/* Event Details Section */}
        {contestDetails.map((section, index) => (
          <section
            key={index}
            className=" z-50 md:w-[95%] xl:w-[85%] w-10/12 mx-auto font-popins "
          >
            <div className=" ">
              <ul className="mb-12 text-justify  font-semibold text-sm md:text-lg list-disc list-inside">
                <h2 className="text-white font-bold"> {section.section}:</h2>
                {section.details?.map((detail, idx) => {
                  return (
                    <>
                      {" "}
                      <li
                        key={idx}
                        className="font-semibold leading-loose text-gray-300"
                      >
                        {detail}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </section>
        ))}

        {/* Grade Categories Section */}

        <div className="w-1/2 z-50 md:relative top-6 font-popins text-center mx-auto">
          <div className=" overflow-x-auto">
            <table className="table-auto w-full text-center border-collapse border border-white font-popins">
              <thead>
                <tr className="bg-[#C407B9]">
                  <th className="border border-white px-4 py-2">Levels</th>
                  <th className="border border-white px-4 py-2">
                    Classes/Grades
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-white px-4 py-2">Level One</td>
                  <td className="border border-white px-4 py-2">Grade 3 & 4</td>
                </tr>
                <tr>
                  <td className="border border-white px-4 py-2">Level Two</td>
                  <td className="border border-white px-4 py-2">Grade 5 & 6</td>
                </tr>
                <tr>
                  <td className="border border-white px-4 py-2">Level Three</td>
                  <td className="border border-white px-4 py-2">Grade 7 & 8</td>
                </tr>
                <tr>
                  <td className="border border-white px-4 py-2">Level Three</td>
                  <td className="border border-white px-4 py-2">
                    Grade 9 & 10
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
