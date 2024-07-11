"use client"
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSupabase } from '../../../lib/supabase/hooks/useSupabase'

const Page = () => {
    const{query} = useParams()
    const {filterData,getFilterData} = useSupabase();
    
    useEffect(()=>{
       
        getFilterData()
    },[])
  console.log(query)
  return (
    <div>
      
    </div>
  )
}

export default Page;
