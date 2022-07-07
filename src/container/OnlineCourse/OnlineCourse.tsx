import ProductCard from 'src/apps/components/ProductCard'
import type { ProductCardProps } from 'src/apps/components/ProductCard/types'

const OnlineCourse = (courses: ProductCardProps[]) => {
  return (
    <div className="mt-20 mb-20 grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:pl-80 2xl:pr-80">
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
  )
}
export default OnlineCourse
