import { useEffect } from 'react';
import './App.css'

type AppProp = {
  children: React.ReactNode
}

function App({children}:AppProp) {

  useEffect(() => {
    console.log((window as any).Telegram.WebApp);
  }, [])

  return (
    <div className="App">
      {/* <div className="main"> */}
        {children}
      {/* </div> */}
    </div>
  )
}

export default App
