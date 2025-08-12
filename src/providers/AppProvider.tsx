import { useState } from 'react';
import type { Theme } from '../types';
import { RegionContext, ThemeContext } from '../contexts/contexts';
import { themeData } from '../data/themeData';

export const AppProvider = ({ children }: React.PropsWithChildren) => {

  /**
   * THEME
   */
  const [theme, setTheme] = useState<Theme>({ id: 0, theme: 'dark' }); // note:  Initial value here is actually set by ThemeContext.  Look into this.

  const cycleTheme = (currentId: number) => {
    setTheme(prev => {
      console.log(`cT invoked with ${currentId}; object ${JSON.stringify(themeData[currentId])}`);
      const newIndex = (prev.id + 1) % themeData.length;
      console.log(`cT attempting to change to ${JSON.stringify({ id: themeData[newIndex].id, theme: themeData[newIndex].theme })}`);
      return { id: themeData[newIndex].id, theme: themeData[newIndex].theme };
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

  const [region, setRegion] = useState('');

  const RegionContextValue = {
    region,
    setRegion
  };

  /**
   * REGION
   */

  return (
    <ThemeContext value={ThemeContextValue}>
      <RegionContext value={RegionContextValue}>
        {children}
      </RegionContext>
    </ThemeContext>
  )
}