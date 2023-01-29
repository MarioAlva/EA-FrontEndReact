import React, { useState, useEffect } from 'react';
import '../css/Config.css'
import { useTranslation } from 'react-i18next';
const Configuration: React.FC = () => {
    const { t, i18n } = useTranslation();
    const onClickLanguageChange = (e: any) => {
        const language = e.target.value;
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);

    };
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
    <div className="config-container">
    <form className={`config-${theme}`}>
        <span className="create-event-header">{t("ConfTitle")}</span>
            <label style={{marginBottom: "20px"}}>{t("ConfColour")}<button className={`config-button-${theme}`} onClick={toggleTheme}>{t("ConfButton")}</button></label>
            
            <label style={{marginBottom: "20px"}}>{t("ConfLanguage")}<select className="custom-select" style={{width: 200}} onChange={onClickLanguageChange}>
            <option value="en">{t("ConfEnglish")}</option>
            <option value="es">{t("ConfSpanish")}</option>
            </select>
            </label>
        
        <div style={{width: "62%", display: "inline-flex", justifyContent: "center", marginBottom: "20px"}}>
            <div style={{marginRight: "4%", display: "flex", flexDirection: "column", width: "62%"}}>
            </div>
        </div>
    </form>
</div>
    );
}
export default Configuration;