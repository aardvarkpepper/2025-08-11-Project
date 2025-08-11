import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from './contexts/contexts';

import './App.css'
import { ThemeProvider } from './providers/ThemeProvider';
import { AppWrapper } from './components/AppWrapper';

import { TitleBar } from './components/TitleBar';
import { HomePage } from './pages/HomePage/HomePage';
import { CountryPage } from './pages/CountryPage/CountryPage';

function App() {
  return (
    <ThemeProvider>
      <AppWrapper>
        <TitleBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:country' element={<CountryPage />} />
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App;
