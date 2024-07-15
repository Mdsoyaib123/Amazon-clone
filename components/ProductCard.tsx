import Image from "next/Image";
const ProductCard = ({item}:{item:any})=>{

return (
    <div className="">
        <Image src={item.image} width={250} height={400} alt={item.title}/>
        <h1>{item.title}</h1> 
        <p>{item.description}</p>
       
    </div>
)
}
export default ProductCard;