import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  border: '1px solid $gray600',
  padding: '$3 $5',
  boxSizing: 'border-box',
  width: '$80',
  height: '$20',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
})

export const Title = styled(Toast.Title, {
  display: 'flex',
  justifyContent: 'space-between',
})

export const Close = styled(Toast.Close, {
  unset: 'all',
  border: 0,
  padding: 0,
  backgroundColor: '$gray800',
  lineHeight: 0,
  width: '$3',
  height: '$3',

  button: {
    unset: 'all',
    padding: 0,
    margin: 0,
    display: 'inline',
    backgroundColor: '$gray800',
    lineHeight: 0,
    border: 0,

    svg: {
      color: '$gray200',
    },
  },
})

export const Description = styled(Toast.Description, {
  p: { color: '$gray200' },
})

export const ViewPort = styled(Toast.Viewport, {
  // --viewport-padding: 25px,
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  gap: '$3',
  width: '$80',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
