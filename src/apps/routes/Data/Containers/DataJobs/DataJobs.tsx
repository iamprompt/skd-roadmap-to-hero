import { Tab } from '@headlessui/react'
import { InlineIcon } from '@iconify/react'
import checkCircle from '@iconify/icons-heroicons-outline/check-circle'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import OtherSource from '../OtherSource'
import OnlineCourse from '~/containers/OnlineCourse'
import CareerTabName from '~/apps/routes/Career/Components/CareerTabName'
import { Courses } from '@components/utils/Courses'
import { DataCareer, SARALY_TYPE } from '@components/utils/DataCareer'
import '@vime/core/themes/default.css'
import StepGuide from '~/apps/routes/CareerGuide/Containers/StepGuide'
import { StepGuides } from '@components/utils/StepGuide'

const Player = dynamic(
  () => import('~/apps/routes/Data/Components/VideoPlayer'),
  { ssr: false }
)

const DataJobs = () => {
  return (
    <section className="py-16 pt-24">
      <Tab.Group>
        <div className="mx-auto mb-12 max-w-screen-xl items-center px-8">
          <div className="mb-10">
            <h2 className="mb-3 text-4xl font-semibold">สายอาชีพ Data</h2>
            <p className="text-xl">
              หากคุณสนใจทำงานด้าน Data
              เราได้รวบรวมข้อมูลที่คุณอยากรู้เกี่ยวกับสายอาชีพในด้านนี้มาให้คุณแล้ว
            </p>
          </div>
          <Tab.List className="my-10 flex w-full gap-x-5">
            {DataCareer.map((career) => (
              <CareerTabName
                key={career.displayName}
                name={career.displayName}
              />
            ))}
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {DataCareer.map((career) => {
              return (
                <Tab.Panel key={career.id}>
                  <div className="mx-auto mb-12 max-w-screen-xl items-center px-8">
                    <div className="grid grid-cols-2 gap-10">
                      <div>
                        <Player videoId={career.youtubeIntroVideoId} />
                      </div>
                      <div>
                        <p className="mb-4 text-2xl font-semibold">
                          {career.name}
                        </p>
                        <p className="w-130 text-xl leading-8">
                          {career.description}
                        </p>
                        <div className="mt-10">
                          <Link href="#skd-guide">
                            <a className="rounded-full bg-[#FFA629] py-3 px-5 text-xl text-white">
                              วางแผนด้วย Skooldio Guide
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* salary section */}
                    <div className="my-20">
                      <div className="mb-10">
                        <p className="text-4xl font-semibold">Salary/Income</p>
                      </div>
                      <div className="grid grid-cols-3">
                        {Object.entries(career.salary).map(([type, text]) => (
                          <div className="flex items-center" key={type}>
                            <img src="/images/component/salary.svg" />
                            <div className="ml-5">
                              <p className="py-1 text-2xl">
                                <span className="mr-1 text-[50px] font-semibold text-primary">
                                  {text}
                                </span>
                                บาท/เดือน
                              </p>
                              <p className="text-2xl font-medium">
                                {SARALY_TYPE[type as keyof typeof SARALY_TYPE]}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Job description section */}
                    <div className="my-10">
                      <p className="mb-4 text-4xl font-semibold ">
                        Job Description
                      </p>
                      <ul className="ml-2 list-inside list-disc">
                        {career.jobDescription.map((item) => {
                          return (
                            <li className="mb-1 text-xl" key={item}>
                              {item}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* Skill */}
                  <section className="mt-40 mb-16 bg-[#F9F9F9] py-16">
                    <div className="mx-auto flex max-w-screen-xl items-center justify-center gap-20 px-8">
                      <div>
                        <p className="mb-10 text-center text-4xl font-bold">
                          Hard Skill
                        </p>
                        <div className="flex">
                          {career.skills.HARD_SKILL.map((item) => {
                            return (
                              <div
                                className="mx-2 flex h-[176px] w-[176px] items-center rounded-full bg-gradient-to-br from-[#FFDBA9] to-[#FF9500] text-center"
                                key={item.content}
                              >
                                <div>
                                  <p className="h-full w-full px-4 text-sm">
                                    <span className="font-bold">
                                      {item.heading}
                                    </span>
                                    <br />
                                    {item.content}
                                  </p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto mt-20 flex max-w-screen-xl items-center justify-center gap-20 px-8">
                      <div>
                        <p className="mb-10 text-center text-4xl font-bold">
                          Soft Skill
                        </p>
                        <div className="flex">
                          {career.skills.SOFT_SKILL.map((item) => {
                            return (
                              <div
                                className="mx-2 flex h-[176px] w-[176px] items-center rounded-full bg-gradient-to-br from-[#EFEFEF] to-[#BFBFBF] text-center"
                                key={item.content}
                              >
                                <div>
                                  <p className="h-full w-full px-4 text-sm">
                                    <span className="font-bold">
                                      {item.heading}
                                    </span>
                                    <br />
                                    {item.content}
                                  </p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Step Guide */}
                  <StepGuide steps={StepGuides} />

                  {/* introduction section */}
                  <div className="mx-auto mb-12 max-w-screen-xl items-center px-8">
                    {/* Skooldio Guide */}
                    <div
                      id="skd-guide"
                      className="flex scroll-m-16 items-center justify-between"
                    >
                      <div className="mt-20 grow">
                        <div className="w-2/3">
                          <div>
                            <p className="text-2xl">
                              ให้เราช่วยจัดคอร์สให้คุณ!
                            </p>
                            <p className="mt-4 mb-6 text-5xl font-bold">
                              Skooldio Guide
                            </p>
                            <p className="text-2xl">
                              หากคุณสนใจที่จะเปลี่ยนสาย <br />
                              และต้องการอัปสกิลอย่างถูกต้อง ครบถ้วน
                              <br />
                              พร้อมสมัครงาน พวกเราเป็นตัวช่วยให้กับคุณได้
                            </p>
                          </div>
                        </div>
                        <p className="mt-10 mb-3 text-2xl font-medium">
                          ซื้อ Skooldio Guide ได้อะไรบ้าง
                        </p>
                        <ul className="space-y-2 text-lg">
                          {[
                            'Roadmap ที่จัดคอร์สให้เหมาะสมกับคุณ',
                            'เอกสารสรุปเนื้อหาของแต่ละคอร์ส',
                            'Certificate พิเศษ การันตีทักษะใช้ยื่นสมัครงาน',
                            'แหล่งการเรียนรู้ฟรีที่เราเลือกให้คุณแล้ว',
                            'Partnership ที่เปิดรับสมัครตำแหน่งที่คุณสนใจ',
                            'ราคาพิเศษ คุ้มกว่าซื้อคอร์สแยก',
                          ].map((item) => (
                            <li
                              className="flex items-center text-xl"
                              key={item}
                            >
                              <InlineIcon
                                icon={checkCircle}
                                className="mr-2 text-5xl text-primary"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-12">
                          <Link href={`/guide/${career.id}`}>
                            <a className="rounded-full bg-[#FFA629] py-3 px-24 text-xl text-white">
                              ซื้อตอนนี้
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <img src={career.roadmapPath} />
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              )
            })}
          </Tab.Panels>
        </div>

        <OtherSource />
        <OnlineCourse
          courses={Courses.filter(
            (course) => course.categories.topic === 'Data'
          )}
          onlineTitle="คอร์สออนไลน์ Data"
          onlineLink="#"
        />
      </Tab.Group>
    </section>
  )
}
export default DataJobs
