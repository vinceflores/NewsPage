import React from "react";
import { data } from "../data.js";

const article = data.articles.new[0];
const Article = () => {
  return (
    <div className=" h-auto px-8 gap-8 grid grid-cols-2 lg:m-[12rem] text-very_dark_blue">

      <h1 className="w-full text-2xl  md:text-6xl font-extrabold  col-span-2">
        {article.title}
      </h1>
      <div className="flex justify-center items-center  w-full col-span-2  ">
        <img
          src={article.image}
          alt="img"
          className=" aspect-square object-cover   "
        />
      </div>

      <div className="h-full col-span-2 lg:col-span-1 flex flex-col w-full gap-4 ">
        {article.content.map((i, key) => {
          return (
            <div key={0} className="flex flex-col gap-4 text-center lg:text-left ">
              <h1 className="text-xl  text-very_dark_blue font-bold md:text-4xl w-full text-left ">{i.heading}</h1>
              <p className="text-[16px] w-full opacity-[0.8]">{i.paragraphs}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article;
