import { Toaster } from '@renderer/components/ui/sonner'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { TitleContextProvider } from './context/title-context'
import { router } from './router'

export function App() {
  return (
    <TitleContextProvider>
      <ThemeProvider storageKey="yt-download-theme">
        {/* @ts-ignore router is Router, but because https://typescript.tv/errors/#TS2742, is assigned as unknown */}
        <RouterProvider router={router} />

        <Toaster
          closeButton
          loadingIcon
          position="bottom-left"
          expand={false}
          visibleToasts={2}
        />
      </ThemeProvider>
    </TitleContextProvider>
  )
}
