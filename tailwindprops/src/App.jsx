import { useState } from 'react'
import Card from './compoents/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card Username="siddu" btntxt="vist me"/>
     <Card/>

    </>
  )
}

export default App
