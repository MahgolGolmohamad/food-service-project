import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { IoMdInformationCircle } from "react-icons/io";
import { IoDiscOutline, IoInformation, IoSettings, IoWallet } from "react-icons/io5";
import { MdOutlineComment, MdOutlineFavorite } from "react-icons/md";
import { TbFavicon, TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
const [nav,setNav]=useState(false)
  return (
    <div className=" max-w-[1640] mx-auto flex justify-between items-center p-4">
      {/*left side */}
      <div className=" flex items-center">
        <div onClick={()=>{setNav(!nav)}} className=" cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl px-2">
          <span>تهران </span>
          <span className=" font-bold">فود </span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className=" bg-black text-white rounded-full p-2">ارسال با پیک</p>
          <p className="p-2">مراجعه حضوری</p>
        </div>
      </div>
      {/*search input */}
      <div className=" bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25}></AiOutlineSearch>
        <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder="جستجو در تهران فود" />
      </div>
      {/* cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className=" mr-2" />سبد خرید
      </button>

      {/*Side menu (mobile only) */}

      {/*overlay */}
      {nav?<div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>:""}
 

   
      {/*left drawer menu */}
      <div className={nav?" fixed top-0 left-0 w-[300px] bg-white h-screen z-10 duration-300":"fixed top-0 left-[-100%] w-[300px] bg-white h-screen z-10 duration-300" }>
        <AiOutlineClose onClick={()=>setNav(false)} size={25} className=" cursor-pointer absolute right-4 top-4" ></AiOutlineClose>
        <h2 className=" text-2xl p-4">
          Tehran <span className=" font-bold">Food</span>

        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="py-3 text-xl flex  justify-end items-center cursor-pointer"> سفارش های پیشین
            <TbTruckDelivery size={25} className=" ml-2 " ></TbTruckDelivery>
            </li>
            <li className="py-3 text-xl flex  justify-end items-center cursor-pointer"> کیف پول
            <IoWallet size={25} className=" ml-2 "></IoWallet>
            </li>
            <li className="py-3 text-xl flex  justify-end items-center cursor-pointer"> تنظیمات
            <IoSettings size={25} className=" ml-2 " ></IoSettings>
            </li>
            <li className="py-3 text-xl flex  justify-end items-center cursor-pointer"> رستوران های موردعلاقه
            <MdOutlineFavorite size={25} className=" ml-2 " ></MdOutlineFavorite>
            </li>
            <li className="py-3 text-xl flex  justify-end items-center cursor-pointer"> سفارش های پیشین
            <IoDiscOutline size={25} className=" ml-2 " ></IoDiscOutline>
            </li>
            <li className="py-3 text-xl flex  justify-end items-center cursor-pointer"> نظرات من
            <MdOutlineComment size={25} className=" ml-2 " ></MdOutlineComment>
            </li>
            <li className="py-3 text-xl flex  justify-end items-center cursor-pointer"> درباره تهران فود
            <IoMdInformationCircle size={25} className=" ml-2 " ></IoMdInformationCircle>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
