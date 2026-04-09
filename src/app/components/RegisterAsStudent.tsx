"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { User, Users, FileText, CreditCard } from "lucide-react";
import Image from "next/image";

const RegisterAsStudent = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState<Boolean>(false);
  const [select, setSelect] = useState<Date | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    studentName: "",
    class: "1",
    email: "",
    dob: "",
    city: "",
    district: "",
    parentName: "",
    parentEmailAddress: "",
    parentPhoneNo: "",
  });

  const click = () => setIsOpen(!isOpen);
  const handleClick = (item: any) => setActiveItem(item);

  const maskPhoneNumber = (value: any) => {
    const numericValue = value.replace(/\D/g, "");
    if (numericValue.length <= 4) return numericValue;
    else if (numericValue.length <= 11)
      return `${numericValue.slice(0, 4)}-${numericValue.slice(4)}`;
    else return `${numericValue.slice(0, 4)}-${numericValue.slice(4, 11)}`;
  };

  const handleInputChange2 = (value: any) => {
    setFormData((prevState) => ({ ...prevState, parentPhoneNo: value }));
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "dob") {
      const maxDate = new Date("2022-01-01");
      const formattedDate = maxDate.toISOString().split("T")[0];
      if (value > formattedDate) {
        setError("Please Enter the valid Date");
        setShowError(true);
        setTimeout(() => setShowError(false), 1000);
      }
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const email = localStorage.getItem("IASEMAIL") || "";
    setFormData((prev) => ({ ...prev, email }));
  }, []);

  const handleSubmit = async (e: any, type: string) => {
    e.preventDefault();
    if (
      formData.studentName === "" ||
      formData.class === "" ||
      formData.email === "" ||
      formData.city === "" ||
      select === null ||
      formData.parentName === "" ||
      formData.parentPhoneNo === ""
    ) {
      toast.error("Please fill all the required fields");
      return;
    } else if (formData.dob > "2022-01-01") {
      toast.error("Please enter valid date");
      return;
    }

    try {
      const data = [
        {
          student_name: formData.studentName,
          class: formData.class,
          email: formData.email,
          dob: select,
          city: formData.city,
          district: formData.district,
          parent_name: formData.parentName,
          parent_email: formData.email,
          parent_phone: formData.parentPhoneNo,
          userId: localStorage.getItem("IASID"),
        },
      ];

      localStorage.setItem("data", JSON.stringify(data));
      localStorage.setItem("plan", "Stud");
      localStorage.setItem("price", "1500");
      localStorage.setItem("quant", "1");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contest/multiple-student`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data }),
        },
      );
      if (!response.ok) throw new Error("Failed to save subscription");

      toast.success("Data submitted successfully!");
      setTimeout(() => router.push("/student/dashboard"), 1000);
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Error submitting data");
    }
  };

  const plans = [
    {
      label: "Pre MCAT Counseling",
      price: "Rs. 500",
      badge: "Popular",
      badgeColor: "from-[#F1B141] to-[#F06D38]",
    },
    { label: "LEVEL 1", price: "Rs. 300", badge: null, badgeColor: "" },
    {
      label: "Complete Course",
      price: "Rs. 1000",
      badge: "Best Value",
      badgeColor: "from-[#F1B141] to-[#F06D38]",
    },
  ];

  const paymentAccounts = [
    {
      name: "JazzCash",
      fee: "Fee: 1.5%",
      time: "Instant",
      icon: "/images/JazzCash.svg",
      bg: "from-orange-500 to-red-500",
    },
    {
      name: "Easypaisa",
      fee: "Fee: 1.2%",
      time: "Instant",
      icon: "/images/EasyPaisa.svg",
      bg: "from-green-500 to-emerald-600",
    },
    {
      name: "HBL Mobile",
      fee: "Fee: 2.0%",
      time: "1-2 hours",
      icon: "/images/HBL.svg",
      bg: "from-blue-500 to-blue-700",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#200D40]">
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

      {/* Nav */}
      <nav className="relative z-10 bg-[#5D3794]">
        <div className="mx-auto max-w-[1200px] flex items-center justify-between px-4 py-3 text-[13px]">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5 text-white">
              <User size={14} /> AI Sciences
            </span>
            <span className="border-b border-white pb-0.5">Outlines/Dumps</span>
          </div>
          <button className="flex items-center gap-2 rounded-md bg-gradient-to-r from-[#B64FF3] to-[#DC3E8A] px-4 py-1.5 text-[12px] font-semibold text-white">
            Logout
          </button>
        </div>
      </nav>

      {/* Page title */}
      <div className="relative z-10 text-center pt-10 pb-6">
        <h1 className="font-misri text-white text-3xl font-bold tracking-wide">
          Register As Student
        </h1>
        <div className="mx-auto mt-3 w-16 h-0.5 bg-white/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1000px] px-4 pb-16 space-y-6">
        {/* Student Info + Parent Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Information */}
          <div className="rounded-2xl border border-white/10 bg-[#190C39] p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#B64FF3] to-[#DC3E8A]">
                <User size={16} className="text-white" />
              </div>
              <h2 className="text-white font-semibold text-[15px]">
                Student Information:
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] text-white/70 mb-1">
                  Student Name <span className="text-red-400">*</span>
                </label>
                <div className="rounded-lg bg-[#2a1050] border border-white/10 px-3 py-2">
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full bg-transparent text-white text-[13px] outline-none placeholder:text-white/30"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-white/70 mb-1">
                  Class <span className="text-red-400">*</span>
                </label>
                <div className="rounded-lg bg-[#2a1050] border border-white/10 px-3 py-2">
                  <input
                    type="text"
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    placeholder="Enter Class"
                    className="w-full bg-transparent text-white text-[13px] outline-none placeholder:text-white/30"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-white/70 mb-1">
                  Email <span className="text-red-400">*</span>
                </label>
                <div className="rounded-lg bg-[#2a1050] border border-white/10 px-3 py-2">
                  <input
                    readOnly
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    className="w-full bg-transparent text-white text-[13px] outline-none placeholder:text-white/30"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-white/70 mb-1">
                  Cell <span className="text-red-400">*</span>
                </label>
                <div className="rounded-lg bg-[#2a1050] border border-white/10 px-3 py-2">
                  <input
                    type="text"
                    placeholder="Enter Cell No."
                    className="w-full bg-transparent text-white text-[13px] outline-none placeholder:text-white/30"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-white/70 mb-1">
                  District <span className="text-red-400">*</span>
                </label>
                <div className="rounded-lg bg-[#2a1050] border border-white/10 px-3 py-2">
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    placeholder="Enter District"
                    className="w-full bg-transparent text-white text-[13px] outline-none placeholder:text-white/30"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Parents Information */}
          <div className="rounded-2xl border border-white/10 bg-[#190C39] p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E83C6A]">
                <Users size={16} className="text-white" />
              </div>
              <h2 className="text-white font-semibold text-[15px]">
                Parents Information:
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] text-white/70 mb-1">
                  Name <span className="text-red-400">*</span>
                </label>
                <div className="rounded-lg bg-[#2a1050] border border-white/10 px-3 py-2">
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full bg-transparent text-white text-[13px] outline-none placeholder:text-white/30"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-white/70 mb-1">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <div className="rounded-lg bg-[#2a1050] border border-white/10 px-3 py-2">
                  <input
                    type="text"
                    name="parentEmailAddress"
                    value={formData.parentEmailAddress}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    className="w-full bg-transparent text-white text-[13px] outline-none placeholder:text-white/30"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-white/70 mb-1">
                  Phone no. <span className="text-red-400">*</span>
                </label>
                <div className="rounded-lg bg-[#2a1050] border border-white/10 px-3 py-2">
                  <input
                    type="text"
                    name="parentPhoneNo"
                    value={formData.parentPhoneNo}
                    onChange={(e) =>
                      handleInputChange2(maskPhoneNumber(e.target.value))
                    }
                    placeholder="Enter"
                    className="w-full bg-transparent text-white text-[13px] outline-none placeholder:text-white/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Fee Section */}
        <div className="rounded-2xl border border-white/10 bg-[#190C39] p-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
              <FileText size={16} className="text-white" />
            </div>
            <h2 className="text-white font-semibold text-[15px]">
              Registration Fee Section
            </h2>
          </div>
          <p className="text-[11px] text-[#48BAF8] mb-5 ml-12">
            Special Choice <span className="text-red-400">*</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <button
                key={plan.label}
                type="button"
                onClick={() => setSelectedPlan(plan.label)}
                className={`relative rounded-xl border p-4 text-left transition-all ${
                  selectedPlan === plan.label
                    ? "border-purple-400 bg-[#2a1050]"
                    : "border-white/10 bg-[#2a1050] hover:border-white/30"
                }`}
              >
                {plan.badge && (
                  <span
                    className={`absolute -top-2 left-3 text-[9px] font-bold text-white px-2 py-0.5 rounded-full bg-gradient-to-r ${plan.badgeColor}`}
                  >
                    {plan.badge}
                  </span>
                )}
                <p className="text-white/80 text-[12px] font-medium mb-2">
                  {plan.label}
                </p>
                <p className="text-[#48BAF8] text-xl font-bold">{plan.price}</p>
                <p className="text-white/40 text-[10px] mt-1">
                  Registration Fee
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="rounded-2xl border border-white/10 bg-[#190C39] p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#49A24D]">
              <CreditCard size={16} className="text-white" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-[15px]">
                Payment Method
              </h2>
              <p className="text-white/40 text-[10px]">
                Choose your preferred payment option
              </p>
            </div>
          </div>

          {/* Pay through Accounts */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-white/80 text-sm font-semibold">
                ⚡ Pay through Accounts:
              </p>
              <span className="text-xs text-white/40 bg-[#1D293D] rounded-full px-2 py-0.5">
                Instant Transfer
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {paymentAccounts.map((method) => (
                <button
                  key={method.name}
                  type="button"
                  onClick={() => setSelectedPayment(method.name)}
                  className={`rounded-xl border p-4 text-center transition-all ${
                    selectedPayment === method.name
                      ? "border-purple-400 bg-[#2a1050]"
                      : "border-white/10 bg-[#2a1050] hover:border-white/20"
                  }`}
                >
                  <div
                    className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${method.bg} text-2xl`}
                  >
                    <Image
                      src={method.icon}
                      alt={method.name}
                      height={100}
                      width={100}
                    />
                  </div>
                  <p className="text-white text-xs font-semibold">
                    {method.name}
                  </p>
                  <p className="text-white/40 text-xs mt-1">
                    ⊙ {method.fee} &nbsp; ⊙ {method.time}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* OR divider */}
          <div className="flex items-center justify-center my-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="mx-4 rounded-full border border-white/20 bg-[#2a1050] px-4 py-1 text-[11px] text-white/60">
              OR
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Pay through Cards */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-white/80 text-[12px] font-semibold">
                <CreditCard size={15} className="text-[#4E99F4] inline mr-2" />{" "}
                Pay through Cards:
              </p>
              <span className="text-[10px] text-white/40 bg-[#1D293D] rounded-full px-2 py-0.5">
                All Major Cards
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedPayment("card")}
              className={`w-full rounded-xl border p-4 flex items-center gap-4 transition-all ${
                selectedPayment === "card"
                  ? "border-purple-400 bg-[#2a1050]"
                  : "border-white/10 bg-[#2a1050] hover:border-white/20"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl shrink-0">
                <Image src="/images/cards.svg" alt="Picture of credit and debit cards" width={100} height={100}/>
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-semibold">
                  Credit / Debit Card
                </p>
                <p className="text-white/40 text-xs">
                  Visa, Mastercard, American Express
                </p>
                <p className="text-white/40 text-xs mt-0.5">
                  ✓ Secured by SSL &nbsp; ⊙ Fee: 2.5% &nbsp; ⊙ Instant
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-center pt-2">
          <button
            onClick={(e) => handleSubmit(e, "online")}
            className="w-full max-w-xs rounded-xl bg-gradient-to-r from-[#B64FF3] to-[#DC3E8A] py-3 text-white font-bold text-[14px] tracking-wide hover:opacity-90 transition-opacity"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterAsStudent;
