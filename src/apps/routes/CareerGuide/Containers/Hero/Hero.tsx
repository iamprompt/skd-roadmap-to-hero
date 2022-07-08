import type { FC } from 'react'
import type { ICourse } from '@components/utils/Courses'

interface HeroProps {
  title: string
  courses: ICourse[]
}

const Hero: FC<HeroProps> = ({ title, courses }) => {
  return (
    <section className="bg-[#F9F9F9] py-6">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-8">
        <div>
          <h1 className="mb-6 text-5xl font-semibold">{title}</h1>
          <div className="space-y-2 text-xl">
            <p>
              <span className="font-medium">Start date :</span> 01/07/2022
            </p>
            <p>มีทั้งหมด {courses.length} คอร์ส</p>
            <p>ใช้เวลา 7 ชั่วโมง</p>
          </div>
        </div>
        <div className="h-full">
          <img
            src="/static/images/guide/data/data-analytic-hero.png"
            alt=""
            className="h-80"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
