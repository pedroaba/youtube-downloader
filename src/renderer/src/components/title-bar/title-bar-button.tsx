import { twMerge } from 'tailwind-merge'

import { Button, ButtonProps } from '../ui/button'

interface TitleBarButton extends ButtonProps {}

export function TitleBarButton({ className, ...rest }: TitleBarButton) {
  return (
    <Button
      className={twMerge(
        'h-10 rounded-none bg-transparent hover:bg-red-700 hover:text-gray-300/90',
        className,
      )}
      {...rest}
    />
  )
}
