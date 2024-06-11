import React, { useState, useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const element = document.documentElement;

        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <div className="relative">
            <img
                src={LightButton}
                alt="Light Mode Button"
                className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
                onClick={toggleTheme}
            />
            <img
                src={DarkButton}
                alt="Dark Mode Button"
                className={`w-12 cursor-pointer ${theme === "light" ? "opacity-0" : "opacity-100"}`}
                onClick={toggleTheme}
            />
        </div>
    );
};

export default DarkMode;


