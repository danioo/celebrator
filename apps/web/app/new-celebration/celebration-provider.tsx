'use client'

import { Dispatch, SetStateAction, createContext, useMemo, useState } from 'react';

type CelebrationContextProps = {
  type: string | null,
  restaurant: string | null,
  photographer: string | null,
  band: string | null,
  florist: string | null,

  setType: Dispatch<SetStateAction<string | null>>,
  setRestaurant: Dispatch<SetStateAction<string | null>>,
  setPhotographer: Dispatch<SetStateAction<string | null>>,
  setBand: Dispatch<SetStateAction<string | null>>,
  setFlorist: Dispatch<SetStateAction<string | null>>,
}

export const CelebrationContext = createContext<CelebrationContextProps>({
  type: null,
  restaurant: null,
  photographer: null,
  band: null,
  florist: null,

  setType: () => {},
  setRestaurant: () => {},
  setPhotographer: () => {},
  setBand: () => {},
  setFlorist: () => {},
});

export default function CelebrationProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [ type, setType ] = useState<string | null>(null);
  const [ restaurant, setRestaurant ] = useState<string | null>(null);
  const [ photographer, setPhotographer ] = useState<string | null>(null);
  const [ band, setBand ] = useState<string | null>(null);
  const [ florist, setFlorist ] = useState<string | null>(null);
  const value = useMemo(() => ({ type, restaurant, photographer, band, florist, setType, setRestaurant, setPhotographer, setBand, setFlorist }), [type, restaurant, photographer, band, florist]);

  return <CelebrationContext.Provider value={value}>{children}</CelebrationContext.Provider>
}