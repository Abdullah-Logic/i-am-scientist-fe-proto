import Image from "next/image";

const Page = () => {
  return (
    <div className="flex  flex-col w-full items-center font-inter py-2  justify-center min-h-screen bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] text-white px-4">
      {/* Blur elements */}
      <div className="w-44 h-40 2xl:w-80  overflow-hidden 2xl:h-80 bg-[#6C0988] absolute top-0 left-0 blur-xl backdrop-blur-3xlxl rounded-tr-full rounded-b-full rounded-bl-full opacity-60 z-10"></div>
      <div className="w-44 h-40 2xl:w-80  overflow-hidden 2xl:h-80 bg-[#6C0988] absolute bottom-0 right-0 blur-xl backdrop-blur-3xlxl rounded-tr-full rounded-b-full rounded-bl-full opacity-60 z-10"></div>
      <div className="z-50">
        <div className="text-center mb-8">
          <div className="mb-8">
            <Image
              src="/navbar/logo.png"
              width={214}
              height={75}
              alt="Iamscientist logo"
              className="cursor-pointer mx-auto"
            />
          </div>

          <div className="mb-8">
            <hr className="w-full max-w-md mx-auto border-0 h-[1px] bg-gradient-to-r from-blue-500 to-pink-500" />
          </div>
        </div>

        {/* Gradient border div */}
        <div className="p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
          {/* Main div */}
          <div className="md:w-[550px] xl:w-[600px] bg-[#3D0C74] rounded-md">
            <div>
              <div className="p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-md">
                <h1 className="text-2xl font-bold rounded-t-md text-white bg-[#431E6C] font-inter p-4 flex justify-center items-center text-center">
                  IAS Student Login
                </h1>
              </div>
              <form className="space-y-6 p-4">
                <div>
                  <label
                    className="block text-sm mb-2 font-medium text-white"
                    htmlFor="user-id"
                  >
                    Student Id
                  </label>
                  <div className="p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
                    <div className="bg-[#431E6C] rounded-md">
                      <input
                        type="text"
                        id="user-id"
                        placeholder="Enter Your Id"
                        aria-label="User ID"
                        aria-describedby="user-id-description"
                        className="w-full px-4 py-3 text-sm rounded-md bg-[#431E6C] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <span
                    id="user-id-description"
                    className="text-xs text-gray-400 mt-1"
                  >
                    Please enter your unique ID.
                  </span>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label
                      className="block text-sm font-medium  text-white"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="flex justify-between items-center">
                      <a
                        href="#"
                        className="text-sm font-medium text-white hover:underline"
                      >
                        forgot?
                      </a>
                    </div>
                  </div>

                  <div className="p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
                    <div className="bg-[#431E6C] rounded-md ">
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        aria-label="Password"
                        className=" w-full px-4 py-3 text-sm rounded-md bg-[#431E6C] text-white focus:outline-none "
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="w-full bg-[#C407B9] text-white font-semibold py-2 my-8 rounded-md hover:bg-pink-600 transition-colors"
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center mt-2">
        <div className="mb-2">
          <p className="md:text-sm text-xs text-white z-50">
            Please Contact{" "}
            <a
              href="mailto:support@iamscientist.ai"
              className="font-medium hover:underline text-[#C407B9] "
            >
              support@iamscientist.ai
            </a>{" "}
            in case of any query.
          </p>
        </div>

        <div className="md:text-sm text-xs text-white">
          <p>
            Don't have an I Am Scientist account?{" "}
            <a href="#" className="text-[#C407B9] font-medium hover:underline">
              Create for free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
