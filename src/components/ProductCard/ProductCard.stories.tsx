import { ComponentStory } from '@storybook/react'
import ProductCard from './ProductCard'

export default {
  component: ProductCard,
  Title: 'Components/ProductCard',
} as ComponentMeta<typeof ProductCard>

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
)

export const Default = () => Template.bind({})
Default.args = {
  imgUrl:
    'https://assets.skooldio.com/courses/design-with-figma/UI+Design+with+Figma.png',
  title: 'UI Design with Figma',
  info: 'ออกแบบ UI ไปจนถึงการทำ Prototype ด้วย Figma',
}
export const NoArgs = () => <ProductCard />
