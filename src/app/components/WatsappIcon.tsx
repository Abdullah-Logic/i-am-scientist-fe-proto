import React from "react";
import Link from "next/link";

const WhatsAppIcon = () => {
  return (
    <main>
      <Link
        href="https://api.whatsapp.com/send?phone=+923310001900&text=Hey can I get more information about registration?"
        target="_blank"
        className="fixed bottom-10 right-10 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 z-50 xl:right-[max(1rem,calc((100vw-120rem)/2+1rem))]"
      >
        <i className="fab fa-whatsapp text-4xl"></i>{" "}
      </Link>
    </main>
  );
};

export default WhatsAppIcon;
