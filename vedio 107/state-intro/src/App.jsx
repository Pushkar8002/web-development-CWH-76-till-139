import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div> The count is {count }</div>
      <button onClick={() => setCount(count ** 2)}>Click me</button>
    </>
  )
}

export default App
