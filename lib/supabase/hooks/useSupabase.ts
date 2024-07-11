import { useState } from "react";
import { supabase } from "../products";

export const useSupabase =  () => {
  const [product, setProduct] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);

  const getDataFromSupabase =async () => {
    let { data: Products, error } = await supabase.from("Products").select("*");
    if (Products) {
      setProduct(Products);
      
    }
    if (error) {
      console.log(error);
    }
  };
  const getFilterData =async (query) => {
    let { data: Products, error } = await supabase.from("Products").select("*").ilike('title',`%${query}%`)
    if (Products) {
      setFilterData(Products);  
    }
    if (error) {
      console.log(error);
    }
  };
  
  return {product,getDataFromSupabase,filterData,getFilterData}
};
