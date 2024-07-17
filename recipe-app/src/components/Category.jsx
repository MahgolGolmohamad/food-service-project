import React from "react";
import { categories } from "../data/data (1)";

export const Category = () => {
  return (
    <div className=" max-w-[1640px] px-4 py-12">
      {/**categories */}
      <div className="grid grid-cols-2  m-auto md:grid-cols-4 gap-4">
        {categories.map((item,index) => (
          <div className=" bg-gray-100 rounded-xl flex justify-center items-center p-4" key={index}> 
          <h2 className=" font-bold">{item.name}</h2>
          <img className="w-20" src={item.image} alt="" /></div>
        ))}
      </div>
    </div>
  );
};
