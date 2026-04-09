"use client";
import React from "react";
import { toast } from "react-toastify";
import { FAQsMain, partnerwithus } from "../constant/data";
import FAQ from "../components/Faqs";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Container from "../components/container";

const Page = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    orgname: "",
    orgcountry: "",
    message: "",
    checkbox: false,
  });

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/partnership/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Partnership inquiry sent successfully!");
        setFormData({ fname: "", lname: "", email: "", orgname: "", orgcountry: "", message: "", checkbox: false });
        setSubmitted(true);
      } else {
        toast.error(data.message || "Failed to send inquiry.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending inquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      {/* Scetion 1 : Title */}
      <div
        className="relative z-40 h-[200px] md:h-[300px] 2xl:h-[350px]  bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: "url('/about-us/Hero-BG.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center text-[#FFFFFF] mb-8 w-full md:w-10/12 px-3">
          <p className="font-misri mt-6  md:mt-3 text-3xl md:text-5xl font-bold">
            Partner with Us
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold font-misri w-full leading-relaxed mt-3 text-center px-2 md:px-0">
            Join Us in Inspiring the Next Generation
          </h1>
          <Link href={`http://calendly.com/iamscientist-ai`} target="_blank">
            <button className="mt-2 lg:mt-7 text-sm md:text-lg uppercase border border-gray-200 font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-lg rounded-bl-lg bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer w-fit">
              Book a call
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-[#280253] relative text-white py-2 md:py-7 2xl:py-20 flex flex-col items-center justify-center px-3 md:px-0">
        {/* Section 2: Partnership Philosophy */}
        <div className="relative w-full bg-[#280253] py-8 md:p-0 md:py-10">
          {/* Decorative Ellipses - Positioned absolutely, shown on large screens */}
          <div className="absolute top-0 left-0 right-0 hidden lg:flex justify-between items-center w-full flex-wrap">
            <Image
              src="/about-us/Ellipse 4.webp"
              width={323}
              height={323}
              alt="Decorative Ellipse"
              className="md:relative md:-top-36"
            />
            <Image
              src="/about-us/Ellipse 8.webp"
              width={323}
              height={323}
              alt="Decorative Ellipse"
              className="md:relative md:-top-52"
            />
            <Image
              src="/about-us/Ellipse 5.webp"
              width={323}
              height={323}
              alt="Decorative Ellipse"
              className="md:relative md:-top-36"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-screen-xl w-full px-3 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:p-12 lg:p-0">
              {/* Left Column: Content */}
              <div className="flex flex-col gap-6 md:gap-8 justify-center">
                <h2 className="font-misri md:mt-3 text-3xl md:text-5xl  font-bold text-white mt-3">
                  Our Partnership Philosophy
                </h2>
                <p className="text-justify  text-gray-200 font-popins   text-base 2xl:text-xl font-normal  leading-relaxed">
                  At I am Scientist, we value partnerships that support mutual
                  growth and success. By collaborating with organizations,
                  institutions and communities, We develop impactful programs
                  aimed to inspire and educate young learners in the world of
                  technology. Together, we harness strengths to deliver exciting
                  opportunities for students to grow, innovate and lead in a
                  technology-driven world.
                </p>
              </div>

              {/* Right Column: Illustration */}
              <div className="flex justify-center items-center">
                <Image
                  src="/partner-with-us/Frame 312.svg"
                  width={610}
                  height={504}
                  alt="Partnership Illustration"
                  className="w-full max-w-[610px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scetion 3 : How do you want to become partner with us */}
        <div className="py-8 md:p-0 md:py-20 w-full justify-center grid">
          {/* Decorative Ellipses - Positioned absolutely, shown on large screens */}
          <div className="hidden lg:flex justify-between items-center w-full flex-wrap absolute top-0 left-0 right-0">
            <Image
              src="/about-us/Ellipse 4.webp"
              width={323}
              height={323}
              alt="Decorative Ellipse"
              className="md:relative md:-top-36"
            />
            <Image
              src="/about-us/Ellipse 8.webp"
              width={323}
              height={323}
              alt="Decorative Ellipse"
              className="md:relative md:-top-52"
            />
            <Image
              src="/about-us/Ellipse 5.webp"
              width={323}
              height={323}
              alt="Decorative Ellipse"
              className="md:relative md:-top-36"
            />
          </div>

          <div className="lg:grid gap-12 md:relative grid grid-cols-1 max-w-screen-xl w-full px-3 lg:px-20">
            <div className="flex flex-col gap-8 h-auto justify-center md:p-12 lg:p-0">
              <h2 className="font-misri my-3 md:mt-3 text-3xl md:text-5xl font-bold text-white text-center">
                How Do You Want to Become Partner with Us?
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-5 mt-7">
                {partnerwithus.map((item) => (
                  <div
                    className="flex flex-col border-2 p-5 rounded-lg text-center items-center gap-5"
                    key={item.id}
                  >
                    <Image
                      src={item.image}
                      width={70}
                      height={70}
                      alt="Partnership"
                    />
                    <h5 className="font-misri text-3xl font-bold">
                      {item.heading}
                    </h5>
                    <div>
                      <p className="  text-gray-200 font-popins   text-base 2xl:text-lg font-normal text-center">
                        {item.text}
                      </p>
                      {/* <a href={item.link}>
                        <p className="flex gap-2 items-center text-center justify-center font-extrabold">
                          Learn More <FaArrowRight />
                        </p>
                      </a> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 : Form */}
        <div className="py-8 md:p-0 bg-[#280253] relative w-full h-auto grid justify-center">
          <div className="z-10 md:p-12 lg:p-0 lg:grid lg:grid-cols-2 gap-12 md:relative grid grid-cols-1 max-w-screen-xl w-full h-auto mx-auto">
            {/* Left Content */}
            <div className="flex flex-col gap-8 h-auto justify-start lg:pl-20 px-3">
              <h2 className="font-misri mt-3 md:mt-3 text-3xl md:text-5xl font-bold text-white">
                Join Us to Shape the Future of Learning
              </h2>
              <p className="text-justify  text-gray-200 font-popins   text-base 2xl:text-xl font-normal ">
                At I'm Scientist, we’re working together with schools, educators
                and organizations to make learning more exciting and accessible
                for students.
              </p>
              <div>
                <h2 className="font-misri  text-3xl md:text-5xl font-bold">
                  Why Join Us?
                </h2>
              </div>

              {/* Feature List */}
              {[
                {
                  title: "Create Lifelong Mentorships:",
                  description:
                    "Build strong, supportive relationships that guide students through their learning journey in AI.",
                },
                {
                  title: "	Enhance Your Program: ",
                  description:
                    "Collaborate with top educators and experts to enrich your curriculum with the latest developments in science and technology.",
                },
                {
                  title: "Get Exclusive Resources: ",
                  description:
                    "Stay ahead with the latest educational tools, updates and insights only available through our partnerships.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-baseline gap-4">
                  <FaCircle className="text-[#FF00EA] w-6" />
                  <div className="grid gap-2">
                    <p className=" font-misri my-3 text-3xl font-bold">
                      {feature.title}
                    </p>
                    <p className="text-justify  text-gray-200 font-popins   text-base 2xl:text-xl font-normal ">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form Section */}
            <div className="px-3 lg:pr-20">
              <form onSubmit={handleSubmit}>
                {/* Fname & Lname */}
                <div className="flex gap-4">
                  {[
                    {
                      id: "fname",
                      label: "First Name",
                      name: "fname",
                      value: formData.fname,
                    },
                    {
                      id: "lname",
                      label: "Last Name",
                      name: "lname",
                      value: formData.lname,
                    },
                  ].map((field) => (
                    <div key={field.id} className="w-1/2">
                      <label htmlFor={field.id} className="block mb-2">
                        {field.label}
                      </label>
                      <input
                        type="text"
                        id={field.id}
                        name={field.name}
                        value={field.value}
                        onChange={handleChange}
                        className="bg-[#5D3794] rounded-md w-full p-2  focus:outline-none focus:ring-1 focus:ring-[#8e6ad0]"
                        required
                      />
                    </div>
                  ))}
                </div>

                {/* Email, OrgName, OrgCountry */}
                {[
                  {
                    id: "email",
                    label: "Your work Email Address",
                    type: "email",
                    value: formData.email,
                  },
                  {
                    id: "orgname",
                    label: "Organization Name",
                    type: "text",
                    value: formData.orgname,
                  },
                  {
                    id: "orgcountry",
                    label: "Your Organization's Country",
                    type: "text",
                    value: formData.orgcountry,
                  },
                ].map((field) => (
                  <div key={field.id} className="my-4">
                    <label htmlFor={field.id} className="block mb-2 capitalize">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={field.value}
                      onChange={handleChange}
                      className=" bg-[#5D3794] rounded-md w-full p-2 focus:outline-none focus:ring-1 focus:ring-[#8e6ad0] "
                      required
                    />
                  </div>
                ))}

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-justify  text-gray-200 font-popins   text-base 2xl:text-xl font-normal "
                  >
                    If possible, please provide additional details on your
                    partnership interest
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#5D3794] rounded-md w-full p-2 focus:outline-none focus:ring-1 focus:ring-[#8e6ad0]"
                    rows="1"
                    required
                  ></textarea>
                </div>

                <p className="mb-4 text-justify  text-gray-200 font-popins   text-base 2xl:text-xl font-normal ">
                  Subscribe to our newsletter!
                </p>
                <div className="flex gap-4 items-baseline mb-4">
                  <input type="checkbox" id="checkbox" name="checkbox" checked={formData.checkbox} onChange={handleChange} />
                  <label
                    htmlFor="checkbox"
                    className="text-justify  text-gray-200 font-popins   text-base 2xl:text-xl font-normal "
                  >
                    Yes, I'd like to hear more about I am Scientist's
                    partnership information and sign up
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C407B9] text-white py-4 px-4 rounded-md hover:bg-[#c407b1] capitalize transition duration-200"
                >
                  {loading ? "Sending..." : "Send Partnership Inquiry"}
                </button>

                <p className="mt-4   text-justify  text-gray-200 font-popins   text-base 2xl:text-xl font-normal ">
                  By signing up, you agree to I am Scientist’s{" "}
                  <a href="#" className="text-[#4A80EC]">
                    Privacy Policy
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-[#4A80EC]">
                    Terms of Use
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <FAQ faqs={FAQsMain} />
    </Container>
  );
};

export default Page;
