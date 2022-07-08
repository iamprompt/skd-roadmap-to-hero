import type { FC } from 'react'
import type { IStepGuide } from '@components/utils/DataCareer'

interface Props {
  steps: IStepGuide[]
}

const StepGuide: FC<Props> = ({ steps }) => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-screen-xl px-8">
        <div>
          <h2 className="mb-2 text-4xl font-medium">Step Guide</h2>
          <p>
            สเต็ปที่จะช่วยให้คุณสามารถวางแผนการเตรียมตัวสำหรับการเปลี่ยนสายได้อย่างเป็นระบบ
          </p>
        </div>
        <div className="mt-5 flex">
          {steps.map((step, i) => (
            <div key={step.title}>
              <div className="relative flex items-center">
                <svg
                  width="281"
                  height="88"
                  viewBox="0 0 281 88"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.0919 45L0 0H247.425L281 45L247.425 88H0L34.0919 45Z"
                    fill="url(#paint0_linear_217_848)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_217_848"
                      x1="247.5"
                      y1="88"
                      x2="-2.82805e-06"
                      y2="7.95389e-06"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF9600" />
                      <stop offset="1" stopColor="#FFEED6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 h-full w-full py-4 px-6 pl-12">
                  <p className="text-2xl font-semibold">STEP {i + 1}</p>
                  <p>{step.title}</p>
                </div>
              </div>
              <ul className="mt-4 list-inside list-disc space-y-2">
                {step.steps.map((s, j) => (
                  <li key={`${step.title}-${j}`}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StepGuide
