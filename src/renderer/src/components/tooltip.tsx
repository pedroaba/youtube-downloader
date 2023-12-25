import { TooltipProviderProps } from '@radix-ui/react-tooltip'

import * as ShadCnUiTooltip from './ui/tooltip'

interface TooltipProps extends TooltipProviderProps {
  message: string
}

export function Tooltip({ children, message, ...rest }: TooltipProps) {
  return (
    <ShadCnUiTooltip.TooltipProvider delayDuration={1} {...rest}>
      <ShadCnUiTooltip.Tooltip>
        <ShadCnUiTooltip.TooltipTrigger asChild>
          {children}
        </ShadCnUiTooltip.TooltipTrigger>
        <ShadCnUiTooltip.TooltipContent>
          <p>{message}</p>
        </ShadCnUiTooltip.TooltipContent>
      </ShadCnUiTooltip.Tooltip>
    </ShadCnUiTooltip.TooltipProvider>
  )
}
