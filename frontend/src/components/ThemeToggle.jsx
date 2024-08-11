import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button 
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-1 sm:p-2 rounded-lg focus:outline-none shadow-md text-xs sm:text-sm"
            onClick={toggleTheme}
        >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};

export default ThemeToggle;
