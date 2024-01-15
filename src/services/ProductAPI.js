import { product_data } from "../MockingApi/data"
import Product from "../models/ProductModel"

export const ProductAPI = {
    getAll: async function () {
      try {
        return product_data.map((productData) => new Product(productData));;
      } catch (error) {
        console.log(error);
      }
    },
  };