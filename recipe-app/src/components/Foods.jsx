import React, { useState } from "react";
import { data } from "../data/data (1).js";

const Foods = () => {

  const [foods, setFoods] = useState(data)
  ///filter based on types
  const filterType = (category) => {
    setFoods(
      data.filter((item) => { return item.category === category })
    )
  }

  /// filter based on price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => { return item.price === price }))
  }
  return (
    <div className=" max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className=" text-orange-600 font-bold text-4xl text-center">
        آیتم های پرطرفدار
      </h1>
      {/*filter row */}
      <div className=" flex flex-col lg:flex-row justify-between ">
        {/*filter type*/}
        <div >
          <p className=" font-bold text-gray-700 m-2">فیلتر نوغ غذا</p>
          <div className=" flex justify-between flex-wrap max-w-[500px]">
            <button onClick={() => { setFoods(data) }} className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">همه</button>
            <button onClick={() => filterType("burger")} className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">برگر</button>
            <button onClick={() => filterType("pizza")} className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">پیتزا</button>
            <button onClick={() => filterType("salad")} className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">سالاد</button>
            <button onClick={() => filterType("chicken")} className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">مرغ</button>
          </div>
        </div>

        {/*filter price */}
        <div>
          <p className=" font-bold text-gray-700 m-2">فیلتر قیمت</p>
          <div className=" flex justify-between max-w-[390px] w-full">
            <button onClick={()=>{filterPrice('$')}} className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white " >$</button>
            <button onClick={()=>{filterPrice('$$')}} className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white " >$$</button>
            <button onClick={()=>{filterPrice('$$$')}}  className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white " >$$$</button>
            <button onClick={()=>{filterPrice('$$$$')}} className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white " >$$$$</button>
          </div>
        </div>
      </div>
      {/*Display the foods */}
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div key={index} className=" border shadow-2xl hover:scale-105 duration-200 rounded-lg">
            <img className=" w-full h-[200px] object-cover rounded-t-lg" src={item.image} alt={item.name} />
            <div className="flex justify-between p-4">
              <p className=" font-bold">{item.name}</p>
              <p> <span className=" bg-orange-500 text-white p-1 rounded-full">{item.price}</span></p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Foods;
