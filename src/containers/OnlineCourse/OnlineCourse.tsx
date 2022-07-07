import type { FC } from 'react'
import ProductCard from 'src/apps/components/ProductCard'
import type { ProductCardProps } from 'src/apps/components/ProductCard/types'

interface OnlineCourseProps {
  courses: ProductCardProps[]
  onlineTitle: string
  onlineLink: string
}

const OnlineCourse: FC<OnlineCourseProps> = ({
  courses,
  onlineTitle,
  onlineLink,
}) => {
  return (
    <div className="mt-20 mb-20 2xl:pl-80 2xl:pr-80">
      <div className="mb-10 flex justify-between">
        <p className="text-4xl font-semibold">{onlineTitle}</p>
        {onlineLink && (
          <a href={onlineLink}>
            <p className="text-lg font-semibold text-skooldio">
              ดูคอร์สออนไลน์ทั้งหมด
            </p>
          </a>
        )}
      </div>
      <div className="grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => {
          const { imgUrl, title, info, hour, instructor, instructorImgUrl } =
            course || {}
          return (
            <ProductCard
              imgUrl={imgUrl}
              title={title}
              info={info}
              hour={hour}
              instructor={instructor}
              instructorImgUrl={instructorImgUrl}
              key={title}
            />
          )
        })}
      </div>
    </div>
  )
}
export default OnlineCourse
