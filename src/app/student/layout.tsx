"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const [flag, setFlag] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("IASID");
    const role = localStorage.getItem("IASROLE");
    if (id && role === "student") {
      setFlag(true);
    } else {
      router.push("/auth/login");
    }
  }, [router]);

  if (!flag) return null;

  return <>{children}</>;
};

export default UserLayout;
