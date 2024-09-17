import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar.jsx'
import Card from '../components/Cards.jsx'
import data from './data.jsx'

function App() {
  const card = data.map(item =>{
    return(
      <Card
      key={item.key}
      item={item}
      />
    )
  })
  return (
    <>
      <Navbar/>
        <div className="wrapper">
        {card}
        </div>
    </>
  )
}

export default App
