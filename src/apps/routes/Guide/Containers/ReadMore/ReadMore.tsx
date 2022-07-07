import Link from 'next/link'

const ReadMore = () => {
  return (
    <section className="py-10">
      <div className="mx-auto flex max-w-screen-xl items-center justify-center">
        <p className="col-span-2 text-3xl font-semibold leading-10 lg:mr-36">
          หากสนใจ Skooldio Guide <br /> สามารถเลือกดูสายอาชีพที่สนใจ <br />
          เพื่อดู Roadmap ของแต่ละอาชีพได้เลย
        </p>
        <Link href="#category-guide">
          <button className="h-16 w-80 rounded-full bg-skooldio py-4 px-8 text-center text-lg text-white">
            ดูสายอาชีพ
          </button>
        </Link>
      </div>
    </section>
  )
}

export default ReadMore
