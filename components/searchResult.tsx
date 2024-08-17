import React from 'react'
import ProductCard from './ProductCard';


const SearchResult = ({filterData}:{filterData:any}) => {
  console.log(filterData)
  return (
    <div className='w-[90%] mx-auto'>
      <div className='mt-10 '>
        <div>
        <h1 className="font-bold text-xl">Results {filterData.length}</h1>
        <p>
         Price and other details may vary based on product size and color.</p>
        </div>
        <div className='grid grid-cols-4 gap-3'>
          {
            filterData.map((item:any)=><ProductCard key={item.id}item={item}></ProductCard>)
          }
        </div>
       
      </div>
    </div>
  )
}

export default SearchResult
