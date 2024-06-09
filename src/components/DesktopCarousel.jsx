import { useState } from "react";
import imageProduct1 from "/src/assets/image-product-1.jpg";
import imageProduct2 from "/src/assets/image-product-2.jpg";
import imageProduct3 from "/src/assets/image-product-3.jpg";
import imageProduct4 from "/src/assets/image-product-4.jpg";
import { LightBox } from "/src/components/LightBox";

const defaultItems = [
  { src: imageProduct1 },
  { src: imageProduct2 },
  { src: imageProduct3 },
  { src: imageProduct4 },
];

export const DesktopCarousel = ({ items = defaultItems }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <>
      <div className="flex flex-col flex-1">
        <div>
          <img
            className="rounded-2xl cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
            src={items[selectedItemIndex].src}
          />
        </div>
        <div className="flex gap-8 mt-8">
          {items.map((item, i) => (
            <div key={i}>
              <img
                className={`rounded-xl cursor-pointer border-2 border-transparent hover:border-orange ${
                  selectedItemIndex === i ? "opacity-50" : "hover:opacity-85"
                }`}
                src={item.src}
                onClick={() => setSelectedItemIndex(i)}
              />
            </div>
          ))}
        </div>
      </div>
      {isLightboxOpen && (
        <LightBox
          items={items}
          setIsLightboxOpen={setIsLightboxOpen}
          selectedItemIndex={selectedItemIndex}
          setSelectedItemIndex={setSelectedItemIndex}
        />
      )}
    </>
  );
};
