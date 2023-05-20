import React from "react";
import {bright} from '../Data/the-brightside-web3'

 const Trending = ({index}) => {
  const article = bright;
  return (
    <div className=" h-auto p-8 gap-8 grid grid-cols-2 lg:m-[12rem] text-very_dark_blue dark:text-off_white dark:bg-very_dark_blue">

      <h1 className="w-full text-2xl mt-4 md:text-6xl font-extrabold  col-span-2">
        {article.title}
      </h1>
      <div className="flex justify-center items-center  w-full col-span-2  ">
        <img
          src={article.image}
          alt="img"
          className=" aspect-square object-contain p-8  w-[50%] "
        />
      </div>

      <div className="h-full col-span-2 lg:col-span-1 flex flex-col w-full gap-4 ">
        {article.sections.map((i, key) => {
          return (
            <div key={0} className="flex flex-col gap-4 text-left text-very_dark_blue dark:text-off_white ">
              <h1 className="text-xl   font-bold md:text-4xl w-full text-left ">{i.heading}</h1>
              <p className="text-[16px] indent-5  w-full opacity-[0.8]">{i.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
