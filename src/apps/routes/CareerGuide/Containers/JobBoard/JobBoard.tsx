import type { FC } from 'react'
import type { IJobData } from '@components/utils/JobData'

interface Props {
  data: IJobData[]
}

const JobBoard: FC<Props> = ({ data }) => {
  return (
    <section className="mt-8 mb-32 py-8">
      <div className="mx-auto max-w-screen-xl px-8">
        <div>
          <h2 className="mb-2 text-4xl font-medium">Job board</h2>
          <p>บริษัทที่เปิดรับสมัครตำแหน่ง Data Analyst</p>
        </div>
        <div className="mt-5 divide-y rounded-lg bg-white shadow-md">
          {data.map((item) => (
            <div
              key={`${item.company}-${item.title}`}
              className="flex items-center gap-x-4 p-4 px-5"
            >
              <div className="shrink-0 grow-0">
                <img
                  src={item.companyLogo}
                  alt={`${item.company}-${item.title}`}
                  className="h-14 w-32 object-contain"
                />
              </div>
              <div className="grow">
                <p className="text-xl font-semibold">{item.title}</p>
                <div className="flex gap-x-5">
                  <div>{item.type}</div>
                  <div>{item.salary}</div>
                  <div>Location: {item.location}</div>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="rounded-md bg-skooldio px-5 py-2 text-white"
                >
                  ดูเพิ่มเติม
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobBoard
