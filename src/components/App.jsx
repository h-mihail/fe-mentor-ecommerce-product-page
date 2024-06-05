import { useState } from "react";

import { Carousel } from "./Carousel";
import { toCurrency } from "/src/utils.js";
import { MinusIcon } from "/src/icons/Minus";
import { PlusIcon } from "/src/icons/Plus";
import { CartIcon } from "/src/icons/Cart";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Carousel />
      <div className="p-4 flex flex-col gap-4">
        <div className="text-orange text-xs font-bold tracking-widest">
          SNEAKER COMPANY
        </div>
        <div className="text-black text-title font-bold">
          Fall Limited Edition Sneakers
        </div>
        <div>
          {`These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand
          everything the weather has to offer.`}
        </div>

        <div className="flex justify-between items-center">
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

        <div className="flex justify-between items-center bg-lightGrayishBlue p-4 text-black font-bold rounded-lg">
          <MinusIcon
            onClick={() => (counter - 1 >= 0 ? setCounter(counter - 1) : null)}
          />
          <div>{counter}</div>
          <PlusIcon onClick={() => setCounter(counter + 1)} />
        </div>

        <div className="flex items-center justify-center gap-4 bg-orange text-white p-4 rounded-lg">
          <CartIcon className="w-4 h-4 fill-white" />
          <div className="font-bold">Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default App;
