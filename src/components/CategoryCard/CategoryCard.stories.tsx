import type { ComponentMeta, ComponentStory } from '@storybook/react'
import CategoryCard from './CategoryCard'

export default {
  title: 'Components/CategoryCard',
  component: CategoryCard,
} as ComponentMeta<typeof CategoryCard>

const Template: ComponentStory<typeof CategoryCard> = (args) => (
  <CategoryCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  linkUrl: '#',
  imgUrl: '/images/data-icon.png',
  categoryName: 'Data',
  description: 'เรียนรู้และฝึกฝนกระบวนการคิดสร้างมูลค่าให้ธุรกิจด้วยข้อมูล',
}
