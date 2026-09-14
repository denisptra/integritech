/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#292A73",
        brand: "#6677E8",
        ink: "#11152F",
        mist: "#70758A",
        soft: "#F7F8FC",
        line: "#E8EBF3",
        gold: "#C9AA62",
        ice: "#EEF2FF",
        grey: "#EEF0F5",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      boxShadow: {
        soft: "0 2px 16px rgba(17,21,47,0.04)",
        lift: "0 12px 32px rgba(17,21,47,0.08)",
      },
    },
  },
  plugins: [],
}
