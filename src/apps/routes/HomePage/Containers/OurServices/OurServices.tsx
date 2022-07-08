import { Tab } from '@headlessui/react'
import clsx from 'clsx'

const OurServices = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-8 pb-12">
        <Tab.Group>
          <div className="mb-10 grid grid-cols-12 gap-10">
            <h2 className="col-span-5 text-4xl font-medium">
              บริการหลักของเรา
            </h2>
            <Tab.List className="col-span-7">
              {['คอร์สออนไลน์', 'เวิร์กชอป', 'Bootcamp'].map((category) => (
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
              ))}
            </Tab.List>
          </div>
          <Tab.Panels>
            {[1, 2, 3].map((c) => (
              <Tab.Panel className="grid grid-cols-12 gap-10" key={c}>
                <div className="col-span-5">
                  <h3 className="mb-6 text-5xl font-medium text-secondary">
                    คอร์สออนไลน์ที่ออกแบบเพื่อผู้เรียนโดยเฉพาะ {c}
                  </h3>
                  <p className="mb-8 text-gray-400">
                    เรียนรู้ทุกทักษะสำคัญผ่านแพลตฟอร์มที่ออกแบบมาเพื่อประสบการณ์การเรียนออนไลน์ที่ดีที่สุด
                    ที่มีผู้เรียนแล้วกว่า 30,000 คน
                  </p>
                  <ul className="mb-14 space-y-4 font-light text-secondary">
                    <li>เรียนจบรับประกาศนียบัตร</li>
                    <li>สามารถกลับมาเรียนทบทวนได้</li>
                  </ul>
                  <div className="my-5">
                    <a
                      className="rounded-full bg-primary py-3 px-5 text-white"
                      href="#"
                    >
                      ดูคอร์สออนไลน์ทั้งหมด
                    </a>
                  </div>
                </div>
                <div className="col-span-7">
                  <img
                    src="/static/images/landing/home-our-services-course-edit-2x.jpg"
                    className="rounded-2xl shadow-md"
                    alt=""
                  />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}

export default OurServices
