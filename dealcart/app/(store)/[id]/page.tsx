import React from 'react'
import CategorySlide from '@/components/CategorySlide';
import SubCategorySlide from '@/components/SubCategorySlide';
import ProductGrid from '@/components/ProductGrid';
import { getProductByCategorySlug } from '@/sanity/lib/products/getProductByCategorySlug';
import { PRODUCT_BY_CATEGORY_SLUG_QUERYResult } from '@/sanity.types';


type CategoryProp = {
  params:  Promise<{ id: string }>;
};
async function CategoryTemplate({ params }: CategoryProp) {
  const { id } = await params;
  const products: PRODUCT_BY_CATEGORY_SLUG_QUERYResult | undefined = await getProductByCategorySlug(id);
  return (
    <main className=' container mx-auto mb-10 px-4'>
         
         <CategorySlide slug={id} />
      
        <SubCategorySlide slug={id}/>
        { products &&
        <ProductGrid products={products} />
        }
    </main>
  );
}

export default CategoryTemplate;


