import type { FC } from 'react'
import type { ICourse } from '@components/utils/Courses'
import type { IProgress } from '@components/utils/DataAnalystGuide'

interface Props {
  courses: ICourse[]
  progress: IProgress[]
}

const CourseSupplementary: FC<Props> = ({ courses }) => {
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
          {courses.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-lg bg-gradient-to-tl from-[#FE9400] via-[#FFBF65] to-[#FFE9CA] p-4 px-5"
            >
              <div className="h-24 text-xl font-semibold">{item.title}</div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="rounded-full bg-[#4E4E4E] px-5 py-2 text-white"
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
