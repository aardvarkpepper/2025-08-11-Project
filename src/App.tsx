import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from './contexts/contexts';

import './App.css'
import { ThemeProvider } from './providers/ThemeProvider';

import { TitleBar } from './components/TitleBar';
import { HomePage } from './pages/HomePage/HomePage';
import { CountryPage } from './pages/CountryPage/CountryPage';

function App() {
  // Rather than individually applying className 'dark' to elements, I wrap all rendered components in 'dark'.  CSS styling of navbar then becomes '.dark .nav' where .nav is a descendant of .dark.
  const { theme, cycleTheme, selectTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className={`${theme.theme} fullscreen`} key={theme.id}>
        <TitleBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:country' element={<CountryPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App;
