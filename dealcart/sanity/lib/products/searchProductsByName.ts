import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (name: string) => {
    const SEARCH_PRODUCTS_BY_NAME_QUERY = defineQuery(`
    *[
        _type == "product" &&
        name match $searchParams
    ] | order(name asc)
    `);
try {
    const products = await sanityFetch({query: SEARCH_PRODUCTS_BY_NAME_QUERY,params:{searchParams:  `${name}*`}});
    return products.data || []    
} catch (error) {
    console.error("Error Fetching all Products: ", error)
}
}