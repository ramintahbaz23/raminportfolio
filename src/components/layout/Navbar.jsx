import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import sunIcon from '../../assets/images/sun.svg';
import moonIcon from '../../assets/images/moon.svg';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav>
      <div className="flex justify-between items-center">
        <Link to="/" className={`text-[16px] md:text-[16pt] dark:text-white text-black`}>
          Ramin Tahbaz
        </Link>
        <button
          onClick={toggleDarkMode}
          className="p-[8px] rounded-full bg-gray-200 dark:bg-gray-700 relative right-[15px]"
          aria-label="Toggle theme"
        >
          <img 
            src={isDarkMode ? moonIcon : sunIcon} 
            alt={isDarkMode ? "Dark mode" : "Light mode"}
            className="w-[12px] h-[12px]"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;