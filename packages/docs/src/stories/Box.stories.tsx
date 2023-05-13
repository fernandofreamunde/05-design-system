import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignition-ux/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text> Testing the Box Component</Text>
      </>
    ),
  },
  argTypes: {
    children: { control: { type: null } },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
