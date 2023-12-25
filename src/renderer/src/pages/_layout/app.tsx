import { TitleBar } from '@renderer/components/title-bar'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex min-h-screen w-screen flex-col antialiased">
      <TitleBar />

      <div className="flex flex-1 p-8 pb-2">
        <Outlet />
      </div>
    </div>
  )
}
