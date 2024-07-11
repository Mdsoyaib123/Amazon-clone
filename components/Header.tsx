"use client"
import Image from "next/image";
import React, { useState } from "react";
import amazonLogo from "../public/amazon-logo-2.webp";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  
  const itemlist = [
    "All",
    "Today's Deals",
    "Customer Service",
    "Registry",
    "Gift Cards",
    "Sell",
  ];
  const [query,setQuery] = useState<string>('');
const router = useRouter();
  const searchHandler=()=>{
    router.push(`/search/${query}`)
    setQuery('')
  }
  return (
    <>
      <div className="bg-[#131921] text-white py-2 ">
        <div className="flex items-center justify-between w-[98%] mx-auto">
          <div  className="w-[10%] cur">
           <Link href={'/'}> <Image src={amazonLogo} width={150} height={150} alt="Logo" /></Link>
          </div>
          <div className="flex items-center  w-[50%]   ">
            <input
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            id="input"
              className="w-full rounded-l-md px-2 py-2 outline-none text-black"
              type="text"
              placeholder="Search Amazon.in"
            />
            <div onClick={searchHandler} className=" px-2 cursor-pointer text-black outline-4 bg-[#febd69] py-[5px] rounded-r-md">
              <IoSearchOutline size={30}></IoSearchOutline>
            </div>
          </div>
          <div className="flex items-center  justify-around w-[25%] ">
            <div className="cursor-pointer">
              <h1 className="text-xs">Hello,Sourav</h1>
              <h1 className="font-medium text-sm">Account and list</h1>
            </div>
            <div className="cursor-pointer">
              <p className="text-xs">Returns</p>
              <h1 className="font-medium text-sm">& Order</h1>
            </div>
            <div className="">
              <p className="relative top-3 left-4">0</p>

              <div className="flex cursor-pointer">
                <div >
                  <PiShoppingCartSimpleThin
                    size={40}
                  ></PiShoppingCartSimpleThin>
                </div>
                <h1 className="mt-4">Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#232f3e] w-full  text-white p-2">
        <div className="w-[98%] mx-auto flex justify-between">
        <div className="w]">
          {
            itemlist.map((item,index)=><Link href={`/${item}`} key={index} className=" border border-transparent hover:border hover:border-white p-2 ">{item}</Link>)
          }
        </div>
        <div>
          <h1 className="text-[#febd69] hover:underline cursor-pointer font-bold">Sign Out</h1>
        </div>
        </div>
      </div>
    </>
  );
};

export default Header;
