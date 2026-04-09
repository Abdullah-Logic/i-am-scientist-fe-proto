// pages/contact.js
"use client";
import React, { useState } from "react";
import { contactData } from "../constant/data";
import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import MapWithOverlay from "../components/LocationMap";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import Container from "../components/container/container";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const Contact = () => {
  const [recaptcha, setRecaptcha] = useState<string | null>(null);
  const [send, setSend] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sanitize = (val: string) =>
    val.replace(/[<>[\]{}()*$%^=+|\\/~`]/g, "").trim();

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: sanitize(value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // captcha check

    if (!recaptcha) {
      toast.error("Please complete captcha");
      return;
    }

    // trim values
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    // required fields
    if (!name || !email || !subject || !message) {
      toast.error("All fields are required");
      return;
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    // min length validation
    if (name.length < 3) {
      toast.error("Name is too short");
      return;
    }

    if (subject.length < 5) {
      toast.error("Subject is too short");
      return;
    }

    if (message.length < 15) {
      toast.error("Message is too short");
      return;
    }

    setSend(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/email/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            recaptcha,
          }),
        },
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setRecaptcha(null);

        if (typeof window !== "undefined" && window.grecaptcha) {
          window.grecaptcha.reset();
        }
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again.");
    } finally {
      setSend(false);
    }
  };

  return (
    <Container>
      {/* Hero section start */}

      <div
        className="relative z-40 h-[170px] md:h-[300px] 2xl:h-[350px]  bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: "url('/about-us/Hero-BG.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center text-[#FFFFFF] mb-8 w-full md:w-10/12 px-3">
          <p className="font-misri mt-6  md:mt-3 text-3xl md:text-5xl font-bold">
            Contact Us
          </p>
          <p className="text-2xl md:text-3xl font-semibold font-misri w-full leading-relaxed mt-3 text-center px-2 md:px-0">
            Need Guidance? Get in Touch with Our Experts
          </p>
        </div>
      </div>
      {/* Hero section end */}
      <div className="bg-[#280253]  relative text-white py-6 md:py-12 2xl:py-24 flex flex-col items-center px-3 md:px-0">
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute -top-12 left-0 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 left-0  mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2  right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>

        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>
        {/* Contact Information Section */}
        <div className="grid z-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full md:w-[80%] 2xl:w-[70%] mx-auto  mb-6 md:mb-12 ">
          {contactData.map((data) => (
            <>
              <div
                className="flex text-center flex-col space-y-3 2xl:space-y-5 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl items-center p-4 2xl:p-6 border shadow-lg z-30 relative"
                key={data.id}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32">
                  <Image
                    src={data.icon}
                    alt="logo"
                    layout="responsive"
                    width={80}
                    height={70}
                  />
                </div>
                <h2 className="font-bold text-sm 2xl:text-base font-popins mt-2">
                  {data.title}
                </h2>
                <p className="font-medium text-sm 2xl:text-base font-popins">
                  {data.desc}
                </p>
              </div>
            </>
          ))}
        </div>
        {/* Form Section */}

        <div className="flex w-full items-center z-40  mt-6  md:w-[80%] 2xl:w-[70%] bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left Section with Image */}
          <div className="relative md:w-[40%] hidden md:block ">
            <Image
              src="/contact/bg.webp"
              alt="Robot with laptop"
              width={500}
              height={200}
              className="object-cover"
            />
          </div>

          {/* Right Section with Form */}
          <div className="w-full md:w-[55%] mx-auto p-4 md:p-8 font-inter text-black z-40">
            <h3 className="texl-2xl md:text-4xl font-bold">Get In Touch</h3>
            <p className="mt-6 text-base 2xl:text-xl ">
              We are here to assist you Reach out to us for any inquiries or
              support.
            </p>

            <form
              className="mt-6 space-y-4 2xl:space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
                <input
                  required
                  minLength={3}
                  maxLength={50}
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full md:w-1/2 px-4 py-2 border 2xl:py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  required
                  maxLength={100}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full md:w-1/2 px-4 py-2 2xl:py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <input
                required
                minLength={5}
                maxLength={80}
                type="text"
                placeholder="Your Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2  2xl:py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <textarea
                required
                minLength={15}
                maxLength={800}
                placeholder="Write Message..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-32 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={!recaptcha || send}
                className={`px-4 flex items-center py-3 2xl:py-4 2xl:px-5 rounded-tl-full rounded-tr-full rounded-br-full font-popins font-bold text-sm transition
  ${
    !recaptcha || send
      ? "bg-[#C407B9] opacity-70 text-white cursor-not-allowed"
      : "bg-[#C407B9] hover:opacity-90 text-white"
  }
`}
              >
                {send ? "SENDING..." : "SEND MESSAGE"}
                <span className="text-lg ml-2">
                  <IoIosSend />
                </span>
              </button>

              <div className="max-sm:scale-[0.80] origin-left">
                <ReCAPTCHA
                  sitekey="6LeR6YwqAAAAAI4IR0hzUXzcDM8JlLXzT7GyoQ4P"
                  onChange={(val: any) => setRecaptcha(val)}
                />
              </div>
            </form>
          </div>
        </div>

        {/* Form secton end */}
      </div>

      {/* Google Location section */}

      <MapWithOverlay />
    </Container>
  );
};

export default Contact;
