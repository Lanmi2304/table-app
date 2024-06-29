"use client";

import { createContext, ReactNode, useState } from "react";
import { User } from "@/hooks/use-fetch-peoples";

type CTXValueType = {
  showAside: boolean;
  setActive: () => void;
  setHost: (host: User) => void;
  selectedHost: User | undefined;
};

export const AsideCTX = createContext<CTXValueType>({
  showAside: false,
  setActive: () => {},
  setHost: (host: User) => {},
  selectedHost: undefined,
});

export default function AsideCTXProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [showAside, setShowAside] = useState(false);
  const [selectedHost, setSelectedHost] = useState<User | undefined>(undefined);

  const setActive = () => {
    setShowAside(true);
  };

  const setHost = (host: User) => {
    setSelectedHost(host);
    console.log(host);
  };

  const ctxValue: CTXValueType = {
    showAside,
    setActive,
    setHost,
    selectedHost,
  };

  return <AsideCTX.Provider value={ctxValue}>{children}</AsideCTX.Provider>;
}
