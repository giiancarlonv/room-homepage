import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/room-homepage/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
