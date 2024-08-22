import React from "react";
import Image from "next/image";
import Rating from "./shered/Rating";
import AddToCardContainer from '@/components/AddToCardContainer';

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  console.log(singleProduct)
  return (
    <div className="mx-6 mt-10 flex gap-2">
      <div className=" flex  w-[80%]">
       
        {singleProduct.map((product: any) => {
          return (
            <div key={product.id} className="flex gap-4 justify-center">
              <div className="bg-gray-200 w-[50%]"><Image
                className='mix-blend-multiply p-4'
                src={product.image}
                height={300}
                width={300}
                alt={product.title}
              /></div>
              
              <div className="w-[80%]">
              <h1 className="font-bold text-lg">{product.title}</h1>
              <p>{product.description}</p>
              <Rating ratings={product.rating}></Rating>
              <p className='font-bold text-2xl'>{`$${product.price}`}</p>
              <div className="px-2">
                <h1 className="font-bold text-sm">About this item </h1>
                <ul className='list-disc ml-5'><li>Cell Service Booster: This phone booster antenna ensures fewer dropped calls, better voice quality, faster mobile internet, and improved streaming for a single mobile device in a cradle mount</li>
                <li>Portable Cell Signal Booster: This mobile cell phone booster supports the latest in 5G technology and has tool-free installation, guided by our app</li></ul>
              </div>
              </div>
             
            </div>
          );
        })}
        
      </div>
     
      <div className='w-[20%]'>
        {
          singleProduct.map((item:any)=><AddToCardContainer  key={item.id} item={item}></AddToCardContainer>)
        }
        </div>
      
    </div>
  );
};

export default SingleProduct;
