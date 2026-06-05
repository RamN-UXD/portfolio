import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans"'],
        heading: ['"Google Sans"'],
      },
      fontSize: {
        h1: ['clamp(2rem, 1.56rem + 1.88vw, 3.8125rem)', { lineHeight: '120%', fontWeight: '500' }],
        h2: ['clamp(1.625rem, 1.291rem + 1.42vw, 3rem)', { lineHeight: '120%', fontWeight: '500' }],
        h3: ['clamp(1.375rem, 1.117rem + 1.1vw, 2.4375rem)', { lineHeight: '130%', fontWeight: '500' }],
        h4: ['clamp(1.1875rem, 1.005rem + 0.78vw, 1.9375rem)', { lineHeight: '130%', fontWeight: '500' }],
        h5: ['clamp(1.0625rem, 0.941rem + 0.52vw, 1.5625rem)', { lineHeight: '140%', fontWeight: '500' }],
        h6: ['clamp(0.9375rem, 0.862rem + 0.32vw, 1.25rem)', { lineHeight: '140%', fontWeight: '500' }],
        'body-lg': ['clamp(0.9375rem, 0.892rem + 0.19vw, 1.125rem)', { lineHeight: '150%', fontWeight: '400' }],
        'body-lg-italic': ['clamp(0.9375rem, 0.892rem + 0.19vw, 1.125rem)', { lineHeight: '150%', fontWeight: '400' }],
        'body-sm': ['clamp(0.875rem, 0.845rem + 0.13vw, 1rem)', { lineHeight: '150%', fontWeight: '400' }],
        'tag-1': ['clamp(0.75rem, 0.72rem + 0.13vw, 0.875rem)', { lineHeight: 'normal', letterSpacing: '4px', fontWeight: '700' }],
        'tag-2': ['clamp(0.75rem, 0.72rem + 0.13vw, 0.875rem)', { lineHeight: 'normal', letterSpacing: '2px', fontWeight: '700' }],
        'tag-3': ['clamp(0.75rem, 0.72rem + 0.13vw, 0.875rem)', { lineHeight: 'normal', letterSpacing: '0px', fontWeight: '700' }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        bg: "#080810",
        accentBlue: "#0066ff",
        accentPurple: "#cc63ff",
        cardSurface: "#302e61",
        cardBlue: "#2a4886",
      },
    },
  },
  plugins: [],
};
export default config;
