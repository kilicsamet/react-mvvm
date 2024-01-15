import { useEffect, useState } from 'react';
import { fetchProducts } from '../Controller/ProductController';
export const useProductViewModel = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchProducts(setProductsList);
  }, []);
   document.title = "Ürünler" 
  return {
    productsList
};
};
