import { useEffect } from 'react';
import './App.css'
import Login from './components/Login/Login';

function App() {

  useEffect(() => {
    console.log((window as any).Telegram.WebApp);
  }, [])

  return (
    <div className="App">
      <div className="main">
        <Login />
      </div>
    </div>
  )
}

export default App
