import { ALL_CATEGORIES_QUERYResult} from '@/sanity.types';
import React from 'react'
import CategoryGrid from './CategoryGrid';

interface CategoriesViewProps {
    categories: ALL_CATEGORIES_QUERYResult | undefined;
}

function CategoriesView({categories}:CategoriesViewProps) {
  return (
    <section>
      <div >
        <h2 className='text-xl font-medium my-4'>
          Categories
        </h2>
        <CategoryGrid categories={categories}/>
      </div>
    </section>
  )
}

export default CategoriesView
