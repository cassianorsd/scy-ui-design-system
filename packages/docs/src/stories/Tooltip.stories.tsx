import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps, TooltipProvider } from '@scy-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: (
      <Button
        size="md"
        variant="primary"
      >
        Hover Me
      </Button>
    ),
    text: 'Tooltip text',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },  
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Box>
          <Story/>
        </Box>
      </TooltipProvider>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}