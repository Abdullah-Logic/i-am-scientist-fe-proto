"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Container from "../../components/container/container";
import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  Calendar,
  ChartColumn,
  DollarSign,
  Eye,
  Link2,
  Tag,
  Users,
  Check,
  Info,
  Table,
  FileText,
} from "lucide-react";
import { findListingById } from "../data/listings";
export default function Productdetails() {
  const searchParams = useSearchParams();
  const listing = findListingById(searchParams.get("id") || undefined);
  if (!listing) {
    return (
      <Container>
        <div className="relative min-h-[60vh] bg-[#0E0F18] text-white px-6 py-12 overflow-hidden isolate">
          <div
            className="absolute top-[10%] left-0 w-[360px] h-[360px] rounded-full opacity-80 blur-[140px] z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #5B7CFF 0%, transparent 90%)",
            }}
          />
          <div
            className="absolute bottom-[8%] right-0 w-[360px] h-[360px] rounded-full opacity-80 blur-[140px] z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #E91E8C 0%, transparent 90%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-[900px]">
            <Link
              href="/projects-bidding"
              className="text-[13px] font-semibold text-[#7aa2ff] hover:underline"
            >
              ← Back to listings
            </Link>
            <h1 className="mt-6 text-[28px] font-black">Listing not found</h1>
            <p className="mt-2 text-white/60">
              The listing you requested does not exist. Please return to the
              listings page and try again.
            </p>
          </div>
        </div>
      </Container>
    );
  }
  const [dateRange, setDateRange] = useState("Last week");
  return (
    <Container>
      <div className="relative bg-[#0E0F18] text-white overflow-hidden isolate">
        <div
          className="absolute top-[12%] left-0 w-[420px] h-[420px] rounded-full opacity-80 blur-[150px] z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #5B7CFF 0%, transparent 90%)",
          }}
        />
        <div
          className="absolute top-[18%] right-0 w-[360px] h-[360px] rounded-full opacity-80 blur-[150px] z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #E91E8C 0%, transparent 90%)",
          }}
        />
        <div
          className="absolute bottom-[12%] right-0 w-[440px] h-[440px] rounded-full opacity-80 blur-[150px] z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #E91E8C 0%, transparent 90%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-8">
          <Link
            href="/projects-bidding"
            className="text-[12px] font-semibold text-white/60 hover:text-white"
          >
            ← Back to listings
          </Link>
        </div>
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-4">
          <div className="overflow-hidden rounded-lg bg-[#2E124D] shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
            <div className="relative h-[190px] w-full">
              <Image
                src="/projects-bidding/header-image.png"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-4">
              <div>
                <a
                  href="https://theshopizo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[14px] font-semibold text-white hover:text-white/80 transition-colors"
                >
                  theshopizo.com
                </a>
                <span className="mt-2 inline-flex items-center rounded-full bg-[#E256F4] px-3 py-1 text-[11px] font-semibold text-white">
                  Available
                </span>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-white/50">Asking Price</p>
                <p className="text-[18px] font-black text-[#B881FF]">
                  {listing.price}
                </p>
              </div>
            </div>
            <div className="px-6 pt-3 pb-6 bg-[#2A1543] mx-5 mb-6">
              <h2 className="text-[16px] font-semibold text-white/80">
                Key Metrics
              </h2>
              <div className="mt-3 grid md:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    label: "Monthly Income",
                    value: "Starter Site",
                    logo: Banknote,
                  },
                  { label: "Monthly Views", value: "124", logo: Users },
                  { label: "Articles Posted", value: "34", logo: Eye },
                  { label: "Established", value: "05/04/2025", logo: Calendar },
                  { label: "Niche", value: "Product Reviews", logo: Tag },
                  {
                    label: "Income Multiple",
                    value: "Starter Site",
                    logo: ChartColumn,
                  },
                  { label: "Domain Authority", value: "5", logo: Link2 },
                  {
                    label: "Monetization Method",
                    value: "Google AdSense",
                    logo: DollarSign,
                  },
                ].map(({ label, value, logo: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 border border-white/10 bg-[#1B1D23] px-4 py-3 mt-5"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1A2D2C] text-[#AF42C2]">
                      <Icon size={15} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/50">
                        {label}
                      </p>
                      <p className="text-[13px] font-semibold text-white">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-5 max-w-[1200px] px-6">
          <div className="flex flex-wrap gap-3 rounded-lg bg-[#2E124D] px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
            <button className="flex-1 rounded-md bg-[linear-gradient(90deg,_#C86CFF_0%,_#E256F4_100%)] px-4 py-2.5 text-[13px] font-semibold text-white">
              Buy Now
            </button>
            <button className="flex-1 rounded-md bg-[#14161A] px-4 py-2.5 text-[13px] font-semibold text-white/80">
              Chat with Seller
            </button>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-5 max-w-[1200px] px-6">
          <div className="rounded-lg bg-[#2E124D] px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
            <h3 className="text-[14px] font-semibold">Overview</h3>
            <p className="mt-2 text-[12px] text-white/60">
              Product review website is being sold as a starter site on our
              marketplace.
            </p>
            <div className="mt-4 grid gap-2 text-[12px] text-white/80">
              {[
                "Site is currently monetized via Adsense with the opportunity to expand into other monetization methods.",
                "The site is earning some money but our income chart rounds anything under $0.50 down to $0.",
                "Please see the Q&A section for more on the content creation strategy from the seller.",
                "The buyer can focus on editing and improving the content that is already on the site.",
                "The traffic is mostly split between Pakistan and the USA.",
                "There is a pending trademark for SHOPIZO ORIGINAL FINDS.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span>
                    <Check size={13} className="inline mr-2" />
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-6 max-w-[1200px] px-6">
          <div className="rounded-lg bg-[#2E124D] px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
            <h3 className="font-semibold">
              <Info size={15} className="inline mr-2" /> Dutch Auction - Price
              Dropping Every 48 Hours!
            </h3>
            <div className="mt-4 flex flex-col md:flex-row gap-20 items-center justify-center">
              <div className="text-center">
                <p className="text-[16px] font-bold text-[#B881FF]">$800</p>
                <p className="text-[11px] text-white/50">Current Price</p>
              </div>
              <div className="text-center">
                <p className="text-[16px] font-bold text-[#5CE1A6]">
                  1d 19h and 58mins
                </p>
                <p className="text-[11px] text-white/50">
                  Time Until Next Drop
                </p>
              </div>
              <div className="text-center">
                <p className="text-[16px] font-bold text-[#B881FF]">$790</p>
                <p className="text-[11px] text-white/50">Next Price</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
              <p className="mt-1 text-[12px] text-white/40 flex items-center gap-1.5">
                <span className="bg-red-500 rounded-full h-2 w-2 inline-block flex-shrink-0" />
                Price drops $10 every 48 hours until sold or reserve is met
              </p>
              <p className="mt-1 text-[10px] text-white/40">
                Price drops $10 every 48 hours until sold or reserve is met
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-6 max-w-[1200px] px-6">
          <div className="rounded-lg bg-[#2E124D] px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <h3 className="text-[14px] font-semibold">
                  <ChartColumn size={15} className="inline mr-2" /> Google
                  Analytics
                </h3>
                <span className="rounded-full bg-[#E256F4]/20 px-3 py-1 text-[10px] font-semibold text-[#E256F4] border border-[#E256F4]/40">
                  Connected
                </span>
              </div>
              <div className="text-[11px] text-white/40">Date Range</div>
            </div>
            <p className="mt-2 text-[11px] text-white/60">Date Range</p>
            <select
              className="mt-3 w-full rounded-md border border-white/10 bg-[#191A1C] px-4 py-2 text-[11px] text-white/70 cursor-pointer outline-none"
              onChange={(e) => setDateRange(e.target.value)}
              value={dateRange}
            >
              <option>Last week</option>
              <option>Last 15 days</option>
              <option>Last month</option>
              <option>Last year</option>
            </select>
            <p className="mt-2 text-[10px] ">
              Date Range: <span className="text-[#B881FF]">{dateRange}</span>
            </p>
            <div className="mt-4 rounded-md border border-white/10 bg-[#2B1452] px-4 py-8 flex flex-col items-center justify-center text-center text-[11px] text-white/40">
              <ChartColumn size={25} />
              Chart data not available
            </div>
            <div className="mt-4 grid gap-3 rounded-md border border-white/10 bg-[#191A1C] px-4 py-3 text-[11px] md:grid-cols-5">
              {[
                { label: "Page Views", value: "124" },
                { label: "Unique Visitors", value: "46" },
                { label: "Sessions", value: "65" },
                { label: "Bounce Rate", value: "0.4%" },
                { label: "Avg. Session", value: "3m 45s" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="text-xl font-semibold text-white">{value}</p>
                  <p className="text-white/50">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 text-[11px] text-white/40">
              {[
                "Traffic Acquisition",
                "Session Sources",
                "Traffic by Country",
                "Top Pages",
              ].map((item) => (
                <div key={item}>
                  <p className="mb-2 text-[11px] text-white/60">{item}</p>
                  <div className="rounded-md border border-white/10 bg-[#2B1452] px-4 py-3 text-center">
                    No {item.toLowerCase()} data available for this period
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[10px] text-white/50">
              <span className="font-semibold">Note: </span>
              Live Google Analytics data from the connected property showing
              real-time website performance and engagement metrics.
            </p>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-6 max-w-[1200px] px-6">
          <div className="rounded-lg bg-[#2E124D] px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Financial Information</h3>
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-[#21252B] p-2">
                  <ChartColumn size={15} />
                </div>
                <div className="rounded-md bg-[#24113F] p-2">
                  <Table size={15} />
                </div>
              </div>
            </div>
            <div className="mt-4 px-4 py-4">
              <p className="text-[13px] text-white/50">
                Monthly Income History
              </p>
              <div className="mt-4 h-[160px] w-full rounded-md bg-[linear-gradient(180deg,_#2E1656_0%,_#24113F_100%)]" />
              <div className="mt-3 flex items-center justify-between text-[11px] text-white/50">
                <span>Mar 2025</span>
                <span>Feb 2026</span>
              </div>
            </div>
            <div className="font-semibold rounded-md bg-[#2A1543] mt-4 w-full flex flex-row items-center justify-between gap-3 text-[13px] px-2.5 py-3 my-4">
              <p>Total Income (Last 12 Months):</p>
              <p className="text-[13px] font-semibold text-[#B881FF]">$0</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold text-[13px] ">Income Proof</p>
              <button className="rounded-md bg-[#14161A] border-white/10 px-4 py-2 text-[11px] text-white/80">
                <Eye size={15} className="inline mr-2" />
                View Proof (1)
              </button>
            </div>
            <div className="rounded-md bg-[#2A1543] mt-4 w-full flex flex-row gap-3 text-[13px] px-2.5 py-3 my-4">
              <FileText size={20} className="text-white/50 flex self-center" />
              <div className="flex flex-col">
                <p className="text-[13px] text-white">
                  Income Documentation Available
                </p>
                <p className="text-[11px] text-white/50">
                  1 income proof document provided
                </p>
              </div>
            </div>
            <div className="mt-3 text-[11px] text-white/50">
              Monetization: Google AdSense
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-6 max-w-[1200px] px-6">
          <div className="rounded-lg bg-[#2E124D] px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
            <h3 className="font-semibold">
              <Link2 size={20} className="inline mr-1" /> Backlinks & SEO
              Analysis
            </h3>
            <p className="mt-1 text-[11px] text-white/40">
              This data was captured on March 11, 2026
            </p>
            <div className="mt-4 grid text-center text-[11px] md:grid-cols-6">
              {[
                { label: "Domain Rating", value: "13" },
                { label: "URL Rating", value: "5" },
                { label: "Referring Domains", value: "21" },
                { label: "Dofollow Backlinks", value: "11" },
                { label: "Keywords (Pos 1-3)", value: "0" },
                { label: "Keywords (Pos 4-10)", value: "0" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#2A1543] px-3 py-3">
                  <p className="text-[14px] font-semibold text-[#B881FF]">
                    {value}
                  </p>
                  <p className="text-white/50">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <button className="rounded-md bg-[#14161A] border-white/10 px-4 py-2 text-[11px] text-white/80">
                <FileText size={15} className="inline mr-2" />
                Aahrefs Screenshot
              </button>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-6 max-w-[1200px] px-6 pb-12">
          <div className="rounded-lg bg-[#2E124D] px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
            <h3 className="mb-4 font-semibold">
              <FileText size={20} className="inline mr-2" />
              Originality Content Analysis
            </h3>
            <p className="text-[11px] text-white/50">
              <span className="font-semibold">Pages Analyzed: </span>
              10 pages
            </p>
            <p className="text-[11px] text-white/50">
              <span className="font-semibold">Uploaded: </span>
              Mar 5, 2026 at 9:07 AM
            </p>
            <div className="mt-4 grid gap-2 text-[11px]">
              <p className="text-[11px] text-white/50">
                Individual Page Results:
              </p>
              {[
                {
                  url: "https://theshopizo.com/",
                  status: "85% Human Content",
                  color: "#5BC65F",
                },
                {
                  url: "https://theshopizo.com/mrs-book-1-shoes-review/",
                  status: "100% AI Content",
                  color: "red",
                },
                {
                  url: "https://theshopizo.com/ninja-fit-blender-review-guide/",
                  status: "89% AI Content",
                  color: "red",
                },
                {
                  url: "https://theshopizo.com/tts-approved-travel-bottles-review/",
                  status: "94% AI Content",
                  color: "#5BC65F",
                },
                {
                  url: "https://theshopizo.com/handglam-glass-oil-sprayer-review/",
                  status: "91% AI Content",
                  color: "red",
                },
                {
                  url: "https://theshopizo.com/about-us/",
                  status: "100% AI Content",
                  color: "red",
                },
                {
                  url: "https://theshopizo.com/contact-us/",
                  status: "100% AI Content",
                  color: "red",
                },
              ].map(({ url, status, color }) => (
                <div
                  key={url}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-white/10 bg-[#14161A] px-4 py-2"
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {url}
                  </a>
                  <span
                    style={{ backgroundColor: color }}
                    className="rounded-full px-3 text-[11px] text-white"
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-md bg-[#2A1543] mt-4 w-full flex flex-row gap-3 text-[13px] px-2.5 py-3 my-4">
              <Info size={15} className="text-[#6F45CC] mt-0.5" />
              <div className="flex flex-col">
                <p className="text-[13px] text-white">Analysis Summary:</p>
                <p className="text-[11px] text-white/50">
                  This website's top 10 pages include 8 AI-classified pages and
                  2 human-classified pages. These results are from
                  <a
                    href="https://originality.ai"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#6F45CC] hover:text-[#8A68E0] transition-colors"
                  >
                    {" "}
                    Originality.ai.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}