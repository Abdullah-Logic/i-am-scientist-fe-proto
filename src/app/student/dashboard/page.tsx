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

type StudentRow = {
  student_name?: string;
  parent_name?: string;
  class?: string;
  dob?: string;
  gender?: string;
  level?: string;
  status?: string;
  email?: string;
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

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState<StudentRow[]>([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

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
        const mapped = rows.map((row: any) => ({
          student_name: row.student_name,
          parent_name: row.parent_name,
          class: row.class,
          dob: row.dob,
          gender: row.gender,
          level: row.level,
          status: row.status,
          email: row.email,
        }));

        setData(mapped);

        if (rows[0]?.status) {
          localStorage.setItem("status", rows[0].status);
        }
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
    localStorage.removeItem("status");
    router.push("/auth/login");
  };

  const handleNext = () => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("plan", "Stud");
    localStorage.setItem("price", "1500");
    localStorage.setItem("quant", `${data.length}`);
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

  const filteredRows = data.filter((row) => {
    const haystack = `${row.student_name ?? ""} ${row.parent_name ?? ""} ${
      row.class ?? ""
    }`.toLowerCase();
    if (query && !haystack.includes(query.toLowerCase())) return false;
    if (
      statusFilter !== "All Status" &&
      normalizeStatus(row.status) !== normalizeStatus(statusFilter)
    )
      return false;
    return true;
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#241048] text-white">
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
              <span>Outlines/Dumps</span>
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
            Student Dashboard
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
              label: "Pending",
              value: stats.pending,
              icon: Clock3,
              accent: "bg-orange-500",
              trend: "-3%",
            },
            {
              label: "Rejected",
              value: stats.rejected,
              icon: XCircle,
              accent: "bg-red-500",
              trend: "+1%",
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
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by student name, father name, or class..."
              className="w-full bg-[#1C1A3E] text-white/80 outline-none placeholder:text-white/40"
            />
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-[#1D1A3F] border border-[#3D206B] px-3 py-2 text-[12px] text-white/70">
            <Filter size={14} />
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
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
                  <th className="px-4 py-3">SR#</th>
                  <th className="px-4 py-3">Student Name</th>
                  <th className="px-4 py-3">Father Name</th>
                  <th className="px-4 py-3">Class</th>
                  <th className="px-4 py-3">Date of Birth</th>
                  <th className="px-4 py-3">Gender</th>
                  <th className="px-4 py-3">Level</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => (
                  <tr
                    key={`${row.student_name}-${index}`}
                    className="border-b border-white/5 text-white/80"
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-white">
                        {row.student_name ?? "Student"}
                      </div>
                      <div className="text-[10px] text-white/50">
                        {row.email ?? "student@example.com"}
                      </div>
                    </td>
                    <td className="px-4 py-3">{row.parent_name ?? "-"}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-[#1C2F74] px-3 py-1 text-[10px] text-white/80">
                        {row.class ?? "-"}
                      </span>
                    </td>
                    <td className="px-4 py-3">{row.dob ?? "-"}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-[#452464] px-3 py-1 text-[10px]">
                        {row.gender ?? "-"}
                      </span>
                    </td>
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
                          Edit
                        </button>
                        <button className="rounded-md bg-[#2C1754] px-2 py-1 text-[10px]">
                          View
                        </button>
                        <button className="rounded-md bg-[#2C1754] px-2 py-1 text-[10px]">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {!filteredRows.length && (
                  <tr>
                    <td
                      colSpan={9}
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
              Showing 1 to {filteredRows.length} of {data.length} students
            </span>
            <div className="flex items-center gap-2">
              <button className="rounded-md bg-[#321D5D] px-3 py-1 text-white disabled:opacity-30">
                1
              </button>
              <button className="rounded-md bg-[#321D5D] px-3 py-1 text-white disabled:opacity-30">
                2
              </button>
            </div>
          </div>
        </div>

          <div className="mt-6 flex items-center justify-between">
          <Link
            href="/student/dumps"
            className="rounded-xl bg-white/10 px-6 py-2 text-[12px]"
          >
            Back
          </Link>
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
