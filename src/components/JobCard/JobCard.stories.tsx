import type { ComponentMeta, ComponentStory } from '@storybook/react'
import JobCard from './JobCard'

export default {
  title: 'Components/JobCard',
  component: JobCard,
} as ComponentMeta<typeof JobCard>

const Template: ComponentStory<typeof JobCard> = (args) => <JobCard {...args} />

export const Default = Template.bind({})
Default.args = {
  jobName: 'Data Analyst',
  jobDescription:
    'ทำงานวิเคราะห์ Big Data หรือข้อมูลจำนวนมหาศาล แล้วนำมา Visualized เพื่อสรุปหา insight ที่จะสร้างข้อได้เปรียบทางธุรกิจ',
  jobIcon: '/images/job-icon/psychology.png',
  jobLink: '#',
}
