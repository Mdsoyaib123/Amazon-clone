
const SubTotal = ({length,totalPrice}:{length:number,totalPrice:number}) => {
  return (
    <div>
      <h1 className='text-right py-3 text-lg ' >{`Subtotal (${length} items): `}<span className='font-bold' >{`$${totalPrice}`}</span> </h1>
    </div>
  )
}

export default SubTotal
