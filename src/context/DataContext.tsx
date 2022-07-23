import React, { createContext, ReactNode, useState } from 'react'

interface DataContextProps {
  menu: boolean
  setMenu: (menuExpanded: boolean) => void
}

interface DataProviderProps {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: DataProviderProps) {
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <DataContext.Provider value={{ menu, setMenu }}>
      {children}
    </DataContext.Provider>
  )
}