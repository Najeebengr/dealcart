import { Category } from '@/sanity.types'
import Link from 'next/link'
import React from 'react'
import { imageUrl } from './lib/imageUrl'
import Image from 'next/image'
function CategoryThumb({category}:{category:Category}) {
  return (
    <Link href={`/${category.slug?.current}`} 
    className={` flex h-full justify-start flex-col transition-all duration-200 overflow-hidden `}
    >
        <div className='relative  w-full overflow-hidden'>
            {category?.image && (
                <Image
                className='object-contain transition-transform rounded-2xl durartion-300 group-hover:scale-105' 
                src={imageUrl(category.image).url()}
                alt={category.title || 'Product Image'}
                width={170}
                height={100}
                // fill
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 38vw"
                />
            )}
        </div>
        <div className='p-2'> 
            <h2 className='text-md md:text-lg md:font-semibold font-medium text-gray-800 text-start md:text-center'>
                {category.title}
            </h2>
        </div>
    </Link>
  )
}

export default CategoryThumb