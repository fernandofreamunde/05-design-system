import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignition-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem Ipsum Dolor Sit Amet',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
