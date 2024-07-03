'use client';

import { type ReactNode, createContext, useState } from 'react';

import { type User } from '@/hooks/use-fetch-peoples';

interface CTXValueType {
  showAside: boolean;
  setActive: (active: boolean) => void;
  setHost: (host: User) => void;
  selectedHost: User | undefined;
}

export const AsideCTX = createContext<CTXValueType>({
  showAside: false,
  setActive: (active: boolean) => {},
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

  const setActive = (active: boolean) => {
    setShowAside(active);
  };

  const setHost = (host: User) => {
    setSelectedHost(host);
    // console.log(host);
  };

  const ctxValue: CTXValueType = {
    showAside,
    setActive,
    setHost,
    selectedHost,
  };

  return <AsideCTX.Provider value={ctxValue}>{children}</AsideCTX.Provider>;
}
