import { Tab } from '@headlessui/react'
import clsx from 'clsx'
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
import { mockCourseData } from '@components/utils/mockCourseData'

const RoadmapImage = [
  '/images/data-job/Data-Analyst-Roadmap.svg',
  '/images/data-job/Data-Scientist-Roadmap.svg',
  '/images/data-job/Data-Engineer-Roadmap.svg',
]

const DataJobs = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-screen-xl items-center px-8">
        <div className="mb-12 w-max">
          <p className="mb-3 text-4xl font-semibold">สายอาชีพ Data</p>
          <p className="text-xl">
            หากคุณสนใจทำงานด้าน Data
            เราได้รวบรวมข้อมูลที่คุณอยากรู้เกี่ยวกับสายอาชีพในด้านนี้มาให้คุณแล้ว
          </p>
        </div>
        <div className="w-max">
          <Tab.Group>
            <div className="mb-10">
              <Tab.List>
                {['Data Analyst', 'Data Scientist', 'Data Engineer'].map(
                  (category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        clsx(
                          'h-full px-4 py-1 text-xl font-medium outline-none',
                          selected
                            ? 'border-b-2 border-secondary text-secondary'
                            : 'text-gray-400'
                        )
                      }
                    >
                      {category}
                    </Tab>
                  )
                )}
              </Tab.List>
            </div>
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
                    {/* introduction section */}
                    <div className="flex items-start">
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
                    <div className="mt-20 py-24">
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
                    <div className="py-24">
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
                    {/* Step Guide */}
                    <StepGuide />
                    {/* Skooldio Guide */}
                    <div className="mt-20 flex">
                      <div className="w-2/3">
                        <div>
                          <p className="text-2xl">ให้เราช่วยจัดคอร์สให้คุณ!</p>
                          <p className="mt-4 mb-6 text-5xl font-bold">
                            Skooldio Guide
                          </p>
                          <p className="text-2xl">
                            หากคุณสนใจที่จะเปลี่ยนสายและต้องการอัปสกิลอย่างถูกต้อง
                            <br />
                            ครบถ้วน พร้อมสมัครงาน พวกเราเป็นตัวช่วยให้กับคุณได้
                          </p>
                        </div>
                        <p className="mt-10 mb-3 text-2xl font-medium">
                          ซื้อ Skooldio Guide ได้อะไรบ้าง
                        </p>
                        <ul className="space-y-2 text-lg">
                          <li className="flex items-center text-xl">
                            <InlineIcon
                              icon={checkCircle}
                              className="mr-2 text-5xl text-primary"
                            />
                            Roadmap ที่จัดคอร์สให้เหมาะสมกับคุณ
                          </li>
                          <li className="flex items-center text-xl">
                            <InlineIcon
                              icon={checkCircle}
                              className="mr-2 text-5xl text-primary"
                            />
                            เอกสารสรุปเนื้อหาของแต่ละคอร์ส
                          </li>
                          <li className="flex items-center text-xl">
                            <InlineIcon
                              icon={checkCircle}
                              className="mr-2 text-5xl text-primary"
                            />
                            Certificate พิเศษ การันตีทักษะใช้ยื่นสมัครงาน
                          </li>
                          <li className="flex items-center text-xl">
                            <InlineIcon
                              icon={checkCircle}
                              className="mr-2 text-5xl text-primary"
                            />
                            แหล่งการเรียนรู้ฟรีที่เราเลือกให้คุณแล้ว
                          </li>
                          <li className="flex items-center text-xl">
                            <InlineIcon
                              icon={checkCircle}
                              className="mr-2 text-5xl text-primary"
                            />
                            Partnership ที่เปิดรับสมัครตำแหน่งที่คุณสนใจ
                          </li>
                          <li className="flex items-center text-xl">
                            <InlineIcon
                              icon={checkCircle}
                              className="mr-2 text-5xl text-primary"
                            />
                            ราคาพิเศษ คุ้มกว่าซื้อคอร์สแยก
                          </li>
                        </ul>
                        <div className="mt-16">
                          <Link href="#category-guide">
                            <a className="rounded-full bg-[#FFA629] py-6 px-24 text-2xl text-white">
                              ซื้อตอนนี้
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <img src={RoadmapImage[c]} />
                      </div>
                    </div>
                  </Tab.Panel>
                )
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
        <OtherSource />
        <OnlineCourse
          courses={mockCourseData}
          onlineTitle="คอร์สออนไลน์ Data"
          onlineLink="#"
        />
      </div>
    </section>
  )
}
export default DataJobs
