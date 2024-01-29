import React from 'react'
import Task from './Task'

export default function AllTask(props) {
  return (
    <div>
   <h2>All task</h2>
        {props.tasks.map((val,index)=>{
            return <Task val={val} key={index} flag={props.flag} setFlag={props.setFlag}/>

        })}
    </div>
  )
}


