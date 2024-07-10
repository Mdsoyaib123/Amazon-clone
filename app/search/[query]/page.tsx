"use client"
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSupabase } from '../../../lib/supabase/hooks/useSupabase'

const Page = () => {
    const{query} = useParams()
    const {product,getDataFromSupabase} = useSupabase();

    useEffect(()=>{
        getDataFromSupabase();
    },[])
    console.log(product)
  return (
    <div>
     {
        product.map((item)=><h1 key={item.id}>{item.title}</h1>)
     }
    </div>
  )
}

export default Page;
