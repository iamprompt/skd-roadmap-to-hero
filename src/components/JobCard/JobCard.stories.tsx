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

export const MultipleJobCards = () => (
  <div className="flex flex-row space-x-4">
    <JobCard
      jobName="Data Analyst"
      jobDescription="ทำงานวิเคราะห์ Big Data หรือข้อมูลจำนวนมหาศาล แล้วนำมา Visualized เพื่อสรุปหา insight ที่จะสร้างข้อได้เปรียบทางธุรกิจ"
      jobIcon="/images/job-icon/psychology.png"
      jobLink="#"
    />
    <JobCard
      jobName="Data Scientist"
      jobDescription="ทำงานวิเคราะห์ Big Data โดยใช้หลักการทางคณิตศาสตร์เพื่อให้สามารถคาด การณ์ได้จาก Data ที่มีผ่าน Machine Learning"
      jobIcon="/images/job-icon/science.png"
      jobLink="#"
    />
    <JobCard
      jobName="Data Engineer"
      jobDescription="ทำงานจัดเก็บ รวบรวม Big Data ให้เป็นระเบียบ มีคุณภาพ และพร้อมอยู่ใน format ที่จะสามารถส่งไปเพื่อวิเคราะห์หรือใช้งานต่อ"
      jobIcon="/images/job-icon/engineering.png"
      jobLink="#"
    />
  </div>
)
