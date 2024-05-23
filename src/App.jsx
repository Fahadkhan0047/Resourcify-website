import { useState } from 'react'
import Header from './components/Header/Header'
import '@radix-ui/themes/styles.css';
import Home from './pages/Home'
import Sidebar  from './components/SideBar/SideBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Sidebar/>
      <Home/>

    </>
  )
}

export default App
