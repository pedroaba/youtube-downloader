import { RouterProvider } from 'react-router-dom'

import { router } from './router'

export function App() {
  // @ts-ignore router is Router, but because https://typescript.tv/errors/#TS2742, is assigned as unknown
  return <RouterProvider router={router} />
}
