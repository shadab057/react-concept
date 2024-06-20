import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
let muObj = {
  username : "hitesh ",
  age: 21 
}

let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind </h1>
     <Card channel="shadabcode" someObj={newArr} />
     <Card />
    </>
  )
}

export default App
