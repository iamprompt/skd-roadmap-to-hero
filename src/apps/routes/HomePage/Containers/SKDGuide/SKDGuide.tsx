const SKDGuide = () => {
  return (
    <section className="my-20 bg-[#F9F9F9] py-10">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-20 px-8">
        <div className="w-full">
          <p className="mb-3 text-xl">
            อัปสกิลให้พร้อมทำงานสำหรับคนอยากเปลี่ยนสาย
          </p>
          <h3 className="mb-6 text-5xl font-bold">Skooldio Guide</h3>
          <p>
            หากคุณสนใจที่จะเปลี่ยนสาย แต่ยังไม่รู้ว่าควรจะเริ่มเรียนอะไรบ้าง
            เรามีตัวช่วยให้คุณสามารถเรียนได้อย่างมีระบบตามขั้นตอน
            ได้เรียนเนื้อหาครบถ้วน และมีสกิลที่พร้อมสำหรับการทำงาน
          </p>
          <div className="mt-10">
            <a
              className="rounded-full bg-primary py-3 px-5 text-white"
              href="/guide"
            >
              อ่านรายละเอียดเพิ่มเติม
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <img
            src="/static/images/landing/skd-guide-roadmap.png"
            alt="Road Map"
            className="h-[500px]"
          />
        </div>
      </div>
    </section>
  )
}

export default SKDGuide
