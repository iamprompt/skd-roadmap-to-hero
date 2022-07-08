const Roadmap = () => {
  return (
    <section>
      <div className="mx-auto mt-40 max-w-screen-xl px-8">
        <h2 className="mb-4 text-4xl font-medium">Roadmap</h2>
        <p className="w-130 text-xl">
          เราคัดสรรคอร์สออนไลน์ของ Skooldio ที่เหมาะกับแต่ละสายอาชีพที่คุณสนใจ
          มาจัดเรียงให้เป็นลำดับ ตั้งแต่ระดับเริ่มต้นไปจนถึงระดับเนื้อหาเข้มข้น
          ให้คุณพร้อมที่จะทำงานได้จริงหลังเรียนจบ
        </p>
        <div className="mt-20 flex items-center justify-center">
          <img
            src="/images/hero/example-roadmap.svg"
            className="h-[640px]"
            alt="Roadmap"
          />
        </div>
      </div>
    </section>
  )
}

export default Roadmap
