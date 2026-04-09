"use client"
import Navbar from "./Navbar";
import SubNavBar from "./SubNavBar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [display,setDisplay] = useState(false)

  useEffect(() => {
    const username = localStorage.getItem("IASADMIN");
    const id = localStorage.getItem("IASADMINID");
    // Redirect to login if neither username nor id is present
    if (!username && !id) {
      router.push("/administrative-signin");
    }else{
      setDisplay(!display)
    }
  }, [router]);

  if(!display){
    return null;
  }

  return (
    <>
      <Navbar />
      <div
        className={`flex h-screen w-full overflow-hidden`}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #1D013C 0%, #310266 42%, #3C027D 64%, #4E03A2 100%)",
        }}
      >
        {/* Sidebar Space Placeholder for Large Screens */}
        <div className="hidden lg:block w-[15rem] xl:w-[17rem] 2xl:w-[19rem]"></div>

        {/* Main Content */}
        <main className="flex flex-1 items-start overflow-y-auto mt-48 md:mt-36 lg:mt-40 magicSchool">
          {children}
        </main>
      </div>
    </>
  );
};

export default layout;

// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "./Navbar";
// import SubNavBar from "./SubNavBar";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();

//   useEffect(() => {
//     const username = localStorage.getItem("IASADMIN");
//     const id = localStorage.getItem("IASADMINID");

//     // Redirect to login if neither username nor id is present
//     if (!username && !id) {
//       router.push("/test-login");
//     }
//   }, [router]);

//   return (
//     <>
//       <Navbar />
//       <div
//         className={`flex h-screen w-full overflow-hidden`}
//         style={{
//           backgroundImage:
//             "linear-gradient(to bottom, #1D013C 0%, #310266 42%, #3C027D 64%, #4E03A2 100%)",
//         }}
//       >
//         {/* Sidebar Space Placeholder for Large Screens */}
//         <div className="hidden lg:block w-[15rem] xl:w-[17rem] 2xl:w-[19rem]"></div>

//         {/* Main Content */}
//         <main className="flex flex-1 items-start overflow-y-auto mt-48 md:mt-36 lg:mt-40 magicSchool">
//           {children}
//         </main>
//       </div>
//     </>
//   );
// };

// export default Layout;
