export interface Theme {
  id: number;
  theme: string;
}

export interface RegionContextType {
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>
}

export interface ThemeContextType {
  theme: Theme;
  cycleTheme: (currentId: number) => void;
  selectTheme: (newId: number) => void;
}

export interface CCA3ToCountry {
  [key: string]: string;
}