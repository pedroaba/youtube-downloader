import { useTitle } from '@renderer/context/title-context'
import { Minus, MonitorPlay, Square, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { ToggleTheme } from '../theme/theme-toggle'
// import { useState } from 'react'
import { TitleBarButton } from './title-bar-button'

// type MaximizeParamsType = {
//   isMaximized: boolean
// }

export function TitleBar() {
  // const [isMaximized, setMaximizedWindow] = useState<boolean>(false)

  // window.electron.ipcRenderer.on(
  //   'frame-events: maximize',
  //   (_, { isMaximized: maximized }: MaximizeParamsType) => {
  //     setMaximizedWindow(maximized)
  //   },
  // )

  const [version, setVersion] = useState<string>('')
  const { title } = useTitle()

  useEffect(() => {
    window.electron.ipcRenderer
      .invoke('version')
      .then((data: { version: string }) => {
        setVersion(data.version)
      })
  }, [])

  return (
    <div className="user-region flex h-10 w-screen select-none items-center justify-between bg-red-600 p-0 dark:bg-red-800">
      <div className="no-user-region flex select-text items-center gap-2 pl-3 text-gray-100">
        <MonitorPlay className="h-5 w-5" />
        <h1 className="text-md font-semibold">
          {title} {version ? `- v${version}` : ''}
        </h1>
      </div>
      <div className="no-user-region flex select-text items-center text-gray-300">
        <ToggleTheme />
        <div>
          <TitleBarButton onClick={window.api.frame.minimize}>
            <Minus className="h-4 w-4" strokeWidth={4} />
          </TitleBarButton>
          <TitleBarButton onClick={window.api.frame.maximize}>
            <Square className="h-4 w-4" strokeWidth={4} />
          </TitleBarButton>
          <TitleBarButton
            className="hover:bg-red-900"
            onClick={window.api.frame.close}
          >
            <X className="h-4 w-4" strokeWidth={4} />
          </TitleBarButton>
        </div>
      </div>
    </div>
  )
}
