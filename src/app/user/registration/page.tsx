"use client";
import React, { useEffect, useState } from "react";
import Registration from "../../components/Registration";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const page = () => {
  // const { id,role } = useAuth();
  // const [flag, setFlag] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   const id = localStorage.getItem('IASID');
  //   const role = localStorage.getItem('IASROLE');
  //   if (id&& role === "organization") {
  //     setFlag(true);
  //   } else {
  //     router.push("/auth/login");
  //   }
  // }, [ router]); // Add `id` and `router` to the dependency array

  // if (!flag) {
  //   return null; // Return `null` to avoid rendering the component before redirecting
  // }


  return (
    <div>
      <Registration />
    </div>
  );
};

export default page;
