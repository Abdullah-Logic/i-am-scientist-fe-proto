"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import Container from "../components/container";
import StudentHeader from "../components/studentHeader";
import Image from "next/image";
import Link from "next/link";
import { CreditCard, FileUp } from "lucide-react";

const paymentAccounts = [
  {
    name: "JazzCash",
    fee: "Fee: 1.5%",
    time: "Instant",
    icon: "/images/JazzCash.svg",
    bg: "from-orange-500 to-red-500",
    type: "bank",
  },
  {
    name: "Easypaisa",
    fee: "Fee: 1.2%",
    time: "Instant",
    icon: "/images/EasyPaisa.svg",
    bg: "from-green-500 to-emerald-600",
    type: "bank",
  },
  {
    name: "HBL Mobile",
    fee: "Fee: 2.0%",
    time: "1-2 hours",
    icon: "/images/HBL.svg",
    bg: "from-blue-500 to-blue-700",
    type: "bank",
  },
];

type Student = {
  id: string;
  student_name: string;
  parent_name: string;
  class: string;
};

export default function BankTransfer() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setimageFile] = useState<File | null>(null);
  const [plan, setPlan] = useState("");
  const [price, setPrice] = useState("");
  const [quant, setQuant] = useState("");
  const [registeredStudents, setRegisteredStudents] = useState<Student[]>([]);
  const [isAuthed, setIsAuthed] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedType, setSelectedType] = useState("");

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
    setRegisteredStudents(JSON.parse(localStorage.getItem("data") || "[]"));
  }, [isAuthed]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (
      file &&
      (file.type.startsWith("image/") || file.type === "application/pdf")
    ) {
      setimageFile(file);
      setPreviewImage(
        file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
      );
    } else {
      toast.error("Please upload a valid image or PDF.");
    }
  };

  const handleSubmit = async () => {
    const id = localStorage.getItem("IASID");
    if (!imageFile) {
      console.error("No image file selected");
      return;
    }
    try {
      setIsSubmit(true);
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("id", id || "");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payment/send-detail`,
        {
          method: "POST",
          body: formData,
        },
      );
      if (response.ok) {
        router.push(
          `/payment-success?session_id=transfer&id=${localStorage.getItem(
            "IASID",
          )}&plan=${plan}&price=${parseInt(price) * parseInt(quant)}`,
        );
      } else {
        console.error("Failed to submit:", response.statusText);
      }
      setIsSubmit(false);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  const handlePayment = (type: string) => {
    if (!selectedPayment) {
      toast.error("Please select a payment method.");
      return;
    }
    if (type === "bank") {
      router.push(`/bank-transfer?plan=${plan}&price=${price}&quant=${quant}`);
    } else {
      router.push(`/upload?plan=${plan}&price=${price}&quant=${quant}`);
    }
  };

  if (!isAuthed) return null;

  return (
    <Container>
      <div className="relative isolate min-h-screen overflow-hidden bg-[#1F0D40] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#3b0c7a_0%,_#280253_55%,_#1c043a_100%)]" />
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

        <ToastContainer />
        <div className="relative z-20">
          <StudentHeader />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col px-4 pb-16 pt-15 md:pt-20">
          <div className="flex flex-col items-center text-center text-white">
            <p className="font-misri text-3xl font-bold md:text-5xl">
              List of Registered Students
            </p>
            <span className="mt-3 h-0.5 w-16 rounded-full bg-white/80" />
          </div>

          <div
            id="upload"
            className="mt-10 rounded-2xl border border-[#401E6F] bg-[#180B38] p-5 shadow-[0_20px_60px_rgba(17,8,38,0.55)] backdrop-blur"
          >
            <div className="flex flex-row gap-1 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#B64FF3] to-[#DC3E8A] mr-2">
                <FileUp size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-semibold">Upload Student List</p>
                <p className="text-xs text-white/60">
                  Upload JPG, GIF, PNG, or PDF file (Max 50MB)
                </p>
              </div>
            </div>
            <label
              htmlFor="payment-upload"
              className="mt-4 block cursor-pointer rounded-2xl border border-[#401E6F] bg-[#220F47] px-4 py-10 transition hover:border-[#48227d]"
            >
              <div className="mx-auto flex max-w-md flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B64FF3] to-[#DC3E8A] shadow-[0_10px_25px_rgba(196,7,185,0.35)]">
                  <span className="text-2xl font-semibold">⇪</span>
                </div>
                <p className="text-sm font-semibold text-white/90">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-white/50">Maximum file size: 50MB</p>
              </div>
            </label>

            {previewImage && (
              <div className="mt-4 flex justify-center">
                <Image
                  src={previewImage}
                  alt="Preview"
                  className="max-h-48 rounded-xl border border-[#401E6F] object-contain"
                  width={400}
                  height={192}
                />
              </div>
            )}

            <div className="mt-4 grid w-full grid-cols-1 gap-3 sm:grid-cols-5">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="rounded-lg bg-gradient-to-r from-[#B64FF3] to-[#DC3E8A] px-4 py-2 text-center text-sm font-semibold text-white shadow col-span-2"
              >
                Upload File
              </button>
              <Link
                href="#table"
                className="rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold text-[#C279F9] col-span-2"
              >
                Preview
              </Link>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold text-gray-400 col-span-1"
              >
                Template
              </button>
            </div>
            <input
              id="payment-upload"
              ref={fileInputRef}
              type="file"
              accept="image/*,application/pdf"
              className="hidden"
              onChange={handleUpload}
            />
          </div>

          <div className="mt-6 rounded-2xl border border-[#401E6F] bg-[#190C39] p-6">
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
                    onClick={() => {
                      setSelectedPayment(method.name);
                      setSelectedType(method.type);
                    }}
                    className={`rounded-xl border p-4 text-center transition-all ${
                      selectedPayment === method.name
                        ? "border-purple-400 bg-[#2a1050]"
                        : "border-[#401E6F] bg-[#2a1050] hover:border-white/20"
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

            <div className="flex items-center justify-center my-5">
              <div className="flex-1 h-px bg-[#401E6F]" />
              <span className="mx-4 rounded-full border border-white/20 bg-[#2a1050] px-4 py-1 text-[11px] text-white/60">
                OR
              </span>
              <div className="flex-1 h-px bg-[#401E6F]" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-white/80 text-[12px] font-semibold">
                  <CreditCard
                    size={15}
                    className="text-[#4E99F4] inline mr-2"
                  />
                  Pay through Cards:
                </p>
                <span className="text-[10px] text-white/40 bg-[#1D293D] rounded-full px-2 py-0.5">
                  All Major Cards
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedPayment("card");
                  setSelectedType("card");
                }}
                className={`w-full rounded-xl border p-4 flex items-center gap-4 transition-all ${
                  selectedPayment === "card"
                    ? "border-purple-400 bg-[#2a1050]"
                    : "border-[#401E6F] bg-[#2a1050] hover:border-white/20"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl shrink-0">
                  <Image
                    src="/images/cards.svg"
                    alt="Picture of credit and debit cards"
                    width={100}
                    height={100}
                  />
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

            <button
              type="button"
              onClick={() => {
                handlePayment(selectedType);
                handleSubmit();
              }}
              disabled={!selectedPayment || isSubmit}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#7B2CF2] to-[#C407B9] py-3 text-sm font-semibold text-white shadow disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
            >
              {isSubmit
                ? "Processing..."
                : selectedPayment
                  ? `Continue with ${selectedPayment}`
                  : "Select a Payment Method"}
            </button>
          </div>

          <div
            id="table"
            className="mt-10 rounded-2xl border border-[#401E6F] bg-[#23114E] p-5 shadow-[0_20px_60px_rgba(17,8,38,0.55)] backdrop-blur"
          >
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-center border-collapse border border-[#401E6F] text-sm font-popins">
                <thead>
                  <tr className="bg-[#C407B9]">
                    <th className="border border-[#401E6F] px-4 py-2">SR#</th>
                    <th className="border border-[#401E6F] px-4 py-2">
                      Student Name
                    </th>
                    <th className="border border-[#401E6F] px-4 py-2">
                      Father Name
                    </th>
                    <th className="border border-[#401E6F] px-4 py-2">Class</th>
                  </tr>
                </thead>
                <tbody>
                  {registeredStudents.map((student: Student) => (
                    <tr key={student.id} className="odd:bg-white/5">
                      <td className="border border-[#401E6F] px-4 py-2">
                        {student.id}
                      </td>
                      <td className="border border-[#401E6F] px-4 py-2">
                        {student.student_name}
                      </td>
                      <td className="border border-[#401E6F] px-4 py-2">
                        {student.parent_name}
                      </td>
                      <td className="border border-[#401E6F] px-4 py-2">
                        {student.class}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      className="font-semibold border border-[#401E6F] px-4 py-2"
                      colSpan={3}
                    >
                      Total
                    </td>
                    <td className="font-semibold border border-[#401E6F] px-4 py-2">
                      {parseInt(quant) * parseInt(price)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
