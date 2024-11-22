'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import ProductThumb from './ProductThumb'
import { PRODUCT_BY_CATEGORY_SLUG_QUERYResult, SEARCH_PRODUCTS_BY_NAME_QUERYResult } from '@/sanity.types'

function ProductGrid({products}:{products:PRODUCT_BY_CATEGORY_SLUG_QUERYResult | SEARCH_PRODUCTS_BY_NAME_QUERYResult}) {
  return (
    <div className='flex gap-1 w-[90vw] my-6 md:w-full md:gap-8 justify-between flex-wrap'>
      {products?.map((product) => {
        if(!product) return null
          return(
            <AnimatePresence key={product?._id}>
              <motion.div
              layout
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='w-[46%] md:w-[15%] py-3'
              >
                <ProductThumb product={product} key={product?._id} />
              </motion.div>
            </AnimatePresence>
          )
        }
      )}
    </div>
  )
}

export default ProductGrid
