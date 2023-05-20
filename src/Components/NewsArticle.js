import React from "react";
import { data } from "../data.js";
import {New } from './New.js'
const NewArticles = ({index}) => {
  const article = data.articles.new[parseInt(index)];
  return (
    <div className=" h-auto p-8 gap-8 grid grid-cols-2 lg:m-[12rem] text-very_dark_blue dark:text-off_white dark:bg-very_dark_blue">

      <h1 className="w-full text-2xl mt-4 md:text-6xl font-extrabold  col-span-2">
        {article.title}
      </h1>
      <div className="flex justify-center items-center  w-full col-span-2  ">
        <img
          src={article.image}
          alt="img"
          className=" aspect-square object-cover w-[70%]  "
        />
      </div>

      <div className="h-full col-span-2 lg:col-span-1 flex flex-col w-full gap-4 ">
        {article.content.map((i, key) => {
          return (
            <div key={0} className="flex flex-col gap-4 text-left text-very_dark_blue dark:text-off_white ">
              <h1 className="text-xl   font-bold md:text-4xl w-full text-left ">{i.heading}</h1>
              <p className="text-[16px] indent-5  w-full opacity-[0.8]">{i.paragraphs}</p>
            </div>
          );
        })}
      </div>

      <div
        className={`bg-very_dark_blue dark:bg-soft_red col-span-2 row-span-2 flex flex-col justify-start items-start md:order-2  gap-4 text-left px-4 text-off_white  `}
      >
        <h1 className="text-3xl text-soft_orange font-bold mt-4">New</h1>
        <New content={data.new} />
      </div>


    </div>
    
    

  );
};

export default NewArticles;
