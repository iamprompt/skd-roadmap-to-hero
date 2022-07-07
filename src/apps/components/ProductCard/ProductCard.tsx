import clsx from 'clsx'
import type { FC } from 'react'
import type { ProductCardProps } from './types'

const ProductCard: FC<ProductCardProps> = ({
  imgUrl,
  title,
  info,
  hour,
  instructor,
  instructorImgUrl,
  className,
}) => {
  const star = (
    <svg
      className="h-6 w-6 text-yellow-500"
      fill="currentColor"
      stroke="none"
      viewBox="0 0 24 24"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  )

  return (
    <div className={clsx('block w-72 rounded-lg shadow-lg', className)}>
      <div>
        <img className="rounded-t-lg" src={imgUrl} />
      </div>
      <div className=" mt-3 mr-3 ml-4 mb-5 ">
        <div className="mb-16 min-h-137">
          <span className="text-sm text-yellow-400">ONLINE COURSE</span>
          <p className="text-xl font-medium">{title}</p>
          <p className="text-gray-400">{info}</p>
        </div>
        <div>
          <div className="mb-4 flex flex-row">
            <span className="flex flex-row">
              {[...Array(5)].map((index) => (
                <svg
                  className="h-5 w-5 text-yellow-500"
                  fill="currentColor"
                  stroke="none"
                  viewBox="0 0 24 24"
                  key={index}
                >
                  {star}
                </svg>
              ))}
            </span>
            <span className="ml-1 text-yellow-500">5.0</span>
          </div>
          <div className="flex items-center">
            <img className="mr-2 h-8 w-8 rounded-full" src={instructorImgUrl} />
            <p className="align-middle text-xs">{instructor}</p>
          </div>
        </div>
      </div>
      <div className="inset-x-0 bottom-0 flex items-center border-t p-2">
        <svg
          className="mr-2 h-4 w-4 text-yellow-500"
          fill="currentColor"
          stroke="none"
          viewBox="0 0 24 24"
        >
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
        <p className="text-xs">{hour}</p>
      </div>
    </div>
  )
}

export default ProductCard
