import { FC } from 'react'
import { ProductCardProps } from './types'

const ProductCard: FC<ProductCardProps> = ({ imgUrl, title, info }) => {
  return (
    <div className="block h-96 w-80 rounded-lg bg-white ">
      <div>
        <img className="rounded-t-lg" src={imgUrl} />
      </div>
      <div>
        <div>
          <span className="text-3 text-yellow-400">ONLINE COURSE</span>
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
        <div>
          <div>
            <span></span>
            <span className="text-yellow-500">5.0</span>
          </div>
          <div className="inline-flex">
            <img
              className="h-8 w-8"
              src="https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg"
            />
            <p>Skooldio Team</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ProductCard
