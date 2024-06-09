import { useState } from "react";

import { CartIcon } from "/src/icons/Cart";
import { PlusIcon } from "/src/icons/Plus";
import { MinusIcon } from "/src/icons/Minus";
import { toCurrency, useScreenSize } from "/src/utils.js";
import { MobileCarousel } from "/src/components/MobileCarousel";
import { DesktopCarousel } from "/src/components/DesktopCarousel";

const App = () => {
  const [counter, setCounter] = useState(0);
  const { isMobile } = useScreenSize();

  return (
    <div className="md:flex md:gap-24">
      {isMobile && <MobileCarousel />}
      {!isMobile && <DesktopCarousel />}
      <div className="p-4 flex flex-col gap-4 flex-1 md:gap-8">
        <div className="text-orange text-xs font-bold tracking-widest">
          SNEAKER COMPANY
        </div>
        <div className="text-black text-title md:text-5xl font-bold">
          Fall Limited Edition Sneakers
        </div>
        <div>
          {`These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand
          everything the weather has to offer.`}
        </div>

        <div className="flex justify-between items-center md:flex-col md:items-start md:gap-4">
          <div className="flex gap-4 items-center justify-center">
            <div className="text-black text-3xl font-bold">
              {toCurrency(125)}
            </div>
            <div className="h-fit text-lg text-orange bg-paleOrange font-bold px-2 text-center rounded-md">
              50%
            </div>
          </div>
          <div className="text-grayishBlue font-bold line-through">
            {toCurrency(250)}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex justify-between items-center bg-lightGrayishBlue p-4 text-black font-bold rounded-lg md:flex-[3]">
            <MinusIcon
              className="cursor-pointer"
              onClick={() =>
                counter - 1 >= 0 ? setCounter(counter - 1) : null
              }
            />
            <div>{counter}</div>
            <PlusIcon
              className="cursor-pointer"
              onClick={() => setCounter(counter + 1)}
            />
          </div>

          <div className="flex items-center justify-center gap-4 bg-orange text-white p-4 rounded-lg cursor-pointer md:flex-[5]">
            <CartIcon className="w-4 h-4 fill-white" />
            <div className="font-bold">Add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
