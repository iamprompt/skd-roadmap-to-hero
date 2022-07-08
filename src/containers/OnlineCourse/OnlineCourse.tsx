import { Icon } from '@iconify/react'
import type { FC } from 'react'
import { useCallback, useRef } from 'react'
import chevronLeft from '@iconify/icons-heroicons-outline/chevron-left'
import chevronRight from '@iconify/icons-heroicons-outline/chevron-right'
import ProductCard from 'src/apps/components/ProductCard'
import type { ICourse } from '@components/utils/Course'

interface OnlineCourseProps {
  courses: ICourse[]
  onlineTitle: string
  onlineLink: string
}

const OnlineCourse: FC<OnlineCourseProps> = ({
  courses,
  onlineTitle,
  onlineLink,
}) => {
  const carouselElement = useRef<HTMLDivElement>(null)

  const handleClickPrev = useCallback(() => {
    if (carouselElement.current) {
      carouselElement.current.scrollLeft -= carouselElement.current.clientWidth
    }
  }, [])

  const handleClickNext = useCallback(() => {
    if (carouselElement.current) {
      carouselElement.current.scrollLeft += carouselElement.current.clientWidth
    }
  }, [])

  return (
    <section className="py-16">
      <div className="mx-auto max-w-screen-xl px-8">
        <div className="mb-10 flex justify-between align-baseline">
          <h2 className="text-4xl font-semibold">{onlineTitle}</h2>
          {onlineLink && (
            <a
              href={onlineLink}
              className="text-lg font-semibold text-skooldio"
            >
              ดูคอร์สออนไลน์ทั้งหมด
            </a>
          )}
        </div>
        <div className="relative flex items-center">
          <button
            className="absolute -left-8 rounded-full border border-gray-200 bg-white p-1 text-4xl text-gray-200 transition-colors duration-500 hover:border-skooldio hover:text-skooldio"
            onClick={handleClickPrev}
          >
            <Icon icon={chevronLeft} />
          </button>

          <div
            className="hide-scrollbar -my-5 -mx-2 flex w-full snap-x justify-between overflow-x-scroll"
            ref={carouselElement}
          >
            {courses.map((course, i) => {
              return (
                <div
                  key={`${i}-${course.title}`}
                  className="shrink-0 snap-start px-2 py-5"
                >
                  <a
                    href={`https://www.skooldio.com/courses/${course.permalink}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ProductCard
                      imgUrl={course.coverImageUrl}
                      title={course.title}
                      info={course.subTitle}
                      hour={course.duration}
                      instructor={course.instructors[0].name}
                      instructorImgUrl={course.instructors[0].profileImageUrl}
                    />
                  </a>
                </div>
              )
            })}
          </div>
          <button
            className="absolute -right-4 rounded-full border border-gray-200 bg-white p-1 text-4xl text-gray-200 transition-colors duration-500 hover:border-skooldio hover:text-skooldio"
            onClick={handleClickNext}
          >
            <Icon icon={chevronRight} />
          </button>
        </div>
      </div>
    </section>
  )
}
export default OnlineCourse
