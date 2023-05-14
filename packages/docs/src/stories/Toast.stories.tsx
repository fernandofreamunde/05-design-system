import { Box, Toast, ToastProps } from '@ignition-ux/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Toast',
  component: Toast,
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
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    isDocs: true,
  },
}
