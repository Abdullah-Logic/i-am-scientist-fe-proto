"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AffiliateNavbar from "../components/AffiliateNavbar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const [flag, setFlag] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const affiliateId = localStorage.getItem("IASAFFILIATEID");
    if (affiliateId) {
      setFlag(true);
      return;
    }
    router.push("/auth/login");
  }, [router]);

  if (!flag) return null;

  return (
    <>
      <AffiliateNavbar />
      {children}
    </>
  );
};

export default UserLayout;
