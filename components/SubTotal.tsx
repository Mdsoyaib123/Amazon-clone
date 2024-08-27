
const SubTotal = ({length,left,totalPrice}:{length:number,left:boolean,totalPrice:number}) => {
  return (
    <div>
      <h1 className={`${left ? 'text-left text-lg ' : 'text-right text-lg'} py-3  `} >{`Subtotal (${length} items): `}<span className='font-bold' >{`$${totalPrice}`}</span> </h1>
      
    </div>
  )
}

export default SubTotal
