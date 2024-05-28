import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "/tailwind.config.js";

export const toCurrency = (x) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(x);

export const useScreenSize = () => {
  const fullConfig = resolveConfig(tailwindConfig);
  const isMobile =
    window.innerWidth < fullConfig.theme.screens.md.replace("px", "");

  return {
    isMobile,
  };
};
