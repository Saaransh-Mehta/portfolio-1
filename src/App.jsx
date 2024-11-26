import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import SectionOne from './Components/SectionOne'
import SectionTwo from './components/SectionTwo'
import Projects from './components/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      <Projects/>
    </>
  )
}

export default App
