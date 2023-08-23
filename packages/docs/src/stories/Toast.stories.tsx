import type { Meta, StoryObj } from '@storybook/react'
import {  Button, ToastProps, ToastProvider, useToast } from '@scy-ui/react'

const Demo = (props:ToastProps) => {
  const {showToast} = useToast()
  return (
    <>
        <Button
          onClick={() => {
            showToast({
              title: 'A Toast',
              description: 'A description'
            })
          }}
        >
          Add new Toast
        </Button>
    </>
  )
}

export default {
  component: Demo,
  title: 'Data display/Toast',
  tags: ['autodocs'],
  args: {
    title: 'A Toast',
    description: 'A description'
  },
  argTypes: {
  },
  parameters: {
    docs: {
      source: {
        code: `
const Demo = (props:ToastProps) => {
  const {showToast} = useToast()
  return (
    <ToastProvider>
        <Button
          onClick={() => {
            showToast({
              title: 'A Toast',
              description: 'A description'
            })
          }}
        >
          Add new Toast
        </Button>
    </ToastProvider>
  )
}
        `,
      },
    },    
  },
  decorators: [
    (Story) => {
      return (
        <ToastProvider>
          <Story />
        </ToastProvider>
      )
    }
  ]
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
}