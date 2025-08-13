export interface Theme {
  id: number;
  theme: string;
}

// Technically I could go in and create union types for everything but that's a lot.  
interface NativeName {
  official: string;
  common: string;
}
interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface Currency {
  symbol: string;
  name: string;
}

export interface Country {
  name: Name;
  tld: string[];
  currencies: {[key: string]: Currency};
  capital: string[];
  region: string;
  subregion: string;
  languages: {[key: string]: string};
  borders: string[];
  cca3: string;
  population: number;
  flags: {[key: string]: string};
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