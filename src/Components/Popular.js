import React from "react";
import {Link} from 'react-router-dom'
export const Popular = ({ content }) => {
  return (
    <div
      className={`popular w-full grid md:grid-cols-4 lg:grid-cols-3 py-4 md:col-span-3  gap-4 order-last justify-center items-center    lg:items-start  `}
    >
      {content.map((i, key) => {
        return (
          <Link
            to={`/popular_${i.id}`}
            key={key}
            className={`flex   hover:bg-soft_red md:col-span-2 lg:col-span-1 lg:hover:-translate-y-3 shadow-lg dark:shadow-off_white  md:justify-between h-[15rem] md:h-[14rem] col-span-1 w-auto items-center gap-2 md:gap-4  `}
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
                {`0${parseInt(i.id) + 1}`}
              </h1>
              <h2 className="w-full text-lg font-bold text-very_dark_blue dark:text-off_white  ">
                {i.title}
              </h2>
              <p className="text-[15px] text-dark_grayish_blue dark:text-grayish_blue w-full  ">
                {i.description}
              </p>
            </div>

          </Link>
        );
      })}

    </div>
  );
};

// TODO add a selected state that allows the selected cards to be highlighted