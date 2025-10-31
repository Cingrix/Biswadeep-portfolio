import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const buttonColorClass = theme === 'dark' ? 'bg-violet-600 hover:bg-violet-700' : 'bg-gray-200 hover:bg-gray-300';
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-gray-800';

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full focus:outline-none transition-colors duration-300 ${buttonColorClass} ${textColorClass}`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.459 4.582a1 1 0 01-1.398.036l-2.393-2.466a.5.5 0 00-.765.076l-1.596 2.075a1 1 0 01-1.845.07l-1.596-2.075a.5.5 0 00-.765-.076l-2.393 2.466a1 1 0 01-1.398-.036l-.001-.001a1 1 0 01.036-1.398l2.466-2.393a.5.5 0 00.076-.765l-2.075-1.596a1 1 0 01-.07-1.845l2.075-1.596a.5.5 0 00.076-.765l-2.466-2.393a1 1 0 01-.036-1.398l.001-.001a1 1 0 011.398-.036l2.393 2.466a.5.5 0 00.765-.076l1.596-2.075a1 1 0 011.845-.07l1.596 2.075a.5.5 0 00.765.076l2.393-2.466a1 1 0 011.398.036l.001.001a1 1 0 01-.036 1.398l-2.466 2.393a.5.5 0 00-.076.765l2.075 1.596a1 1 0 01.07 1.845l-2.075 1.596a.5.5 0 00-.076.765l2.466 2.393a1 1 0 01.036 1.398zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
