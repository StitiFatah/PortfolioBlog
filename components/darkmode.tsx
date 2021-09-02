import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default function DarkMode({ dark_mode, set_dark_mode }) {
  const change_mode = () => {
    set_dark_mode(!dark_mode);
  };
  return (
    <DarkModeToggle
      onChange={() => change_mode()}
      checked={dark_mode}
      size={50}
    />
  );
}
