import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegionContext, ThemeContext } from "../contexts/contexts";

import darkSearchIcon from '../assets/darkSearchIcon.png';
import lightSearchIcon from '../assets/lightSearchIcon.png';

/**
 * Note:  Only five regions are included in filter per template.  However, there are actually eight regions recognized in database.
 * Africa, America, Asia, Europe, Oceania
 * ['Asia', 'Europe', 'Africa', 'Oceania', 'Americas', 'Polar', 'Antarctic Ocean', 'Antarctic']
 */

export const SearchAndFilterBar = () => {

  const { theme } = useContext(ThemeContext);
  const { setRegion } = useContext(RegionContext);
  const [textInput, setTextInput] = useState("");

  const navigate = useNavigate();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTextInput(event.currentTarget.value);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log('hKD', event.key);
    if (event.key === 'Enter') {
      navigate(`/country/${textInput}`)
      // console.log ('Enter key pressed');
    }
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) {
      setRegion(prev => {
        return event.target.value;
        console.log(prev); // Could just do setRegion(event.target.value) but I put this after return instead to preserve legacy code.  Eh.  This should trigger a linting error or whatever it's called as this code is unreachable, but eh.
      });
      //console.log(`SAFB region set to ${event.target.value}`);
    }
  }

  return (
    <div className='flex jc-spacebetween ai-center'>
      <div className='dark-alt flex ai-center jc-center'>
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