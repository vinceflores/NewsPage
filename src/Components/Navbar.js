import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import open from "../images/icon-menu.svg";
import close from "../images/icon-menu-close.svg";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const n = ["Home", "New", "Popular", "Trending", "Categories"];
const nav_links = [
  {
    title: "Home",
    c: "home",
    path: "/",
  },
  {
    title: "New",
    c: "new",
    path: "/",
  },
  {
    title: "Popular",
    c: "popular",
    path: "/",
  },
  {
    title: "Trending",
    c: "trending",
    path: "/",
  },
  {
    title: "Categories",
    c: "",
    path: "/",
  },
];
const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const handleclick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  return (
    <>
      <div className="flex  md:gap-[16rem] justify-between z-[1] w-screen sticky top-0 items-center dark:bg-dark_grayish_blue bg-white px-4 ">
       <Link to={`/`} className="aspect-square  object-contain grid place-content-center">
        <img src={logo} alt="logo" className="aspect-square  object-contain" />
       </Link>
        <ul className="hidden md:flex gap-4  ">
          <li className="cursor-pointer hover:text-soft_red ">
            <Link to={nav_links[0].path}>{nav_links[0].title}</Link>
          </li>
          {nav_links
            .filter((i, index) => index > 0)
            .map((i, index) => {
              return (
                <li key={index} className="cursor-pointer hover:text-soft_red ">
                  <Scroll
                    to={i.c}
                    smooth={true}
                    spy={true}
                    offset={-200}
                    duration={800}
                  >
                    {i.title}
                  </Scroll>
                </li>
              );
            })}
        </ul>

        <img
          onClick={handleclick}
          src={!clicked ? open : close}
          alt="ham"
          className="aspect-square  object-contain md:hidden"
        />
      </div>
      {/* side navbar */}
      <div
        className={`${
          clicked ? "flex right-0" : "hidden right-[-24rem] "
        } z-[4] flex-col justify-start items-start  gap-8 fixed top-0 py-4  bg-off_white dark:bg-dark_grayish_blue h-[100vh] w-[55%]`}
      >
        <div className="w-full flex justify-end items-center">
          <img src={close} alt="close" onClick={handleclick} className="mx-4" />
        </div>
        <ul className={`   flex-col flex  gap-8   w-full `}>
          {nav_links.map((i, index) => {
            return (
              <li
                key={index}
                onClick={handleclick}
                className=" text-[16px] cursor-pointer hover:text-soft_red text-left  px-4 "
              >
                <Link to={i.path}>{i.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

// TODO implement Link and Scroll for mobile nav / side nav
