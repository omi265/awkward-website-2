"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  selectedOption: number;
  setSelectedOption: (val: number) => void;
  popStyle: "1A" | "1B" | "1C" | "1D" | "1E";
  setPopStyle: (val: "1A" | "1B" | "1C" | "1D" | "1E") => void;
  isPreloaderFinished: boolean;
  setIsPreloaderFinished: (val: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1);
  const [popStyle, setPopStyle] = useState<"1A" | "1B" | "1C" | "1D" | "1E">("1A");
  const [isPreloaderFinished, setIsPreloaderFinished] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    const savedTheme = localStorage.getItem("theme");
    const savedOption = localStorage.getItem("selectedOption");
    const savedPopStyle = localStorage.getItem("popStyle") as "1A" | "1B" | "1C" | "1D" | "1E" | null;

    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
    if (savedOption) {
      setSelectedOption(parseInt(savedOption, 10));
    }
    if (savedPopStyle) {
      setPopStyle(savedPopStyle);
    }
    setMounted(true);
  }, []);

  const toggleTheme = (val: boolean) => {
    setIsDarkMode(val);
    localStorage.setItem("theme", val ? "dark" : "light");
  };

  const changeOption = (val: number) => {
    setSelectedOption(val);
    localStorage.setItem("selectedOption", val.toString());
  };

  const changePopStyle = (val: "1A" | "1B" | "1C" | "1D" | "1E") => {
    setPopStyle(val);
    localStorage.setItem("popStyle", val);
  };

  // Prevent SSR hydration flashing/mismatches by rendering children only after mounting
  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode: toggleTheme,
        selectedOption,
        setSelectedOption: changeOption,
        popStyle,
        setPopStyle: changePopStyle,
        isPreloaderFinished,
        setIsPreloaderFinished,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
