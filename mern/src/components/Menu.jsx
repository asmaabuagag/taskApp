import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu(props) {

const handleExit =()=>{
  
    props.setHideMenu(false)
    props.setUser("")
  }


  return (
    <div style={{display:'flex' ,flexDirection:'column' , textAlign:'left'}}>
      <Link to={'/alltask'}> <button> All Tasks </button> </Link>
      <Link to={'/mytask'}> <button> My Tasks </button> </Link>
      <Link to={'/addnewtask'}> <button> Add New Task </button> </Link>
      <Link to={'/history'}> <button> History </button> </Link>
      <Link to={'/'}> <button onClick={handleExit}> Exit </button> </Link>


    </div>
  )
}
