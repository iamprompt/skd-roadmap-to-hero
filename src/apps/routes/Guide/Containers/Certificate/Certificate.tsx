const Certificate = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-8">
        <h2 className="mb-16 text-4xl font-medium">
          เรียนจบรับ Certificate และทดสอบสกิลพร้อมไปสมัครงานได้เลย!
        </h2>
        <div className="space-y-10">
          <div className="grid grid-cols-2 items-center gap-20">
            <div>
              <img
                src="/images/hero/skd-certificate-example.jpg"
                alt="Skooldio Certificate of Completion"
                className="rounded-xl drop-shadow-xl"
              />
            </div>
            <div>
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
          <div className="grid grid-cols-2 items-center gap-20">
            <div>
              <p className="mb-3 text-3xl font-semibold">
                Skillscore by Skooldio
              </p>
              <p className="text-2xl font-light">
                ทดสอบทักษะของคุณหลังเรียนจบ เพื่อให้มั่นใจ <br />
                ว่าคุณมีทักษะพร้อมสำหรับ การทำงานจริง <br />
                และรับผลหลังการทดสอบที่จะช่วยการันตี <br />
                ในการสมัครงานว่าคุณ คือ{' '}
                <span className="font-semibold">“ผู้เชี่ยวชาญในด้านนี้”</span>
              </p>
            </div>
            <div>
              <img src="/images/hero/skill.jpg" alt="Skooldio Skillscore" />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-20">
            <div>
              <p className="mb-3 text-3xl font-semibold">Partner</p>
              <p className="text-2xl font-light">
                บริษัทพาร์ทเนอร์ที่เปิดรับสมัครตำแหน่งต่างๆ หลังจากเรียน Roadmap
                จบ สามารถมาตามหาบริษัท ที่คุณสนใจ และพร้อมรับคุณเข้าทำงาน
              </p>
              <div className="mt-10 grid grid-cols-3 grid-rows-4 place-items-center">
                {[
                  'ais',
                  'bbl',
                  'kbank',
                  'krungsri',
                  'ktb',
                  'minor',
                  'mitr-phol',
                  'ptt',
                  'scb',
                  'set',
                  'tisco',
                  'tmb',
                ].map((partner) => (
                  <div key={partner} className="h-20">
                    <img
                      src={`/images/company/${partner}.svg`}
                      alt={partner}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/images/company/example-kbank.svg" alt="KBank Jobs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificate
