export interface Theme {
  id: number;
  theme: string;
}

export interface RegionContextType {
  region: string;
  setRegion: any;
}

export interface ThemeContextType {
  theme: Theme;
  cycleTheme: (currentId: number) => void;
  selectTheme: (newId: number) => void;
}