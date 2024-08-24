'use client'
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import Image from "next/image";

const ShoppingCart = () => {
  const cart = useAppSelector(getCart);
  return (
    <div>
      <h1 className="font-bold text-2xl">ShoppingCart</h1>
      {cart.map((product:any) => {
        return (
          <>
            <div>
              <div>
                <Image src={product.image} width={100} height={100} alt={product.title}/>
              </div>
              <div>
                
              </div>
            </div>
            <div>
              <h1>Price</h1>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ShoppingCart;
