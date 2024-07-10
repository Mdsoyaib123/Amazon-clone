import Image from "next/image";
import React from "react";
import amazonLogo from "../public/amazon-logo-2.webp";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";

const header = () => {
  const itemlist = [
    "All",
    "Today's Deals",
    "Customer Service",
    "Registry",
    "Gift Cards",
    "Sell",
  ];
  return (
    <>
      <div className="bg-[#131921] text-white py-2 ">
        <div className="flex items-center justify-between w-[98%] mx-auto">
          <div className="w-[10%]">
            <Image src={amazonLogo} width={150} height={150} alt="Logo" />
          </div>
          <div className="flex items-center  w-[60%] bg-[#febd69] ">
            <input
              className="w-full px-2 py-[6px] outline-none text-black"
              type="text"
              placeholder="Search Amazon.in"
            />
            <div className=" px-2 cursor-pointer text-black outline-4">
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
                <div>
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
      <div className="bg-[#232f3e] w-full text-white">dsfsdf</div>
    </>
  );
};

export default header;
