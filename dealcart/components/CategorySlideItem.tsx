'use client'
import { Category } from '@/sanity.types'
import Link from 'next/link'
import React from 'react'

function CategorySlideItem({categories, slug}:{categories:Category[] | undefined, slug:string}) {
  // const [isActive, setIsActive] = React.useState(false);
  return (
    <div className='flex'>
    {categories?.map((category: Category) => {
        return(
            <Link key={category._id} href={`/${category.slug?.current}`}>
            <div  className={`${category.slug?.current === slug ? 'text-[#576aff] font-bold border-b-2  border-b-[#576aff]' : ''} flex px-3 py-2  cursor-pointer`}>
                <p className='w-max'>{category.title}</p>
            </div>
            </Link>
        )
    })}
    </div>
  )
}

export default CategorySlideItem
