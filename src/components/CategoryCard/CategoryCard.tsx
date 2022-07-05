import type { CategoryCardProps } from './types'

const CategoryCard = ({
  linkUrl,
  imgUrl,
  categoryName,
  description,
}: CategoryCardProps) => {
  return (
    <a
      href={linkUrl}
      className="flex w-72 items-center rounded-md pt-8 pl-8 pb-8 shadow-md"
    >
      <div className="w-48">
        <div className="mb-6 flex items-center">
          <img src={imgUrl} />
          <p className="text-2xl font-semibold">{categoryName}</p>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="pl-4 pr-4">
        <svg
          className="h-5 w-3 text-yellow-500"
          viewBox="0 0 11 18"
          fill="none"
          stroke="currentColor"
        >
          <path d="M1 17l9-8-9-8" />
        </svg>
      </div>
    </a>
  )
}
export default CategoryCard
