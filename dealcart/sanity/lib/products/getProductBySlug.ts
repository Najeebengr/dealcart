import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { Product } from "@/sanity.types";

export const getProductBySlug = async (slug: string ):Promise<Product | null> => {
  const PRODUCT_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "product" && slug.current == $slug
  ][0]
  `);
  try {
    const product = await sanityFetch({query: PRODUCT_BY_SLUG_QUERY,params: {slug}});
    return product.data || null    
  } catch (error) {
    console.error("Error Fetching all Products: ", error)
    return null
  }
}
