import React from "react";

const Favorites: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-start p-10 justify-start bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] text-white">
      {/* Heading */}
      <h1 className="text-3xl md:text-3xl font-bold mb-8">Favorites</h1>

    



        <div className=" bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)]  rounded-b-xl  rounded-t-lg border-b-blue-600 border border-l-blue-600 border-r-[rgba(196,7,185,1)]"
        
        >
        <div className="w-full relative -mt-1   bg-[rgba(196,7,185,1)] p-1 rounded-tr-full rounded-tl-full ">
      <div className="h-1"></div>
      </div>
      <div className="flex justify-between">
<div>
          <p className="text-lg md:text-xl font-medium mb-2 px-6 pt-7">
            Your Favorite tools appear here!
          </p>
          <p className="text-sm md:text-base text-gray-300 px-6 pb-6">
            Click the star on any tool to add it to your favorites
          </p>
          </div>

          <div className="text-center flex items-center justify-center p-6 pt-4 ">
            <img src="./dashboard/sparkles.png" alt="" />
          </div>
          </div>
        </div>




    </div>
  );
};

export default Favorites;