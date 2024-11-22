'use client'
import { SubCategory } from '@/sanity.types'
import { useState } from 'react';

function SubCategorySlideItem({subCategories, slug}:{subCategories:SubCategory[] | undefined, slug:string}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleItemClick = (index: number) => {
        setActiveIndex(index); // Update the active index when an item is clicked
      };
      console.log(slug);
    return (
    <div className='flex gap-3'>
       {subCategories?.map((subCategory: SubCategory, index: number) => {
            return(
                
                <div key={subCategory._id} onClick={() => handleItemClick(index)} className={`${activeIndex === index ? 'bg-[#576aff] text-white' : ''} flex px-5  py-2 border rounded-full border-[#576aff] hover:bg-[#576aff] hover:text-white cursor-pointer`}>
                    <p className='w-max'>{subCategory.title}</p>
                </div>
            )
        })}
    </div>
  )
}

export default SubCategorySlideItem
