import { createContext } from "react";
import type { RegionContextType, ThemeContextType } from "../types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: { id: 0, theme: 'dark' },
  cycleTheme: (_currentId: number) => {},
  selectTheme: (_newId: number) => {},
})

export const RegionContext = createContext<RegionContextType>({
  region: '',
  setRegion: () => {}
})