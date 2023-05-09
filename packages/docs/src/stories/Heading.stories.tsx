import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignition-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem Ipsum Dolor Sit Amet',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading 1',
    as: 'h1',
    size: '4xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default heading will have the `h2` tag. You can change this by passing the `as` prop.',
      },
    },
  },
}
