import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import './ModeComponent.css'; // Import the CSS for styles

function ModeComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="toggle-container">
            <span style={{ color: 'white' }}>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
            <label className="switch">
                <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default ModeComponent;
