"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

function getThemeSnapshot(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("mf-theme") as "light" | "dark" | null;
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
    return saved;
  }
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    return "dark";
  }
  return "light";
}

function getServerSnapshot(): "light" | "dark" {
  return "light";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerSnapshot,
  );

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("mf-theme", next);
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"
      }
      title={theme === "light" ? "Modo oscuro" : "Modo claro"}
    >
      {theme === "light" ? (
        <Moon aria-hidden="true" />
      ) : (
        <Sun aria-hidden="true" />
      )}
    </button>
  );
}
