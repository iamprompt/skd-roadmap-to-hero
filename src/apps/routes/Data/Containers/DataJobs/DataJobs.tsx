import { Tab } from '@headlessui/react'
import { InlineIcon } from '@iconify/react'
import checkCircle from '@iconify/icons-heroicons-outline/check-circle'
import Link from 'next/link'
import StepGuide from '../StepGuide'
import OtherSource from '../OtherSource'
import { mockDataJobs } from '@components/utils/mockDataJobs'
import { mockJobDescription } from '@components/utils/mockJobDescription'
import { mockHardSkill } from '@components/utils/mockHardSkill'
import { mockSoftSkill } from '@components/utils/mockSoftSkill'
import OnlineCourse from '~/containers/OnlineCourse'
import CareerTabName from '~/apps/routes/Career/Components/CareerTabName'
import { Courses } from '@components/utils/Courses'

const RoadmapImage = [
  '/images/data-job/Data-Analyst-Roadmap.svg',
  '/images/data-job/Data-Scientist-Roadmap.svg',
  '/images/data-job/Data-Engineer-Roadmap.svg',
]

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
            {['Data Analyst', 'Data Scientist', 'Data Engineer'].map(
              CareerTabName
            )}
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {[0, 1, 2].map((c) => {
              const {
                vdo,
                jobTitle,
                jobDescription,
                jobSalary1,
                jobSalary2,
                jobSalary3,
              } = mockDataJobs[c] || {}
              return (
                <Tab.Panel key={c}>
                  <div className="mx-auto mb-12 max-w-screen-xl items-center px-8">
                    <div className="grid grid-cols-2 gap-10">
                      <div>{vdo}</div>
                      <div className="ml-10">
                        <p className="mb-4 text-2xl font-semibold">
                          {jobTitle}
                        </p>
                        <p className="w-130 text-xl leading-8">
                          {jobDescription}
                        </p>
                      </div>
                    </div>

                    {/* salary section */}
                    <div className="my-10">
                      <div className="mb-10">
                        <p className="text-4xl font-semibold">Salary/Income</p>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className="flex items-center">
                          <img src="/images/component/salary.svg" />
                          <div className="ml-5">
                            <p className="py-1 text-2xl">
                              <span className="mr-1 text-[50px] text-primary">
                                <span className="mr-2 font-semibold">
                                  {jobSalary1}
                                </span>
                                หมื่น
                              </span>
                              บาท/เดือน
                            </p>
                            <p className="text-2xl font-medium">จบใหม่</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <img src="/images/component/salary.svg" />
                          <div className="ml-5">
                            <p className="py-1 text-2xl">
                              <span className="mr-1 text-[50px] text-primary">
                                <span className="mr-2 font-semibold">
                                  {jobSalary2}
                                </span>
                                หมื่น
                              </span>
                              บาท/เดือน
                            </p>
                            <p className="text-2xl font-medium">
                              ประสบการณ์ 1-5 ปี
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <img src="/images/component/salary.svg" />
                          <div className="ml-5">
                            <p className="py-1 text-2xl">
                              <span className="mr-1 text-[50px] text-primary">
                                <span className="mr-2 font-semibold">
                                  {jobSalary3}
                                </span>
                                หมื่น
                              </span>
                              บาท/เดือน
                            </p>
                            <p className="text-2xl font-medium">
                              ประสบการณ์ 5 ปีขึ้นไป
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Job description section */}
                    <div className="my-10">
                      <p className="mb-8 text-4xl font-semibold ">
                        Job Description
                      </p>
                      <ul className="ml-2 list-inside list-disc">
                        {mockJobDescription[c].map((item) => {
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
                  <section className="bg-[#F9F9F9] py-16">
                    <div className="mx-auto flex max-w-screen-xl items-center justify-center gap-20 px-8">
                      <div>
                        <p className="mb-10 text-center text-4xl font-bold">
                          Hard Skill
                        </p>
                        <div className="flex">
                          {mockHardSkill[c].map((item) => {
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
                          {mockSoftSkill[c].map((item) => {
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

                  {/* introduction section */}
                  <div className="mx-auto mb-12 max-w-screen-xl items-center px-8">
                    {/* Step Guide */}
                    <StepGuide />
                    {/* Skooldio Guide */}
                    <div className="flex items-center justify-between">
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
                              หากคุณสนใจที่จะเปลี่ยนสายและต้องการอัปสกิลอย่างถูกต้อง
                              <br />
                              ครบถ้วน พร้อมสมัครงาน
                              พวกเราเป็นตัวช่วยให้กับคุณได้
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
                        <div className="mt-16">
                          <Link href="#category-guide">
                            <a className="rounded-full bg-[#FFA629] py-3 px-24 text-xl text-white">
                              ซื้อตอนนี้
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <img src={RoadmapImage[c]} />
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
