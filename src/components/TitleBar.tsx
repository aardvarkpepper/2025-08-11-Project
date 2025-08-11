import { useContext } from "react";
import { ThemeContext } from "../contexts/contexts";
import darkDarkModeIcon from '../assets/darkDarkModeIcon.png';
import lightDarkModeIcon from '../assets/lightDarkModeIcon.png';

export const TitleBar = () => {
  const { theme, cycleTheme, selectTheme } = useContext(ThemeContext);
  return (
    <div className='dark-alt flex jc-spacebetween ai-center'>
      <div className='fs-15rem fw-800 p-12rem ml-20rem'>Where in the world?</div>
      <button key={theme.id} className='flex ai-center'><img src={theme.theme === 'Dark' ? darkDarkModeIcon : lightDarkModeIcon}></img><div className='ml-05rem'>Dark Mode</div></button>
    </div>
  )
}