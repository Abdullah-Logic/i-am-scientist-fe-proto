"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Competition from "./components/competition";
import ContestPage from "./components/contest";
import CountryPartner from "./components/countrypartner";
import HeroSection from "./components/hero";
import Banner from "./components/timerbar";
import { FAQsMain } from "./constant/data";
import FAQ from "./components/Faqs";
import Carousel from "./components/Carousel";
import { imageArray } from "./constant/data";
import Container from "./components/container/container";

export default function Home() {
  const [remainingDate, setRemainingDate] = useState("");
  const [announcementsData, setAnnouncementsData] = useState([
    {
      category: "General",
      border: "border-[#1977ff]",
      color: "text-[#1977ff]",
      bor: "border-[#1977ff]",
      bgcolor: "bg-[#1977ff]",
      route: "/auth/signup",
      items: [
        {
          title: "Contest Registration",
          startDate: "01 May 2025",
          endDate: "15 Aug 2025",
          iconDate: "01",
          iconMonth: "MAY",
        },
        {
          title: "Course Registration",
          startDate: "16 May 2025",
          endDate: " 31 May 2025",
          iconDate: "16",
          iconMonth: "MAY",
        },
        {
          title: "Contest Results",
          startDate: "20 May 2025",
          endDate: "25 May 2025",
          iconDate: "20",
          iconMonth: "MAY",
        },
      ],
    },
    {
      category: "Contest",
      border: "border-[#fe3fe5]",
      color: "text-[#fe3fe5]",
      bor: "border-[#fe3fe5]",
      bgcolor: "bg-[#fe3fe5]",
      route: "/auth/signup",
      items: [
        {
          title: "Registration Dates",
          startDate: "01 May 2025",
          endDate: "15 Aug 2025",
          iconDate: "01",
          iconMonth: "MAY",
        },
        {
          title: "Registration Confirmation",
          startDate: "01 Aug 2025",
          endDate: "20 Aug 2025",
          iconDate: "20",
          iconMonth: "AUG",
        },
        {
          title: "Contest Dates",
          startDate: "25 Aug 2025",
          endDate: "27 Aug 2025",
          iconDate: "27",
          iconMonth: "AUG",
        },
      ],
    },
    {
      category: "Course",
      border: "border-[#5ff6ff]",
      color: "text-[#5ff6ff]",
      bor: "border-[#5ff6ff]",
      bgcolor: "bg-[#5ff6ff]",
      route: "/select-course",

      items: [
        {
          title: "Registration Dates",
          startDate: "16 May 2025",
          endDate: " 31 May 2025",
          iconDate: "16",
          iconMonth: "MAY",
        },
        {
          title: "Registration Confirmation",
          startDate: "20 MAY 2025",
          endDate: " 31 Dec 2024",
          iconDate: "1",
          iconMonth: "DEC",
        },
        {
          title: "Course Starting Dates",
          startDate: "1 June 2025",
          endDate: "30 Aug 2025",
          iconDate: "01",
          iconMonth: "JUN",
        },
      ],
    },
  ]);
  useEffect(() => {
    const currentUrl =
      typeof window !== "undefined" ? window.location.href : "";
    const queryString = currentUrl.split("?")[1];
    if (queryString) {
      const queryParams = new URLSearchParams(queryString);
      const referralCode = queryParams.get("referal");
      localStorage.setItem("referralCode", referralCode || "");
    }
  }, []);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/dates/formatted-dates`,
        );
        const { data } = await res.json();
        setRemainingDate(data.contestsDates.start);
        setAnnouncementsData([
          {
            category: "General",
            border: "border-[#1977ff]",
            color: "text-[#1977ff]",
            bor: "border-[#1977ff]",
            bgcolor: "bg-[#1977ff]",
            route: "/auth/signup",
            items: [
              {
                title: "Contest Registration",
                startDate: data.contestRegistrationDates.startDate,
                endDate: data.contestRegistrationDates.endDate,
                iconDate: data.contestRegistrationDates.iconDate,
                iconMonth: data.contestRegistrationDates.iconMonth,
              },
              {
                title: "Course Registration",
                startDate: data.courseRegistrationDates.startDate,
                endDate: data.courseRegistrationDates.endDate,
                iconDate: data.courseRegistrationDates.iconDate,
                iconMonth: data.courseRegistrationDates.iconMonth,
              },
              {
                title: "Contest Results",
                startDate: data.contestResultDates.startDate,
                endDate: data.contestResultDates.endDate,
                iconDate: data.contestResultDates.iconDate,
                iconMonth: data.contestResultDates.iconMonth,
              },
            ],
          },
          {
            category: "Contest",
            border: "border-[#fe3fe5]",
            color: "text-[#fe3fe5]",
            bor: "border-[#fe3fe5]",
            bgcolor: "bg-[#fe3fe5]",
            route: "/auth/signup",
            items: [
              {
                title: "Registration Dates",
                startDate: data.contestRegistrationDates.startDate,
                endDate: data.contestRegistrationDates.endDate,
                iconDate: data.contestRegistrationDates.iconDate,
                iconMonth: data.contestRegistrationDates.iconMonth,
              },
              {
                title: "Registration Confirmation",
                startDate: data.contestConfirmationDates.startDate,
                endDate: data.contestConfirmationDates.endDate,
                iconDate: data.contestConfirmationDates.iconDate,
                iconMonth: data.contestConfirmationDates.iconMonth,
              },
              {
                title: "Contest Dates",
                startDate: data.contestsDates.startDate,
                endDate: data.contestsDates.endDate,
                iconDate: data.contestsDates.iconDate,
                iconMonth: data.contestsDates.iconMonth,
              },
            ],
          },
          {
            category: "Course",
            border: "border-[#5ff6ff]",
            color: "text-[#5ff6ff]",
            bor: "border-[#5ff6ff]",
            bgcolor: "bg-[#5ff6ff]",
            route: "/select-course",

            items: [
              {
                title: "Registration Dates",
                startDate: data.courseRegistrationDates.startDate,
                endDate: data.courseRegistrationDates.endDate,
                iconDate: data.courseRegistrationDates.iconDate,
                iconMonth: data.courseRegistrationDates.iconMonth,
              },
              {
                title: "Registration Confirmation",
                startDate: data.courseConfirmationDates.startDate,
                endDate: data.courseConfirmationDates.endDate,
                iconDate: data.courseConfirmationDates.iconDate,
                iconMonth: data.courseConfirmationDates.iconMonth,
              },
              {
                title: "Course Starting Dates",
                startDate: data.courseClassesDates.startDate,
                endDate: data.courseClassesDates.endDate,
                iconDate: data.courseClassesDates.iconDate,
                iconMonth: data.courseClassesDates.iconMonth,
              },
            ],
          },
        ]);
      } catch (err) {
        console.error("Failed to fetch dates", err);
      }
    };

    fetchDates();
  }, []);

  return (
    <>
      <Container>
        {/* <Popup /> */}
        <HeroSection />
        <Banner date={remainingDate} />
        <ContestPage announcementsData={announcementsData} />
        <CountryPartner />
        <Competition />
        <Carousel images={imageArray} />

        <FAQ faqs={FAQsMain} />
      </Container>
    </>
  );
}
