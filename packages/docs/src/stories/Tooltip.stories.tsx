import { Box, Button, Tooltip, TooltipProps } from '@ignition-ux/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    children: { control: { type: null } },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a tooltip',
  },
}
