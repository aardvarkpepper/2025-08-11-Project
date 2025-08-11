import { useContext } from "react";
import { ThemeContext } from '../contexts/contexts';

// ContextProviders cannot interact with App, as they are children.  This component allows interaction.
// Rather than individually applying className 'dark' to elements, I wrap all rendered components in 'dark'.  CSS styling of navbar then becomes '.dark .nav' where .nav is a descendant of .dark.
export const AppWrapper = ({ children }: React.PropsWithChildren) => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme.theme} fullscreen`} key={theme.id}>
      {children}
    </div>
  )
}