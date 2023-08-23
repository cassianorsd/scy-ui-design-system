import { keyframes, styled } from "../../styles";
import * as Toast from '@radix-ui/react-toast'

const slideIn = keyframes({
  from: { transform: 'translateX(100%)' },
  to: { transform: 'translateX(0)' },
})

const hide = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(100%)' },
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$8',
  margin:0,
  zIndex: 2147483647,
  listStyle: 'none',
  color: '$gray200',
  fontFamily: '$default',
})

export const Root = styled(Toast.Root, {
  backgroundColor: '$white',
  borderRadius: '$sm',
  width: 360,
  padding: '$3 $5',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  border: '5px solid $gray600',
  position: 'relative',
  background: '$gray800',
  '&[data-state="open"]': {
    animation: `${slideIn} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 200ms ease-in`,
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 200ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))'
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out'
  }
})

export const Title = styled(Toast.Title, {
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
  color: '$white',
})

export const Description = styled(Toast.Title, {
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
})

export const Close = styled(Toast.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  border: 'none',
  background: 'transparent',
  color: '$gray200',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 0,
})

