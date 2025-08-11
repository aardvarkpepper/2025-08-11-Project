import { Routes, Route, Link, useNavigate } from 'react-router-dom';


import './App.css'
import { HomePage } from './components/HomePage/HomePage';
import { CountryPage } from './components/CountryPage/CountryPage';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/country/:country' element={<CountryPage />} />
      </Routes>
    </div>
  )
}

export default App;
