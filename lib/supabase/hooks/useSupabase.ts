import { useState } from "react";
import { supabase } from "../products";

export const useSupabase = () => {
  const [product, setProduct] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [singleProduct, setSingleProduct] = useState<any>([]);
  const [mensProduct, setMensProduct] = useState<any>([]);
  const [womansProduct, setWomansProduct] = useState<any>([]);
  const [jewelry,setJewelry] = useState<any>([]);
  const [electronics,setElectronics] = useState<any>([]);

  const getDataFromSupabase = async () => {
    let { data: Products, error } = await supabase.from("Products").select("*");
    if (Products) {
      setProduct(Products);
    }
    if (error) {
      console.log(error);
    }
  };
  const getFilterData = async (query: any) => {
    let { data: Products, error } = await supabase
      .from("Products")
      .select("*")
      .or(
        `title.ilike.%${query}%,description.ilike.%${query}% , category.ilike.%${query}%`
      );
    if (Products) {
      setFilterData(Products);
    }
    if (error) {
      console.log(error);
    }
  };
  const getSingleProduct = async (id: number) => {
    let { data: Product, error } = await supabase
      .from("Products")
      .select("*")
      .eq("id", id);
    if (Product) {
      setSingleProduct(Product);
    }
    if (error) {
      console.log(error);
    }
  };
  const getMensClothing =async( )=>{
    let{data,error}=await supabase.from('Products').select('*').ilike('category',`men's clothing`)
    if(data){
      setMensProduct(data)
    }
    if(error){
      console.log(error)
    }
  }
  const getWomansClothing =async( )=>{
    let{data,error}=await supabase.from('Products').select('*').ilike('category',`women's clothing`)
    if(data){
      setWomansProduct(data)
    }
    if(error){
      console.log(error)
    }
  }
  const getJewelryProduct =async( )=>{
    let{data,error}=await supabase.from('Products').select('*').ilike('category',`jewelry`)
    if(data){
      setJewelry(data)
    }
    if(error){
      console.log(error)
    }
  }
  const getElectronicsProduct =async( )=>{
    let{data,error}=await supabase.from('Products').select('*').ilike('category',`electronics`)
    if(data){
      setElectronics(data)
    }
    if(error){
      console.log(error)
    }
  }

  return {
    product,
    getDataFromSupabase,
    filterData,
    getFilterData,
    singleProduct,
    getSingleProduct,
    mensProduct,
    getMensClothing,
    womansProduct,
    getWomansClothing,
    jewelry,
    getJewelryProduct,
    electronics,
    getElectronicsProduct,
  };
};
