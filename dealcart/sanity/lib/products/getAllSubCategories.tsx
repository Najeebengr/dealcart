import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { console } from "inspector";

export const getAllSubCategories = async () => {
    const ALL_SUBCATEGORIES_QUERY = defineQuery(`
    *[
        _type == "subCategory"

    ] | order(name asc) 
    `);
try {
    const SubCategories = await sanityFetch({query: ALL_SUBCATEGORIES_QUERY});
    return SubCategories.data || []    
} catch (error) {
    console.error("Error Fetching all Products: ", error)
}
}
