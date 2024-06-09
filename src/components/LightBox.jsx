import { useState } from "react";
import { createPortal } from "react-dom";

import { NextIcon } from "/src/icons/Next";
import { useClickOutside } from "/src/utils.js";
import { PreviousIcon } from "/src/icons/Previous";
import { Backdrop } from "/src/components/Backdrop";
import { CloseIcon } from "/src/icons/Close";

export const LightBox = ({ items, selectedItemIndex, setIsLightboxOpen }) => {
  const [internalSelectedItemIndex, setInternalSelectedItemIndex] =
    useState(selectedItemIndex);
  const [innerRef] = useClickOutside({
    onClickOutside: () => setIsLightboxOpen(false),
  });

  const prevItem = () => {
    if (internalSelectedItemIndex - 1 < 0) {
      setInternalSelectedItemIndex(items.length - 1);
    } else {
      setInternalSelectedItemIndex(internalSelectedItemIndex - 1);
    }
  };

  const nextItem = () => {
    if (internalSelectedItemIndex + 1 >= items.length) {
      setInternalSelectedItemIndex(0);
    } else {
      setInternalSelectedItemIndex(internalSelectedItemIndex + 1);
    }
  };

  return (
    <>
      <Backdrop />
      {createPortal(
        <div
          ref={innerRef}
          className="absolute rounded-2xl min-w-[400px] max-w-[30vw] h-fit z-20 top-0 bottom-0 left-0 right-0 m-auto"
        >
          <div
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-[-3rem] right-0 cursor-pointer fill-white w-6 h-6"
          >
            <CloseIcon />
          </div>
          <div
            onClick={prevItem}
            className="absolute top-0 bottom-0 my-auto left-[-1.5rem] flex items-center justify-center cursor-pointer rounded-full bg-white w-12 h-12"
          >
            <PreviousIcon />
          </div>
          <img
            className="rounded-2xl"
            src={items[internalSelectedItemIndex].src}
          />
          <div
            onClick={nextItem}
            className="absolute top-0 bottom-0 my-auto right-[-1.5rem] flex items-center justify-center cursor-pointer rounded-full bg-white w-12 h-12"
          >
            <NextIcon />
          </div>
          <div className="flex gap-8 mt-8">
            {items.map((item, i) => (
              <div className="bg-white rounded-xl" key={i}>
                <img
                  className={`rounded-xl cursor-pointer border-2 border-transparent hover:border-orange ${
                    internalSelectedItemIndex === i
                      ? "opacity-50"
                      : "hover:opacity-85"
                  }`}
                  src={item.src}
                  onClick={() => setInternalSelectedItemIndex(i)}
                />
              </div>
            ))}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
