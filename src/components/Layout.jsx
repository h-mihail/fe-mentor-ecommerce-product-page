import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Cart } from "./Cart";
import { AvatarIcon } from "../icons/Avatar";
import { SideMenu } from "./SideMenu";
import { useScreenSize } from "../utils";
import { HeaderLink } from "./HeaderLink";
import sneakersLogo from "/src/assets/logo.svg";
import menuIcon from "/src/assets/icon-menu.svg";

export const Layout = () => {
  const { isMobile } = useScreenSize();

  return isMobile ? <LayoutMobile /> : <LayoutDesktop />;
};

export const LayoutMobile = () => {
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
          <Cart />
          <AvatarIcon />
        </div>
      </div>

      <SideMenu isOpen={isSideMenuOpen} onClose={toggleSideMenu} />

      <Outlet />
    </div>
  );
};

export const LayoutDesktop = () => {
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
          <Cart />
          <AvatarIcon />
        </div>
      </div>

      <hr />

      <div className="pt-24">
        <Outlet />
      </div>
    </div>
  );
};
