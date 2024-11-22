import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getSubCategoryBySlug = async (slug: string) => {
    const SUBCATEGORY_BY_SLUG_QUERY = defineQuery(`
    *[
    _type == "subCategory" &&
    references(*[_type == "category" && slug.current == $slug]._id)
  ] 
 | order(createdAt asc)
    `);
try {
    const subCategories = await sanityFetch({query: SUBCATEGORY_BY_SLUG_QUERY,params: {slug}});
    return subCategories.data || []    
} catch (error) {
    console.error("Error Fetching all Products: ", error)
}
}
