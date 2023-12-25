import { formatTitle } from '@renderer/utils/format-title'
import { createContext, ReactNode, useContext, useState } from 'react'

interface TitleContextProps {
  title: string
  setTitle: (title: string) => void
}

export const TitleContext = createContext({} as TitleContextProps)

interface TitleContextProviderProps {
  children: ReactNode
}

export function TitleContextProvider({ children }: TitleContextProviderProps) {
  const [title, setTitle] = useState<string>('')

  function setTitleRoute(titleToSet: string) {
    setTitle(titleToSet)
  }

  return (
    <TitleContext.Provider
      value={{ title: formatTitle(title), setTitle: setTitleRoute }}
    >
      {children}
    </TitleContext.Provider>
  )
}

export const useTitle = () => useContext(TitleContext)
