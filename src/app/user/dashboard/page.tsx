"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Clock3,
  Download,
  Filter,
  RefreshCcw,
  Search,
  Users,
  XCircle,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";

type OrgRow = {
  student_name?: string;
  parent_name?: string;
  class?: string;
  dob?: string;
  gender?: string;
  level?: string;
  status?: string;
  email?: string;
  school?: string;
  Campus?: string;
};

const normalizeStatus = (value?: string) => (value ? value.toLowerCase() : "");

const formatStatus = (value?: string) => {
  if (!value) return "Pending";
  const normalized = value.toLowerCase();
  if (normalized === "approved") return "Approved";
  if (normalized === "rejected") return "Rejected";
  if (normalized === "pending") return "Pending";
  return value;
};

const ITEMS_PER_PAGE = 50;

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState<OrgRow[]>([]);
  const [displayCampus, setDisplayCampus] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchContest = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/contest/getByUserId/${localStorage.getItem("IASID")}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );

        if (!response.ok) throw new Error("Failed to fetch data");

        const payload = await response.json();
        console.log(payload);

        const rows = payload?.contests ?? [];

        setDisplayCampus(rows[0]?.showCampus ?? false);
        setData(rows);

        rows.map((con: any) => {
          if (con.status === "Approved") {
            localStorage.setItem("status", con.status);
            return;
          }
        });

        localStorage.setItem("status", "pending");
      } catch (error) {
        console.error("Error fetching contest data:", error);
      }
    };

    fetchContest();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("IASID");
    localStorage.removeItem("IASROLE");
    localStorage.removeItem("IASEMAIL");
    localStorage.removeItem("IASPHONE");
    localStorage.removeItem("plan");
    localStorage.removeItem("price");
    localStorage.removeItem("quant");
    router.push("/auth/login");
  };

  const handleCheckboxChange = (index: number) => {
    setCheckedItems((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const handleNext = () => {
    const selectedRows = data.filter((_, index) => checkedItems[index]);
    if (data.length <= 0) {
      toast.error("Please add at least one student.");
      return;
    }
    if (selectedRows.length === 0) {
      toast.error("Please select at least one student.");
      return;
    }
    localStorage.setItem("quant", selectedRows.length.toString());
    localStorage.setItem("plan", "Org");
    localStorage.setItem("price", "1000");
    localStorage.setItem("data", JSON.stringify(selectedRows));
    router.push("/payment");
  };

  const stats = useMemo(() => {
    const total = data.length;
    const approved = data.filter(
      (row) => normalizeStatus(row.status) === "approved",
    ).length;
    const pending = data.filter(
      (row) => normalizeStatus(row.status) === "pending",
    ).length;
    const rejected = data.filter(
      (row) => normalizeStatus(row.status) === "rejected",
    ).length;
    return { total, approved, pending, rejected };
  }, [data]);

  const filteredRows = data.filter((row, index) => {
    const haystack = `${row.student_name ?? ""} ${row.parent_name ?? ""} ${
      row.school ?? ""
    }`.toLowerCase();
    if (query && !haystack.includes(query.toLowerCase())) return false;
    if (
      statusFilter !== "All Status" &&
      normalizeStatus(row.status) !== normalizeStatus(statusFilter)
    )
      return false;
    return true;
  });

  const totalPages = Math.ceil(filteredRows.length / ITEMS_PER_PAGE);
  const indexOfFirst = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRows = filteredRows.slice(
    indexOfFirst,
    indexOfFirst + ITEMS_PER_PAGE,
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#241048] text-white">
      <ToastContainer />

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

      <div className="relative z-10">
        <div className="bg-[#5D3794]">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 text-[13px]">
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="text-white">AI Sciences</span>
              <Link href="/user/dashboard">Students List</Link>
              <Link href="/user/studentinfo">Add Students</Link>
              <Link href="/user/registration">Edit Institution</Link>
              <Link href="/user/dumps">Outlines / Dumps</Link>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-md bg-gradient-to-r from-[#9D4DF6] to-[#E43D7A]  px-4 py-1.5 text-[12px] font-semibold text-white"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-4 pb-16 pt-10">
          <div className="text-center">
            <h1 className="font-misri text-[28px] font-semibold tracking-wide">
              Organization Dashboard
            </h1>
            <div className="mx-auto mt-2 h-0.5 w-24 bg-white/80" />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Total Students",
                value: stats.total,
                icon: Users,
                accent: "bg-pink-500",
                trend: "+12%",
              },
              {
                label: "Approved",
                value: stats.approved,
                icon: CheckCircle2,
                accent: "bg-emerald-500",
                trend: "+8%",
              },
              {
                label: "Pending Review",
                value: stats.pending,
                icon: Clock3,
                accent: "bg-orange-500",
                trend: "2 New",
              },
              {
                label: "Rejected",
                value: stats.rejected,
                icon: XCircle,
                accent: "bg-red-500",
                trend: "-5%",
              },
            ].map(({ label, value, icon: Icon, accent, trend }) => (
              <div
                key={label}
                className="rounded-2xl border border-[#321D5D] bg-[#1B0C3E] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${accent}`}
                  >
                    <Icon size={18} />
                  </div>
                  <span className="text-[11px] text-emerald-300">{trend}</span>
                </div>
                <p className="mt-3 text-[12px] text-white/60">{label}</p>
                <p className="text-2xl font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-[#321D5D] bg-[#1B0C3E] px-4 py-3">
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-[#1C1A3E] px-3 py-2 text-[12px] text-white/60">
              <Search size={14} />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by student name, father name, or school..."
                className="w-full bg-[#1C1A3E] text-white/80 outline-none placeholder:text-white/40"
              />
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-[#1D1A3F] border border-[#3D206B] px-3 py-2 text-[12px] text-white/70">
              <Filter size={14} />
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-transparent text-white/80 outline-none"
              >
                <option className="text-black">All Status</option>
                <option className="text-black">Approved</option>
                <option className="text-black">Pending</option>
                <option className="text-black">Rejected</option>
              </select>
            </div>
            <button className="flex items-center gap-2 rounded-xl bg-white text-[#C279F9] px-4 py-2 text-[12px]">
              <RefreshCcw size={14} />
              Refresh
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#9D4DF6] to-[#E43D7A] px-4 py-2 text-[12px] font-semibold">
              <Download size={14} />
              Export
            </button>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[#321D5D] bg-[#1B0C3E]">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-[12px]">
                <thead className="bg-gradient-to-r from-[#371A66] to-[#47164F] text-white/70">
                  <tr>
                    <th className="px-4 py-3">Select</th>
                    <th className="px-4 py-3">SR#</th>
                    <th className="px-4 py-3">Student Name</th>
                    <th className="px-4 py-3">Father Name</th>
                    <th className="px-4 py-3">School</th>
                    <th className="px-4 py-3">Date of Birth</th>
                    <th className="px-4 py-3">Gender</th>
                    {displayCampus && <th className="px-4 py-3">Campus</th>}
                    <th className="px-4 py-3">Contest</th>
                    <th className="px-4 py-3">Level</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((row, pageIndex) => {
                    const globalIndex = indexOfFirst + pageIndex;
                    return (
                      <tr
                        key={`${row.student_name}-${globalIndex}`}
                        className="border-b border-white/5 text-white/80"
                      >
                        <td className="px-4 py-3">
                          <input
                            type="checkbox"
                            disabled={normalizeStatus(row.status) !== "pending"}
                            checked={!!checkedItems[globalIndex]}
                            onChange={() => handleCheckboxChange(globalIndex)}
                            className="accent-[#C407B9]"
                          />
                        </td>
                        <td className="px-4 py-3">{globalIndex + 1}</td>
                        <td className="px-4 py-3">
                          <div className="font-semibold text-white">
                            {row.student_name ?? "-"}
                          </div>
                          <div className="text-[10px] text-white/50">
                            {row.email ?? "-"}
                          </div>
                        </td>
                        <td className="px-4 py-3">{row.parent_name ?? "-"}</td>
                        <td className="px-4 py-3">
                          <span className="rounded-full bg-[#1C2F74] px-3 py-1 text-[10px] text-white/80">
                            {row.school ?? row.class ?? "-"}
                          </span>
                        </td>
                        <td className="px-4 py-3">{row.dob ?? "-"}</td>
                        <td className="px-4 py-3">
                          <span className="rounded-full bg-[#452464] px-3 py-1 text-[10px]">
                            {row.gender ?? "-"}
                          </span>
                        </td>
                        {displayCampus && (
                          <td className="px-4 py-3">{row.Campus ?? "-"}</td>
                        )}
                        <td className="px-4 py-3">Contest</td>
                        <td className="px-4 py-3">
                          <span className="rounded-full bg-[#3C1E66] px-3 py-1 text-[10px]">
                            {row.level ?? "-"}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded-full px-3 py-1 text-[10px] ${
                              normalizeStatus(row.status) === "approved"
                                ? "bg-emerald-600/20 text-emerald-300"
                                : normalizeStatus(row.status) === "rejected"
                                  ? "bg-red-600/20 text-red-300"
                                  : "bg-orange-500/20 text-orange-300"
                            }`}
                          >
                            {formatStatus(row.status)}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button className="rounded-md bg-[#C407B9] px-3 py-1 text-[10px]">
                              Re Submit
                            </button>
                            <button className="rounded-md bg-[#2C1754] px-2 py-1 text-[10px]">
                              View
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {!currentRows.length && (
                    <tr>
                      <td
                        colSpan={displayCampus ? 12 : 11}
                        className="px-4 py-6 text-center text-white/50"
                      >
                        No students found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-[11px] text-white/50">
              <span>
                Showing {indexOfFirst + 1} to{" "}
                {Math.min(indexOfFirst + ITEMS_PER_PAGE, filteredRows.length)}{" "}
                of {filteredRows.length} students
              </span>
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="rounded-md bg-[#321D5D] px-3 py-1 text-white disabled:opacity-30"
                >
                  Prev
                </button>
                <span className="text-white">
                  {currentPage} / {totalPages || 1}
                </span>
                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="rounded-md bg-[#321D5D] px-3 py-1 text-white disabled:opacity-30"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end">
            <button
              onClick={handleNext}
              className="rounded-xl bg-[#C407B9] px-6 py-2 text-[12px] font-semibold"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
