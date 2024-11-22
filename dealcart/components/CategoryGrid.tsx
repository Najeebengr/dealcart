'use client'
import { Category } from '@/sanity.types'
import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import CategoryThumb from './CategoryThumb'
function CategoryGrid({categories}:{categories:Category[] | undefined}) {
  return (
    <div className='flex gap-6 justify-between flex-wrap'>
      {categories?.map((category) => {
          return(
            <AnimatePresence key={category._id}>
              <motion.div
              layout
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='w-[43%] md:w-[15%]'
              >
                <CategoryThumb category={category} />
              </motion.div>
            </AnimatePresence>
          )
        }
      )}
    </div>
  )
}

export default CategoryGrid
