"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

export default function BankTransfer() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setimageFile] = useState<File | null>(null);
  const [plan, setPlan] = useState("");
  const [price, setPrice] = useState("");
  const [quant, setQuant] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
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
    setPlan(localStorage.getItem("plan") || "");
    setPrice(localStorage.getItem("price") || "");
    setQuant(localStorage.getItem("quant") || "");
  }, [isAuthed]);

  const handleUpload = (event: any) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setimageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    } else {
      toast.error("Please upload a valid image.");
    }
  };

  const goBack = () => {
    // Go to the previous page
    router.back();
  };

  const handleSubmit = async () => {
    console.log("hello submit");
    const id = localStorage.getItem("IASID");
    // console.log(id);

    if (!imageFile) {
      console.error("No image file selected");
      return;
    }

    try {
      setIsSubmit(true);
      // Create a FormData object
      const formData = new FormData();
      formData.append("image", imageFile); // Append the image file
      // formData.append("id", "3"); // Append the ID
      formData.append("id", id || ""); // Append the ID

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payment/send-detail`,
        {
          method: "POST",
          body: formData, // Use FormData as the body
        }
      );

      if (response.ok) {
        const data = await response.json();
        router.push(
          `/payment-success?session_id=transfer&id=${localStorage.getItem(
            "IASID"
          )}&plan=${plan}&price=${parseInt(price) * parseInt(quant)}`
        );
      } else {
        console.error("Failed to submit:", response.statusText);
      }
      setIsSubmit(false);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  if (!isAuthed) return null;

  return (
    <div className="h-full bg-[#280253] text-white">
     
      <div className="w-11/12 md:container md:mx-auto flex flex-col  lg:flex-row  mx-3 lg:gap-24  2xl:pt-[3%] md:pt-[5%] text-white">
       

        <div className="flex flex-col">
          {/* <Link href="user/plans"> */}
          <button
            onClick={goBack}
            className="flex items-center mb-4 cursor-pointer lg:ml-24 pt-5 mx-3 "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="mr-2 text-3xl">&larr;</span>
            <h1
              className={`flex font-semibold text-3xl items-center transition-opacity duration-700 ease-in-out transform ${
                isHovered ? "opacity-40" : "opacity-100 translate-y-0"
              }`}
            >
              {isHovered ? (
                "Back"
              ) : (
                <>
                  {/* <CiShop className="inline-block mr-2 bg-white rounded-full p-1 text-black font-semibold text-3xl" />{" "} */}
                  I am Scientist
                </>
              )}
            </h1>
          </button>
          {/* </Link> */}
          {/* Left Side: Payment Details */}
          <div className="w-full lg:w-3/4 p-4 lg:mx-28 flex flex-col ">
            <h1 className="text-base md:text-2xl font-semibold mb-3 text-gray-500">
              {/* Subscribe to Intelliwriter.io {plan} */}
              Student's Registration
            </h1>
            <h2 className="text-xl md:text-4xl font-semibold mb-4">
              {price}{" "}
              <span className="text-gray-500 text-base">PKR / Student</span>
            </h2>

            {/* Plan Amount */}
            <div className="mb-4 mt-10 text-black-important">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm md:text-lg mb-2 font-semibold text-black-important">
                    {/* Intelliwriter.io {plan} */}
                    Total No of Students
                  </p>
                  {/* <p className="text-xs text-black-important ">Billed {option}</p> */}
                  <p className="text-xs text-black-important ">
                    Billed One Time
                  </p>
                </div>
                <p className="text-sm md:text-lg font-semibold text-black-important">
                  {parseInt(quant)} Students
                </p>
              </div>
              <div className="w-full border-t border-gray-500"></div>
            </div>

            {/* Subtotal */}
            <div className="mb-4 text-black-important">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm md:text-lg mb-2 font-semibold text-black-important">
                    Subtotal
                  </p>
                </div>
                <p className="text-sm md:text-lg font-semibold text-black-important">
                  {parseInt(quant)} X {price}
                </p>
              </div>
              <div className="w-full border-t border-gray-500"></div>
            </div>

            {/* Total */}
            <div className="mb-4">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm md:text-lg mb-2 font-semibold text-black-important">
                    Total due today
                  </p>
                </div>
                <p className="text-sm md:text-lg font-semibold text-black-important">
                  {parseInt(quant) * parseInt(price)}{" "}
                  <span className="text-gray-500 text-base">PKR</span>
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="w-full md:w-1/2 flex flex-col items-center z-10">
          {/* Account Details Section */}
          <div className=" flex flex-col justify-center items-center  text-white rounded-lg p-6 w-full">
            <h2 className="text-2xl font-bold mb-4 ">Account Detail</h2>
            <p className="text-md  mt-2">
              <strong>Bank Account:</strong> Faysal Bank
            </p>
            <p className="text-md  mt-2">
              <strong>Account Name:</strong> I AM SCIENTIST
            </p>
            <p className="text-md  mt-2">
              <strong>Account Number:</strong> 3716301000003525
            </p>
            <p className="text-md  mt-2">
              <strong>IBAN:</strong> PK62FAYS3716301000003525
            </p>

            <p className="text-lg mt-5">OR</p>

            <p className="text-md  mt-2">
              <strong>Bank Account:</strong> Mobilink/Jazzcash
            </p>
            <p className="text-md  mt-2">
              <strong>Account Name:</strong> I AM SCIENTIST
            </p>
            <p className="text-md  mt-2">
              <strong>Account Number:</strong> 141408593
            </p>
            <p className="text-md  mt-2">
              <strong>IBAN:</strong> PK66JCMA0000000141408593
            </p>
          </div>

          {/* File Upload Section */}
          <label className="w-full mt-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
            <div className="flex flex-wrap justify-center items-center gap-4">
              {/* Choose File Button */}
              <div className="cursor-pointer bg-white border border-gray-300 hover:border-pink-500 text-gray-800 font-bold py-2 px-6 rounded shadow-sm">
                Choose File
              </div>

              {/* Upload & Preview Buttons */}
              <div className="flex gap-4">
                <button
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded shadow"
                  onClick={handleSubmit}
                >
                  {isSubmit ? "Submitting..." : "Submit"}
                </button>
               
              </div>
            </div>
          </label>
          <p className="mt-2 text-sm text-gray-500">
            Note: Upload only JPG, GIF, PNG
          </p>

          {/* Preview Image */}
          {previewImage && (
            <div className="mt-4 w-full flex justify-center">
              <img
                src={previewImage}
                alt="Preview"
                className="w-full max-w-sm h-48 sm:h-60 object-cover rounded border border-gray-300 shadow"
              />
            </div>
          )}

          {/* Payment Accounts Section */}
          <div className="mt-8 flex flex-col justify-center items-center  shadow-md rounded-lg p-6 w-full">
            <h2 className="text-lg font-bold mb-4 text-white">
              Pay through Accounts
            </h2>
            <div className="flex justify-center gap-6">
              <img
                src="/images/JazzCash.svg"
                alt="JazzCash"
                className="w-20 sm:w-24 h-auto object-contain rounded-lg shadow"
              />
              <img
                src="/images/EasyPaisa.svg"
                alt="EasyPaisa"
                className="w-20 sm:w-24 h-auto object-contain rounded-lg shadow"
              />
              <img
                src="/images/HBL.svg"
                alt="HBL"
                className="w-20 sm:w-24 h-auto object-contain rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
