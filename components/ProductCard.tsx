import Image from "next/image";
import Rating from "./shered/Rating";


const ProductCard = ({item}:{item:any})=>{
return (
    <div className="cursor-pointer  border border-gray-100 rounded-md">
        <div className="flex item-center  justify-center rounded-md bg-gray-100 h-[250px] ">
        <Image className='mix-blend-multiply p-8  ' src={item.image} width={200} height={200} alt={item.title}/>
        </div>
        <div className='p-2 pb-1'>
            
        <h1 className="font-bold ">{item.title}</h1> 
        <p className="">{`${item.description.substring(0,50)}....`}</p>
        <Rating ratings={item.rating}></Rating>
       <p className='font-bold text-2xl'>{`$${item.price}`}</p>
        </div>
    </div>
)
}
export default ProductCard;