import React from 'react'

export default function TaskDetails(props) {
  const handleCompleteTask = () =>{
    const taskName = props.val.taskName
    fetch('/complete',{
        method:'post',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ taskName })
    }).then(res => res.json()).then(data=>{
        props.setFlag(!props.flag)
    })
}

return (
<div style={{backgroundColor: "pink"}}>
    <button onClick={()=>{props.setShowDetails(false)}}>X</button>
    <h3>Task: {props.val.taskName}</h3>
    <h3>Description: {props.val.description}</h3>
    <button onClick={handleCompleteTask}>Finish Task</button>

 
</div>
  )
}
