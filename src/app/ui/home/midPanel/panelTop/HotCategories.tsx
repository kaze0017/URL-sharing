import React from 'react'
import CategoryHot from '@/app/ui/components/cards/CategoryHot'
import { getTopCategories } from '@/app/lib/actions'

export default function HotCategories() {
    const topCategories = getTopCategories();
  return (
    <div className='flex overflow-auto w-full'>
        {
            topCategories.map((category, index) => (
                <CategoryHot
                    key={index}
                    owner={category.owner}
                    title={category.title}
                    data={category.data}
                />
            ))
        }
    </div>
  )
}
