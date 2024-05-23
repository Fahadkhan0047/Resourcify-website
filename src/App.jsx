import { useState } from 'react'
import Header from './components/Header/Header'
import '@radix-ui/themes/styles.css';
import HeroSection from './components/HeroSection/HeroSection'
import Sidebar  from './components/SideBar/SideBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Sidebar/>
      <HeroSection/>

    </>
  )
}

export default App
