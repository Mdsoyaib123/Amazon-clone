import ShoppingCart from "./ShoppingCart"

const Cart = () => {
  return (
    <div className='flex pt-10'>
      <div className="w-[80%] mx-10 ">
      <ShoppingCart></ShoppingCart>
    </div>
    <div className='w-[15%]'>
      <h1>Payment section</h1>
    </div>
    </div>
    
  )
}

export default Cart
