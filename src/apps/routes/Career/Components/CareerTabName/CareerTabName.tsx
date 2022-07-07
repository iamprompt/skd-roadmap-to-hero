import { Tab } from '@headlessui/react'
import clsx from 'clsx'

const CareerTabName = (name: string) => {
  return (
    <Tab className="h-full text-xl font-medium outline-none">
      {({ selected }) => (
        <div
          className={clsx(
            'border-b-4 px-4 py-1',
            selected
              ? 'border-skooldio text-secondary'
              : 'border-gray-300 text-gray-400'
          )}
        >
          {name}
        </div>
      )}
    </Tab>
  )
}

export default CareerTabName
