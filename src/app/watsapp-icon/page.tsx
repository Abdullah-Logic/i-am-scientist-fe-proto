import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <main>
      <Link
        href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
        target="_blank"
        className="fixed bottom-10 right-10 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      >
        <i className="fa fa-whatsapp text-2xl"></i>
      </Link>
    </main>
  );
};

export default page;
