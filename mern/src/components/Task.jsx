import React from 'react'
import TaskDetails from './TaskDetails'
import { useState } from 'react'

export default function Task(props) {
    
const [showDetails,setShowDetails] = useState(false)

const show = () =>{
    if(showDetails){
        return <TaskDetails val={props.val} flag={props.flag} setFlag={props.setFlag} setShowDetails={setShowDetails} />
    }
}
  return (
<div 
onClick={()=>{setShowDetails(!showDetails)}} style={{border: "2px solid blueviolet"}}>
        <h3>Task: {props.val.taskName} Worker:{props.val.worker}</h3>
        {show()}

    </div>
  )
}
