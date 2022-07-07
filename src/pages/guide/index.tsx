import Link from 'next/link'
import Hero from '~/apps/routes/Guide/Containers/Hero'
import { Layout } from '~/apps/layouts'
import Category from '~/containers/Category'
import Roadmap from '~/apps/routes/Guide/Containers/Roadmap'
import Certificate from '~/apps/routes/Guide/Containers/Certificate'

const Guide = () => {
  return (
    <Layout>
      <Hero />
      <div className="space-y-16">
        <Category
          title="เลือกสายอาชีพที่คุณสนใจ เพื่อดู Guide การเรียน"
          id="category-guide"
          className="scroll-m-16 pt-10"
        />
        <Roadmap />
        <Certificate />
        <div className="mt-40 mb-20 grid place-content-center 2xl:pl-64 2xl:pr-80">
          <div className="mt-10 grid items-center justify-center sm:grid-cols-1 lg:grid-cols-3">
            <p className="col-span-2 text-3xl font-semibold leading-10 lg:mr-36">
              หากสนใจ Skooldio Guide <br /> สามารถเลือกดูสายอาชีพที่สนใจ <br />
              เพื่อดู Roadmap ของแต่ละอาชีพได้เลย
            </p>
            <Link href="#category-guide">
              <button className=" h-16 w-80 rounded-full bg-skooldio py-4 px-8 text-center text-lg text-white">
                ดูสายอาชีพ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Guide
