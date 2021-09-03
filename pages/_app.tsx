import "../styles/global.css";
import React, { useState, useEffect } from "react";

const darkbgcolor = "#282C35";

const initial_color_mode = () => {
  // if (typeof window !== "undefined") {
  const ls_dark_mode = localStorage.getItem("fs_blog_dark_mode");
  if (ls_dark_mode === "dark") {
    console.log("initial dark theme");
    return true;
  }
  console.log("initial white theme");
  return false;
  // }
};

const set_styles_to_dark = () => {
  console.log("set style to dark");
  document.querySelector("html").style.background = darkbgcolor;
  document.querySelector("html").classList.add("dark");
};

const set_styles_to_light = () => {
  console.log("set style to light");

  document.querySelector("html").style.background = "white";
  document.querySelector("html").classList.remove("dark");
};

const set_ls_to = (dark_white) => {
  localStorage.setItem(
    "fs_blog_dark_mode",
    dark_white === "dark" ? "dark" : "light"
  );
};

export default function App({ Component, pageProps }) {
  // initial theme

  const [dark, setDark] = useState(null);

  useEffect(() => {
    setDark(initial_color_mode());
  }, []);

  // Reactive

  useEffect(() => {
    console.log("App useEffect");

    if (dark !== null) {
      console.log("App useEffect validated");

      if (dark) {
        set_styles_to_dark();
        set_ls_to("dark");
      } else {
        set_styles_to_light();
        set_ls_to("light");
      }
    }
  }, [dark]);

  return <Component dark_mode={dark} set_dark_mode={setDark} {...pageProps} />;
}
