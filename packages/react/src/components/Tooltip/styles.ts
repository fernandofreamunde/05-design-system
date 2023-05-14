import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'
// import { keyframes } from '@stitches/react'

export const TooltipContainer = styled(Tooltip.Root, {
  border: '1px solid $purple500',
})
export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

export const TooltipContent = styled(Tooltip.Content, {
  /* Auto layout */
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '$3 $4',
  gap: '$2',

  background: '$gray900',
  borderRadius: '$sm',
  color: '$gray100',

  // width: 210px;
  // height: 44px;

  // /* Inside auto layout */

  // flex: none;
  // order: 0;
  // flex-grow: 0;
})
