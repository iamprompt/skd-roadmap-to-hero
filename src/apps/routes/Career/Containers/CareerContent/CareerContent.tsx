import { Tab } from '@headlessui/react'
import CareerTitle from '../../Components/CareerTitle'

const CareerContent = () => {
  return (
    <div className="py-16 pt-24">
      <div className="mx-auto max-w-screen-xl px-8">
        <CareerTitle title={{ title: '', subTitle: '' }} />
        <Tab.List className="my-10 flex w-full gap-x-5"></Tab.List>
      </div>
    </div>
  )
}

export default CareerContent
