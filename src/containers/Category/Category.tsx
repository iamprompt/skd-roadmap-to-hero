import type { FC } from 'react'
import { mockCategoryData } from '@components/utils/mockCategoryData'
import CategoryCard from '~/apps/components/CategoryCard'

interface CategoryProps {
  categoryTitle: string
}

const Category: FC<CategoryProps> = ({ categoryTitle }: CategoryProps) => {
  let title = {}
  categoryTitle === 'landing'
    ? (title = (
        <p className="mb-3 block text-4xl font-medium leading-[60px] tracking-tight">
          ไม่ว่าคุณต้องการ<span className="text-skooldio">อัพสกิล</span>{' '}
          หรือต้องการ<span className="text-skooldio">เปลี่ยนสาย</span> <br />
          ก็สามารถเลือกเรียนตามเรื่องที่คุณสนใจได้เลย
        </p>
      ))
    : categoryTitle === 'guide'
    ? (title = (
        <p className="mb-3 block text-4xl font-medium leading-[60px] tracking-tight">
          ลองดูสายอาชีพที่คุณสนใจ เพื่อดู Roadmap
        </p>
      ))
    : null
  return (
    <div
      id="category-guide"
      className="mt-20 mb-20 grid items-center justify-center sm:pl-10  2xl:pl-80 2xl:pr-80"
    >
      {title}
      <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-4">
        {mockCategoryData.map((category) => {
          const { linkUrl, imgUrl, categoryName, description } = category || {}
          return (
            <CategoryCard
              linkUrl={linkUrl}
              imgUrl={imgUrl}
              categoryName={categoryName}
              description={description}
              key={categoryName}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Category
