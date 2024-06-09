import { useState } from "react";
import imageProduct1 from "/src/assets/image-product-1.jpg";
import imageProduct2 from "/src/assets/image-product-2.jpg";
import imageProduct3 from "/src/assets/image-product-3.jpg";
import imageProduct4 from "/src/assets/image-product-4.jpg";
import { PreviousIcon } from "../icons/Previous";
import { NextIcon } from "../icons/Next";

const defaultItems = [
  { src: imageProduct1 },
  { src: imageProduct2 },
  { src: imageProduct3 },
  { src: imageProduct4 },
];

export const MobileCarousel = ({ items = defaultItems }) => {
  const [activeItem, setActiveItem] = useState(0);

  const prevItem = () => {
    if (activeItem - 1 < 0) {
      setActiveItem(items.length - 1);
    } else {
      setActiveItem(activeItem - 1);
    }
  };

  const nextItem = () => {
    if (activeItem + 1 >= items.length) {
      setActiveItem(0);
    } else {
      setActiveItem(activeItem + 1);
    }
  };

  const carouselTransformX = `${activeItem * 100}vw`;
  const carouselWidth = `${items.length * 100}vw`;

  return (
    <div className="relative h-[100vw] overflow-hidden">
      <div
        className={`absolute left-0 top-0 flex flex-row w-[${carouselWidth}] transition-transform duration-300`}
        style={{ transform: `translateX(-${carouselTransformX})` }}
      >
        {items.map((item, i) => (
          <img key={i} src={item.src} />
        ))}
      </div>
      <div
        className="absolute flex justify-center items-center left-4 top-[150px] bg-white rounded-full w-10 h-10 p-1"
        onClick={prevItem}
      >
        <PreviousIcon />
      </div>
      <div
        className="absolute flex justify-center items-center right-4 top-[150px] bg-white rounded-full w-10 h-10 p-1"
        onClick={nextItem}
      >
        <NextIcon />
      </div>
    </div>
  );
};
