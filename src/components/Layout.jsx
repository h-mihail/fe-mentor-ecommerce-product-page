import { Outlet } from "react-router-dom";

import { HeaderLink } from "./HeaderLink";
import sneakersLogo from "/src/assets/logo.svg";
import menuIcon from "/src/assets/icon-menu.svg";
import { Avatar } from "./Avatar";
import { Cart } from "./Cart";
import { AbsoluteCartSummaryWrapper } from "./CartSummary";
import { useState } from "react";
import { useScreenSize } from "../utils";
import { SideMenu } from "./SideMenu";

export const Layout = () => {
  const [isCartSummaryOpen, setCartSummaryOpen] = useState(false);
  const { isMobile } = useScreenSize();

  const toggleCartSummary = () => {
    setCartSummaryOpen(!isCartSummaryOpen);
  };

  return isMobile ? (
    <LayoutMobile
      isCartSummaryOpen={isCartSummaryOpen}
      toggleCartSummary={toggleCartSummary}
    />
  ) : (
    <LayoutDesktop
      isCartSummaryOpen={isCartSummaryOpen}
      toggleCartSummary={toggleCartSummary}
    />
  );
};

export const LayoutMobile = ({ isCartSummaryOpen, toggleCartSummary }) => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div>
      <div className="flex justify-between p-5">
        <div className="flex flex-row gap-5 items-center">
          <a onClick={toggleSideMenu}>
            <img src={menuIcon} />
          </a>
          <a>
            <img src={sneakersLogo} />
          </a>
        </div>
        <div className="flex items-center flex-row gap-5">
          <Cart items={1} onClick={toggleCartSummary} />
          <Avatar />
        </div>
      </div>

      {isCartSummaryOpen && <AbsoluteCartSummaryWrapper />}

      <SideMenu open={isSideMenuOpen} onClose={toggleSideMenu} />

      <Outlet />
    </div>
  );
};

export const LayoutDesktop = ({ isCartSummaryOpen, toggleCartSummary }) => {
  return (
    <div className="py-10 px-40">
      <div className="flex justify-between">
        <div className="flex items-center gap-16">
          <a>
            <img src={sneakersLogo} />
          </a>
          <div className="flex gap-8">
            <HeaderLink>Collections</HeaderLink>
            <HeaderLink>Men</HeaderLink>
            <HeaderLink>Women</HeaderLink>
            <HeaderLink>About</HeaderLink>
            <HeaderLink>Contact</HeaderLink>
          </div>
        </div>
        <div className="flex flex-row gap-10 items-center">
          <Cart items={3} onClick={toggleCartSummary} />
          <Avatar />
        </div>
      </div>

      <hr />

      {isCartSummaryOpen && <AbsoluteCartSummaryWrapper />}

      <div className="pt-24">
        <Outlet />
      </div>
    </div>
  );
};
