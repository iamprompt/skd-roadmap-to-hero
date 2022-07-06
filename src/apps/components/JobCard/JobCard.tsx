import type { JobCardProps } from './types'

const JobCard = ({
  jobName,
  jobDescription,
  jobIcon,
  jobLink,
}: JobCardProps) => {
  return (
    <a href={jobLink} className="flex w-92 flex-col rounded-md p-4 shadow-md">
      <div className="mb-6 w-83">
        <div className="relative mb-6 flex h-11 align-bottom">
          <p className="pt-2 text-2xl font-semibold">{jobName}</p>
          <img className="absolute right-0" src={jobIcon} />
        </div>
        <p className="text-gray-400">{jobDescription}</p>
      </div>
      <div className="flex flex-row items-center justify-end">
        <p className="mr-2 text-xs">อ่านเพิ่มเติม</p>
        <svg
          className="h-5 w-3"
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

export default JobCard
