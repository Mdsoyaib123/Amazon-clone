import Image from "next/image";
import Rating from "./Rating";

const CategoryWiseProduct = ({product}:{product:any}) => {
  return (
    <div className="cursor-pointer  border border-gray-100 rounded-md mt-10">
      <div className="flex item-center  justify-center rounded-md bg-gray-100 h-[250px]">
        <Image className="mix-blend-multiply p-8 " src={product.image} width={200} height={200} alt={"abe"} />
      </div>
      <div className="p-2 pb-1">
        <h1>{product.title}</h1>
        <Rating ratings={product.rating}></Rating>
        {/* <p className=''>{`$${product.price}`}</p> */}
      </div>
    </div>
  );
};

export default CategoryWiseProduct;
