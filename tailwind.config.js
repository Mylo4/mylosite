module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "localhost-IBM-plex-sans-bold":
          "var(--localhost-IBM-plex-sans-bold-font-family)",
        "localhost-IBM-plex-sans-regular":
          "var(--localhost-IBM-plex-sans-regular-font-family)",
        "localhost-semantic-button":
          "var(--localhost-semantic-button-font-family)",
        "localhost-semantic-heading-1":
          "var(--localhost-semantic-heading-1-font-family)",
        "localhost-semantic-heading-2":
          "var(--localhost-semantic-heading-2-font-family)",
        "localhost-semantic-heading-2-underline":
          "var(--localhost-semantic-heading-2-underline-font-family)",
        "localhost-semantic-heading-3":
          "var(--localhost-semantic-heading-3-font-family)",
        "localhost-semantic-item": "var(--localhost-semantic-item-font-family)",
        "localhost-semantic-link": "var(--localhost-semantic-link-font-family)",
        "localhost-semantic-link-upper":
          "var(--localhost-semantic-link-upper-font-family)",
        "pepeland-net-inter-regular":
          "var(--pepeland-net-inter-regular-font-family)",
        "pepeland-net-inter-semi-bold":
          "var(--pepeland-net-inter-semi-bold-font-family)",
        "pepeland-net-manrope-extrabold":
          "var(--pepeland-net-manrope-extrabold-font-family)",
        "pepeland-net-semantic-button":
          "var(--pepeland-net-semantic-button-font-family)",
        "pepeland-net-semantic-link":
          "var(--pepeland-net-semantic-link-font-family)",
        "spworlds-ru-segoe-UI-bold":
          "var(--spworlds-ru-segoe-UI-bold-font-family)",
        "spworlds-ru-semantic-button":
          "var(--spworlds-ru-semantic-button-font-family)",
        "spworlds-ru-semantic-heading-1":
          "var(--spworlds-ru-semantic-heading-1-font-family)",
        "spworlds-ru-semantic-heading-2":
          "var(--spworlds-ru-semantic-heading-2-font-family)",
        "spworlds-ru-semantic-heading-3":
          "var(--spworlds-ru-semantic-heading-3-font-family)",
        "spworlds-ru-semantic-link":
          "var(--spworlds-ru-semantic-link-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
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
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
