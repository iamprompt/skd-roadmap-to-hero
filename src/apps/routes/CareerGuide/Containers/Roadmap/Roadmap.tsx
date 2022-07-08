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
  permalink: string
  state: PROGRESS_STATUS
}

interface ILayoverInfo {
  statusIconPath: string
  callToActionText?: string
  callToAction?: `https://${string}`
}

const StatusIcon: Record<PROGRESS_STATUS, string> = {
  [PROGRESS_STATUS.COMPLETED]: '/images/component/State=Complete.svg',
  [PROGRESS_STATUS.IN_PROGRESS]: '/images/component/State=Active.svg',
  [PROGRESS_STATUS.NOT_PURCHASED]: '/images/component/State=Locked.svg',
  [PROGRESS_STATUS.PURCHASED]: '/images/component/State=Disable.svg',
}

const LayoverInfo: Record<PROGRESS_STATUS, ILayoverInfo> = {
  [PROGRESS_STATUS.COMPLETED]: {
    statusIconPath: '/images/component/State=Complete.svg',
  },
  [PROGRESS_STATUS.IN_PROGRESS]: {
    statusIconPath: '/images/component/State=Active.svg',
    callToActionText: 'เรียนต่อ',
    callToAction: `https://www.skooldio.com/dashboard`,
  },
  [PROGRESS_STATUS.NOT_PURCHASED]: {
    statusIconPath: '/images/component/State=Locked.svg',
    callToActionText: 'ซื้อคอร์ส',
    callToAction: `https://www.skooldio.com/courses/{{permalink}}`,
  },
  [PROGRESS_STATUS.PURCHASED]: {
    statusIconPath: '/images/component/State=Disable.svg',
    callToActionText: 'เริ่มเรียน',
    callToAction: `https://www.skooldio.com/dashboard`,
  },
}

const RoadmapCourse: FC<RoadmapProps> = ({
  isLeft,
  courseName,
  courseCoverUrl,
  permalink,
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
            <a
              href={
                state === PROGRESS_STATUS.COMPLETED
                  ? `https://www.skooldio.com/dashboard`
                  : undefined
              }
              target="_blank"
              className="group relative rounded-xl shadow-lg"
              rel="noreferrer"
            >
              <img
                className={clsx(
                  `rounded-xl`,
                  state === PROGRESS_STATUS.NOT_PURCHASED && 'opacity-50'
                )}
                src={courseCoverUrl}
                alt={courseName}
              />
              {LayoverInfo[state].callToAction &&
                state !== PROGRESS_STATUS.COMPLETED && (
                  <div className="absolute inset-0 z-20 flex h-full w-full items-center justify-center bg-transparent">
                    <div className="hidden transform transition-all duration-300 ease-out group-hover:block group-hover:delay-300 group-hover:ease-in">
                      <a
                        href={LayoverInfo[state].callToAction?.replace(
                          '{{permalink}}',
                          permalink
                        )}
                        target="_blank"
                        className="rounded-full bg-primary px-10 py-3 text-xl text-white"
                        rel="noreferrer"
                      >
                        {LayoverInfo[state].callToActionText}
                      </a>
                    </div>
                  </div>
                )}
            </a>
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
                          alt="Complete"
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
                      permalink={course.permalink}
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
                          src={
                            progress.every(
                              (p) => p.status === PROGRESS_STATUS.COMPLETED
                            )
                              ? StatusIcon[PROGRESS_STATUS.COMPLETED]
                              : StatusIcon[PROGRESS_STATUS.IN_PROGRESS]
                          }
                          alt="Not Complete"
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
