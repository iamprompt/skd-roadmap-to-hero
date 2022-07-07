import { InlineIcon } from '@iconify/react'
import checkCircle from '@iconify/icons-heroicons-outline/check-circle'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-[#F9F9F9] py-16">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-20 px-8">
        <div>
          <div className="w-full">
            <p className="mb-3 text-xl">
              อัปสกิลให้พร้อมทำงานสำหรับคนอยากเปลี่ยนสาย
            </p>
            <h3 className="mb-6 text-5xl font-bold">Skooldio Guide</h3>
            <p className="text-2xl">
              หากคุณสนใจที่จะเปลี่ยนสายและต้องการอัปสกิลอย่างถูกต้อง ครบถ้วน
              พร้อมสมัครงาน พวกเราเป็นตัวช่วยให้กับคุณได้
            </p>
            <p className="mt-10 mb-3 text-2xl font-medium">
              Skooldio Guide จะช่วยให้คุณ
            </p>
            <ul className="space-y-2 text-lg">
              <li className="flex items-center">
                <InlineIcon
                  icon={checkCircle}
                  className="mr-2 text-3xl text-primary"
                />
                อัพสกิลครบถ้วนพร้อมทำงาน
              </li>
              <li className="flex items-center">
                <InlineIcon
                  icon={checkCircle}
                  className="mr-2 text-3xl text-primary"
                />
                ดำเนินตาม step ที่เหมาะสม
              </li>
              <li className="flex items-center">
                <InlineIcon
                  icon={checkCircle}
                  className="mr-2 text-3xl text-primary"
                />
                ได้รับ Certificate พิเศษ การันตีทักษะใช้ยื่นสมัครงาน
              </li>
              <li className="flex items-center">
                <InlineIcon
                  icon={checkCircle}
                  className="mr-2 text-3xl text-primary"
                />
                Partnership ที่เปิดรับสมัครตำแหน่งที่คุณสนใจ
              </li>
            </ul>
            <div className="mt-10">
              <Link href="#category-guide">
                <a className="rounded-full bg-primary py-3 px-5 text-white">
                  ลองดู Guide สายอาชีพที่สนใจ
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/hero/fabulous-planning-1 1.svg"
            alt="Skooldio Guide"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
