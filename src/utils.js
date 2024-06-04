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

import { useRef, useEffect } from "react";

export const useClickOutside = ({ onClickOutside, onClickInside }) => {
  const ref = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || !event.target) {
        return;
      }

      if (ref.current.contains(event.target)) {
        onClickInside?.(event);
      } else {
        onClickOutside?.(event);
      }
    };

    if (window.PointerEvent) {
      document.addEventListener("pointerdown", listener);
    } else {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }

    return () => {
      if (window.PointerEvent) {
        document.removeEventListener("pointerdown", listener);
      } else {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      }
    };
  }, [ref, onClickInside, onClickOutside]);

  return [ref];
};
