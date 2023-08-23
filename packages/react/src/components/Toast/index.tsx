import * as RadixToast from '@radix-ui/react-toast'
import { Close, Description, Root, Title, Viewport } from './styles';
import { X } from '@phosphor-icons/react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

interface ToastMessage {
  id: string;
  title: string;
  description?: string;
}

interface ToastContextProps {
  showToast: (message: Omit<ToastMessage,'id'>) => void;
}

const ToastContext = createContext({} as ToastContextProps);

interface ToastProviderProps extends RadixToast.ToastProviderProps {}

export function ToastProvider({children, ...props}:ToastProviderProps) {
  const [toasts,setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((message:Omit<ToastMessage,'id'>)=>{
    setToasts((prevToasts)=>[...prevToasts,{
      ...message,
      id: uuid()
    }])
  },[])

  const removeToast = useCallback((id:string)=>{
    setTimeout(()=>{
      setToasts((prevToasts)=>prevToasts.filter((toast)=>toast.id !== id))
    },500)
  },[])

  return (
    <ToastContext.Provider value={{
      showToast
    }}>
      <RadixToast.Provider {...props}>
        {children}
        {toasts.map((toast)=>{
          return (
            <Toast 
              key={toast.id}
              title={toast.title}
              description={toast.description}
              onOpenChange={(open)=>{
                if(!open) {
                  removeToast(toast.id)
                }
              }}
            />
          )
        })}
        <Viewport />
      </RadixToast.Provider>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext);
  if(!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export interface ToastProps extends RadixToast.ToastProps {
  title: string;
  description?: string;
}

export function Toast({title,description,...props}:ToastProps) {
  return (
    <>
      <Root {...props}>
        <Title>
          {title}
        </Title>
        <Description>
          {description}
        </Description>
        <Close>
          <X size={20} weight="bold"/>
        </Close>
      </Root>
    </>
  )
}



// export function Toast({
//   title,
//   description,
// }:ToastProps) {
//   const [open, setOpen] = useState(false);
//   return (
//     <RadixToast.Provider>
//         <button
//           onClick={() => setOpen(true)}
//         >
//           Add
//         </button>
//         <RadixToast.Root open={open} onOpenChange={setOpen}>
//           <RadixToast.Title>
//             Title
//           </RadixToast.Title>
//           <RadixToast.Description>
//             Descr
//           </RadixToast.Description>
//           <RadixToast.Close />
//         </RadixToast.Root>

//         <RadixToast.Viewport />      
//     </RadixToast.Provider>
//   )
//   // return (
//   //   <RadixToast.Provider
//   //     swipeDirection="right"
//   //   >
//   //     <button
//   //       onClick={() => {
//   //         setOpen(true)
//   //       }}
//   //     >
//   //       Show
//   //     </button>
//   //     <Root 
//   //         open={open}
//   //         onOpenChange={setOpen}
//   //       >
//   //       <Title>
//   //       {title}
//   //       </Title>
//   //       <Description>
//   //         {description}
//   //       </Description>
//   //       <Close>
//   //         <X size={20} weight="bold"/>
//   //       </Close>
//   //     </Root>
//   //     <Viewport/>
//   //   </RadixToast.Provider>
//   // );
// }

Toast.displayName = 'Toast';