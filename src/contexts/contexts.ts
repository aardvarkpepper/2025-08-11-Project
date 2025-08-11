import { createContext } from "react";
import type { Theme, ThemeContextType } from "../types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: { id: 0, theme: 'dark' },
  cycleTheme: (currentId: number) => {},
  selectTheme: (newId: number) => {},
})