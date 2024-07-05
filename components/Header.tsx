import Image from "next/image";
import React from "react";
import amazonLogo from "../public/amazon-logo-2.webp";
import { PiShoppingCartSimpleThin } from "react-icons/pi";

const header = () => {
  return (
    <div className="bg-[#131921] text-white py-2">
      <div className="flex items-center">
        <div>
          <Image src={amazonLogo} width={150} height={150} alt="Logo" />
        </div>
        <div>
          <input type="text" placeholder="Search Amazon.in" />
        </div>
        <div className="flex items-center justify-around ">
          <div>
            <h1 className="text-xs">Hello,Sourav</h1>
            <h1 className="font-medium text-sm">Account and list</h1>
          </div>
          <div>
            <p className="text-xs">Returns</p>
            <h1 className="font-medium text-sm">& Order</h1>
          </div>
          <div className="">
            <p className="pl-4 ">0</p>

            <div className="flex">
              <div>
                <PiShoppingCartSimpleThin size={40}></PiShoppingCartSimpleThin>
              </div>
              <h1 className="mt-4">Cart</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
