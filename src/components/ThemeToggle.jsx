import { useState } from 'react';

function ThemeToggle({ theme, toggleTheme }) {
  const [isPop, setIsPop] = useState(false);

  const handleClick = () => {
    setIsPop(true);
    setTimeout(() => {
      toggleTheme();
    }, 200);
    setTimeout(() => {
      setIsPop(false);
    }, 400);
  };

  return (
    <button 
      className={`theme-toggle-btn ${isPop ? 'pop' : ''}`} 
      id="themeToggle" 
      aria-label="Toggle theme"
      onClick={handleClick}
    >
      <span className="theme-icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
    </button>
  );
}

export default ThemeToggle;
