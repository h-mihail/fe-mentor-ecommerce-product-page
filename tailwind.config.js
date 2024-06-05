/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: "var(--Orange)",
        paleOrange: "var(--Pale-orange)",
        grayishBlue: "var(--Grayish-blue)",
        lightGrayishBlue: "var(--Light-grayish-blue)",
        darkGrayishBlue: "var(--Dark-grayish-blue)",
      },
      fontSize: {
        xxs: [
          "0.625rem",
          {
            lineHeight: "0.75rem",
          },
        ],
        title: [
          "1.75rem",
          {
            lineHeight: "2.25rem",
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
