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

  
  return (
    <div>
      <Image
        src={"https://i.postimg.cc/wBFqvrjh/71ve0p-Yz7u-L-SX3000.jpg"}
        width={1500}
        height={1000}
        quality={90}
        alt={"abc"}
      />
      <div className="w-[80%] mx-auto grid grid-cols-4 gap-4">
        {/* {mensProduct.map((product: any) => {
          return (
            <Link href={`./product/${product.id}`} key={product.id}>
             
              <CategoryWiseProduct product={product}></CategoryWiseProduct>
            </Link>
          );
        })} */}
        <div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
