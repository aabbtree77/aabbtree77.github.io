import React, { useState, useEffect } from "react";

const ToggleTheme: React.FC = () => {
  // State to manage the current theme (light or dark)
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  // Apply the theme class to the document body
  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      Toggle Dark/Light Theme
    </button>
  );
};

export default ToggleTheme;
