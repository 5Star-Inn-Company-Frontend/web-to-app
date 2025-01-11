/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export const darkMode = ["class"];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    screens: {
      'xs': "300px",
      'sm': "320px",
    },
    fontFamily: {
      lato: "Lato, serif"
    },
    colors: {
      gray1: "#CCCCCC",
      lightpink: "#FFEAEA",
      pink1: "#FF00001A",
      pink2: "#FF00001A",
      red1: "#C62828",
      red: "#FF3535",
      deepgray: "#F2F2F2",
      pinkred: "#D47979",
      primary5: "#E2DFDD",
      primary10: "#515151",
      primary15: "#7D7A77",
      primary20: "#CCCCCC",
      primary30: "#D0D0D0",
      primary40: "#999999",
      primary50: "#8A8A8A",
      primary60: "#666666",
      primary70: "#EEF0F3",
      primary80: "#333333",
      primary90: "#D1D4E4",
      primary100: "#000000",
      lightgreen: "#B1DDA8",
      lightgreen1: "#3DAB25",
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
export const plugins = [tailwindcssAnimate];
