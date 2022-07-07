const CourseSupplementary = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-screen-xl px-8">
        <div>
          <h2 className="mb-2 text-4xl font-medium">Courses Supplementary</h2>
          <p>
            สรุปและเอกสารประกอบการเรียนของแต่ละคอร์สเป็นรางวัลสุดพิเศษให้คุณ
          </p>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex flex-col rounded-lg bg-gradient-to-tl from-[#FE9400] via-[#FFBF65] to-[#FFE9CA] p-4 px-5"
            >
              <div className="h-24 text-xl font-semibold">
                Web Scraping Fundamentals with Python
              </div>
              <div className="flex justify-end">
                <button className="rounded-full bg-[#4E4E4E] px-5 py-2 text-white">
                  ดาวน์โหลด
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseSupplementary
