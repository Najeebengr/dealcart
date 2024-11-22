import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { imageUrl } from './lib/imageUrl';
import { Button } from './ui/button';
import {  Share2 } from 'lucide-react';
import { Product } from '@/sanity.types';
function ProductThumb({product}:{product:Product}) {
    const isOutOfStock = product.Stock !=null && product.Stock <= 0;
  return (
        
     <Link href={`/product/${product.slug?.current}`} 
    className={`group relative flex flex-col h-full  transition-all duration-200 overflow-hidden ${isOutOfStock ? 'opacity-50 pointer-events-none' : ''}`}
    >
        <div className='relative flex justify-center h-[200px] md:h-[240px]  bg-white rounded-2xl border border-gray-200  w-full  overflow-hidden'>
            {product?.image && (
                <Image
                className='object-contain transition-transform durartion-300 group-hover:scale-105' 
                src={imageUrl(product.image).url()}
                alt={product.name || 'Product Image'}
                width={250}
                height={150}
                // fill
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            )}
            {isOutOfStock && (
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <span className='text-white font-bold text-lg'>
                        Out of Stock
                    </span>
                </div>
            )}
        </div>
        <div className="discount  w-full  text-white px-5 md:px-12 absolute top-0">
            <p className='text-sm bg-[#79bf9f] rounded-b-full text-center flex justify-center'>
                17% OFF
            </p>
        </div>
        <Button variant="outline" className="bg-[#ffc803] rounded-full mt-[-15%] md:mt-[-7%] hover:bg-[#ffc803] z-10 text-sm md:text-lg font-normal">
            <Share2 className=" text-[#576aff] md:!w-6 md:!h-5 !w-4 !h-4" />
            Share & Earn
        </Button>

        <div className="favorite absolute right-0 top-12 bg-[#f3f4ff] p-2 rounded-s-full">
            <Image 
            src={"../favorite_hollow.svg"}
            width={25}
            height={45}
            alt="Favorite"
            className="cursor-pointer "
            />
        </div>
        <div className='p-2'> 
        <span className='mt-2 mr-2 text-sm md:text-lg text-red-600  text-gray-900s'>
                Rs. {product.discountedPrice?.toFixed(1)}
            </span>
        <a href=""><s>Rs {product.price?.toFixed(1)}</s></a>
        
            <h2 className='text-sm md:text-lg font-medium text-gray-800'>
                {product.name}
            </h2>
           
            
        </div>
    </Link>
   
  )
}

export default ProductThumb
