import Link from "next/link";
import React from "react";
import Container from "../components/container";

const TermsandCondition = () => {
  return (
    <Container>
      <div className="w-full mx-auto px-3 md:px-32 2xl:px-48 py-8 md:py-20 2xl:py-28  bg-[#1C032F] text-white">
        <h1 className="mb-6 md:mb-8 font md:text-4xl   text-2xl  font-semibold font-jamjuree text-center">
          Terms and Condition
        </h1>

        <p className="text-sm mb-4 border-b border-gray-400  py-2">
          Effective Date: 29-Oct-2024
        </p>

        <h2 className="text-2xl font-bold mb-2 font-jamjuree">
          Acceptance of Terms
        </h2>

        <p className="mb-10 text-sm font-popin tracking-wide">
          By accessing or using our website, you agree to abide by these Terms
          and Conditions and all applicable laws and regulations.
        </p>

        <h2 className="text-2xl font-bold mb-2 font-jamjuree">
          Intellectual Property
        </h2>

        <p className="mb-10 text-sm font-popin tracking-wide">
          The content and materials on I am Scientist, including but not limited
          to text, graphics, logos, images, and software, are the property of I
          am Scientist and are protected by applicable intellectual property
          laws.
        </p>

        <h2 className="text-2xl font-bold mb-2 font-jamjuree">
          Disclaimer of Liability
        </h2>

        <p className="mb-10 text-sm font-popin tracking-wide">
          To the fullest extent permitted by law,I am Scientist and its
          affiliates shall not be liable for any indirect, incidental, special,
          or consequential damages arising out of or in connection with your use
          of the Site or any products or services purchased through the Site.
        </p>

        <h2 className="text-2xl font-bold mb-2 font-jamjuree">
          Changes to Terms and Conditions
        </h2>

        <p className="mb-10 text-sm font-popin tracking-wide">
          I am Scientist reserves the right to modify or replace these Terms and
          Conditions at any time. Your continued use of the website after any
          changes signify your acceptance of those modifications.
        </p>
        <h2 className="text-2xl font-bold mb-2 font-jamjuree">
          Privacy Policy
        </h2>

        <p className="mb-10 text-sm font-popin tracking-wide">
          Please refer to our{" "}
          <span className="text-blue-700 hover:underline">
            <Link href="/privacy"> Privacy Policy</Link>
          </span>{" "}
          for information on how we collect, use, and protect your personal
          information.
        </p>
        <h2 className="text-2xl font-bold mb-2 font-jamjuree">Contact Us</h2>

        <p className="text-sm font-popin tracking-wide">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at
          <span className="text-blue-700 hover:underline">
            {" "}
            <a href="mailto:iamscientist12@gmail.com"> iamscientist.com</a>
          </span>
        </p>
      </div>
    </Container>
  );
};

export default TermsandCondition;
