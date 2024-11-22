import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductByCategorySlug = async (slug: string) => {
    const PRODUCT_BY_CATEGORY_SLUG_QUERY = defineQuery(`
   *[
  _type == "product" &&
  references(*[
    _type == "subCategory" &&
    references(*[_type == "category" && slug.current == $slug]._id)
  ]._id)
] {
  ...,
  "subcategories": subCategory[]->{
    ...
  }
} | order(createdAt asc)
    `);
try {
    const product = await sanityFetch({query: PRODUCT_BY_CATEGORY_SLUG_QUERY,params: {slug}});
    return product.data || []    
} catch (error) {
    console.error("Error Fetching all Products: ", error)
}
}
