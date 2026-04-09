"use client";
import React, { useState, useEffect } from "react";
import {
  BadgePercent,
  DollarSign,
  ChartLine,
  Copy,
  Facebook,
  Sparkles,
  Instagram,
  Megaphone,
  Target,
  Twitter,
  User,
  Users,
  Info,
} from "lucide-react";
import Container from "./container/container";
import { Share2 } from "lucide-react";
import { UserPlus } from "lucide-react";

const AfiliateDashboard = () => {
  const [affiliate, setAffiliate] = useState<string | null>("");
  const [name, setName] = useState<string | null>("");
  const [initial, setInitial] = useState<string | null>("");
  const [total, setTotal] = useState<String | null>("0");
  const [paid, setPaid] = useState<String | null>("0");
  const [unpaid, setUnpaid] = useState<String | null>("0");
  const [copy, setCopy] = useState<Boolean>(false);

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
        setAffiliate(data.affiliate_code);
        setName(`${data.first_name} ${data.last_name}`);
        setTotal(`${parseInt(data.paid) + parseInt(data.unpaid)}` || "0");
        setPaid(data.paid || "0");
        setUnpaid(data.unpaid || "0");
        setInitial(data.first_name[0]);
        // return data; // Return the data if needed elsewhere
      } catch (error) {
        console.error("Failed to fetch user data:");
      }
    };

    fetchUserData();
  }, []);

  const handleCopy = async () => {
    setCopy(true);
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}?referal=${affiliate}`,
    );
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  return (
    <Container>
      <main className="relative min-h-screen overflow-hidden bg-[#200D40] py-12 text-white">
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
              Referral Dashboard
            </p>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-white/80" />
          </div>

          <div className="grid gap-6 rounded-2xl border border-white/10 bg-[#180B38] p-6 shadow-2xl shadow-black/30 md:grid-cols-[1.2fr_0.8fr]">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#B64FF3] to-[#DC3E8A] text-2xl font-bold shadow-lg shadow-purple-900/40">
                {initial}
              </div>
              <div>
                <p className="text-xl font-semibold">{name}</p>
                <p className="text-sm text-white/70">{affiliate}</p>
                <p className="text-xs text-white/60">Member since Jan 2024</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a
                href="/dashboard/profile"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#B64FF3] to-[#DC3E8A] px-4 py-2 text-sm font-semibold shadow-lg shadow-purple-900/40"
              >
                <User className="h-4 w-4" />
                Edit Profile
              </a>
              <div className="text-right">
                <p className="text-xs text-white/60">Total Earnings</p>
                <p className="text-xl font-semibold">$0.00</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Total Referrals",
                value: total,
                badge: "+0%",
                color: "from-[#B64FF3] to-[#DC3E8A]",
                icon: Users,
              },
              {
                label: "Paid Referrals",
                value: paid,
                badge: "$0.00",
                color: "from-[#2bd87f] to-[#0ca95b]",
                icon: DollarSign,
              },
              {
                label: "Pending Payments",
                value: unpaid,
                badge: "$0.00",
                color: "from-[#ff9f0a] to-[#ff6a00]",
                icon: ChartLine,
              },
              {
                label: "Commission Rate",
                value: "15%",
                badge: "Recurring",
                color: "from-[#48a7ff] to-[#2b70ff]",
                icon: Target,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-[#180B38] p-5 shadow-lg shadow-black/30"
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

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#3C1E6C] bg-gradient-to-br from-[#421D6D] to-[#5B1A52] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex flex-row mb-2">
                    <div className="inline-block rounded-xl bg-[#FF8A3C] mr-2 p-2 text-white shadow-[0_6px_20px_rgba(255,138,60,0.45)]">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <p className="text-lg font-semibold">Your Reward</p>
                  </div>
                  <p className="text-sm text-white/70">
                    Earn for referring new customers
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-[#4C1C64] bg-[#301043] p-4">
                <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                  <Target className="h-5 w-5 text-[#68E074]" />
                  15% Recurring Commission
                </div>
                <p className="text-sm text-white/70">
                  for each referred student who enrolls
                </p>
              </div>
              <div className="mt-4 rounded-xl border border-[#2B7FFF4D] bg-[#2B7FFF1A] p-3 text-xs text-white/70">
                <Info className="h-5 w-5 text-[#5099F6] inline mr-2" />
                Commission is paid monthly for active subscriptions
              </div>
            </div>

            <div className="rounded-2xl border border-[#521441] bg-[#431243] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex flex-row mb-2">
                    <div className="rounded-xl bg-gradient-to-br from-[#ED3833] to-[#EF6136] mr-2 p-2 shadow-[0_6px_18px_rgba(255,77,77,0.35)]">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <p className="text-lg font-semibold">Important</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-[#4B133A] bg-[#2A1138] p-4">
                <p className="text-sm text-white/70">
                  You don't have any payout method selected.
                </p>
                <p className="mt-4 text-xs text-white/70">
                  Please select one now so we can pay you.
                </p>
                <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ff3b3b] to-[#ff7a00] px-4 py-2 text-sm font-semibold shadow-lg shadow-orange-900/30">
                  <DollarSign className="h-4 w-4" />
                  Set Up Payout Method
                </button>
              </div>
              <div className="mt-4 rounded-lg border border-[#F0B1004D] bg-[#F0B1001A] p-3 text-xs text-white/70">
                <Info className="h-5 w-5 text-[#F9C747] inline mr-2" /> Add your
                bank details or payment account to receive commissions.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#180B38] p-6 shadow-2xl shadow-black/30">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-row mb-2">
                <div className="rounded-xl bg-gradient-to-br from-[#2B4FF6] to-[#8B4CF7] mr-2 p-2">
                  <Share2 className="h-5 w-5" />
                </div>
                <p className="text-lg font-semibold">Share on Social Media</p>
              </div>
              <p className="text-sm text-white/70">
                Share this referral link to your friends and followers
              </p>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1877F2] text-sm font-semibold shadow-[0_8px_20px_rgba(24,119,242,0.4)]">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-sm font-semibold shadow-[0_8px_20px_rgba(221,42,123,0.35)]">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1DA1F2] text-sm font-semibold shadow-[0_8px_20px_rgba(29,161,242,0.4)]">
                <Twitter className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
              <span className="rounded-lg bg-[#3D1D6E] border-[#502685] px-3 py-1 text-xs">
                Links
              </span>
              <div className="flex-1 rounded-lg bg-white/5 px-3 py-2 text-xs text-white/70">
                {`${process.env.NEXT_PUBLIC_FRONTEND_URL}?referal=${affiliate}`}
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#B64FF3] to-[#DC3E8A] px-4 py-2 text-xs font-semibold"
              >
                <Copy className="h-3.5 w-3.5" />
                {copy ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="mt-4 rounded-xl border border-[#1C2F4D] bg-[#1F1F4E] p-4 text-xs text-white/70">
              <p className="flex items-center gap-2 font-semibold text-[#B9F8CF]">
                <UserPlus className="h-4 w-4 text-[#68E074]" />
                How it works:
              </p>
              <p className="mt-1 flex items-center gap-2">
                <Users className="h-3.5 w-3.5" />
                Share your unique referral link
              </p>
              <p className="mt-1 flex items-center gap-2">
                <Megaphone className="h-3.5 w-3.5" />
                Your friends sign up using your link
              </p>
              <p className="mt-1 flex items-center gap-2">
                <BadgePercent className="h-3.5 w-3.5" />
                You earn 15% recurring commission!
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#180B38] p-6 shadow-2xl shadow-black/30">
            <div className="text-center">
              <p className="text-lg font-semibold">How to Earn More</p>
              <p className="text-sm text-white/70">
                Maximize your referral earnings with these tips
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Share Widely",
                  text: "Post your link on social media, blogs, and forums.",
                  icon: Users,
                  iconBg: "bg-[#38A3FF]",
                },
                {
                  title: "Build Community",
                  text: "Create content about our courses and engage followers.",
                  icon: User,
                  iconBg: "bg-[#D84BD6]",
                },
                {
                  title: "Track & Optimize",
                  text: "Monitor your performance and adjust your strategy.",
                  icon: ChartLine,
                  iconBg: "bg-[#40C463]",
                },
              ].map((tip) => (
                <div
                  key={tip.title}
                  className="rounded-2xl border border-white/10 bg-[#24104d] p-4 shadow-lg shadow-black/30"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${tip.iconBg} text-lg`}
                  >
                    <tip.icon className="h-4 w-4 text-white" />
                  </div>
                  <p className="mt-3 text-sm font-semibold">{tip.title}</p>
                  <p className="text-xs text-white/70">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default AfiliateDashboard;
