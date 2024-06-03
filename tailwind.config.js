/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: "var(--Orange)",
        darkGrayishBlue: "var(--Dark-grayish-blue)",
        grayishBlue: "var(--Grayish-blue)",
      },
      fontSize: {
        xxs: [
          "0.625rem",
          {
            lineHeight: "0.75rem",
          },
        ],
      },
      backgroundColor: {
        backdrop: "rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
};
