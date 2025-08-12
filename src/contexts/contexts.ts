import { createContext } from "react";
import type { RegionContextType, Theme, ThemeContextType } from "../types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: { id: 0, theme: 'dark' },
  cycleTheme: (currentId: number) => {},
  selectTheme: (newId: number) => {},
})

export const RegionContext = createContext<RegionContextType>({
  region: '',
  setRegion: () => {}
})