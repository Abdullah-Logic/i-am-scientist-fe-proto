"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  DollarSign,
  Calendar,
  ChartLine,
  Download,
  Percent,
  RefreshCw,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChartColumn } from "lucide-react";
import { ArrowDownUp } from "lucide-react";

export default function DashboardDetails() {
  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchLast3MonthsDetails = async () => {
      try {
        const affiliateId = localStorage.getItem("IASAFFILIATEID");
        if (!affiliateId) {
          console.error("Affiliate ID not found in localStorage.");
          return;
        }
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/affiliate/signup-count/${affiliateId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const { data } = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {}
    };

    fetchLast3MonthsDetails();
  }, []);

  const safeData = Array.isArray(data) ? data : [];
  const hasRealData = safeData.length > 0;
  const displayData = hasRealData
    ? safeData
    : [
        {
          month: "Jan 2024",
          signupCount: 1,
          earning: 400,
        },
        {
          month: "Jan 2025",
          signupCount: 9,
          earning: 1400,
        },
        {
          month: "feb 2024",
          signupCount: 12,
          earning: 2300,
        },
      ];
  const { totalSignups, totalEarnings } = useMemo(() => {
    const totals = displayData.reduce(
      (acc, row) => {
        acc.totalSignups += Number(row?.signupCount) || 0;
        acc.totalEarnings += Number(row?.earning) || 0;
        return acc;
      },
      { totalSignups: 0, totalEarnings: 0 },
    );
    return totals;
  }, [displayData]);

  const formatNumber = (value: number) =>
    new Intl.NumberFormat("en-PK").format(value);
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-PK", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#210E43] py-12 text-white">
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
            Details
          </p>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-white/80" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Total Sign Ups",
              value: totalSignups,
              badge: "0%",
              icon: Users,
              color: "from-[#ff65c2] to-[#9b5cff]",
            },
            {
              label: "Total Earnings",
              value: `PKR ${formatCurrency(totalEarnings)}`,
              badge: "$0.00",
              icon: DollarSign,
              color: "from-[#2bd87f] to-[#0ca95b]",
            },
            {
              label: "Avg. Per Day",
              value: 0,
              badge: "0/day",
              icon: ChartLine,
              color: "from-[#48a7ff] to-[#2b70ff]",
            },
            {
              label: "Conversion Rate",
              value: "0%",
              badge: "N/A",
              icon: Percent,
              color: "from-[#ff9f0a] to-[#ff6a00]",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-[#180B3A] p-5 shadow-lg shadow-black/30"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-lg shadow-md shadow-black/30`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/70">
                  {item.badge}
                </span>
              </div>
              <p className="mt-4 text-sm text-white/70">{item.label}</p>
              <p className="text-2xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#180B3A] p-4 shadow-xl shadow-black/30 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#1B1A3B] px-3 py-2 text-sm text-white/80">
              <Calendar className="h-4 w-4" />
              All Time
              <ChevronDown className="h-4 w-4" />
            </div>
            <p className="text-xs text-white/60">
              Showing data for: <span className="font-semibold">All Time</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg  bg-white text-[#C279F9] px-3 py-2 text-xs font-semibold">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#9D4DF6] to-[#E43D7A] px-3 py-2 text-xs font-semibold shadow-lg shadow-purple-900/40">
              <Download className="h-4 w-4" />
              Export CSV
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#180B3B] shadow-2xl shadow-black/30">
          <div className="border-b border-white/10 bg-gradient-to-r from-[#411F75] to-[#591950] px-6 py-4">
            <p className="text-lg font-semibold">
              <ChartColumn size={20} className="inline mr-2 text-[#C279F9]" />{" "}
              Performance Details
            </p>
            <p className="text-xs text-white/60">
              Track your daily sign-ups and earnings
            </p>
          </div>
          <div className="overflow-x-auto mt-5">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gradient-to-r from-[#591950] to-[#411F75] text-xs uppercase text-white/70">
                <tr>
                  <th className="px-6 py-3">
                    Dates <ArrowDownUp size={10} className="inline mb-1 ml-1" />
                  </th>
                  <th className="px-6 py-3 text-center">
                    Sign Ups
                    <ArrowDownUp size={10} className="inline mb-1 ml-1" />
                  </th>
                  <th className="px-6 py-3 text-right">
                    Earning
                    <ArrowDownUp size={10} className="inline mb-1 ml-1" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayData.length > 0 ? (
                  displayData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-t border-white/5 hover:bg-white/5"
                    >
                      <td className="px-6 py-4 text-sm text-white/80 flex flex-row items-center">
                        <div className="p-2 mr-2 bg-gradient-to-br from-[#9D4DF6] to-[#E43D7A] rounded-md inline-block">
                          <Calendar size={15} />
                        </div>
                        {row.month}
                      </td>

                      <td className="px-6 py-4 text-center font-semibold text-white/80">
                        {formatNumber(Number(row.signupCount) || 0)}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <span className="rounded-full border border-[#00C9504D] bg-[#00C9501A] px-3 py-2 text-xs font-bold text-white/80">
                          <DollarSign
                            size={15}
                            className="inline text-[#68E074]"
                          />
                          {formatCurrency(Number(row.earning) || 0)}
                          <span className="text-[10px] text-white/60 font-bold ml-1">
                            PKR
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="text-center py-6 text-white/60">
                      No Records Found
                    </td>
                  </tr>
                )}
              </tbody>
              <tfoot className="bg-gradient-to-r from-[#411F75] to-[#591950] text-xs uppercase text-white/70 font-bold">
                <tr>
                  <th className="px-6 py-3">Total</th>
                  <th className="px-6 py-3 text-center">
                    {formatNumber(totalSignups)}
                  </th>
                  <th className="px-6 py-3 text-right">
                    <span className="rounded-full border border-[#00C9504D] bg-[#00C9501A] px-3 py-2 text-xs font-bold text-white/80">
                      <DollarSign size={15} className="inline text-[#68E074]" />
                      {formatCurrency(totalEarnings)}
                      <span className="text-[10px] text-white/60 font-bold ml-1">
                        PKR
                      </span>
                    </span>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/10 bg-white/5 px-6 py-4 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
            <span>Displaying {displayData.length} records</span>
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Best Day",
              value: "N/A",
              helper: "No sign-ups recorded yet",
              icon: Trophy,
              color: "from-[#2b70ff] to-[#6c2bff]",
              bg: "from-[#1C398E4D] to-[#104E644D]",
              border: "#2B7FFFB2",
            },
            {
              title: "Avg. Daily",
              value: "0",
              helper: "sign-ups per day",
              icon: TrendingUp,
              color: "from-[#ff65c2] to-[#9b5cff]",
              bg: "from-[#59168B4D] to-[#8610434D]",
              border: "#AD46FFB2",
            },
            {
              title: "Highest Earning",
              value: `$${Number(totalEarnings).toFixed(2)}`,
              helper: "in a single day",
              icon: DollarSign,
              color: "from-[#2bd87f] to-[#0ca95b]",
              bg: "from-[#0D542B4D] to-[#004F3B4D]",
              border: "#00C950B2",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl border bg-gradient-to-br ${item.bg} p-5 shadow-lg shadow-black/30`}
              style={{ borderColor: item.border }}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-lg shadow-md shadow-black/30`}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm text-white/70">{item.title}</p>
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className="text-xs text-white/60">{item.helper}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
