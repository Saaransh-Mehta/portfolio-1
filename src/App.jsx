import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import SectionOne from './Components/SectionOne'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <SectionOne/>
    </>
  )
}

export default App