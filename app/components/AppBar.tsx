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

  function truncateMiddle(str: string, maxLength: number) {
    if (!str || str.length <= maxLength) {
      return str;
    }

    const startLength = Math.floor((maxLength - 3) / 2);
    const endLength = Math.ceil((maxLength - 3) / 2);

    return `${str.slice(0, startLength)}...${str.slice(-endLength)}`;
  }

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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 7px",
          height: 30,
          width: 213,
          borderRadius: 15,
          overflow: "hidden",
          whiteSpace: "nowrap",
          border: "none",
          backgroundColor: "white",
          color: "black",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
        }}
        onClick={handleConnectPetraWallet}
      >
        {key && <PetraIcon />} <span>{truncateMiddle(key, 20)}</span>
        {!key && "Connect Wallet"}
        {!key && <ArrowRight />}
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
