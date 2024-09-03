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
        <div className="  grid grid-cols-4 justify-center items-center gap-3 px-4  relative -top-72">
          <div className='flex justify-center w-[300px] h-[400px] mx-auto border  px-20 py-24 bg-white'>
            <Image src={mensProduct[3]?.image} width={200 } height={200} quality={80}alt={'abc'}/>
          </div>
          <div className='flex justify-center  w-[300px] h-[400px] mx-auto border px-20 py-24 bg-white'>
          <Image src={womansProduct[4]?.image} width={200 } height={100} quality={80} alt={'abc'}/>
          </div>
          <div className='flex justify-center  w-[300px] h-[400px] mx-auto border px-20 py-24 bg-white'>
          <Image src={jewelry[1]?.image} width={200 }  height={200} quality={80} alt={'abc'}/>
          </div>
          <div className='flex justify-center w-[300px] h-[400px] mx-auto border px-20 py-24 bg-white'>
          <Image src={electronics[4]?.image} width={200 } height={200} quality={80} alt={'abc'}/>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default HomePage;
