import React, { useEffect, useState } from "react";
import web3_desktop from "../images/image-web-3-desktop.jpg";
import web3_mobile from "../images/image-web-3-mobile.jpg";
import { data } from "../data.js";
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
      className={`grid  md:grid-cols-3 md:grid-rows-3 gap-4 lg:gap-8 place-content-center md:scale-100 lg:scale-[90%] mx-3 md:mx-6`}
    >
      <img
        src={web3_desktop}
        alt="landscape"
        className={`hidden lg:flex  col-span-2 order-first`}
      />
      <div className="md:col-span-2  lg:hidden   order-first w-full h-full">
        <img
          src={web3_mobile}
          alt="portrait"
          className={``}
        />
      </div>

      <div className="grid md:col-span-2  place-content-start  lg:flex  lg:justify-center  lg:items-center md:order-3 bg-off_white  gap-2  p-4 md:p-0 text-left">
        <h1 className="text-4xl  lg:text-6xl md:text-5xl  font-extrabold min-w-[200px] md:w-[400px] lg:w-[350px]">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col  justify-center items-left  gap-4  px-0 text-left ">
          <p className="ttext-[15px] md:text-[28px] lg:text-[30px] text-dark_grayish_blue min-w-[200px] md:w-[444px] lg:w-[688px] ">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="h-[2rem] w-[8rem] outline bg-soft_red text-off_white ">
            Read more
          </button>
        </div>
      </div>

      {/* New section */}
      <div
        className={`bg-very_dark_blue row-span-2 flex flex-col justify-start items-start md:order-2  gap-4 text-left px-4 text-off_white  `}
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

const New = ({ content }) => {
  return (
    <div className="text-left w-full flex flex-col gap-4 py-2">
      {content
        .filter((i, j) => j !== content.length - 1)
        .map((i, key) => {
          return (
            <div className="flex flex-col w-full justify-between items-start my-2 gap-4">
              <h2 className="text-lg font-bold w-full  text-off_white">
                <Link to={i.id}>
                {i.title}
                </Link>
              </h2>
              <p className="text-15px">{i.description}</p>
              <div className="h-[1px] bg-grayish_blue w-full " />
            </div>
          );
        })}
      <div className="flex flex-col w-full justify-between items-start my-2  gap-4">
        <h2 className="text-lg font-bold w-full  text-off_white">
          <Link to={content[content.length-1]}>
          {content[2].title}
          </Link>
        </h2>
        <p className="text-15px">{content[2].description}</p>
      </div>
    </div>
  );
};

const Popular = ({ content }) => {
  return (
    <div
      className={` w-full grid md:grid-cols-4 lg:grid-cols-3 py-4 md:col-span-3  gap-4 order-last justify-center items-center    lg:items-start  `}
    >
      {content.map((i, key) => {
        return (
          <div
            key={key}
            className={`flex md:col-span-2 lg:col-span-1  md:justify-between md:h-[14rem] col-span-1 w-auto items-center gap-2 md:gap-4  `}
          >
            <div className="">
              <img
                src={i.image}
                alt="key"
                className=" aspect-square object-contain "
              />
            </div>
            {/* details */}

            <div
              className={`flex flex-col justify-center items-center text-left  w-full `}
            >
              <h1 className="text-2xl text-grayish_blue font-bold w-full">
                {i.id}
              </h1>
              <h2 className="w-full text-lg font-bold text-very_dark_blue  ">
                {i.title}
              </h2>
              <p className="text-[15px] text-dark_grayish_blue  w-full  ">
                {i.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
