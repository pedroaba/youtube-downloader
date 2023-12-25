import { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu'
import { Check } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { DropdownMenuItem } from '../ui/dropdown-menu'

type ThemeOptionProps = DropdownMenuItemProps & {
  inset?: boolean
  theme: 'light' | 'dark' | 'system'
  currentTheme: 'light' | 'dark' | 'system'
}

export function ThemeOption({
  theme,
  children,
  className,
  currentTheme,
  ...rest
}: ThemeOptionProps) {
  return (
    <DropdownMenuItem
      className={twMerge('flex items-center justify-between', className)}
      {...rest}
    >
      {children}
      {currentTheme === theme && (
        <Check
          className="h-4 w-4 text-gray-700 dark:text-gray-100"
          strokeWidth={3}
        />
      )}
    </DropdownMenuItem>
  )
}
