import { useState } from 'react'
import Header from './components/Header/Header'
import '@radix-ui/themes/styles.css';
import Home from './pages/Home'
import Sidebar  from './components/SideBar/SideBar';
import Popup from './components/Popup/Popup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Popup />
      <Header/>
      <main className='pt-20'>
      <Sidebar/>
      <HeroSection/>
      <HeroSection/>
      </main>
    </>
  )
}

export default App
