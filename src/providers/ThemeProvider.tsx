import { useState } from 'react';
import type { Theme } from '../types';
import { ThemeContext } from '../contexts/contexts';
import { themeData } from '../data/themeData';

export const ThemeProvider = ({children}: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>({ id: 0, theme: 'dark'}); // note:  Initial value here is actually set by ThemeContext.  Look into this.

  const cycleTheme = (currentId: number) => {
    setTheme(prev => {
      const newIndex = (prev.id + 1) % themeData.length;
      return themeData[newIndex];
    })
  };

  const selectTheme = (newId: number) => {
    setTheme(themeData[newId]);
  };

  const ThemeContextValue = {
    theme,
    cycleTheme,
    selectTheme
  }

  return (
    <ThemeContext value={ThemeContextValue}>
      {children}
    </ThemeContext>
  )
}