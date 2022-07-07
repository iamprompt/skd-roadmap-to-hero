import { useRef } from 'react'
import CategoryCard from 'src/apps/components/CategoryCard'
import { mockCategoryData } from 'src/components/utils/mockCategoryData'

const HeroGuide = () => {
  return (
    <div className="grid h-hero place-content-center bg-gray-100 pl-10">
      <p className="text-2xl tracking-tighter">
        อัพสกิลให้พร้อมทำงานสำหรับคนอยากเปลี่ยนสาย
      </p>
      <p className="mt-2 mb-4 text-5xl font-semibold tracking-tighter">
        Skooldio Guide
      </p>
      <div className="flex">
        <div className="w-140">
          <p className="text-2xl tracking-tighter">
            หากคุณสนใจที่จะเปลี่ยนสายและต้องการอัปสกิลอย่างถูกต้อง ครบถ้วน
            พร้อมสมัครงาน พวกเราเป็นตัวช่วยให้กับคุณได้
          </p>
          <p className="mt-10 mb-1 text-2xl font-medium tracking-tighter">
            Skooldio Guide จะช่วยให้คุณ
          </p>
          <span className="flex items-center">
            <img src="/images/component/check_circle.svg" />
            <p className="ml-1 text-lg tracking-tighter">
              อัพสกิลครบถ้วนพร้อมทำงาน
            </p>
          </span>
          <span className="flex items-center">
            <img src="/images/component/check_circle.svg" />
            <p className="ml-1 text-lg tracking-tighter">
              ดำเนินตาม step ที่เหมาะสม
            </p>
          </span>
          <span className="flex items-center">
            <img src="/images/component/check_circle.svg" />
            <p className="ml-1 text-lg tracking-tighter">
              ได้รับ Certificate พิเศษ การันตีทักษะใช้ยื่นสมัครงาน
            </p>
          </span>
          <span className="flex items-center">
            <img src="/images/component/check_circle.svg" />
            <p className="ml-1 text-lg tracking-tighter">
              Partnership ที่เปิดรับสมัครตำแหน่งที่คุณสนใจ
            </p>
          </span>
          <button
            className="mr-2 mb-2 mt-6 rounded-full bg-skooldio py-4 px-8 text-center text-lg text-white"
            onClick={() => {
              document
                .getElementById('category-guide')
                ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }}
          >
            ลองดู Guide สายอาชีพที่สนใจ
          </button>
        </div>
        <div>
          <img src="/images/hero/fabulous-planning-1 1.svg" />
        </div>
      </div>
    </div>
  )
}

const CategoryGuide = () => {
  return (
    <div
      id="category-guide"
      className="mt-20 mb-20 grid items-center justify-center sm:pl-10  2xl:pl-80 2xl:pr-80"
    >
      <p className="mb-3 block text-4xl font-medium tracking-tight">
        ลองดูสายอาชีพที่คุณสนใจ เพื่อดู Roadmap{' '}
      </p>
      <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-4">
        {mockCategoryData.map((category) => {
          const { linkUrl, imgUrl, categoryName, description } = category || {}
          return (
            <CategoryCard
              linkUrl={linkUrl}
              imgUrl={imgUrl}
              categoryName={categoryName}
              description={description}
              key={categoryName}
            />
          )
        })}
      </div>
    </div>
  )
}

const RoadmapGuide = () => {
  return (
    <div className="mt-20 mb-40 sm:pl-10  2xl:pl-80 2xl:pr-80">
      <div>
        <p className="mb-3 text-5xl font-semibold">Roadmap</p>
        <p className="w-130 text-xl">
          เราคัดสรรคอร์สออนไลน์ของ Skooldio ที่เหมาะกับแต่ละสายอาชีพที่คุณสนใจ
          มาจัดเรียงให้เป็นลำดับ ตั้งแต่ระดับเริ่มต้นไปจนถึงระดับเนื้อหาเข้มข้น
          ให้คุณพร้อมที่จะทำงานได้จริงหลังเรียนจบ
        </p>
        <div className="mt-20 grid items-center justify-center">
          <img src="/images/hero/example-roadmap.svg" />
        </div>
      </div>
    </div>
  )
}

