import React, { useState, useEffect } from 'react';
import '../css/Config.css'

const Configuration: React.FC = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
        
    );
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }

    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);
    return (
    <div className={`${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>Hello, world!</h1>
    </div>
    );
}
export default Configuration;