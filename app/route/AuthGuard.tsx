"use client";
import { useRouter } from "next/navigation";
import { ReactElement, useEffect } from "react";

type GuardProps = {
  children: ReactElement | null;
};

const AuthGuard = ({ children }: GuardProps) => {
  const router = useRouter();
  const isLoggedIn = false;

  useEffect(() => {
    if (isLoggedIn) {
      router.push("congratulation");
      return;
    }
    router.push("/");
  }, [isLoggedIn, router]);

  return children;
};

export default AuthGuard;
