'use client'
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import Image from "next/image";

const ShoppingCart = () => {
  const cart = useAppSelector(getCart);
  return (
    <div className='bg-white rounded-md px-6'>
      <div className='border-b-2 border-gray-200 flex justify-between items-end'>
        <h1 className="font-bold text-2xl  py-5">ShoppingCart</h1>
        <p className=''>Price</p>
        </div>
      {cart.map((product:any) => {
        return (
          <div key={product.id} className='flex justify-between  mt-4'>
            <div className='flex gap-4'>
              <div>
                <Image src={product.image} width={100} height={100} alt={product.title}/>
              </div>
              <div >
                <h1 className='font-medium '>{product.title}</h1>
                <p className='text-[#007600] my-1 text-xs font-bold'>In Stock</p>
                <h1 className='font-bold  text-red-600 cursor-pointer'>REMOVE</h1>
              </div>
            </div>
            <div>
              <h1>{product.price}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCart;