const AfterGuide = () => {
  return (
    <div className="sm:pl-10 2xl:pl-80 2xl:pr-80">
      <p className="ml-4 text-4xl font-semibold">
        เรียนจบรับ Certificate และทดสอบสกิลพร้อมไปสมัครงานได้เลย!
      </p>
      {/* <div className="mt-10 grid sm:grid-cols-1 sm:items-center sm:justify-center lg:grid-cols-2 lg:text-left"> */}
      <div className="mt-10 flex items-center">
        <img src="/images/hero/cert.svg" />
        <div className="w-120 ml-16 sm:mt-10 lg:mt-0">
          <p className="mb-3 text-3xl font-semibold">Certificate</p>
          <p className="text-2xl font-light">
            หลังเรียนครบทุกคอร์สตาม Roadmap แล้ว <br />
            ทาง skooldio มี certificate พิเศษ
            <br />
            ที่ช่วยยืนยันให้ว่าคุณได้เรียนรู้ทุกอย่างที่
            <br />
            สายอาชีพนี้ควรรู้พร้อมสำหรับการทำงาน
          </p>
        </div>
      </div>
      <div className="mt-10 grid sm:grid-cols-1 sm:items-center sm:justify-center lg:grid-cols-2">
        <div className="w-120 ml-4 sm:mt-10 lg:mt-0">
          <p className="mb-3 text-3xl font-semibold">Skillscore by Skooldio</p>
          <p className="text-2xl font-light">
            ทดสอบทักษะของคุณหลังเรียนจบ เพื่อให้มั่นใจ <br />
            ว่าคุณมีทักษะพร้อมสำหรับ การทำงานจริง <br />
            และรับผลหลังการทดสอบที่จะช่วยการันตี <br />
            ในการสมัครงานว่าคุณ คือ{' '}
            <span className="font-semibold">“ผู้เชี่ยวชาญในด้านนี้”</span>
          </p>
        </div>
        <img src="/images/hero/skill.svg" />
      </div>
    </div>
  )
}

const PartnerGuide = () => {
  return (
    <div className="mt-40 mb-44 grid items-center justify-center sm:pl-10 2xl:pl-64 2xl:pr-80">
      <div className="flex flex-row items-center">
        <div className="mr-16 ">
          <p className="text-3xl font-semibold">Partner</p>
          <p className="mt-3 mb-6 text-2xl">
            บริษัทพาร์ทเนอร์ที่เปิดรับสมัครตำแหน่งต่างๆ
            <br /> หลังจากเรียน Roadmap จบ สามารถมาตามหาบริษัท
            <br />
            ที่คุณสนใจ และพร้อมรับคุณเข้าทำงาน
          </p>
          <div className="-ml-8 grid h-96 grid-cols-3 grid-rows-4 place-items-center">
            <img src="/images/company/ais.svg" />
            <img src="/images/company/bangkok-bank.svg" />
            <img src="/images/company/k-bank.svg" />
            <img src="/images/company/mitr-phol.svg" />
            <img src="/images/company/ptt.svg" />
            <img src="/images/company/scb.svg" />
            <img src="/images/company/krungsri.svg" />
            <img src="/images/company/krungthai.svg" />
            <img src="/images/company/minor-food.svg" />
            <img src="/images/company/set.svg" />
            <img src="/images/company/tisco.svg" />
            <img src="/images/company/tmb.svg" />
          </div>
        </div>
        <img src="/images/company/example-kbank.svg" />
      </div>
    </div>
  )
}

const Guide = () => {
  return (
    <div>
      <HeroGuide />
      <CategoryGuide />
      <RoadmapGuide />
      <AfterGuide />
      <PartnerGuide />
      <div className="mt-40 mb-20 grid place-content-center 2xl:pl-64 2xl:pr-80">
        <div className="mt-10 grid items-center justify-center sm:grid-cols-1 lg:grid-cols-3">
          <p className="col-span-2 text-3xl font-semibold leading-10 lg:mr-36">
            หากสนใจ Skooldio Guide <br /> สามารถเลือกดูสายอาชีพที่สนใจ <br />
            เพื่อดู Roadmap ของแต่ละอาชีพได้เลย
          </p>
          <button
            className=" h-16 w-80 rounded-full bg-skooldio py-4 px-8 text-center text-lg text-white"
            onClick={() => {
              document
                .getElementById('category-guide')
                ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }}
          >
            ดูสายอาชีพ
          </button>
        </div>
      </div>
    </div>
  )
}
export default Guide
