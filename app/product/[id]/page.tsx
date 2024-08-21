"use client"
import SingleProduct from '@/components/SingleProduct'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSupabase } from './../../../lib/supabase/hooks/useSupabase';

const Page = () => {
    const {singleProduct,getSingleProduct} = useSupabase();
    const {id} = useParams();
   useEffect(()=>{
    getSingleProduct(Number(id))
   },[])
  return (
    <div className='flex '>
      <SingleProduct singleProduct={singleProduct}></SingleProduct>
      
    </div>
  )
}

export default Page
