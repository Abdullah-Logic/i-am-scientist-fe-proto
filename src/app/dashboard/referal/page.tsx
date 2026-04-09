"use client";
import { Zap } from "lucide-react";
import {
  DollarSign,
  Calendar,
  CheckCircle2,
  Clock3,
  Copy,
  Download,
  Gift,
  Search,
  Users,
  Share2,
  Info,
} from "lucide-react";
import { useState } from "react";

const Referrals = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const referrals = [
    {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      plan: "Premium",
      status: "Paying",
      date: "1/15/2024",
      commission: "$45.00",
    },
    {
      name: "Michael Chen",
      email: "michael.c@example.com",
      plan: "Trial",
      status: "Free/Trial",
      date: "2/20/2024",
      commission: "$0.00",
    },
    {
      name: "Emily Rodriguez",
      email: "emily.r@example.com",
      plan: "Premium",
      status: "Paying",
      date: "1/28/2024",
      commission: "$45.00",
    },
    {
      name: "David Kim",
      email: "david.k@example.com",
      plan: "Pending",
      status: "Pending",
      date: "3/5/2024",
      commission: "$0.00",
    },
    {
      name: "Jessica Brown",
      email: "jessica.b@example.com",
      plan: "Trial",
      status: "Free/Trial",
      date: "2/14/2024",
      commission: "$0.00",
    },
  ];

  const planBadgeClass = (plan: string) => {
    if (plan === "Premium")
      return "border-[#7E4CC9]/60 bg-[#3A1A63] text-[#C9A8FF]";
    if (plan === "Trial")
      return "border-[#2B63D1]/60 bg-[#1C2A5A] text-[#86B4FF]";
    if (plan === "Pending")
      return "border-[#6B6B75]/60 bg-[#2B2B3E] text-[#B9BCC8]";
    return "border-white/15 bg-white/10 text-white/70";
  };

  const statusBadgeClass = (status: string) => {
    if (status === "Paying")
      return "border-emerald-400/40 bg-emerald-500/15 text-emerald-300";
    if (status === "Free/Trial")
      return "border-sky-400/40 bg-sky-500/15 text-sky-300";
    if (status === "Pending")
      return "border-orange-400/50 bg-orange-500/15 text-orange-300";
    return "border-white/15 bg-white/10 text-white/70";
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#280253] text-white">
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

      <div className="relative z-10 flex flex-col items-center px-4 pb-16 pt-10">
        <div className="text-center">
          <p className="text-2xl md:text-4xl font-semibold font-misri">
            Referrals
          </p>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-white/80" />
        </div>

        <div className="mt-10 w-full max-w-6xl space-y-8">
          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Total Referrals",
                value: "5",
                badge: "+2 this month",
                color: "from-[#B64FF3] to-[#DC3E8A]",
                icon: Users,
              },
              {
                label: "Paying Customers",
                value: "2",
                badge: "$90.00",
                color: "from-[#2bd87f] to-[#0ca95b]",
                icon: DollarSign,
              },
              {
                label: "Trial Users",
                value: "2",
                badge: "Active trials",
                color: "from-[#48a7ff] to-[#2b70ff]",
                icon: Gift,
              },
              {
                label: "Pending",
                value: "1",
                badge: "Awaiting signup",
                color: "from-[#ff9f0a] to-[#ff6a00]",
                icon: Clock3,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#462076] bg-[#1A0B3C] p-5 shadow-lg shadow-black/30"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-lg shadow-md shadow-black/30`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-[#1B1A3B] px-2 py-1 text-xs text-white/70">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-4 text-sm text-white/70">{item.label}</p>
                <p className="text-2xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Referral Link */}
          <div className="rounded-2xl border border-[#462076] bg-[#1A0B3C] p-6 shadow-2xl shadow-black/30">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#B64FF3] to-[#DC3E8A] shadow-md shadow-black/30">
                <Share2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold">Your Referral Link</p>
                <p className="text-sm text-white/70">
                  Share this link to earn commissions
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-center">
              <div className="flex-1 rounded-lg bg-white/5 px-4 py-3 text-sm text-white/70">
                https://iamscientist.io/?referral=ABC123XYZ
              </div>
              <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#B64FF3] to-[#DC3E8A] px-4 py-2 text-sm font-semibold">
                <Copy className="h-3.5 w-3.5" />
                Copy
              </button>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="flex flex-col gap-4 rounded-2xl border border-[#462076] bg-[#1C0C3E] p-4 shadow-xl shadow-black/30 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full items-center gap-2 rounded-xl border border-[#462076] bg-white/5 px-3 py-2 md:max-w-sm">
              <Search className="h-4 w-4 text-white/60" />
              <input
                placeholder="Search by name or email..."
                className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["All", "Paying", "Free/Trial", "Pending"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#B64FF3] to-[#DC3E8A] text-white"
                      : "bg-[#462076] text-white/70 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#B64FF3] to-[#DC3E8A] px-3 py-1.5 text-xs font-semibold shadow-lg shadow-purple-900/40">
                <Download className="h-3.5 w-3.5" />
                Download
              </button>
            </div>
          </div>

          {/* Latest Referrals — from old code */}
          <div className="overflow-hidden rounded-2xl border border-[#462076] bg-[#1A0B3C] shadow-2xl shadow-black/30">
            <div className="border-b border-[#462076] bg-gradient-to-r from-[#43217C] to-[#591A57] px-6 py-4">
              <p className="text-lg font-semibold">
                <Users size={20} className="inline mr-2 text-[#C279F9]" />
                Your Latest Referrals
              </p>
              <p className="text-xs text-white/60">
                Track and manage your referred users
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-white/5 text-xs uppercase text-white/70">
                  <tr>
                    <th className="px-6 py-3">User</th>
                    <th className="px-6 py-3 text-center">Plan</th>
                    <th className="px-6 py-3 text-center">Status</th>
                    <th className="px-6 py-3 text-center">Date Joined</th>
                    <th className="px-6 py-3 text-right">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {referrals.map((row) => (
                    <tr
                      key={row.email}
                      className="border-t border-white/5 hover:bg-white/5"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#ff65c2] to-[#9b5cff] text-xs font-semibold">
                            {row.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="text-sm font-semibold">{row.name}</p>
                            <p className="text-xs text-white/50">{row.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`rounded-full border px-3 py-1 text-xs ${planBadgeClass(
                            row.plan,
                          )}`}
                        >
                          {row.plan}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs ${statusBadgeClass(
                            row.status,
                          )}`}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-xs text-white/70">
                        <span className="inline-flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-[#C279F9]" />
                          {row.date}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                          {row.commission}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-2 border-t border-[#462076] bg-white/5 px-6 py-4 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
              <span>Showing {referrals.length} referrals</span>
              <span>
                Total Commission:{" "}
                <span className="text-emerald-300">$90.00</span>
              </span>
            </div>
          </div>

          {/* Tips */}
          <div className="rounded-2xl border border-[#352CA2] bg-[#392280] p-6 shadow-2xl shadow-black/30">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#48a7ff] to-[#2b70ff] shadow-md shadow-black/30">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold">
                  How to Maximize Your Referrals
                </p>
                <p className="text-sm text-white/70">
                  Simple tips to boost your commissions
                </p>
              </div>
            </div>
            <div className="mt-4 ml-10 space-y-2 text-sm text-white/70">
              <p>
                <Zap size={15} className="inline mr-2 text-[#F9C747]" />
                Share your unique referral link on social platforms
              </p>
              <p>
                <Zap size={15} className="inline mr-2 text-[#F9C747]" />
                Write blog posts or create content about our courses
              </p>
              <p>
                <Zap size={15} className="inline mr-2 text-[#F9C747]" />
                Engage with your audience and recommend relevant courses
              </p>
              <p>
                <Zap size={15} className="inline mr-2 text-[#F9C747]" />
                Earn 15% recurring commission for every paying customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
