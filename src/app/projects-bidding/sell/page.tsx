"use client";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import Container from "../../components/container/container";
import Image from "next/image";
import Link from "next/link";
const categories = [
  "Ecommerce",
  "Content",
  "Apps",
  "SaaS",
  "Services",
  "YouTube",
];
const countries = [
  "Germany",
  "United States",
  "Canada",
  "Australia",
  "United Kingdom",
  "Netherlands",
  "India",
  "Brazil",
  "Singapore",
  "Ireland",
];
type SellFormState = {
  category: string;
  country: string;
  title: string;
  desc: string;
  websiteUrl: string;
  age: string;
  netMonth: string;
  monthlyRevenue: string;
  monetization: string;
  monthlyMultiple: string;
  firstMadeMoney: string;
  profitGrowth: string;
  revenueGrowth: string;
  trafficGrowth: string;
  price: string;
  oldPrice: string;
  discount: string;
  isBid: boolean;
  bids: string;
  hoursLeft: string;
  sellerName: string;
  sellerEmail: string;
};
type ListingPreview = {
  listingId: string;
  badge: string;
  title: string;
  desc: string;
  price: string;
  monthlyNetProfit: string;
  monthlyRevenue: string;
  monetization: string;
  monthlyMultiple: string;
  firstMadeMoney: string;
  profitGrowth: string;
  revenueGrowth: string;
  trafficGrowth: string;
  screenshot?: string | null;
};
function ListingCardPreview({ listing }: { listing: ListingPreview }) {
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
                <button className="flex items-center gap-2 rounded-sm bg-[#3C79CA] px-4 py-2 text-[13px] font-bold text-white hover:bg-[#3C79CA]/90 transition-colors">
                  View Listing →
                </button>
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
const initialState: SellFormState = {
  category: "SaaS",
  country: "United States",
  title: "",
  desc: "",
  websiteUrl: "",
  age: "",
  netMonth: "",
  monthlyRevenue: "",
  monetization: "",
  monthlyMultiple: "",
  firstMadeMoney: "",
  profitGrowth: "",
  revenueGrowth: "",
  trafficGrowth: "",
  price: "",
  oldPrice: "",
  discount: "",
  isBid: false,
  bids: "",
  hoursLeft: "",
  sellerName: "",
  sellerEmail: "",
};
const normalizeCurrency = (value: string) => {
  const clean = value.replace(/\$/g, "").trim();
  if (!clean) return "";
  return `$${clean}`;
};
export default function SellPage() {
  const [form, setForm] = useState<SellFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [screenshots, setScreenshots] = useState<File[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const canSubmit = useMemo(() => {
    const baseValid = Boolean(
      form.title.trim() &&
      form.websiteUrl.trim() &&
      form.desc.trim() &&
      form.age.trim() &&
      form.netMonth.trim() &&
      form.monthlyRevenue.trim() &&
      form.monetization.trim() &&
      form.monthlyMultiple.trim() &&
      form.firstMadeMoney.trim() &&
      form.profitGrowth.trim() &&
      form.revenueGrowth.trim() &&
      form.trafficGrowth.trim() &&
      form.price.trim() &&
      form.sellerName.trim() &&
      form.sellerEmail.trim(),
    );
    if (!form.isBid) return baseValid;
    return baseValid && Boolean(form.hoursLeft.trim());
  }, [form]);
  const handleScreenshotChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setScreenshots(files);
    if (files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setPreviewImage((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return imageUrl;
      });
      return;
    }
    setPreviewImage((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith("image/"),
    );
    if (files.length > 0) {
      setScreenshots(files);
      const imageUrl = URL.createObjectURL(files[0]);
      setPreviewImage((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return imageUrl;
      });
    }
  };
  const handleCurrencyBlur = (
    field: "netMonth" | "monthlyRevenue" | "price" | "oldPrice",
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: normalizeCurrency(value) }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) {
      alert("Please complete all required fields before submitting.");
      return;
    }
    setSubmitted(true);
    alert("Listing submitted successfully.");
    setForm(initialState);
    setScreenshots([]);
    setPreviewImage((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    e.currentTarget.reset();
  };
  useEffect(() => {
    return () => {
      if (previewImage) URL.revokeObjectURL(previewImage);
    };
  }, [previewImage]);
  const fieldWrapCls =
    "rounded-md bg-[linear-gradient(180deg,_#2D7EDA_0%,_#B845C9_100%)] p-[1px] shadow-[0_8px_32px_rgba(0,0,0,0.45)]";
  const inputCls =
    "w-full rounded-md bg-[#1e0a3c] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:ring-2 focus:ring-[#c026d3]/40 transition-shadow";
  const labelCls = "block space-y-1.5";
  const labelTextCls = "text-[13px] font-semibold text-white/70";
  return (
    <Container>
      <div className="min-h-screen bg-[#0E0F18] text-white">
        <div
          className="relative overflow-hidden bg-[#0E0F18]"
          style={{ minHeight: 220 }}
        >
          <div className="absolute inset-0">
            <Image
              src="/projects-bidding/header-image.png"
              alt=""
              fill
              className="object-cover object-center opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-[#0E0F18]/50 backdrop-blur-md" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center">
            <h1 className="text-3xl font-black text-white sm:text-4xl">
              Start Your Project Submission
            </h1>
            <p className="mt-2 text-sm text-white/60">
              Profitable online businesses from trustworthy sellers
            </p>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 py-10">
          <div
            className="absolute top-[28%] left-0 w-[200px] h-[200px] rounded-full opacity-90 blur-[120px] z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #5B7CFF 0%, transparent 90%)",
            }}
          />
          <div
            className="absolute top-[18%] right-0 w-[200px] h-[200px] rounded-full opacity-90 blur-[120px] z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #E91E8C 0%, transparent 90%)",
            }}
          />
          <div
            className="absolute top-[62%] right-0 w-[200px] h-[200px] rounded-full opacity-90 blur-[120px] z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #E91E8C 0%, transparent 90%)",
            }}
          />
          <div className="relative z-10 p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-black text-white">
                Submit Your project
              </h2>
              <p className="mt-1 text-base text-white/50">
                Our team will review it and publish it on the platform.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <label className={labelCls}>
                <span className={labelTextCls}>Listing title (required)</span>
                <div className={fieldWrapCls}>
                  <input
                    required
                    value={form.title}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, title: e.target.value }))
                    }
                    placeholder="Short headline for your listing"
                    className={inputCls}
                  />
                </div>
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                <label className={labelCls}>
                  <span className={labelTextCls}>Category</span>
                  <div className={fieldWrapCls}>
                    <select
                      value={form.category}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                      className={inputCls}
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>Country</span>
                  <div className={fieldWrapCls}>
                    <select
                      value={form.country}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          country: e.target.value,
                        }))
                      }
                      className={inputCls}
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className={labelCls}>
                  <span className={labelTextCls}>Your Name (required)</span>
                  <div className={fieldWrapCls}>
                    <input
                      required
                      value={form.sellerName}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          sellerName: e.target.value,
                        }))
                      }
                      placeholder="Your full name"
                      className={inputCls}
                    />
                  </div>
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>Your Email (required)</span>
                  <div className={fieldWrapCls}>
                    <input
                      type="email"
                      required
                      value={form.sellerEmail}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          sellerEmail: e.target.value,
                        }))
                      }
                      placeholder="you@example.com"
                      className={inputCls}
                    />
                  </div>
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className={labelCls}>
                  <span className={labelTextCls}>Your Website (required)</span>
                  <div className={fieldWrapCls}>
                    <input
                      type="url"
                      required
                      value={form.websiteUrl}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          websiteUrl: e.target.value,
                        }))
                      }
                      placeholder="https://"
                      className={inputCls}
                    />
                  </div>
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>
                    URL to Project (read-only)
                  </span>
                  <div className={fieldWrapCls}>
                    <input
                      type="url"
                      value={form.websiteUrl}
                      readOnly
                      placeholder="Same as your website URL"
                      className={`${inputCls} cursor-not-allowed opacity-80`}
                    />
                  </div>
                </label>
              </div>
              <label className={labelCls}>
                <span className={labelTextCls}>Project age (required)</span>
                <div className={fieldWrapCls}>
                  <input
                    required
                    value={form.age}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, age: e.target.value }))
                    }
                    placeholder="e.g. 24 months or 3 years"
                    className={inputCls}
                  />
                </div>
              </label>
              <label className={labelCls}>
                <span className={labelTextCls}>
                  Project Description (required)
                </span>
                <div className={fieldWrapCls}>
                  <textarea
                    required
                    value={form.desc}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, desc: e.target.value }))
                    }
                    rows={5}
                    className={`${inputCls} resize-none`}
                  />
                </div>
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                <label className={labelCls}>
                  <span className={labelTextCls}>Ask Price (required)</span>
                  <div className={fieldWrapCls}>
                    <input
                      required
                      value={form.price.replace(/^\$/, "")}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          price: e.target.value.replace(/\$/g, ""),
                        }))
                      }
                      onBlur={(e) =>
                        handleCurrencyBlur("price", e.target.value)
                      }
                      placeholder="2555432"
                      className={inputCls}
                    />
                  </div>
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>
                    Monthly Net Profit (required)
                  </span>
                  <div className={fieldWrapCls}>
                    <input
                      required
                      value={form.netMonth.replace(/^\$/, "")}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          netMonth: e.target.value.replace(/\$/g, ""),
                        }))
                      }
                      onBlur={(e) =>
                        handleCurrencyBlur("netMonth", e.target.value)
                      }
                      placeholder="58078"
                      className={inputCls}
                    />
                  </div>
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className={labelCls}>
                  <span className={labelTextCls}>
                    Monthly Revenue (required)
                  </span>
                  <div className={fieldWrapCls}>
                    <input
                      required
                      value={form.monthlyRevenue.replace(/^\$/, "")}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          monthlyRevenue: e.target.value.replace(/\$/g, ""),
                        }))
                      }
                      onBlur={(e) =>
                        handleCurrencyBlur("monthlyRevenue", e.target.value)
                      }
                      placeholder="310163"
                      className={inputCls}
                    />
                  </div>
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>Monetization (required)</span>
                  <div className={fieldWrapCls}>
                    <input
                      required
                      value={form.monetization}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          monetization: e.target.value,
                        }))
                      }
                      placeholder="Ecommerce, Amazon"
                      className={inputCls}
                    />
                  </div>
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className={labelCls}>
                  <span className={labelTextCls}>
                    Monthly Multiple (required)
                  </span>
                  <div className={fieldWrapCls}>
                    <input
                      required
                      value={form.monthlyMultiple}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          monthlyMultiple: e.target.value,
                        }))
                      }
                      placeholder="44x"
                      className={inputCls}
                    />
                  </div>
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>
                    First Made Money (required)
                  </span>
                  <div className={fieldWrapCls}>
                    <input
                      required
                      value={form.firstMadeMoney}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          firstMadeMoney: e.target.value,
                        }))
                      }
                      placeholder="2023"
                      className={inputCls}
                    />
                  </div>
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <label className={labelCls}>
                  <span className={labelTextCls}>
                    Profit Growth (12 months)
                  </span>
                  <div className={fieldWrapCls}>
                    <input
                      required
                      value={form.profitGrowth}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          profitGrowth: e.target.value,
                        }))
                      }
                      placeholder="557%"
                      className={inputCls}
                    />
                  </div>
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>
                    Revenue Growth (12 months)
                  </span>
                  <div className={fieldWrapCls}>
                    <input
                      required
                      value={form.revenueGrowth}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          revenueGrowth: e.target.value,
                        }))
                      }
                      placeholder="104%"
                      className={inputCls}
                    />
                  </div>
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>
                    Traffic Growth (12 months)
                  </span>
                  <div className={fieldWrapCls}>
                    <input
                      required
                      value={form.trafficGrowth}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          trafficGrowth: e.target.value,
                        }))
                      }
                      placeholder="75%"
                      className={inputCls}
                    />
                  </div>
                </label>
              </div>
              <label className={labelCls}>
                <span className={labelTextCls}>
                  Project Technical Info (if known, please list the frameworks /
                  software stack including tools used, libraries, add-ons,
                  frameworks and other required)
                </span>
                <div className={fieldWrapCls}>
                  <textarea rows={5} className={`${inputCls} resize-none`} />
                </div>
              </label>
              <div className={labelCls}>
                <span className={labelTextCls}>Upload Images</span>
                <div className={fieldWrapCls}>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    className={`relative flex flex-col items-center justify-center gap-2 rounded-md py-10 transition-colors ${
                      dragOver ? "bg-[#2a0a4a]" : "bg-[#1e0a3c]"
                    }`}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <p className="text-[13px] text-white/40">
                      Drag and drop files here
                    </p>
                    <p className="text-[12px] text-white/30">or</p>
                    <label className="cursor-pointer rounded-md bg-[#c026d3] px-4 py-1.5 text-[12px] font-semibold text-white hover:bg-[#a21caf] transition-colors">
                      Browse Files
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleScreenshotChange}
                        className="hidden"
                      />
                    </label>
                    {screenshots.length > 0 && (
                      <p className="text-[12px] text-[#c026d3] mt-1">
                        {screenshots.length} file(s) selected
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className={labelCls}>
                  <span className={labelTextCls}>
                    URL to Download Files (input images / Other wise not
                    functional)
                  </span>
                  <div className={fieldWrapCls}>
                    <input placeholder="http://" className={inputCls} />
                  </div>
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>
                    URL to Project Video / Vimeo or YouTube (optional)
                  </span>
                  <div className={fieldWrapCls}>
                    <input placeholder="http://" className={inputCls} />
                  </div>
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className={labelCls}>
                  <span className={labelTextCls}>
                    Are you a CAN Resident (required)
                  </span>
                  <div className={fieldWrapCls}>
                    <select className={inputCls}>
                      <option value="">-- Please choose an option --</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </label>
                <label className={labelCls}>
                  <span className={labelTextCls}>
                    Please choose the Support Subscription: Where to Begin (2.0
                    TP)
                  </span>
                  <div className={fieldWrapCls}>
                    <input placeholder="http://" className={inputCls} />
                  </div>
                </label>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-[#c026d3]"
                />
                <span className="text-[13px] text-white/60">
                  I agree to the{" "}
                  <a href="#" className="text-[#c026d3] hover:underline">
                    terms of use
                  </a>
                </span>
              </label>
              <div className="pt-1 space-x-2">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="border rounded-md bg-[#c026d3] px-6 py-1.5 text-[13px] font-bold text-white hover:bg-[#a21caf] transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Submit
                </button>
                <Link href={"/projects-bidding"}>
                  <button className="border rounded-md bg-[#94A3B8] px-6 py-1.5 text-[13px] font-bold text-white hover:bg-[#94A3B8]/90 transition-colors disabled:cursor-not-allowed disabled:opacity-50">
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div className="mt-6 max-md:mb-10">
            <ListingCardPreview
              listing={{
                listingId: "#PREVIEW",
                badge: "New Listing",
                title: form.title || "Your listing title will appear here",
                desc: form.desc || "Your listing description preview.",
                price: form.price || "$0",
                monthlyNetProfit: form.netMonth || "N/A",
                monthlyRevenue: form.monthlyRevenue || "N/A",
                monetization: form.monetization || "N/A",
                monthlyMultiple: form.monthlyMultiple || "N/A",
                firstMadeMoney: form.firstMadeMoney || "N/A",
                profitGrowth: form.profitGrowth || "0%",
                revenueGrowth: form.revenueGrowth || "0%",
                trafficGrowth: form.trafficGrowth || "0%",
                screenshot: previewImage || "/projects-bidding/thumbnail.svg",
              }}
            />
          </div>
          {submitted && (
            <div className="mt-5 rounded-lg border border-[#c026d3]/30 bg-[#2D0A52]/80 p-4 text-sm text-[#c026d3]">
              Listing submitted successfully.
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
