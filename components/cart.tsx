import ProccedToBuy from "./ProccedToBuy"
import ShoppingCart from "./ShoppingCart"

const Cart = () => {
  return (
    <div className='flex gap-6 pt-10 mx-8'>
      <div className="w-[75%]  ">
      <ShoppingCart></ShoppingCart>
    </div>
    <div className='w-[25%] bg-white rounded-md text-center p-4 h-fit'>
     <ProccedToBuy></ProccedToBuy>
    </div>
    </div>
    
  )
}

export default Cart
