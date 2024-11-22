import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";
import { getAllSales } from "@/sanity/lib/sales/getAllSales";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { imageUrl } from "./lib/imageUrl";
import {  Sales } from "@/sanity.types";

async function Banner() {
  const sale  = await getActiveSaleByCouponCode(COUPON_CODES.BFRIDAY);
  const allSales = await getAllSales();
  console.log(allSales);
  if (!sale ){
    return null;
  }
  else {
      return (
        <section className="py-6">
            
          <Carousel>
            <CarouselContent>
            {allSales?.map((sale: Sales) => {
              return (
                <CarouselItem key={sale._id}>
                <div>
                  <div className="p-1 flex justify-center">
                  {sale?.saleImage && (
                      <Image 
                     src={imageUrl(sale?.saleImage).url()}
                      width={1800}
                      height={1300}
                      alt="Banner"
                      />
                    )}
                  </div>
                </div>
              </CarouselItem>
              )
            })}
            </CarouselContent>
            
            {allSales && (
                
                <><CarouselPrevious /><CarouselNext /></>
                )}
          </Carousel>
        </section>
      );
  }
  
}

export default Banner;
