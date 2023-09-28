import { useEffect } from 'react'
import './App.css'
import { TelegramContext } from './context/TelegramContext'

type AppProp = {
  children: React.ReactNode
}

function App({ children }: AppProp) {
  
  const Telegram = (window as any).Telegram.WebApp

  useEffect(() => {
    console.log((window as any).Telegram.WebApp)
  }, [])

  return (
    <TelegramContext.Provider value={Telegram}>
      <div className="App">{children}</div>
    </TelegramContext.Provider>
  )
}

export default App
