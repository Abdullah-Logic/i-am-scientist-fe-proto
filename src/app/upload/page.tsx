

"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
// import Loading from "../loading";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Load your publishable key from Stripe
const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`
);

const PaymentPage = () => {

  const [clientSecret, setClientSecret] = useState("");
  const [subscriptionId, setSubscriptionID] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const router = useRouter();

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
    const plan = localStorage.getItem("plan") || "";
    const price = localStorage.getItem("price") || "";
    const quant = localStorage.getItem("quant") || "";
    // Fetch or generate clientSecret dynamically
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/subscription/payment-intent`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              customerId: localStorage.getItem("IASID"),
              name: plan,
              price: parseInt(price) * parseInt(quant),
            }),
          }
        );

        const { data } = await response.json();
        console.log(data);
        if (data.clientSecret && data.subscriptionId) {
          setClientSecret(data.clientSecret);
          setSubscriptionID(data.subscriptionId);
        }

        console.log(data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret", error);
      }
    };

    fetchClientSecret();
  }, [isAuthed]);

  if (!isAuthed) return null;

  if (!clientSecret) {
    // return <Loading />; // Show loading while clientSecret is being fetched
    return (
      <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 z-50">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
      </div>
    );
  }

  const options = {
    // clientSecret: 'pi_3QLQHcADQPzoRmzs0QPdMB4N_secret_sbhgN6QYd928k8HzMgJPXK7a8', // Pass the dynamically fetched clientSecret
    clientSecret: clientSecret, // Pass the dynamically fetched clientSecret
  };

  return (
    <div className="h-full bg-[#280253] text-white">
      {/* <div className="hidden lg:flex justify-between items-center absolute top-0 left-0 right-0 transform -translate-y-1/2">
          <Image
            
            src="/about-us/Ellipse 4.webp"
            width={323}
            height={323}
            alt="images"
            className="animate-pulse"
          />
          <Image
            
            src="/about-us/Ellipse 8.webp"
            width={323}
            height={323}
            alt="images"
            className="animate-pulse delay-200"
          />
          <Image
            
            src="/about-us/Ellipse 5.webp"
            width={323}
            height={323}
            alt="images"
            className="animate-pulse delay-400"
          />
        </div> */}
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm secret={clientSecret} subscriptionId={subscriptionId} />
      </Elements>
      {/* <div className="hidden lg:flex  justify-between items-center absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <Image
            
            src="/about-us/Ellipse 6.webp"
            width={323}
            height={323}
            alt="images"
            // className="animate-bounce delay-300"
          />
          <Image
            
            src="/about-us/Ellipse 7.webp"
            width={200}
            height={323}
            alt="images"
            className="z-[0]"
            // className="animate-bounce"
          />
        </div> */}
    </div>
  );
};

export default PaymentPage;
