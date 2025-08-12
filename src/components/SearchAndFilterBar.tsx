import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegionContext, ThemeContext } from "../contexts/contexts";

import darkSearchIcon from '../assets/darkSearchIcon.png';
import lightSearchIcon from '../assets/lightSearchIcon.png';

export const SearchAndFilterBar = () => {

  const { theme } = useContext(ThemeContext);
  const { region, setRegion } = useContext(RegionContext);
  const [textInput, setTextInput] = useState("");

  const handleChange = (event: any) => {
    setTextInput(event.target.value);
    // console.log(`textInput`, textInput);
    // console.log('event.target.value', event.target.value);
  }

  const handleKeyDown = (event: any) => {
    // console.log('hKD', event.key);
    if (event.key === 'Enter') {
      // console.log ('Enter key pressed');

    }
  }

    const handleSelectChange = (event: any) => {
      if (event.target.value) {
        setRegion(prev => {
          console.log(prev);
          return event.target.value;
        });
        console.log(`SAFB region set to ${event.target.value}`);
      }
    }

  return (
    <div className='flex jc-spacebetween ai-center'>
      <div className='dark-alt ai-center'>
        <img src={theme.theme === 'dark' ? lightSearchIcon : darkSearchIcon} />
        <input type='text' value={textInput} onChange={handleChange} onKeyDown={handleKeyDown}></input>
      </div>
      <select className='dark-alt selectcustom' onChange={handleSelectChange}>
        <option value=''>Filter by Region</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </div>
  )
}

/**
 * Africa, America, Asia, Europe, Oceania
 * ['Asia', 'Europe', 'Africa', 'Oceania', 'Americas', 'Polar', 'Antarctic Ocean', 'Antarctic']
 */