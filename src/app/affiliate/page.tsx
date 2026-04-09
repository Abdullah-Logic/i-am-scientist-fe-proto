import React from "react";
import Step1 from "../components/Step1";
import Referal from "../components/Referal";
import FAQs from "../components/FAQ";
import TestLimits from "../components/TestLimits";
import Container from "../components/container";

const page = () => {
  return (
    <Container>
      <Referal />
      <Step1 />
      <FAQs />
      <TestLimits />
    </Container>
  );
};

export default page;
