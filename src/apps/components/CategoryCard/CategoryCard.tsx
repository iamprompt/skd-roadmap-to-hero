import chevronRight from '@iconify/icons-heroicons-outline/chevron-right'
import { Icon } from '@iconify/react'
import type { CategoryCardProps } from './types'

const CategoryCard = ({
  // linkUrl,
  imgUrl,
  categoryName,
  description,
}: CategoryCardProps) => {
  return (
    <div className="relative rounded-md bg-white p-8 shadow-md">
      <div>
        <div className="mb-6 flex items-center">
          <img src={imgUrl} alt={categoryName} />
          <p className="truncate text-2xl font-semibold">{categoryName}</p>
        </div>
        <p className=" min-h-[72px] text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="absolute right-0 top-0 flex h-full items-center px-2">
        <Icon icon={chevronRight} className="text-4xl" />
      </div>
    </div>
  )
}
export default CategoryCard
