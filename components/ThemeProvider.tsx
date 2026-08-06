"use client";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export const useTheme = () => ({ theme: "dark" as const, toggle: () => {} });
