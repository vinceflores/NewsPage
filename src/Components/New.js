import React from "react";
import { Link } from "react-router-dom";

export const New = ({ content }) => {
  return (
    <div className="text-left w-full flex flex-col gap-4 py-2">
      {content
        .filter((i, j) => j !== content.length - 1)
        .map((i, key) => {
          return (
            <div className="flex flex-col w-full justify-between items-start my-2 gap-4">
              <h2 className="text-lg font-bold w-full  text-off_white">
                <Link to={`/new${i.id}`}>{i.title}</Link>
              </h2>
              <p className="text-15px">{i.description}</p>
              <button className="bg-soft_red dark:bg-very_dark_blue px-4 py-2 dark:shadow-off_white shadow-md">
                <Link to={`/new${i.id}`}>Read More</Link>
              </button>
              <div className="h-[1px] bg-grayish_blue w-full  " />
            </div>
          );
        })}
      <div className="flex flex-col w-full justify-between items-start my-2  gap-4">
        <h2 className="text-lg font-bold w-full  text-off_white">
          <Link to={`/new${content[content.length - 1].id}`}>{content[2].title}</Link>
        </h2>
        <p className="text-15px">{content[content.length - 1].description}</p>
        <button className="bg-soft_red dark:bg-very_dark_blue px-4 py-2 dark:shadow-off_white shadow-md">
          <Link to={`/new${content[content.length - 1].id}`}>Read More</Link>
        </button>
      </div>
    </div>
  );
};
