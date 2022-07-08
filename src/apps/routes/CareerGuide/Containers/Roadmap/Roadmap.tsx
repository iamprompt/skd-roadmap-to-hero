import type { FC } from 'react'
import clsx from 'clsx'
import type { IProgress } from '@components/utils/DataAnalystGuide'
import { PROGRESS_STATUS } from '@components/utils/DataAnalystGuide'
import type { ICourse } from '@components/utils/Courses'

export enum CourseState {
  COMPLETE = 'COMPLETE',
  ACTIVE = 'ACTIVE',
  DISABLE = 'DISABLE',
  LOCKED = 'LOCKED',
}

export interface RoadmapProps {
  isLeft: boolean
  courseName: string
  courseCoverUrl: string
  courseId: string
  state: PROGRESS_STATUS
}

interface ILayoverInfo {
  statusIconPath: string
  callToAction?: string
}

const LayoverInfo: Record<PROGRESS_STATUS, ILayoverInfo> = {
  [PROGRESS_STATUS.COMPLETED]: {
    statusIconPath: '/images/component/State=Complete.svg',
  },
  [PROGRESS_STATUS.IN_PROGRESS]: {
    statusIconPath: '/images/component/State=Active.svg',
    callToAction: 'เรียนต่อ',
  },
  [PROGRESS_STATUS.NOT_PURCHASED]: {
    statusIconPath: '/images/component/State=Locked.svg',
    callToAction: 'ซื้อคอร์ส',
  },
  [PROGRESS_STATUS.PURCHASED]: {
    statusIconPath: '/images/component/State=Disable.svg',
    callToAction: 'เริ่มเรียน',
  },
}

const RoadmapCourse: FC<RoadmapProps> = ({
  isLeft,
  courseName,
  courseCoverUrl,
  state,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div
          className={clsx(
            `mx-auto flex w-full items-center`,
            isLeft ? 'justify-start' : 'justify-end'
          )}
        >
          <div
            className={clsx(
              `w-full lg:w-1/2`,
              isLeft ? 'lg:pr-20' : 'lg:pl-20'
            )}
          >
            <div className="group relative cursor-pointer rounded-xl shadow-lg">
              <img
                className={clsx(
                  `rounded-xl`,
                  state === PROGRESS_STATUS.NOT_PURCHASED && 'opacity-50'
                )}
                src={courseCoverUrl}
                alt={courseName}
              />
              {LayoverInfo[state].callToAction && (
                <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-transparent">
                  <div className="hidden transform transition-all duration-300 ease-out group-hover:block group-hover:delay-300 group-hover:ease-in">
                    <button
                      onClick={() => {
                        console.log('Handle Click!')
                      }}
                      className="rounded-full bg-primary px-10 py-3 text-xl text-white"
                    >
                      {LayoverInfo[state].callToAction}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full sm:translate-y-0 md:translate-y-20">
          <img
            src={LayoverInfo[state].statusIconPath}
            alt={`${courseName}-${state}`}
          />
        </div>
      </div>
    </div>
  )
}

interface Props {
  courses: ICourse[]
  progress: IProgress[]
}

const Roadmap: FC<Props> = ({ courses, progress }) => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-screen-xl items-center px-8">
        <p className="mb-10 text-4xl font-semibold">Roadmap</p>

        <div className="flex flex-col justify-center py-6 lg:py-12">
          <div className="mx-auto w-full lg:max-w-4xl">
            <div className="relative">
              {/* <!-- Vertical middle line--> */}
              <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 transform bg-[#D9D9D9] lg:block"></div>
              <div className="space-y-12">
                {/* start! */}
                <div>
                  <div className="flex h-32 flex-col items-center">
                    <div className="mx-auto flex w-full items-center justify-end">
                      <div className="w-full lg:w-1/2 lg:pl-8">
                        <p className="text-3xl font-semibold">Start</p>
                      </div>
                    </div>
                    {/* Locked Disable Active Complete */}
                    <div className="absolute left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full sm:translate-y-0">
                      <div className="relative">
                        <img
                          className="w-full"
                          src="/images/component/State=Complete.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {courses.map((course, i) => {
                  return (
                    <RoadmapCourse
                      state={progress[i].status}
                      isLeft={i % 2 === 0}
                      courseCoverUrl={course.coverImageUrl}
                      courseId={course.id}
                      courseName={course.title}
                      key={`ROADMAP-${course.title}`}
                    />
                  )
                })}

                {/* end.. */}
                <div className="translate-y-28 transform">
                  <div className="flex h-32 flex-col items-center">
                    <div className="mx-auto flex w-full items-center justify-end">
                      <div className="w-full lg:w-1/2 lg:pl-8">
                        <p className="text-2xl leading-10">
                          <span className="text-3xl font-semibold">
                            Congratulations!
                          </span>
                          <br />
                          รับ Certificate ของคุณได้เลย
                        </p>
                      </div>
                    </div>
                    {/* Locked Disable Active Complete */}
                    <div className="absolute left-1/2 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full sm:translate-y-0 md:translate-y-0">
                      <div className="relative">
                        <img
                          className="w-full"
                          src="/images/component/State=Disable.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Roadmap
