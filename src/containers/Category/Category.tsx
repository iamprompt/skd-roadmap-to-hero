import type { FC, ReactNode } from 'react'
import clsx from 'clsx'
import { mockCategoryData } from '@components/utils/mockCategoryData'
import CategoryCard from '~/apps/components/CategoryCard'

interface Props {
  title?: string | ReactNode
  className?: string
  id?: string
}

const Category: FC<Props> = ({ title, className, id }) => {
  return (
    <section id={id} className={clsx(className)}>
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