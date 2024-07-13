"use client"
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSupabase } from '../../../lib/supabase/hooks/useSupabase'
import SearchResult from '../../../components/SearchResult';

const Page = () => {
    const{query} = useParams()
    const {filterData,getFilterData} = useSupabase();
    
    useEffect(()=>{
       
        getFilterData(query.toString())
    },[])

  return (
    <div>
      <SearchResult filterData={filterData}></SearchResult>
    </div>
  )
}

export default Page;
