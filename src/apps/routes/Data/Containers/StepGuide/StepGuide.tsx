const StepGuide = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-screen-xl items-center px-8">
        <div className="mb-12">
          <p className="mb-1 text-4xl font-semibold">Step Guide</p>
          <p className="text-2xl">
            สเต็ปที่จะช่วยให้คุณสามารถวางแผนการเตรียมตัวสำหรับการเปลี่ยนสายได้อย่างเป็นระบบ
          </p>
        </div>
        <div className="flex">
          <div>
            <img src="/images/component/step1.svg" />
            <ul className="mt-6 ml-4 list-inside list-disc text-xl">
              <li>ดูรายละเอียดงาน</li>
              <li>ฟังประสบการณ์ทำงานจริง</li>
            </ul>
          </div>
          <div>
            <img src="/images/component/step2.svg" />
            <ul className="mt-6 ml-4 list-inside list-disc text-xl">
              <li>ฟัง podcast</li>
              <li>อ่านบทความ</li>
              <li>ติดตามเพจ/กลุ่ม</li>
            </ul>
          </div>
          <div>
            <img src="/images/component/step3.svg" />
            <ul className="mt-6 ml-4 list-inside list-disc text-xl">
              <li>เรียน course กับ Skooldio</li>
              <li>หาข้อมูลจาก source อื่นๆ</li>
              <li>ทำ Skill test วัดความสามารถ</li>
            </ul>
          </div>
          <div>
            <img src="/images/component/step4.svg" />
            <ul className="mt-6 ml-4 list-inside list-disc text-xl">
              <li>เก็บ certificate</li>
              <li>เตรียม resume</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default StepGuide
