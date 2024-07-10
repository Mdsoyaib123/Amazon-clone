"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const{query} = useParams()
  return (
    <div>
     <h1>{query}</h1> 
    </div>
  )
}

export default page
