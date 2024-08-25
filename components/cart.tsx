import ShoppingCart from "./ShoppingCart"

const Cart = () => {
  return (
    <div className='flex gap-8 pt-10 mx-6'>
      <div className="w-[80%]  ">
      <ShoppingCart></ShoppingCart>
    </div>
    <div className='w-[20%] bg-white rounded-md text-center p-4 h-fit'>
      <h1>Payment section</h1>
    </div>
    </div>
    
  )
}

export default Cart
