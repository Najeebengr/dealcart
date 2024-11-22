import { defineQuery } from "next-sanity";
import { CouponCode } from "./couponCodes";
import { sanityFetch } from "../live";
import { Sales } from "@/sanity.types";

export const getActiveSaleByCouponCode = async (couponCode: CouponCode): Promise<Sales[]| null> => {

    const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
    *[
        _type == "sale" &&
        couponCode == $couponCode &&
        isActive == true
    ] | order(validFrom desc)
    `);

    try {
        const sale = await sanityFetch({query: ACTIVE_SALE_BY_COUPON_QUERY,params: {couponCode}});
        return sale.data || null
    } catch (error) {
        console.error("Error Fetching active Sale By Coupon Code: ", error)
        return null
    }
}