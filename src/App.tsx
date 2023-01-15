import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TopBar from './components/topBar/TopBar'
import HomePage from './components/homePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TopBar />
      <HomePage />
    </div>
  )
}

export default App
