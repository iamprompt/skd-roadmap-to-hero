import Link from 'next/link'

const Skillscore = () => {
  return (
    <section className="py-8">
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 items-center gap-20 px-8">
        <div>
          <p className="mb-3 text-3xl font-semibold">Skillscore by Skooldio</p>
          <p className="text-2xl font-light">คุณอยู่ในระดับ: -</p>
          <div className="mt-5 flex gap-x-5">
            <Link href="#category-guide">
              <a className="rounded-full bg-primary py-3 px-5 text-white">
                เริ่มทำแบบทดสอบ
              </a>
            </Link>
            <Link href="#category-guide">
              <a className="rounded-full border border-primary bg-white py-3 px-5 text-primary">
                ดาวน์โหลด
              </a>
            </Link>
          </div>
        </div>
        <div>
          <img src="/images/hero/skill.jpg" alt="Skooldio Skillscore" />
        </div>
      </div>
    </section>
  )
}

export default Skillscore
