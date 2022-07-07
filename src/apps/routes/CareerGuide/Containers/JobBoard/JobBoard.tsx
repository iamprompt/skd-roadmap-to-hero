const JobBoard = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-screen-xl px-8">
        <div>
          <h2 className="mb-2 text-4xl font-medium">Job board</h2>
          <p>บริษัทที่เปิดรับสมัครตำแหน่ง Data Analyst</p>
        </div>
        <div className="mt-5 divide-y rounded-lg bg-white shadow-md">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center gap-x-4 p-4 px-5">
              <div className="shrink-0 grow-0">
                <img
                  src="/static/images/landing/corporate-logo-v3-scb-x2.png"
                  alt=""
                  className="h-14 w-32 object-contain"
                />
              </div>
              <div className="grow">
                <p className="text-xl font-semibold">Data Analyst</p>
                <div className="flex gap-x-5">
                  <div>Full-time</div>
                  <div>30,000-45,000</div>
                  <div>Location: Rayong</div>
                </div>
              </div>
              <div>
                <button className="rounded-md bg-skooldio px-5 py-2 text-white">
                  ดูเพิ่มเติม
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobBoard
