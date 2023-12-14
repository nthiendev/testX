"use client";
import Image from "next/image";
import { useState } from "react";
import ArrowRight from "./icons/ArrowRight";
import PetraIcon from "./icons/PetraIcon";

const LogoIcon = "/assets/images/logo.png";

const TABS = ["Products", "Protocols", "Tokens", "Use Cases"];

const Navigation = () => {
  const [tab, setTab] = useState("Products");
  const [key, setKey] = useState("");

  const getAptosWallet = () => {
    if ("aptos" in window) {
      const isPetraInstalled = window.aptos;
      console.log("isPetraInstalled: ", isPetraInstalled);
      return window.aptos;
    } else {
      // window.open("https://petra.app/", `_blank`);
    }
  };

  const handleConnectPetraWallet = async () => {
    const wallet: any = getAptosWallet();
    if (key) {
      try {
        await wallet.disconnect();
        setKey("");
      } catch (error) {
        console.log("error: ", error);
      }
      return;
    }

    try {
      const response = await wallet.connect();
      console.log(response);
      const account = await wallet.account();
      console.log(account);
      setKey(account.publicKey);
    } catch (error) {
      console.log(error);
    }
  };

  const Tab = ({ label, onClick }: { label: string; onClick: any }) => {
    return (
      <p
        className="hover:scale-110 hover:transition-all font-bold"
        style={{ color: tab === label ? "#000" : "#596F78" }}
        onClick={() => onClick(label)}
      >
        {label}
      </p>
    );
  };

  return (
    <div
      className="flex items-center justify-between ml-20 px-8 rounded-xl"
      style={{
        width: 821,
        height: 45,
        backgroundColor: "#F7BDCC",
      }}
    >
      {TABS.map((item) => (
        <Tab key={item} label={item} onClick={setTab} />
      ))}
      <button
        className="pl-9 pr-7 py-2 flex items-center rounded-full bg-white text-black hover:bg-black hover:text-white hover:scale-110 hover:transition-all"
        style={{ height: 30 }}
        onClick={handleConnectPetraWallet}
      >
        {key && <PetraIcon />} {key || "Connect Wallet"}
        <ArrowRight />
      </button>
    </div>
  );
};

const AppBar = () => {
  return (
    <div className="bg-white flex items-center justify-center">
      <div className="flex items-center min-w-main justify-between px-4">
        <Image src={LogoIcon} alt="Logo" width={260} height={135} />
        <Navigation />
      </div>
    </div>
  );
};

export default AppBar;
