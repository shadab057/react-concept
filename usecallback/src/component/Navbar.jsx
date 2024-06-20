import React from 'react'
import { memo } from 'react'
const Navbar = ({adjective , changeAdjective}) => {
    console.log("Navbar is rerendered")
  return (
    <div>
        I am a {adjective}
        Navbar
        <button onClick={()=>{changeAdjective()}}>{changeAdjective()}</button>
        </div>
  )
}

export default memo(Navbar)
