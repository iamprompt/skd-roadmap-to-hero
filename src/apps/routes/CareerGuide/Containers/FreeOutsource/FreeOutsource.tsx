const FreeOutsource = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-screen-xl px-8">
        <div>
          <h2 className="mb-2 text-4xl font-medium">Free outsource</h2>
          <p>
            แหล่งการเรียนรู้ฟรีที่เหมาะกับอาชีพนี้ เราเลือกมาไว้ให้คุณแล้ว
            สู้ๆนะ
          </p>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-5">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col rounded-lg bg-gradient-to-tl from-[#3D4B88] via-[#7B8AC8] to-[#C9CDDE] p-4 px-5 text-white"
            >
              <div className="mb-3 h-16 text-2xl font-semibold">
                Data Analysis with Python
              </div>
              <div className="mb-2 underline">DataRockie</div>
              <p className="mb-3 h-12 line-clamp-2">
                เหมาะสำหรับผู้ไม่มีพื้นฐานการ เขียนโปรแกรมมาก่อน
                เหมาะสำหรับผู้ไม่มีพื้นฐานการ เขียนโปรแกรมมาก่อน
              </p>
              <div className="flex justify-end">
                <button className="rounded-full bg-white px-5 py-2 text-black shadow-lg">
                  อ่านเพิ่มเติม
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FreeOutsource
