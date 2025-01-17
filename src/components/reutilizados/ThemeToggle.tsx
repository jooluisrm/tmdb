"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Força o tema para "dark" sempre que o componente for montado
    setTheme("dark");
  }, [setTheme]);

  return null; // Opcional: Se não precisar de botão, pode retornar null.
}
