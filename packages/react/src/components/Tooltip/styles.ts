import { keyframes, styled } from "../../styles";
import * as Tooltip from '@radix-ui/react-tooltip';

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(5px)'
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)'
  }
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-5px)'
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)'
  }
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-5px)'
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)'
  }
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(5px)'
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)'
  }
})


export const Root = styled(Tooltip.Root,{})

export const Content = styled(Tooltip.Content,{
  display: 'flex',
  padding: '$3 $4',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2',
  borderRadius: 5,
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$inter',
  fontWeight: 500,
  lineHeight: '$short',
  letterSpacing: '-0.09px',
  fontSize: '$sm',
  textAlign: 'center',
  animationDuration: '200ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: slideDownAndFade,
  },
  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: slideLeftAndFade,
  },
  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: slideUpAndFade,
  },
  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: slideRightAndFade,
  },
})

export const Arrow = styled(Tooltip.Arrow,{
  fill: '$gray900',
})