import { createContext } from "react";
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { Arrow, Content, Root } from "./styles";
import { Plus } from "@phosphor-icons/react";


// export const TooltipContext = createContext({} as TooltipContextProps);

export function TooltipProvider({ children,...props }: RadixTooltip.TooltipProviderProps) {
  return (
    <RadixTooltip.Provider {...props}>
      {children}
    </RadixTooltip.Provider>
  );
}

export interface TooltipProps extends RadixTooltip.TooltipProps {
  text?: string;
  children: React.ReactNode;
}

export function Tooltip({text,children,...props} : TooltipProps) {
  return (
    <Root {...props}>
      <RadixTooltip.Trigger asChild>
        {children}
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <Content className="TooltipContent" sideOffset={5}>
          {text}
          <Arrow className="TooltipArrow" />
        </Content>
      </RadixTooltip.Portal>
    </Root>
  );
}

Tooltip.displayName = 'Tooltip';