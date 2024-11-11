import { useState } from 'react'
import Hero from './components/hero/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
    </>
  )
}

export default App
