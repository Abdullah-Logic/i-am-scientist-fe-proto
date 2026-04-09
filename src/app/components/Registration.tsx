"use client";
import React, { useState, useEffect } from "react";

import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { Building2, UserRound } from "lucide-react";

const Registration = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    instituteName: "",
    institutePortalAddress: "",
    // city: "",

    tehsil: "",
    district: "",
    email: "",
    phoneNo: "",
    // officialBankTitle: "",

    // contestOptions: "",

    principalName: "",
    principalEmailAddress: "",
    principalPhoneNo: "",
    coordinatorName: "",
    coordinatorEmailAddress: "",
    coordinatorPhoneNo: "",
    // coordinatorCashAwardTitle: "" ,

    whatsapp: "",
  });

  useEffect(() => {
    const email = localStorage.getItem("IASEMAIL") || "";
    const phoneNo = localStorage.getItem("IASPHONE") || "";

    setFormData((prev) => ({
      ...prev,
      email,
      phoneNo,
    }));
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formData.instituteName === "") {
      toast.error("Institute Name is required");
      return;
    }

    if (formData.institutePortalAddress === "") {
      toast.error("Institute Portal Address is required");
      return;
    }

    if (formData.district === "") {
      toast.error("District is required");
      return;
    }

    if (formData.email === "") {
      toast.error("Email is required");
      return;
    }

    if (formData.phoneNo === "") {
      toast.error("Phone Number is required");
      return;
    }

    if (formData.principalName === "") {
      toast.error("Principal Name is required");
      return;
    }

    if (formData.principalEmailAddress === "") {
      toast.error("Principal Email Address is required");
      return;
    }

    if (formData.principalPhoneNo === "") {
      toast.error("Principal Phone Number is required");
      return;
    }

    if (formData.whatsapp === "") {
      toast.error("WhatsApp Number is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !formData.email.match(emailRegex) ||
      !formData.principalEmailAddress.match(emailRegex) ||
      (formData.coordinatorEmailAddress &&
        !formData.coordinatorEmailAddress.match(emailRegex))
    ) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/school/update-school`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            updatedData: formData,
            schoolId: localStorage.getItem("IASID"),
          }),
        },
      );

      if (!response.ok) {
        console.log(response);
        throw new Error("Failed to submit data");
      }

      toast.success("Data submitted successfully!");
      router.push("/user/studentinfo");
    } catch (error: any) {
      console.error("Error submitting data:", error);
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* <ToastContainer /> */}
      {/* hero section ends here */}
      <div className="relative min-h-screen overflow-hidden bg-[#25114C] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#3b0c7a_0%,_#280253_55%,_#1c043a_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -left-28 top-12 h-80 w-80 rounded-full bg-[#6C0988]/70 blur-[80px]" />
          <div className="absolute -right-28 top-12 h-80 w-80 rounded-full bg-[#6C0988]/70 blur-[80px]" />
          <div className="absolute -left-32 top-[24rem] h-[22rem] w-[22rem] rounded-full bg-[#1F3174]/70 blur-[85px]" />
          <div className="absolute -right-32 top-[24rem] h-[22rem] w-[22rem] rounded-full bg-[#1F3174]/70 blur-[85px]" />
          <div className="absolute -left-28 top-[46rem] h-80 w-80 rounded-full bg-[#6C0988]/65 blur-[80px]" />
          <div className="absolute -right-28 top-[46rem] h-80 w-80 rounded-full bg-[#6C0988]/65 blur-[80px]" />
          <div className="absolute -left-32 top-[68rem] h-[22rem] w-[22rem] rounded-full bg-[#1F3174]/65 blur-[85px]" />
          <div className="absolute -right-32 top-[68rem] h-[22rem] w-[22rem] rounded-full bg-[#1F3174]/65 blur-[85px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-8 md:py-12">
          <div className="text-center">
            <p className="font-misri text-3xl font-semibold md:text-4xl">
              Register as an Organization
            </p>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-white/80" />
          </div>

          <form className="mt-8 flex w-full flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#1A0B3C] p-5 shadow-[0_10px_35px_rgba(17,8,40,0.45)] backdrop-blur">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-[#B64FF3] to-[#DC3E8A]">
                  <Building2 className="h-5 w-5" />
                </span>
                <h2 className="font-popins text-lg font-semibold">
                  Institute Information
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label
                    htmlFor="institute-name"
                    className="text-sm font-medium text-white/80"
                  >
                    Institute Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="institute-name"
                    name="instituteName"
                    value={formData.instituteName}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                    placeholder="Enter Institute name"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="institute-portal"
                    className="text-sm font-medium text-white/80"
                  >
                    Institute Portal Address{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="institute-portal"
                    name="institutePortalAddress"
                    value={formData.institutePortalAddress}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                    placeholder="Enter Address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tehsil"
                    className="text-sm font-medium text-white/80"
                  >
                    Tehsil
                  </label>
                  <input
                    type="text"
                    id="tehsil"
                    name="tehsil"
                    value={formData.tehsil}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                    placeholder="Enter Tehsil"
                  />
                </div>

                <div>
                  <label
                    htmlFor="district"
                    className="text-sm font-medium text-white/80"
                  >
                    District <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                    placeholder="Enter District"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white/80"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    readOnly
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                    placeholder="Enter Email Address"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-white/80"
                  >
                    Phone No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    readOnly
                    type="number"
                    id="phone"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                    placeholder="Enter Phone No"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="wp"
                    className="text-sm font-medium text-white/80"
                  >
                    Whatsapp No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="wp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                    placeholder="Enter Whatsapp No"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#1A0B3C] p-5 shadow-[0_10px_35px_rgba(17,8,40,0.45)] backdrop-blur">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#328AC2]">
                    <UserRound className="h-5 w-5" />
                  </span>
                  <h2 className="font-popins text-lg font-semibold">
                    Principal Information{" "}
                    <span className="text-red-500">*</span>
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="principal-name"
                      className="text-sm font-medium text-white/80"
                    >
                      Principal Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="principal-name"
                      name="principalName"
                      value={formData.principalName}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                      placeholder="Enter Principal name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="principal-email"
                      className="text-sm font-medium text-white/80"
                    >
                      Principal Email Address{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="principal-email"
                      name="principalEmailAddress"
                      value={formData.principalEmailAddress}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                      placeholder="Enter Principal Email Address"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="principal-phone"
                      className="text-sm font-medium text-white/80"
                    >
                      Principal Phone No <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="principal-phone"
                      name="principalPhoneNo"
                      value={formData.principalPhoneNo}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                      placeholder="Enter Principal Phone No"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#1A0B3C] p-5 shadow-[0_10px_35px_rgba(17,8,40,0.45)] backdrop-blur">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EB3A50]">
                    <UserRound className="h-5 w-5" />
                  </span>
                  <h2 className="font-popins text-lg font-semibold">
                    Coordinator Information
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="coordinator-name"
                      className="text-sm font-medium text-white/80"
                    >
                      Coordinator Name
                    </label>
                    <input
                      type="text"
                      id="coordinator-name"
                      name="coordinatorName"
                      value={formData.coordinatorName}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                      placeholder="Enter Coordinator name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="coordinator-email"
                      className="text-sm font-medium text-white/80"
                    >
                      Coordinator Email Address{" "}
                    </label>
                    <input
                      type="email"
                      id="coordinator-email"
                      name="coordinatorEmailAddress"
                      value={formData.coordinatorEmailAddress}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                      placeholder="Enter Email Address"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="coordinator-phone"
                      className="text-sm font-medium text-white/80"
                    >
                      Coordinator Phone No.
                    </label>
                    <input
                      type="number"
                      id="coordinator-phone"
                      name="coordinatorPhoneNo"
                      value={formData.coordinatorPhoneNo}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#1B193C] px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#c989ff] focus:ring-2 focus:ring-[#c989ff]/30"
                      placeholder="Enter Coordinator Phone No"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="mt-2 w-full max-w-[220px] rounded-lg bg-gradient-to-r from-[#B64FF3] to-[#DC3E8A] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(178,107,255,0.35)] transition hover:brightness-110"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
