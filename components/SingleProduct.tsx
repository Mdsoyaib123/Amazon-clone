import React from "react";
import Image from "next/image";
import Rating from "./shered/Rating";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80%] mx-auto mt-10 ">
      <div>
        {singleProduct.map((product: any) => {
          return (
            <div key={product.id} className="flex gap-4 ">
              <div className="bg-gray-200"><Image
                className='mix-blend-multiply p-4'
                src={product.image}
                height={500}
                width={400}
                alt={product.title}
              /></div>
              
              <div>
              <h1 className="font-bold text-lg">{product.title}</h1>
              <p>{product.description}</p>
              <Rating ratings={product.rating}></Rating>
              <p className='font-bold text-2xl'>{`$${product.price}`}</p>
              <div>
                <h1 className="font-bold text-sm">About this item </h1>
                <ul className='list-disc ml-5'><li>Cell Service Booster: This phone booster antenna ensures fewer dropped calls, better voice quality, faster mobile internet, and improved streaming for a single mobile device in a cradle mount</li>
                <li>Portable Cell Signal Booster: This mobile cell phone booster supports the latest in 5G technology and has tool-free installation, guided by our app</li></ul>
              </div>
              </div>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProduct;
