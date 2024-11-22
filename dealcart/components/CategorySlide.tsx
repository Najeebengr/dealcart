import { getAllCategories } from '@/sanity/lib/products/getAllCategories'
import { ScrollArea } from '@radix-ui/react-scroll-area';
import React from 'react'
import { ScrollBar } from './ui/scroll-area';
import CategorySlideItem from './CategorySlideItem';

async function CategorySlide({slug}: {slug: string}) {
    const categories = await getAllCategories();
  return (
    <div className='w-[90vw] md:w-full px-5'>
      <ScrollArea className=' scroll-smooth overflow-x-scroll pb-3'>
       <CategorySlideItem categories={categories} slug={slug}  />
<ScrollBar orientation="horizontal"  />
</ScrollArea>
     
    </div>
  )
}

export default CategorySlide
