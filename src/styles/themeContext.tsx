"use client";

import { ThemeNameProps } from "@/types/theme-name";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { ReactNode } from "react";

import * as themes from "./theme";

interface ThemeProviderProps {
  theme: ThemeNameProps;
  children: ReactNode;
}

export const ThemeContext = ({ theme, children }: ThemeProviderProps) => {
  const handleTheme = themes[theme] ?? themes.defaultTheme;
  return (
    <ThemeProvider theme={handleTheme as DefaultTheme}>
      {children}
    </ThemeProvider>
  );
};
