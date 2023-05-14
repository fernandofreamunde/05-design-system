import * as ToastRadix from '@radix-ui/react-toast'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { Close, Description, Title, ToastContainer, ViewPort } from './styles'
import { Text } from '../Text'
import { X } from 'phosphor-react'
import { Button } from '../Button'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  isDocs?: boolean
}

export function Toast(props: ToastProps) {
  const [open, setOpen] = useState(false)
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  useEffect(() => {
    console.log(open)
    return () => clearTimeout(timerRef.current)
  }, [open])

  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 7)
  const oneWeekAway = new Date(inOneWeek)

  function trigger(title: string, description: string) {
    setToastTitle(title)
    setToastDescription(description)
    timerRef.current = window.setTimeout(() => {
      eventDateRef.current = oneWeekAway
      setOpen(true)
    }, 100)
  }

  return (
    <ToastRadix.Provider swipeDirection="right">
      <ToastContainer open={open} onOpenChange={setOpen}>
        <Title>
          <Text size={'xl'} as="strong">
            {toastTitle}
          </Text>

          <Close>
            <button>
              <X size={15} />
            </button>
          </Close>
        </Title>

        <Description>
          <Text size={'sm'}>{toastDescription}</Text>
        </Description>
      </ToastContainer>

      <ViewPort />

      {props.isDocs && (
        <Button
          onClick={() =>
            trigger(
              'Not the best way to do this',
              'Will figure way to set on Storybook later',
            )
          }
        >
          tigger
        </Button>
      )}

      {props.children}
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
