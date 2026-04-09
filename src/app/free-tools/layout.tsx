"use client";
import PageProps from "@/app/components/PageProps";

import React from "react";



function capitalizeString(str: any) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  if (str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Layout = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <>
      
      {/* <body> */}
        <PageProps>{children}</PageProps>
        {/* <Scripts /> */}
      {/* </body> */}
    </>
  );
};

export default Layout;

