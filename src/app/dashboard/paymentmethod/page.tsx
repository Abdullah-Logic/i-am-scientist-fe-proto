// 

"use client";
import React, { useState ,useEffect} from "react";
import { toast, ToastContainer } from "react-toastify";

const Page = () => {
  
  const [formData, setFormData] = useState({
    affiliateId: "",
    bank_name: "",
    account_no: "",
    bank_title: "",
  });

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
    
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bank/getbyAffiliateId/${localStorage.getItem("IASAFFILIATEID")}`)
        const {data} = await response.json();
        console.log(data)
        setFormData(data.length > 0 ? data[0]:{
          affiliateId: "",
          bank_name: "",
          account_no: "",
          bank_title: "",
        }); // Update formData with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleUpdate = async () => {
    // Validate form fields
    if ( !formData.bank_name|| !formData.account_no || !formData.bank_title) {
      toast.error("Please fill in all required fields.");
      return;
    }
    formData.affiliateId=localStorage.getItem("IASAFFILIATEID")|| ""; 
    try {
      
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bank/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            affiliateId: formData.affiliateId,
            bank_name: formData.bank_name,
            account_no: formData.account_no,
            bank_title: formData.bank_title,
          }),
        }
      );

      if (response.ok) {
        toast.success("Profile Updated Successfully");
       
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-[#280253] text-white p-8 font-misri flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-4"> Payment Method</h1>

        <div className="flex flex-col gap-4 w-full max-w-md">
         
          <div>
            <label htmlFor="bank_name" className="block mb-1">
              Bank name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="bank_name"
              name="bank_name"
              value={formData.bank_name}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-transparent text-white focus:ring focus:ring-[#8e6ad0]"
              placeholder="Enter Bank name"
            />
          </div>
          <div>
            <label htmlFor="bank_title" className="block mb-1">
              Account Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="bank_title"
              name="bank_title"
              value={formData.bank_title}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-transparent text-white focus:ring focus:ring-[#8e6ad0]"
              placeholder="Enter Account Title"
            />
          </div>

         

          <div>
            <label htmlFor="account_no" className="block mb-1">
              Account No / IBAN <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="account_no"
              name="account_no"
              value={formData.account_no}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-transparent text-white focus:ring focus:ring-[#8e6ad0]"
              placeholder="Enter Account No or IBAN"
            />
          </div>

          <button
            onClick={handleUpdate}
            className="w-full py-2 mt-4 bg-gradient-to-r from-[#C407B9] to-[#A3058E] rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Add Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
