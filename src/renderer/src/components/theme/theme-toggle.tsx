import { MoreHorizontal } from 'lucide-react'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { ThemeOption } from './theme-option'
import { useTheme } from './theme-provider'

export function ToggleTheme() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="select-none rounded-none bg-transparent outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0">
          {/* <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> */}
          {/* <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
          <MoreHorizontal className="h-4 w-4 text-gray-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ThemeOption
          theme="light"
          currentTheme={theme}
          onClick={() => setTheme('light')}
        >
          Light
        </ThemeOption>
        <ThemeOption
          theme="dark"
          currentTheme={theme}
          onClick={() => setTheme('dark')}
        >
          Dark
        </ThemeOption>
        <ThemeOption
          theme="system"
          currentTheme={theme}
          onClick={() => setTheme('system')}
        >
          System
        </ThemeOption>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
