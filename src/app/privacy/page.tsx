import Container from "../components/container";
import React from "react";

const Privacy = () => {
  return (
    <Container>
      <div className="w-full mx-auto px-3 md:px-32 2xl:px-48 py-8 md:py-20 2xl:py-28  bg-[#1C032F] text-white">
        <h1 className="mb-6 md:mb-8 font md:text-4xl   text-2xl  font-semibold font-jost text-center">
          Privacy Policy
        </h1>

        <p className="text-sm mb-4 border-b border-gray-400  py-2">
          Effective Date: 29-Oct-2024
        </p>

        <h2 className="text-2xl font-bold mb-2 font-jost">
          Information We Collect
        </h2>

        <p className="mb-4 text-base font-popin">
          We may collect the following information:
        </p>

        <ul className="list-disc list-inside mb-10 font-popin text-sm leading-loose">
          <li>Name</li>
          <li>Email Address</li>
          <li>Contact Information</li>
          <li>Any other information voluntarily provided</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2 font-jost">
          How We Use the Information
        </h2>

        <p className="mb-4 text-base font-popin">
          We use the collected information for the following purposes:
        </p>

        <ul className="list-disc list-inside mb-10 font-popin text-sm leading-loose">
          <li>Internal record keeping</li>
          <li>To provide and maintain our services</li>
          <li>Improving our products and services</li>
          <li>To communicate with users</li>
          <li>To analyze and improve our website</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2 font-jost">Security</h2>

        <p className="mb-10 text-sm font-popin tracking-wide">
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorized access or disclosure, we have put in place
          suitable physical, electronic, and managerial procedures to safeguard
          and secure the information we collect online.
        </p>

        <h2 className="text-2xl font-bold mb-2 font-jost">
          Links to Other Websites
        </h2>

        <p className="mb-10 text-sm font-popin tracking-wide">
          Our website may contain links to other websites of interest. However,
          once you have used these links to leave our site, you should note that
          we do not have any control over that other website. Therefore, we
          cannot be responsible for the protection and privacy of any
          information which you provide whilst visiting such sites and such
          sites are not governed by this privacy statement. You should exercise
          caution and look at the privacy statement applicable to the website in
          question.
        </p>
        <h2 className="text-2xl font-bold mb-2 font-jost">
          Changes to This Privacy Policy
        </h2>

        <p className="mb-10 text-sm font-popin tracking-wide">
          We reserve the right to update or change our Privacy Policy at
          anytime. We will notify users of any material changes by posting the
          new Privacy Policy on this page.
        </p>
        <h2 className="text-2xl font-bold mb-2 font-jost">Contact Us</h2>

        <p className=" text-sm font-popin tracking-wide">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at
          <span className="text-blue-700 hover:underline font">
            {" "}
            <a href="mailto:iamscientist12@gmail.com"> iamscientist.com</a>
          </span>
        </p>
      </div>
    </Container>
  );
};

export default Privacy;
