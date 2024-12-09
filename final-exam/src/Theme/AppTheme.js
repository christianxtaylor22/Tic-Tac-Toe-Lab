import React, {useState, useEffect} from 'react';
import ThemeContext from './ThemeContext';
import App from '../App';

function AppTheme(){
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme((prevTheme)=>(prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.style.setProperty('--background-color', '#333');
            root.style.setProperty('--text-color', '#fff');
            root.style.setProperty('--nav-background', '#1c1c1c');
        } else {
            root.style.setProperty('--background-color', '#fff');
            root.style.setProperty('--text-color', '#000');
            root.style.setProperty('--nav-background', '#007bff');
        }
    }, [theme]);

    return(
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            <App value = {{theme, toggleTheme}}/>
        </ThemeContext.Provider>
    )

}
export default AppTheme;
