import { useState } from 'react'
import HomePage from './components/home';
import './app.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
