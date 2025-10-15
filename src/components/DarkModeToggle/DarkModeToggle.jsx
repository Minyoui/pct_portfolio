import { useDarkMode } from '../../context/DarkModeContext';
import './DarkModeToggle.scss';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`dark-toggle-button ${darkMode ? 'light' : 'dark'}`}
      type="button"
      id="toggle-btn"
      aria-label="Theme Toggle Button"
    >
      <div className='sun' />
      <div className='moon' />
    </button>
    
  );
};

export default DarkModeToggle;