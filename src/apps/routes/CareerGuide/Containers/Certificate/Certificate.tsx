import clsx from 'clsx'
import type { FC } from 'react'

interface Props {
  certificateUrl?: string
}

const Certificate: FC<Props> = ({ certificateUrl }) => {
  return (
    <section className="mt-28 py-8">
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 items-center gap-20 px-8">
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
            เกียรติบัตรคูล ๆ สำหรับผู้ที่เรียนตาม Guide จนครบ
            <br />
            เพื่อการันตีว่ามีความรู้เพียงพอสำหรับอาชีพที่คุณสนใจ
          </p>
          <div className="mt-10">
            <a
              href={certificateUrl}
              download
              className={clsx(
                'rounded-full py-3 px-5',
                certificateUrl
                  ? 'bg-primary text-white'
                  : 'bg-[#EAEAEA] text-[#C8C8C8]'
              )}
            >
              ดาวน์โหลด
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificate
