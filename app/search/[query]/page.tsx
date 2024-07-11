"use client"
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSupabase } from '../../../lib/supabase/hooks/useSupabase'

const Page = () => {
    const{query} = useParams()
    const {filterData,getFilterData} = useSupabase();
    
    useEffect(()=>{
       
        getFilterData(query.toString())
    },[])
  console.log(filterData)
  return (
    <div>
      {/* {
        filterData.map(item=><h1 key={item.id}>{item.title}</h1>)
      } */}
    </div>
  )
}

export default Page;
