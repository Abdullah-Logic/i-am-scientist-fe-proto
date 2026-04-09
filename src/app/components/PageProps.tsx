"use client";

import { useWebContext } from "@/context/ContextProvider";
import dynamic from "next/dynamic";
import React from "react";

const Header = dynamic(() => import("@/app/components/navbar"));
const Footer = dynamic(() => import("@/app/components/Footer"));

const PageProps = ({ children }: { children: React.ReactNode }) => {
  const { aboutRef, pricingRef } = useWebContext();
  
  return (
    <>
     
      {children}
    
    </>
  );
};

export default PageProps;
