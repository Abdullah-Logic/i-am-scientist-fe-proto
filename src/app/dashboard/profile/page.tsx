"use client";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  Building2,
  Globe,
  Lock,
  Mail,
  MapPin,
  Phone,
  Info,
  User,
} from "lucide-react";

const page = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordBody, setPasswordBody] = useState({
    oldPassword: "",
    newPassword: "",
    affiliateId: "",
  });
  const [formData, setFormData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company_name: "",
    website: "",
  });

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: any): void => {
    const { name, value } = e.target;
    setPasswordBody((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const affiliateId = localStorage.getItem("IASAFFILIATEID");
        if (!affiliateId) {
          console.error("Affiliate ID not found in localStorage.");
          return;
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/affiliate/get/${affiliateId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json", // Ensure content type is set
              // Add other headers if necessary, e.g., 'Authorization': `Bearer ${token}`
            },
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
        setFormData(data);
      } catch (error) {
        console.error("Failed to fetch user data:");
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    try {
      const affiliateId = localStorage.getItem("IASAFFILIATEID");
      if (!affiliateId) {
        console.error("Affiliate ID not found in localStorage.");
        return;
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/affiliate/update-profile/${affiliateId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        toast.success("Profile Updated Successfully");
      } else {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const handleDelete = async () => {
    // Add your delete logic here, e.g., API call to delete the user account
    console.log("Account deleted!");
    const affiliateId = localStorage.getItem("IASAFFILIATEID");
    if (!affiliateId) {
      console.error("Affiliate ID not found in localStorage.");
      return;
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/affiliate/delete/${affiliateId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (response.ok) {
      toast.success("Your Account has been deleted");
      localStorage.removeItem("IASAFFILIATEID");
      localStorage.removeItem("referralCode");
      router.push("/");
    }
    setIsModalOpen(false); // Close the modal
  };

  const handleUpdatePassword = async () => {
    if (!passwordBody.oldPassword || !passwordBody.newPassword) {
      toast.error("Please provide the current and new password.");
      return;
    }

    passwordBody.affiliateId = localStorage.getItem("IASAFFILIATEID") || "";

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/affiliate/change-password`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passwordBody),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update password.");
      }

      const result = await response.json();
      toast.success("Password updated successfully!");
      setPasswordBody({
        oldPassword: "",
        newPassword: "",
        affiliateId: "",
      });
      console.log("Password update response:", result);
    } catch (error: any) {
      console.error("Error updating password:", error);
      toast.error(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="relative min-h-screen overflow-hidden bg-[#25104A] py-12 text-white">
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

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
          <div className="text-center">
            <p className="font-misri text-3xl font-semibold md:text-4xl">
              Profile
            </p>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-white/80" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#190C3A] p-6 shadow-2xl shadow-black/30">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff65c2] to-[#9b5cff] shadow-md shadow-black/30">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold">General</p>
                  <p className="text-xs text-white/60">
                    Update your personal information
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs text-white/70">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <User className="h-4 w-4 text-white/50" />
                      <input
                        type="text"
                        id="first-name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                        placeholder="Enter Your First Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/70">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <User className="h-4 w-4 text-white/50" />
                      <input
                        type="text"
                        id="Last-name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                        placeholder="Enter Your Last Name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/70">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <Mail className="h-4 w-4 text-white/50" />
                    <input
                      type="email"
                      id="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/70">Address</label>
                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <MapPin className="h-4 w-4 text-white/50" />
                    <input
                      type="text"
                      id="Address"
                      name="address"
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                      placeholder="123 Science Street, New York"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/70">Phone Number</label>
                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <Phone className="h-4 w-4 text-white/50" />
                    <input
                      type="text"
                      id="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                      placeholder="Enter your Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/70">Company Name</label>
                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <Building2 className="h-4 w-4 text-white/50" />
                    <input
                      type="text"
                      id=" Company Name"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                      placeholder="Enter Your Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/70">Website</label>
                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <Globe className="h-4 w-4 text-white/50" />
                    <input
                      type="text"
                      id="Website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                      placeholder="Enter Your Website"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleUpdate}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#B64FF3] to-[#DC3E8A] px-4 py-3 text-sm font-semibold shadow-lg shadow-purple-900/40 hover:opacity-90"
              >
                Update Profile
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-white/10 bg-[#190C3A] p-6 shadow-2xl shadow-black/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#48a7ff] to-[#2b70ff] shadow-md shadow-black/30">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Change Password</p>
                    <p className="text-xs text-white/60">
                      Update your account password
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="relative">
                    <label className="text-xs text-white/70">
                      Current Password <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <Lock className="h-4 w-4 text-white/50" />
                      <input
                        type={showOldPassword ? "text" : "password"}
                        id="Enter Your Password"
                        name="oldPassword"
                        value={passwordBody.oldPassword}
                        onChange={handlePasswordChange}
                        className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                        placeholder="Current Password"
                      />
                      <span
                        onClick={() => setShowOldPassword((prev) => !prev)}
                        className="text-white/70 cursor-pointer"
                      >
                        {showOldPassword ? (
                          <AiOutlineEyeInvisible size={18} />
                        ) : (
                          <AiOutlineEye size={18} />
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-xs text-white/70">
                      New Password <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <Lock className="h-4 w-4 text-white/50" />
                      <input
                        type={showNewPassword ? "text" : "password"}
                        id="Enter New Password"
                        name="newPassword"
                        value={passwordBody.newPassword}
                        onChange={handlePasswordChange}
                        className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                        placeholder="Enter Your New Password"
                      />
                      <span
                        onClick={() => setShowNewPassword((prev) => !prev)}
                        className="text-white/70 cursor-pointer"
                      >
                        {showNewPassword ? (
                          <AiOutlineEyeInvisible size={18} />
                        ) : (
                          <AiOutlineEye size={18} />
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-xs text-white/70">
                      Confirm New Password{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <Lock className="h-4 w-4 text-white/50" />
                      <input
                        type="password"
                        id="Confirm New Password"
                        name="confirmPassword"
                        className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                        placeholder="Confirm New Password"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleUpdatePassword}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1f6bff] to-[#17a2ff] px-4 py-3 text-sm font-semibold shadow-lg shadow-blue-900/30 hover:opacity-90"
                >
                  <Lock className="h-4 w-4" />
                  Change Password
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#4a0b3f] to-[#2b0b57] p-6 shadow-2xl shadow-black/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff3b3b] to-[#ff7a00] shadow-md shadow-black/30">
                    <Info className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Delete Account</p>
                    <p className="text-xs text-white/70">
                      Once you delete your account, there is no going back.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-[#ff3b3b]"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
              <div className="w-full max-w-sm rounded-lg bg-[#280253] p-6 shadow-xl">
                <h2 className="text-lg font-semibold mb-4 text-white">
                  Are you sure?
                </h2>
                <p className="text-sm text-white mb-6">
                  Are you sure you want to delete your account? This action
                  cannot be undone.
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
                    onClick={handleDelete}
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
