import { mockRoadmap } from '@components/utils/mockRoadmap'

export enum CourseState {
  COMPLETE = 'COMPLETE',
  ACTIVE = 'ACTIVE',
  DISABLE = 'DISABLE',
  LOCKED = 'LOCKED',
}

export interface RoadmapProps {
  state: string
  isLeft: boolean
  courseImgUrl: string
}

const RoadmapCourse = ({ state, isLeft, courseImgUrl }: RoadmapProps) => {
  let imgUrl = ''
  let haveButton = true
  let buttonText = ''
  let isLocked = false
  if (state === CourseState.COMPLETE) {
    imgUrl = '/images/component/State=Complete.svg'
    haveButton = false
  } else if (state === CourseState.ACTIVE) {
    imgUrl = '/images/component/State=Active.svg'
    buttonText = 'เรียนต่อ'
  } else if (state === CourseState.DISABLE) {
    imgUrl = '/images/component/State=Disable.svg'
    buttonText = 'เริ่มเรียน'
  } else {
    imgUrl = '/images/component/State=Locked.svg'
    buttonText = 'ซื้อคอร์ส'
    isLocked = true
  }
  return (
    <div>
      <div className="flex flex-col items-center">
        <div
          className={`mx-auto flex w-full items-center
            ${isLeft ? 'justify-start' : 'justify-end'}`}
        >
          <div
            className={` w-full lg:w-1/2 ${isLeft ? 'lg:pr-20' : 'lg:pl-20'} `}
          >
            <div className="relative shadow-lg">
              <img
                className={`rounded-xl ${isLocked && 'opacity-50'}`}
                src={courseImgUrl}
              />
              {haveButton ? (
                <button className="absolute top-[35%] left-[27.5%] rounded-full bg-primary px-10 py-4 text-2xl text-white">
                  {buttonText}
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full sm:translate-y-0 md:translate-y-20">
          <img src={imgUrl} />
        </div>
      </div>
    </div>
  )
}

const Roadmap = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-screen-xl items-center px-8">
        <p className="text-4xl font-semibold">Roadmap</p>

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
                {mockRoadmap.map((course, i) => {
                  const { state, courseImgUrl } = course || {}
                  return (
                    <RoadmapCourse
                      state={state}
                      isLeft={i % 2 === 0}
                      courseImgUrl={courseImgUrl}
                      key={course.courseImgUrl}
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
