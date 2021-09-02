import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const change_mode = () => {
    setIsDarkMode((checked) => !checked);
  };
  return (
    <DarkModeToggle
      onChange={() => change_mode()}
      checked={isDarkMode}
      size={50}
    />
  );
}
