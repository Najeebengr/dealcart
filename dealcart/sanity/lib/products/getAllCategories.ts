import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { console } from "inspector";

export const getAllCategories = async () => {
    const ALL_CATEGORIES_QUERY = defineQuery(`
    *[
        _type == "category"

    ] | order(name asc, _createdAt asc) 
    `);
try {
    const categories = await sanityFetch({query: ALL_CATEGORIES_QUERY});
    return categories.data || []    
} catch (error) {
    console.error("Error Fetching all Products: ", error)
}
}
