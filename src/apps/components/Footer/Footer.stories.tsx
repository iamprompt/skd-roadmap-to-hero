import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Footer from './Footer'

export default {
  title: 'SKDHack/Footer',
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const Default = Template.bind({})
Default.args = {}
