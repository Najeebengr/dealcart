import { ScrollArea } from '@radix-ui/react-scroll-area';
import React from 'react'
import { ScrollBar } from './ui/scroll-area';
import { getSubCategoryBySlug } from '@/sanity/lib/products/getSubCategoryBySlug';
import SubCategorySlideItem from './subCategorySlideItem';

async function SubCategorySlide({slug}: {slug: string}) {
    const subCategory = await getSubCategoryBySlug(slug);
  return (
    <div className='w-[90vw] md:w-full px-5'>
      <ScrollArea className='flex scroll-smooth mt-3 overflow-x-scroll gap-3 pb-3'>
       <SubCategorySlideItem subCategories={subCategory} slug={slug}  />
<ScrollBar orientation="horizontal"  />
</ScrollArea>

    </div>
  )
}

export default SubCategorySlide
