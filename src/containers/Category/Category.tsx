import type { FC, ReactNode } from 'react'
import { mockCategoryData } from '@components/utils/mockCategoryData'
import CategoryCard from '~/apps/components/CategoryCard'

interface Props {
  title?: string | ReactNode
}

const Category: FC<Props> = ({ title }) => {
  return (
    <section id="category-guide" className="scroll-m-16 py-16">
      <div className="mx-auto max-w-screen-xl px-8">
        {title && <h2 className="mb-4 text-4xl font-medium">{title}</h2>}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {mockCategoryData.map((category) => {
            const { linkUrl, imgUrl, categoryName, description } =
              category || {}
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
    </section>
  )
}

export default Category
