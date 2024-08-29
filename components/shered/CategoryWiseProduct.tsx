import Image from "next/image";
const CategoryWiseProduct = ({product}:{product:any}) => {
  return (
    <div>
      <div>
        <Image src={product.image} width={200} height={200} alt={"abe"} />
      </div>
    </div>
  );
};

export default CategoryWiseProduct;
