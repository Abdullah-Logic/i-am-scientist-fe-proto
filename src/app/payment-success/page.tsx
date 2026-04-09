"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PaymentSuccess: React.FC<any> = (props) => {
  const router = useRouter();
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("IASID");
    const role = localStorage.getItem("IASROLE");
    if (id && (role === "student" || role === "organization")) {
      setIsAuthed(true);
      return;
    }
    router.push("/auth/login");
  }, [router]);

  useEffect(() => {
    if (!isAuthed) return;
    const saveUserSubscription = async () => {
      const sessionId = new URLSearchParams(window.location.search).get(
        "session_id"
      );
      const plan = new URLSearchParams(window.location.search).get("plan");
      const id = new URLSearchParams(window.location.search).get("id");
      const price = new URLSearchParams(window.location.search).get("price");


      // if (!sessionId || !customerId) {
      //   console.error("Missing sessionId or customerId");
      //   return;
      // }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/subscription/save-subscription`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sessionId,
              id,
              plan,
              price,
              data: JSON.parse(localStorage.getItem("data") || "")
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to save subscription");
        }

        const result = await response.json();
      } catch (error: any) {
        console.error("Error saving subscription:", error.message);
      }
    };

    // const saveContestDetails = async () => {
    //   console.log(storedData)
    //   if (storedData) {
    //     const array = JSON.parse(storedData);
    //     try {
    //       const response = await fetch(
    //         `${process.env.NEXT_PUBLIC_API_URL}/contest/multiple-student`,
    //         {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify({ data: array }),
    //         }
    //       );
    //       if (!response.ok) {
    //         throw new Error("Failed to save subscription");
    //       }

    //       const result = await response.json();
    //     } catch (error: any) {
    //       console.error("Error saving contest Details:", error.message);
    //     }
    //   }
    // };
    saveUserSubscription();
    // saveContestDetails();
  }, [isAuthed]);

  if (!isAuthed) return null;

  return (
    <div className="flex flex-col bg-[#280253] text-white items-center justify-center py-40">
      <h1 className="text-3xl font-bold mb-4">Thanks for Registration!</h1>
      <p className="text-lg mb-4">We will inform you once your payment is verified.</p>
      {/* <p className="text-lg text-center mb-8 max-w-[600px]">
        We will inform you once our contest will begin!
      </p> */}

      {/* <Link href="/auth/login">
        <button title="Login" className="">Login</button>
      </Link> */}
    </div>
  );
};

export default PaymentSuccess;
