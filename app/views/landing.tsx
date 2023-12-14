"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LogoTransparent = "/assets/images/logoTransparent.png";
const Logo = "/assets/images/logo.png";

const Item = ({ label, subLabel }: { label: string; subLabel: string }) => {
  return (
    <div className="flex items-center flex-col">
      <h1 style={{ fontSize: 49, color: "#17344F" }}>{label}</h1>
      <p style={{ fontSize: 16, color: "#596F78" }}>{subLabel}</p>
    </div>
  );
};

const SigninButton = () => {
  const { data: session } = useSession();

  console.log("session.user", session?.user);

  if (session && session.user) {
    return (
      <button
        style={{ backgroundColor: "#7BB8F1", width: 174 }}
        className="h-10 rounded-3xl text-base font-bold"
        onClick={() => signOut()}
      >
        Logout
      </button>
    );
  }

  return (
    <button
      style={{ backgroundColor: "#7BB8F1", width: 174 }}
      className="h-10 rounded-3xl text-base font-bold"
      onClick={() => signIn("google")}
    >
      Log in
    </button>
  );
};

const Landing = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleNavigate = () => {
    if (session && session.user) {
      router.push("/congratulation");
      return;
    }
    window.alert("Please Login before you go, Thank you!");
  };

  return (
    <div
      className="min-w-main px-4 py-20"
      style={{ minHeight: "100vh", width: 100 }}
    >
      <div className="flex justify-between">
        <div>
          <h1 style={{ fontSize: 69, fontWeight: 400 }}>Explore and Earn </h1>
          <div className="flex items-center">
            <h1 style={{ fontSize: 69, fontWeight: 400 }}>on</h1>
            <Image
              src={LogoTransparent}
              alt="TestX"
              width={135}
              height={83}
              style={{ marginBottom: -30, marginLeft: 20 }}
            />
          </div>
          <div className="h-10 bg-white rounded-3xl mt-5 flex items-center justify-end pr-1.5">
            <div
              className="rounded-3xl flex items-center justify-center"
              style={{ height: 30, width: 118, backgroundColor: "#F5B4BB" }}
            >
              <p>Sign up</p>
            </div>
          </div>
          <div className="mt-10 flex justify-between">
            <SigninButton />
            <button
              style={{ backgroundColor: "#fff", width: 174, color: "#17344F" }}
              className="h-10 rounded-3xl text-base font-bold"
              onClick={handleNavigate}
            >
              Launch App
            </button>
          </div>
        </div>
        <div
          className="bg-white flex items-center justify-center rounded-2xl"
          style={{ height: 121, width: 225, position: "relative" }}
        >
          <Image src={Logo} alt="TestX" width={104} height={54} />
          <p
            style={{
              color: "#8795AF",
              position: "absolute",
              top: 80,
              fontSize: 12,
            }}
          >
            test Front end interview 1
          </p>
        </div>
      </div>
      <div
        className="flex justify-between items-center px-20 mt-28 rounded-3xl"
        style={{
          width: 1168,
          height: 190,
          backgroundColor: "rgba(255, 255, 255, 0.50)",
          border: "1px solid #fff",
        }}
      >
        <Item label="$1.80B" subLabel="30 Day Volume" />
        <Item label="$0.84B" subLabel="Managed on testX.fi" />
        <Item label="$21.43M" subLabel="Total Collateral Automated" />
      </div>
    </div>
  );
};

export default Landing;
