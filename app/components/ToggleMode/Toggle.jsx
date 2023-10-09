"use client";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleClick = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full box-content bg-slate-100 dark:bg-slate-700 cursor-pointer"
    >
      {darkMode === true ? <FiSun /> : <FiMoon />}
    </button>
  );
};
export default Toggle;
