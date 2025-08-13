import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/contexts";
import darkDarkModeIcon from '../assets/darkDarkModeIcon.png';
import lightDarkModeIcon from '../assets/lightDarkModeIcon.png';

export const TitleBar = () => {
  const { theme, cycleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // const handleCycleTheme = (event: any) => {
  //   console.log(`hCT invoked with ${event.target.name}`);
  //   cycleTheme(Number(event.key.name));
  // }
  
  return (
    <div className='dark-alt flex jc-spacebetween ai-center'>
      <button className='fs-15rem fw-800 p-12rem ml-20rem' onClick={() => navigate(`/`)}>Where in the world?</button>
      <button key={theme.id} className='flex ai-center' onClick={() => cycleTheme(theme.id)}><img className='top-button' src={theme.theme === 'dark' ? lightDarkModeIcon : darkDarkModeIcon}></img><div className='ml-05rem'>Dark Mode</div></button>
    </div>
  )
}