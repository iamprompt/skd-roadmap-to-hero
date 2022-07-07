import type { FC } from 'react'

interface Props {
  title: string
  description: string
  imgUrl: string
}

const Hero: FC<Props> = ({ title, description, imgUrl }) => {
  return (
    <section className="bg-[#F9F9F9] py-24">
      <div className="mx-auto flex max-w-screen-xl items-center px-6">
        <div className="w-3/4">
          <p className="mb-3 text-6xl font-semibold">{title}</p>
          <p className="text-xl">{description}</p>
        </div>
        <div>
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </section>
  )
}
export default Hero
