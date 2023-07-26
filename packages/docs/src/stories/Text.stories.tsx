import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@scy-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum aperiam tempore nisi consequuntur voluptate dicta optio, sint dignissimos eaque aut mollitia culpa, magni nemo. Nam suscipit incidunt placeat id!',
    size: 'md',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Custom tag',
    as: 'strong',
  },
}
