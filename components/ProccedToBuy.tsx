
import SubTotal from "./SubTotal"


const ProccedToBuy = ({length,totalPrice}:{length:number,totalPrice:number}) => {
  
  return (
    <div>
      <p className="text-sm">Your order is eligible for FREE Delivery .Choose FREE Delivery option at checkout</p>
      <SubTotal length={length} totalPrice={totalPrice} ></SubTotal> 
    </div>
  )
}

export default ProccedToBuy
