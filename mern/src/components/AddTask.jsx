import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


export default function AddTask(props) {
  
  const [taskName,setTaskName] = useState("")
  const [description,setDescription] = useState("")
  const [worker,setWorker] = useState("")
  const nav = useNavigate()

  const handleAdd =() =>{
      props.addNewTask(taskName,description,worker)
      nav('/alltask')
  }

  return (
    <div>
<h2>Add new task!!!!!!!!</h2>
        <input type="text" placeholder='Enter task name' onChange={(e)=>setTaskName(e.target.value)}/> <br />
        <input type="text" placeholder='Enter description' onChange={(e)=>setDescription(e.target.value)}/> <br />
        <input type="text" placeholder='Enter worker' onChange={(e)=>(setWorker(e.target.value))}/> <br />
        <button onClick={handleAdd}>Add task</button>


    </div>
  )
}
