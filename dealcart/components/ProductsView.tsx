import {  PRODUCT_BY_CATEGORY_SLUG_QUERYResult} from '@/sanity.types'
import React from 'react'
import ProductGrid from './ProductGrid'

interface ProdcutsViewProps {
    products: PRODUCT_BY_CATEGORY_SLUG_QUERYResult
}


function ProductsView({products}:ProdcutsViewProps) {
  return (
    <section className='py-16'>
        <div>
            <ProductGrid products={products}/>
        </div>
    </section>
  )
}

export default ProductsView
