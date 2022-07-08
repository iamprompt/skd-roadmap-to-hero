import type { FC } from 'react'
import clsx from 'clsx'
import type { ICourse } from '@components/utils/Courses'
import type { IProgress } from '@components/utils/DataAnalystGuide'
import { PROGRESS_STATUS } from '@components/utils/DataAnalystGuide'

interface Props {
  courses: ICourse[]
  progress: IProgress[]
}

const CourseSupplementary: FC<Props> = ({ courses, progress }) => {
  return (
    <section className="mt-20 py-8">
      <div className="mx-auto max-w-screen-xl px-8">
        <div>
          <h2 className="mb-2 text-4xl font-medium">Courses Supplementary</h2>
          <p>
            สรุปและเอกสารประกอบการเรียนของแต่ละคอร์สเป็นรางวัลสุดพิเศษให้คุณ
          </p>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-5">
          {courses.map((item, i) => (
            <div
              key={item.id}
              className={clsx(
                'flex flex-col rounded-lg p-4 px-5',
                progress[i].status === PROGRESS_STATUS.COMPLETED
                  ? 'bg-gradient-to-tl from-[#FE9400] via-[#FFBF65] to-[#FFE9CA]'
                  : 'bg-[#EAEAEA]'
              )}
            >
              <div className="h-24 text-xl font-semibold">{item.title}</div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className={clsx(
                    'rounded-full px-5 py-2',
                    progress[i].status === PROGRESS_STATUS.COMPLETED
                      ? 'bg-[#4E4E4E] text-white'
                      : 'pointer-events-none bg-[#D0D0D0] text-[#9E9E9E]'
                  )}
                >
                  ดาวน์โหลด
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseSupplementary
