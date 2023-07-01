import { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext()

export const GlobarProvider = ({ children }) => {
  const [splash, setSplash] = useState(true)
  const [spanish, setSpanish] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2500)
  }, [])

  return (
    <GlobalContext.Provider value={{ splash, spanish, setSpanish }}>
      {children}
    </GlobalContext.Provider>
  )
}
