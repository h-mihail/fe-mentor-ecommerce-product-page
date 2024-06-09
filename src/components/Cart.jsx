import { useState } from "react";

import { Badge } from "./Badge";
import { Button } from "./Button";
import { CartIcon } from "../icons/Cart";
import { toCurrency, useScreenSize, useClickOutside } from "../utils";
import sneakersThumbnail from "/src/assets/image-product-1-thumbnail.jpg";

const cartItems = [
  {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 125,
    quantity: 3,
    thumbnail: sneakersThumbnail,
  },
  {
    id: 2,
    name: "Spring Limited Edition Sneakers",
    price: 140,
    quantity: 3,
    thumbnail: sneakersThumbnail,
  },
];

export const Cart = () => {
  const [isCartSummaryOpen, setCartSummaryOpen] = useState(false);
  const { isMobile } = useScreenSize();
  const [innerRef] = useClickOutside({
    onClickOutside: () => setCartSummaryOpen(false),
  });

  const cartVisibilityClass = isCartSummaryOpen
    ? "visible opacity-100"
    : "invisible opacity-0";

  const handleClick = () => {
    setCartSummaryOpen(!isCartSummaryOpen);
  };

  return (
    <div ref={innerRef} className="z-10">
      <div className="relative w-5 h-5" onClick={handleClick}>
        <CartIcon className="absolute w-5 h-5 fill-darkGrayishBlue hover:fill-black" />
        <span className="absolute left-2 top-[-1.25rem]">
          <Badge>{cartItems.length}</Badge>
        </span>
      </div>

      {isMobile ? (
        <div
          className={`absolute left-0 right-0 mr-auto ml-auto w-fit top-[4.5rem] transition-opacity ${cartVisibilityClass}`}
        >
          <CartSummary />
        </div>
      ) : (
        <div
          className={`absolute right-16 w-[450px] transition-opacity ${cartVisibilityClass}`}
        >
          <CartSummary />
        </div>
      )}
    </div>
  );
};

const CartSummary = ({ items = cartItems }) => {
  const cartHasItems = !!items.length;

  return (
    <div className="border-1 m-2 rounded-xl shadow-2xl bg-white">
      <div className="text-black font-bold p-5">Cart</div>
      <hr />
      <div>
        <div className="flex flex-col gap-6 p-6">
          {cartHasItems ? (
            <>
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    thumbnail={item.thumbnail}
                  />
                ))}
              </div>
              <Button>Checkout</Button>
            </>
          ) : (
            <div className="text-center font-bold py-12">
              Your cart is empty.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ name, price, quantity, thumbnail }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <img className="rounded w-12 h-12" src={thumbnail} />
        <div className="flex flex-col">
          <div>{name}</div>
          <div className="flex gap-2">
            <span>
              {toCurrency(price)} x {quantity}
            </span>
            <span className="font-bold text-black">
              {toCurrency(price * quantity)}
            </span>
          </div>
        </div>
      </div>
      <a>
        <svg
          width="14"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-grayishBlue hover:fill-black"
        >
          <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" />
        </svg>
      </a>
    </div>
  );
};
