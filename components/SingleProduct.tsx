import React from "react";
import Image from "next/image";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80%] mx-auto mt-10 ">
      <div>
        {singleProduct.map((product: any) => {
          return (
            <div key={product.id}>
              <Image
                
                src={product.image}
                height={400}
                width={250}
                alt={product.title}
              />
              <h1>{product.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProduct;
