export interface Theme {
  id: number;
  theme: string;
}

export interface ThemeContextType {
  theme: Theme;
  cycleTheme: (currentId: number) => void;
  selectTheme: (newId: number) => void;
}