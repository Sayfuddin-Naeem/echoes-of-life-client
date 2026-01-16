import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "echoesoflife-dark" : "echoesoflife";
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen to system theme changes
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "echoesoflife-dark" : "echoesoflife");
      }
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "echoesoflife" ? "echoesoflife-dark" : "echoesoflife"
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle theme"
    >
      {theme === "echoesoflife" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
