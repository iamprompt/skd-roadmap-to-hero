import type { FC } from 'react'

interface TitleProps {
  title: string
  subTitle: string
}

interface Props {
  className?: string
  title: TitleProps
}

const CareerTitle: FC<Props> = ({ className, title }) => {
  return (
    <div className={className}>
      <h2 className="mb-3 text-4xl font-semibold">{title.title}</h2>
      <p className="text-xl">{title.subTitle}</p>
    </div>
  )
}

export default CareerTitle
