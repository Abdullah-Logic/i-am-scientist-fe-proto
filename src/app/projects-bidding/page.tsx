"use client";
import Container from "../components/container/container";
import { useState } from "react";
import { coursesFAQs } from "../constant/data";
import FAQ from "../components/Faqs";
import Link from "next/link";
import Image from "next/image";
import { Listing, listings } from "./data/listings";
function ListingCard({ listing }: { listing: Listing }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="rounded-lg bg-[linear-gradient(90deg,_#2D7EDA_0%,_#B845C9_100%)] p-[1px] shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
      <div className="overflow-hidden rounded-[8px] bg-[#341860]">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full h-[200px] md:w-[200px] md:min-h-[200px] flex-shrink-0 m-4">
            <Image
              src={listing.screenshot || "/projects-bidding/thumbnail.svg"}
              alt={listing.title}
              fill
              className="object-cover border border-[#B8B0C7] rounded-md"
            />
            <div className="absolute left-10 top-[5rem] bg-[#5890F7] py-2 px-3 text-center">
              <p className="text-[11px] font-bold text-white leading-tight">
                Confidential
              </p>
              <p className="text-[11px] font-bold text-white leading-tight">
                Sign NDA to view
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-sm bg-[#F5A641] px-3 py-1 text-[12px] font-bold text-white">
                  {listing.listingId}
                </span>
                <span className="flex items-center gap-1.5 text-[13px] font-medium text-white/80">
                  <span className="h-2 w-2 rounded-full bg-[#F5A641] inline-block" />
                  {listing.badge}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/projects-bidding/project-details?id=${listing.id}`}
                  className="flex items-center gap-2 rounded-sm bg-[#3C79CA] px-4 py-2 text-[13px] font-bold text-white hover:bg-[#3C79CA]/90 transition-colors"
                >
                  View Listing →
                </Link>
              </div>
            </div>
            <h3 className="text-[18px] font-black text-white leading-snug">
              {listing.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-3">
              {[
                { label: "Price", value: listing.price },
                {
                  label: "Monthly Net Profit",
                  value: listing.monthlyNetProfit,
                },
                { label: "Monthly Revenue", value: listing.monthlyRevenue },
                { label: "Monetization", value: listing.monetization },
                { label: "Monthly Multiple", value: listing.monthlyMultiple },
                { label: "First Made Money", value: listing.firstMadeMoney },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[11px] text-white/50 font-medium mb-0.5">
                    {label}
                  </p>
                  <p className="text-[14px] font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-white/60 leading-relaxed">
              {expanded
                ? listing.desc.replace("...", "")
                : listing.desc.slice(0, 120) +
                  (listing.desc.length > 120 ? "..." : "")}{" "}
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-[#3B6BBD] font-semibold hover:underline text-[13px]"
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            </p>
            <div className="border-t border-white/10 pt-3 flex flex-wrap items-center gap-4">
              <span className="text-[12px] text-white/50 font-medium">
                Profit (12 months){" "}
                <span className="text-[#4FAC2A] font-bold">
                  ▲ {listing.profitGrowth}
                </span>
              </span>
              <span className="text-[12px] text-white/50 font-medium">
                Revenue (12 months){" "}
                <span className="text-[#4FAC2A] font-bold">
                  ▲ {listing.revenueGrowth}
                </span>
              </span>
              <span className="text-[12px] text-white/50 font-medium">
                Traffic (12 months){" "}
                <span className="text-[#4FAC2A] font-bold">
                  ▲ {listing.trafficGrowth}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function BiddingPage() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const filtered = listings.filter((l) => {
    if (search && !l.title.toLowerCase().includes(search.toLowerCase()))
      return false;
    if (category && l.category !== category) return false;
    return true;
  });
  return (
    <Container>
      <div className="h-full bg-[#0E0F18] text-white">
        <div className="relative min-h-[270px] overflow-hidden bg-[#1a0a5e] flex flex-col items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/projects-bidding/header-image.png"
              alt=""
              fill
              className="object-cover object-right"
              priority
            />
            <div className="absolute inset-0 bg-[#0E0F18]/80 backdrop-blur-md" />
          </div>
          <div className="relative z-10 mx-auto px-6 flex flex-col items-center justify-center">
            <h1 className="max-w-[600px] text-[clamp(28px,3.5vw,46px)] font-black leading-tight text-white text-center">
              Digital Businesses for Sale
            </h1>
            <p className="mt-2.5 max-w-[360px] text-[15px] text-white text-center">
              Profitable online businesses from trustworthy sellers
            </p>
          </div>
        </div>
        <div className="bg-[#5D3794] px-6 py-3.5">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Search listings..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="min-w-[200px] flex-[2] rounded-sm bg-white px-3.5 py-3 text-[13px] text-black outline-none placeholder:text-gray-500"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="flex-1 min-w-[130px] rounded-sm border bg-white px-3.5 py-3 text-[13px] text-black outline-none cursor-pointer"
            >
              <option value="">Niche</option>
              <option value="Health & Fitness">Health &amp; Fitness</option>
              <option value="SaaS">SaaS</option>
              <option value="Ecommerce">Ecommerce</option>
              <option value="Content">Content</option>
              <option value="Apps">Apps</option>
              <option value="Services">Services</option>
              <option value="YouTube">YouTube</option>
            </select>
            <input
              type="text"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="flex-1 min-w-[120px] rounded-sm bg-white px-3.5 py-3 text-[13px] text-black outline-none placeholder:text-gray-500 "
            />
            <input
              type="text"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="flex-1 min-w-[120px] rounded-sm bg-white px-3.5 py-3 text-[13px] text-black outline-none placeholder:text-gray-500"
            />
            <button className="flex-shrink-0 rounded-sm bg-[#c026d3] px-6 py-3.5 text-[13px] font-bold text-white hover:bg-[#a21caf] transition-colors">
              Search
            </button>
          </div>
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 py-7">
          <div
            className="absolute top-[28%] left-[6%] w-[300px] h-[300px] rounded-full opacity-90 blur-[120px] z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #5B7CFF 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute top-[18%] right-[6%] w-[300px] h-[300px] rounded-full opacity-90 blur-[120px] z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #E91E8C 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute top-[62%] right-[12%] w-[300px] h-[300px] rounded-full opacity-90 blur-[120px] z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #E91E8C 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 flex flex-col gap-4">
            {filtered.slice(0, visibleCount).map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          {visibleCount < filtered.length && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setVisibleCount((v) => v + 4)}
                className="rounded-sm bg-[#C543BA] px-9 py-3 text-[14px] font-bold text-white hover:bg-[#C543BA]/90 transition-colors"
              >
                Load More Listings ({filtered.length - visibleCount})
              </button>
            </div>
          )}
        </div>
        <div className="w-full pb-10 md:pb-0 h-auto md:h-[350px] xl:h-[300px] bg-[#5D3794] relative px-2 max-sm:mb-20">
          <div className="h-6 w-16 lg:h-14 lg:w-40 bg-[#C406B9] rounded-tr-full rounded-br-full absolute left-0 bottom-0 -z-5"></div>
          <div className="h-6 w-16 lg:h-14 lg:w-40 bg-[#C406B9] rounded-tl-full rounded-bl-full absolute right-0 top-3 -z-5"></div>
          <div className="w-6 h-6 md:w-20 md:h-20 rounded-full bg-[#408CFB] absolute top-4 left-10 md:top-6 lg:left-28  2xl:left-36 shadow-xl -z-5"></div>
          <div className="w-6 h-6 md:w-20 md:h-20 rounded-full  bg-[#408CFB] absolute bottom-4 right-10 md:bottom-6 lg:right-28 2xl:right-40 shadow-xl -z-5"></div>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full  bg-[#97DB4E] absolute bottom-4 left-8 md:bottom-8 lg:left-24 shadow-xl -z-5"></div>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full  bg-[#97DB4E] absolute top-6 right-8 md:top-14 lg:right-24 shadow-xl -z-5"></div>
          <div className="flex h-full flex-col justify-center items-center relative z-10">
            <h3 className="font-misri font-bold text-3xl md:text-5xl text-white text-center w-3/4">
              Have an Online Business to Sell?
            </h3>
            <p className="w-full md:w-[65%] 2xl:w-[45%] font-popins font-normal text-base md:text-xl text-center text-white mt-2">
              Check out the online tools below to sell or value your business
            </p>
            <div className="flex flex-row gap-5">
              <Link href="/projects-bidding/sell">
                <button className="flex-shrink-0 rounded-md bg-[#c026d3] px-6 py-3.5 text-[13px] font-bold text-white mt-5 hover:bg-[#a21caf] transition-colors">
                  Sell My Online Business →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FAQ faqs={coursesFAQs} />
      </div>
    </Container>
  );
}
