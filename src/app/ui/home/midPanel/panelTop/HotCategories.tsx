import React from 'react'
import CategoryHot from '@/app/ui/components/cards/CategoryHot'
import { getTopCategories } from '@/app/lib/actions'

export default function HotCategories() {
    const topCategories = getTopCategories();
    const categoryHotWrapperClass = `flex overflow-auto w-full p-2`;
  return (
    <div className={categoryHotWrapperClass}>
      {topCategories.map((category, index) => (
        <CategoryHot
          key={index}
          owner={category.owner}
          title={category.title}
          data={category.data}
        />
      ))}
    </div>
  );
}
