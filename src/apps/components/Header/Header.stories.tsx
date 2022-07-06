import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Header from './Header'

export default {
  title: 'SKDHack/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  navigation: [
    {
      label: 'คอร์สออนไลน์',
      href: '/browse?type=COURSE',
    },
    {
      label: 'เวิร์กชอป',
      href: '/browse?type=WORKSHOP',
    },
    {
      label: 'Bootcamp',
      href: '/bootcamp',
    },
    {
      label: 'สำหรับองค์กร',
      href: '/business',
    },
    {
      label: 'บทความ',
      href: '/blog',
    },
  ],
}
