"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLock, FaEnvelope, FaUser } from "react-icons/fa";
import { FaArrowLeft, FaPhone } from "react-icons/fa6";
import { ArrowRight, Loader, Rocket, Handshake } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  classs: string;
  dob: string;
}

const ContestSignup: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    classs: "",
    dob: "",
  });

  const [subjects, setSubjects] = useState<string[]>([]);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState | "subjects", string>>
  >({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // clear error on change
  };

  const handleSubjects = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSubjects([...subjects, e.target.value]);
    } else {
      setSubjects(subjects.filter((s) => s !== e.target.value));
    }
    setErrors((prev) => ({ ...prev, subjects: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tempErrors: typeof errors = {};

    if (!form.name) tempErrors.name = "Name is required";
    if (!form.email) tempErrors.email = "Email is required";
    if (!form.phone) tempErrors.phone = "Phone number is required";
    if (!form.password) tempErrors.password = "Password is required";
    if (!form.confirmPassword)
      tempErrors.confirmPassword = "Confirm your password";
    if (
      form.password &&
      form.confirmPassword &&
      form.password !== form.confirmPassword
    )
      tempErrors.confirmPassword = "Passwords do not match";
    if (!form.classs) tempErrors.classs = "Class is required";
    if (!form.dob) tempErrors.dob = "Date of birth is required";
    if (subjects.length === 0)
      tempErrors.subjects = "Select at least one subject";

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setLoading(true);
    try {
      const userRes = await fetch("/api/registerUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          phone: form.phone,
          role: "student",
        }),
      });

      const userData = await userRes.json();
      if (!userRes.ok) throw new Error(userData.message);

      await fetch("/api/registerContest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_name: form.name,
          classs: form.classs,
          email: form.email,
          dob: form.dob,
          userId: userData.id,
          subjects,
        }),
      });

      alert("Registration successful"); // You can replace with a success UI message
    } catch (err: unknown) {
      setErrors({
        ...errors,
        email: err instanceof Error ? err.message : "Something went wrong",
      });
    }
    setLoading(false);
  };

  const renderError = (field: keyof FormState | "subjects") =>
    errors[field] ? (
      <p className="text-red-500 text-xs mt-1 ml-1">{errors[field]}</p>
    ) : null;

  return (
    <div className="relative">
      <div className="lg:hidden absolute -top-[3.2rem] right-24 z-50">
        <Image
          src="/countrypartner/Logos/moonlight-clear.png"
          width={120}
          height={120}
          alt="Moonlight logo"
          className="object-contain"
        />
      </div>
      <div className="min-h-screen flex items-center justify-center p-4 py-12 relative overflow-hidden">
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute -top-12 left-0 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full opacity-60 z-0"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80 z-0"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full opacity-60 z-0"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full opacity-60 z-0"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 left-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full opacity-60 z-0"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80 z-0"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80 z-0"></div>

        {/* Background Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#6D28D9] opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#9333EA] opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#EA580C] opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="w-full max-w-md relative z-10 max-md:mb-20">
          <div className="bg-white rounded-3xl shadow-[0_16px_40px_rgba(109,40,217,0.12)] border border-[rgba(109,40,217,0.15)] p-8">
            {/* Back Link */}
            <Link
              href="/ias-mlp-summercontest"
              className="inline-flex items-center text-[#6D28D9] font-semibold text-sm mb-5 hover:underline"
            >
              <FaArrowLeft size={20} />
            </Link>

            {/* Logos */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 relative overflow-hidden">
              <div className="absolute hidden sm:block left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-[#D6D6D6] z-0" />
              <div className="flex items-center justify-center bg-white border border-[rgba(109,40,217,0.15)] rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-sm z-10">
                <div className="relative w-[95px] h-[40px] sm:w-[130px] sm:h-[55px]">
                  <Image
                    src="/navbar/logo-white.png"
                    fill
                    alt="I Am Scientist logo"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#F3F0FF] border border-[rgba(109,40,217,0.2)] z-10">
                <Handshake size={16} className="text-[#6D28D9] sm:w-5 sm:h-5" />
              </div>
              <div className="flex items-center justify-center bg-white border border-[rgba(109,40,217,0.15)] rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-sm z-10">
                <div className="relative w-[95px] h-[40px] sm:w-[130px] sm:h-[55px]">
                  <Image
                    src="/countrypartner/Logos/moonlight.png"
                    fill
                    alt="Moonlight logo"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EA580C] bg-[#FFF3E0] border border-[rgba(234,88,12,0.45)] px-4 py-1.5 rounded-full text-nowrap">
                <Rocket size={13} />
                Contest Registration
              </span>
            </div>

            <h1 className="text-3xl font-extrabold text-[#1F1F1F] text-center leading-tight">
              Join the Competition
            </h1>
            <p className="text-[#4B5563] text-sm text-center mt-2 mb-6">
              Register today and start your journey to{" "}
              <span className="text-[#6D28D9] font-semibold">WIN BIG 🏆</span>
            </p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(109,40,217,0.2)] to-transparent mb-6" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[rgba(109,40,217,0.2)] rounded-xl py-3 px-4 focus-within:border-[#6D28D9] focus-within:ring-2 focus-within:ring-[rgba(109,40,217,0.1)] transition-all">
                  <FaUser className="text-[#6D28D9] shrink-0" size={14} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full bg-transparent outline-none text-[#1F1F1F] placeholder:text-[#9CA3AF] text-sm"
                    onChange={handleChange}
                  />
                </div>
                {renderError("name")}
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[rgba(109,40,217,0.2)] rounded-xl py-3 px-4 focus-within:border-[#6D28D9] focus-within:ring-2 focus-within:ring-[rgba(109,40,217,0.1)] transition-all">
                  <FaPhone className="text-[#6D28D9] shrink-0" size={14} />
                  <input
                    type="number"
                    name="phone"
                    placeholder="03xxxxxxxx"
                    className="w-full bg-transparent outline-none text-[#1F1F1F] placeholder:text-[#9CA3AF] text-sm"
                    onChange={handleChange}
                  />
                </div>
                {renderError("phone")}
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[rgba(109,40,217,0.2)] rounded-xl py-3 px-4 focus-within:border-[#6D28D9] focus-within:ring-2 focus-within:ring-[rgba(109,40,217,0.1)] transition-all">
                  <FaEnvelope className="text-[#6D28D9] shrink-0" size={14} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent outline-none text-[#1F1F1F] placeholder:text-[#9CA3AF] text-sm"
                    onChange={handleChange}
                  />
                </div>
                {renderError("email")}
              </div>

              {/* Class */}
              <div>
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[rgba(109,40,217,0.2)] rounded-xl py-3 px-4 focus-within:border-[#6D28D9] focus-within:ring-2 focus-within:ring-[rgba(109,40,217,0.1)] transition-all">
                  <FaUser className="text-[#6D28D9] shrink-0" size={14} />
                  <input
                    type="text"
                    name="classs"
                    placeholder="Class (Example: 5)"
                    className="w-full bg-transparent outline-none text-sm"
                    onChange={handleChange}
                  />
                </div>
                {renderError("classs")}
              </div>

              {/* DOB */}
              <div>
                <label className="flex items-center gap-3 bg-[#F8FAFC] border border-[rgba(109,40,217,0.2)] rounded-xl py-3 px-4 cursor-pointer">
                  <FaUser className="text-[#6D28D9]" size={14} />
                  <input
                    type="date"
                    name="dob"
                    className="w-full bg-transparent outline-none text-sm cursor-pointer"
                    onChange={handleChange}
                  />
                </label>
                {renderError("dob")}
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[rgba(109,40,217,0.2)] rounded-xl py-3 px-4 focus-within:border-[#6D28D9] focus-within:ring-2 focus-within:ring-[rgba(109,40,217,0.1)] transition-all">
                  <FaLock className="text-[#6D28D9] shrink-0" size={14} />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full bg-transparent outline-none text-[#1F1F1F] placeholder:text-[#9CA3AF] text-sm"
                    onChange={handleChange}
                  />
                </div>
                {renderError("password")}
                <p className="text-xs text-[#9CA3AF] mt-1.5 ml-1">
                  <span className="text-[#6D28D9] font-medium">Tip:</span> Use
                  something like IamScientist@738
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[rgba(109,40,217,0.2)] rounded-xl py-3 px-4 focus-within:border-[#6D28D9] focus-within:ring-2 focus-within:ring-[rgba(109,40,217,0.1)] transition-all">
                  <FaLock className="text-[#6D28D9] shrink-0" size={14} />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full bg-transparent outline-none text-[#1F1F1F] placeholder:text-[#9CA3AF] text-sm"
                    onChange={handleChange}
                  />
                </div>
                {renderError("confirmPassword")}
              </div>

              {/* Subjects */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#374151]">
                  Select Subjects
                </label>
                <div className="flex flex-wrap gap-3 text-sm">
                  {["Math", "Science", "English"].map((sub) => (
                    <label key={sub} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="subjects"
                        value={sub}
                        className="cursor-pointer accent-[#6F41D9]"
                        onChange={handleSubjects}
                      />
                      {sub}
                    </label>
                  ))}
                </div>
                {renderError("subjects")}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 mt-1 font-bold text-white rounded-xl bg-gradient-to-r from-[#6D28D9] via-[#9333EA] to-[#8B5CF6] shadow-[0_12px_30px_rgba(109,40,217,0.18)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
                {loading ? (
                  <Loader size={16} strokeWidth={3} className="animate-spin" />
                ) : (
                  <ArrowRight size={16} strokeWidth={3} />
                )}
              </button>
            </form>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(109,40,217,0.2)] to-transparent mt-6 mb-4" />

            <p className="text-center text-xs text-[#9CA3AF] mt-4">
              Join{" "}
              <span className="text-[#6D28D9] font-semibold">
                10,000+ students
              </span>{" "}
              competing nationwide 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestSignup;
