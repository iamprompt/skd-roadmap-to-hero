import { Icon } from '@iconify/react'
import searchIcon from '@iconify/icons-heroicons-outline/search'

const Hero = () => {
  return (
    <section className="bg-[#F9F9F9]">
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-5 px-8 py-24">
        <div>
          <h1 className="mb-6 text-5xl font-medium">
            อัปสกิลให้คุณพร้อมแข่งขันในยุคดิจิทัล
          </h1>
          <p className="font-regular mb-6 text-lg text-gray-400">
            ครบทุกทักษะที่จำเป็นในการทำงาน
            ผ่านการเรียนในรูปแบบคอร์สออนไลน์หรือเวิร์กชอป
          </p>
          <form className="flex space-x-5">
            <div className="relative">
              <Icon
                icon={searchIcon}
                className="absolute inset-0 mx-3 h-full text-2xl text-primary"
              />
              <input
                type="text"
                className="h-11 w-72 appearance-none rounded-full border border-gray-200 pl-12 outline-none transition-all placeholder:font-light hover:border-orange-300 focus-visible:border-orange-300 focus-visible:shadow-[rgba(250,_170,_34,_0.1)_0px_1px_0px,_rgba(250,_170,_34,_0.1)_0px_8px_24px,_rgba(250,_170,_34,_0.1)_0px_16px_48px]"
                placeholder="วันนี้อยากอัปสกิลเรื่องไหน"
                id="search-keyword"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-primary px-5 text-white"
              onClick={(e) => {
                e.preventDefault()
                console.log('Search Click!')
              }}
            >
              ค้นหา
            </button>
          </form>
        </div>
        <div>
          <video
            preload="auto"
            autoPlay
            loop
            poster="/static/images/landing/home-hero-image-2x.png"
          >
            <source
              src="/static/images/landing/home-hero-animation.webm"
              type="video/webm"
            />
            <source
              src="/static/images/landing/home-hero-animation.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero
