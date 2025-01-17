"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "dark" : "dark")}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
