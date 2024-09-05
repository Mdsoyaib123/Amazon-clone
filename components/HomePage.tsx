"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import CategoryWiseProduct from "./shered/CategoryWiseProduct";
import Link from "next/link";

const HomePage = () => {
  const { mensProduct, getMensClothing, womansProduct, getWomansClothing ,jewelry,
    getJewelryProduct,
    electronics,
    getElectronicsProduct,} =
    useSupabase();


  useEffect(() => {
    getMensClothing();
    getWomansClothing();
    getJewelryProduct();
    getElectronicsProduct()
  }, []);
  console.log()
  
  return (
    <div className='bg-gray-100'>
      <Image
        src={"https://i.postimg.cc/wBFqvrjh/71ve0p-Yz7u-L-SX3000.jpg"}
        width={1500}
        height={2000}
        quality={90}
        alt={"abc"}
      />
      {/* <div className="w-[80%] mx-auto grid grid-cols-4 gap-4"> */}
        {/* {mensProduct.map((product: any) => {
          return (
            <Link href={`./product/${product.id}`} key={product.id}>
             
              <CategoryWiseProduct product={product}></CategoryWiseProduct>
            </Link>
          );
        })} */}
        <div className="  grid grid-cols-4  justify-center items-center gap-4 px-4  relative -top-72">
          <div className='flex justify-center  h-[400px] w-full mx-auto border   bg-white'>
            <div className='flex items-center justify-center'>
            <Image src={mensProduct[3]?.image} width={200 } height={200} quality={80}alt={'abc'}/>
            </div>
          </div>
          <div className='flex justify-center  h-[400px] w-full mx-auto border   bg-white'>
            <div className='flex items-center justify-center'>
            <Image src={womansProduct[4]?.image} width={200 } height={200} quality={80}alt={'abc'}/>
            </div>
          </div>
          <div className='flex justify-center  h-[400px] w-full mx-auto border   bg-white'>
            <div className='flex items-center justify-center'>
            <Image src={jewelry[2]?.image} width={200 } height={200} quality={80}alt={'abc'}/>
            </div>
          </div>
          <div className='flex justify-center  h-[400px] w-full mx-auto border   bg-white'>
            <div className='flex items-center justify-center'>
            <Image src={electronics[5]?.image} width={200 } height={200} quality={80}alt={'abc'}/>
            </div>
          </div>
          
        </div>
      {/* </div> */}
    </div>
  );
};

export default HomePage;
