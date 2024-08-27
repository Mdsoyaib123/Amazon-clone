"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useSupabase } from '@/lib/supabase/hooks/useSupabase'

const HomePage = () => {
  const {mensProduct,
    getMensClothing,
    womansProduct,
    getWomansClothing} =useSupabase()

    console.log(mensProduct)

    useEffect(()=>{
      getMensClothing();
      getWomansClothing();
    },[])

  return (
    <div>
      <Image src={'https://i.postimg.cc/wBFqvrjh/71ve0p-Yz7u-L-SX3000.jpg'} width={1500} height={1000} quality={90} alt={'abc'}/>
    </div>
  )
}

export default HomePage
