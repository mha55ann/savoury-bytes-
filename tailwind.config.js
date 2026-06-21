/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#16140F",
          light: "#201D16",
          lighter: "#2B271D",
        },
        cream: {
          DEFAULT: "#F6F1E4",
          dim: "#EAE2CD",
        },
        gold: {
          DEFAULT: "#C9A24B",
          bright: "#E0BD6B",
          dim: "#8C7339",
        },
        oxblood: {
          DEFAULT: "#7A2230",
          light: "#9C3A49",
        },
        sage: {
          DEFAULT: "#7C8A6E",
          light: "#9CAA8C",
        },
        ink: "#332E22",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ticketIn: {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
        ticketIn: "ticketIn 0.45s ease forwards",
      },
    },
  },
  plugins: [],
};
