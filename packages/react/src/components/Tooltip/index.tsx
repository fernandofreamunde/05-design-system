import * as TooltipRadix from '@radix-ui/react-tooltip'
import { Arrow, TooltipContainer, TooltipContent } from './styles'
import { ComponentProps } from 'react'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  content: string
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipContainer>
        <TooltipRadix.Trigger asChild>{props.children}</TooltipRadix.Trigger>

        <TooltipRadix.Portal>
          <TooltipContent sideOffset={5}>
            <Text size="sm">{props.content}</Text>
            <Arrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipContainer>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
