import { Routes, Route } from 'react-router-dom';

import './App.css'
// import { AppProvider } from './providers/AppProvider';
import { AppProvider } from './providers/AppProvider';
import { AppWrapper } from './components/AppWrapper';

import { TitleBar } from './components/TitleBar';
import { HomePage } from './pages/HomePage/HomePage';
import { CountryPage } from './pages/CountryPage/CountryPage';

function App() {
  return (
    <AppProvider>
      <AppWrapper>
        <TitleBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:country' element={<CountryPage />} />
        </Routes>
      </AppWrapper>
    </AppProvider>
  )
}

export default App;
