import React, { use, useEffect, useState } from "react";

function useThemeSwitcher() {
  const preferDarkQuery = "(prefer-color-scheme:dark)";
  const [mode, setmode] = useState("");
  useEffect(() => {
    const mediaquery = window.matchMedia(preferDarkQuery);
    const userpref = window.localStorage.getItem("theme");
    const handelChange = () => {
      if (userpref) {
        let check = userpref === "dark" ? "dark" : "light";
        setmode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaquery.matches ? "dark" : "light";
        setmode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    handelChange();
    mediaquery.addEventListener("change", handelChange);
    return () => mediaquery.removeEventListener("change", handelChange);
  }, []);
  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  return [mode, setmode];
}

export default useThemeSwitcher;
