"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const [flag, setFlag] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem("examUsername");
    const id = localStorage.getItem("examId");
    if (id && username) {
      setFlag(true);
    } else {
      router.push("/test-login");
    }
  }, [router]); // Add `id` and `router` to the dependency array

  if (!flag) {
    return null; // Return `null` to avoid rendering the component before redirecting
  }


  return <main>{children}</main>;
};

export default UserLayout;

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const UserLayout = ({ children }: { children: React.ReactNode }) => {
//   const [flag, setFlag] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const username = localStorage.getItem("examUsername");
//     const id = localStorage.getItem("examId");
//     if (id && username) {
//       setFlag(true);
//     } else {
//       router.push("/test-login");
//     }
//   }, [router]);

//   if (!flag) {
//     return null; // Prevent rendering until the condition is met or the redirect occurs
//   }

//   return <>{children}</>;
// };

// export default UserLayout;
