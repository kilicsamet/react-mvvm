import { ProductAPI } from "../services/ProductAPI";

export const fetchProducts = async ( setProductsList) => {
    try {
      const fetchedProducts = await ProductAPI.getAll();
      setProductsList(fetchedProducts)
    } catch (error) {
      console.error(error);
    }
  };