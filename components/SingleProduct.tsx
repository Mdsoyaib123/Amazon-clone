import React from "react";
import Image from "next/image";
import Rating from "./shered/Rating";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80%] mx-auto mt-10 ">
      <div>
        {singleProduct.map((product: any) => {
          return (
            <div key={product.id} className="flex ">
              <div className="bg-gray-100"><Image
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
              </div>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProduct;
