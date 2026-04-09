"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterForCourse = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    studentName: "",
    fathersName: "",
    course: "",
    whatsaapNo: "",
    phoneNo: "", 
    email: "",
    class: "",
  });

  const [errors, setErrors] = useState({
    studentName: "",
    fathersName: "",
    course: "",
    whatsaapNo: "",
    phoneNo: "",
    email: "",
    class: "",
  });

  const validateForm = () => {
    const newErrors = {
      studentName: "",
      fathersName: "",
      course: "",
      whatsaapNo: "",
      phoneNo: "",
      email: "",
      class: "",
    };
    let isValid = true;

    if (!formData.studentName) {
      newErrors.studentName = "Student Name is required";
      isValid = false;
    }
    if (!formData.fathersName) {
      newErrors.fathersName = "Father's Name is required";
      isValid = false;
    }
    if (!formData.course) {
      newErrors.course = "Course selection is required";
      isValid = false;
    }
    if (!formData.whatsaapNo) {
      newErrors.whatsaapNo = "WhatsApp Number is required";
      isValid = false;
    }
    if (!formData.phoneNo) {
      newErrors.phoneNo = "Phone Number is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!formData.class) {
      newErrors.class = "Class is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/enquiry/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formData
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      toast.success("Data submitted successfully!");

      setFormData({
        studentName: "",
        fathersName: "",
        course: "",
        whatsaapNo: "",
        phoneNo: "", 
        email: "",
        class: "",
      })

      router.push('/')
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Error submitting data");
    }
  };

  return (
    <div className="bg-[#280253] relative w-full h-auto">
      <ToastContainer />
      {/* navbar code here */}

      <div className="relative z-40 h-[170px] md:h-[250px] flex justify-center items-center">
        <div className="flex flex-col items-center text-[#FFFFFF] mb-8 w-full md:w-10/12 px-3">
          <p className="font-misri mt-6 md:mt-3 text-3xl md:text-5xl font-bold">
          Admission Enquiry Form
          </p>
        </div>
      </div>
      <div className="bg-[#280253] relative text-white px-4 md:py-2 md:px-16 flex items-center">
        <div className="mx-auto w-[90%] xl:w-1/2 z-40 relative -top-8 xl:-top-16">
          <form onSubmit={handleSubmit} className="">
            <h2 className="font-popins font-bold text-white text-center md:text-start mb-4">
              Student Information <span className="text-red-500">*</span>
            </h2>

            <div className="flex flex-col gap-4 xl:gap-6">
              <div>
                <label htmlFor="studentName" className="font-popins font-semibold text-[16px] text-white">
                  Student Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className="text-white bg-[#5D3794] rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8e6ad0] w-full"
                  placeholder="Enter your Name"
                />
                {errors.studentName && <p className="text-gray-500 text-sm">{errors.studentName}</p>}
              </div>

              <div>
                <label htmlFor="fathersName" className="font-popins font-semibold text-[16px] text-white">
                  Father's Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fathersName"
                  name="fathersName"
                  value={formData.fathersName}
                  onChange={handleInputChange}
                  className="text-white bg-[#5D3794] rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8e6ad0] w-full"
                  placeholder="Enter your Father's Name"
                />
                {errors.fathersName && <p className="text-gray-500 text-sm">{errors.fathersName}</p>}
              </div>

              <div>
                <label htmlFor="course" className="font-popins font-semibold text-[16px] text-white">
                  Course <span className="text-red-500">*</span>
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="bg-[#5D3794] text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8e6ad0] w-full"
                >
                  <option value="">Select Course</option>
                  <option value="ML">Machine Learning</option>
                  <option value="AI">Artificial Intelligence</option>
                  <option value="DL">Deep Learning</option>
                  <option value="GAI">Generative AI</option>
                </select>
                {errors.course && <p className="text-gray-500 text-sm">{errors.course}</p>}
              </div>

              <div>
                <label htmlFor="whatsaapNo" className="font-popins font-semibold text-[16px] text-white">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="whatsaapNo"
                  name="whatsaapNo"
                  value={formData.whatsaapNo}
                  onChange={handleInputChange}
                  className="bg-[#5D3794] text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8e6ad0] w-full"
                  placeholder="Enter WhatsApp Number"
                />
                {errors.whatsaapNo && <p className="text-gray-500 text-sm">{errors.whatsaapNo}</p>}
              </div>

              <div>
                <label htmlFor="phoneNo" className="font-popins font-semibold text-[16px] text-white">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="phoneNo"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                  className="bg-[#5D3794] text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8e6ad0] w-full"
                  placeholder="Enter Phone Number"
                />
                {errors.phoneNo && <p className="text-gray-500 text-sm">{errors.phoneNo}</p>}
              </div>

              <div>
                <label htmlFor="email" className="font-popins font-semibold text-[16px] text-white">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-[#5D3794] text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8e6ad0] w-full"
                  placeholder="Enter your Email"
                />
                {errors.email && <p className="text-gray-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="class" className="font-popins font-semibold text-[16px] text-white">
                  Class <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  className="bg-[#5D3794] text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8e6ad0] w-full"
                  placeholder="Enter Class"
                />
                {errors.class && <p className="text-gray-500 text-sm">{errors.class}</p>}
              </div>
            </div>

            <div className="flex justify-center items-center w-full mt-12">
              <button
                type="submit"
                className="md:max-w-[250px] w-full p-2 text-white font-bold font-popins rounded-xl bg-gradient-to-r from-[#C407B9] to-[#A3058E] transition-all duration-500 ease-in-out hover:opacity-90 hover:shadow-xl"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForCourse;
