import { createHashRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layout/app'

// type unknown because https://typescript.tv/errors/#TS2742
export const router: unknown = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
])
