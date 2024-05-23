import { useState } from 'react'
import Header from './components/Header/Header'
import '@radix-ui/themes/styles.css';
import Home from './pages/Home'
import SideBar  from './components/SideBar/SideBar';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header/>
      <main className='pt-20 pl-72'>
      <SideBar/>
      <Home/>
      </main>
    </>
  )
}

export default App
