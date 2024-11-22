import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllSales = async () => {
    const ALL_SALES_QUERY = defineQuery(`
    *[
        _type == "sales"
    ] | order(createdAt asc) 
    `);
try {
    const sales = await sanityFetch({query: ALL_SALES_QUERY});
    return sales.data || []    
} catch (error) {
    console.error("Error Fetching all Products: ", error)
}
}