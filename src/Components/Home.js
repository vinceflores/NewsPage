import React, { useEffect, useState } from "react";
import web3_desktop from "../images/image-web-3-desktop.jpg";
import web3_mobile from "../images/image-web-3-mobile.jpg";
import { data } from "../data.js";
import { New } from "./New";
import { Popular } from "./Popular";
import { Link } from "react-router-dom";
const Home = () => {
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

  return (
    <div
      className={`home pt-4 grid  md:grid-cols-3 md:grid-rows-3 gap-4 lg:gap-8 md:place-content-center md:scale-100 lg:scale-[90%] mx-3 md:mx-6`}
    >
      <img
        src={web3_desktop}
        alt="landscape"
        className={`hidden lg:flex  col-span-2 order-first`}
      />
      <div className="md:col-span-2 flex lg:hidden   order-first w-full h-full">
        <img src={web3_mobile} alt="portrait" className={``} />
      </div>

      <div className="grid md:col-span-2    place-content-start  lg:flex   lg:justify-start  lg:items-center md:order-3   gap-2   p-4 md:p-0 dark:md:px-2 dark:lg:px-0 text-left">
        <h1 className="text-4xl  dark:text-off_white md:text-5xl  font-extrabold min-w-[200px] md:w-[400px] lg:w-[350px]">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col    justify-center items-left  gap-4  px-0 text-left ">
          <p className="text-[15px]   md:text-[20px]  text-dark_grayish_blue dark:text-grayish_blue min-w-[200px] md:w-[444px]  ">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <Link to={`trending `}>
            <button className="h-[3rem]    w-[12rem] text-[15px] dark:hover:bg-soft_red hover:bg-very_dark_blue hover:scale-110 dark:shadow-off_white shadow-md bg-soft_red dark:bg-very_dark_blue text-off_white ">
              Read more
            </button>
          </Link>
        </div>
      </div>

      {/* New section */}
      <div
        className={`bg-very_dark_blue dark:bg-soft_red row-span-2 flex flex-col justify-start items-start md:order-2  gap-4 text-left px-4 text-off_white  `}
      >
        <h1 className="text-3xl text-soft_orange font-bold mt-4">New</h1>
        <New content={data.new} />
      </div>
      {/* Popular */}

      <Popular content={data.popular} />
    </div>
  );
};

export default Home;
