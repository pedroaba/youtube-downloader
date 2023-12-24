import { TitleBar } from '@renderer/components/title-bar'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <TitleBar />

      <div>
        <Outlet />
      </div>
    </div>
  )
}
